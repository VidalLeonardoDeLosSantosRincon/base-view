import React,{useState,useEffect} from "react";

//components
import AddPostFormView from "../presentational/AddPostFormView";

const AddPostForm = ()=>{
    const [form,setForm] = useState({});
    const [data,setData] = useState(null);

    const handleClearFields = () =>{
        setForm({});
        setData(null);
    }

    const handleClearImage = () =>{
        setForm({
          text:form.text
        });
        setData(null);
    }

    const handleAddPost = () =>{
        //const {text,image} = form;
        const {text} = form;
        
        let fecha = new Date();
        let dia = fecha.getDate();
            dia = dia<10? `0${dia}`:dia;
        let mes = fecha.getMonth()+1;
            mes = mes<10? `0${mes}`:mes;
        let anio = fecha.getFullYear();
        let fullDate = `${dia}-${mes}-${anio}`;
        let userEmail = localStorage.getItem("userEmail");
        let data={
                text,
                date:fullDate,
                user:String(userEmail)
                }

        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status===200 && xhr.readyState===4){
                let res = xhr.responseText;
                if(Array.isArray(res)){
                    let msgs="";
                    res.map((msg)=> msgs+=`\n${msg}`)
                    alert(msgs);
                }else{
                    alert(res);
                    localStorage.setItem("newPosted",true);
                }
            }

        };

        xhr.open("POST","https://pratices.000webhostapp.com/post2.php",true);
        xhr.setRequestHeader("Content-Type",'application/x-www-form-urlencoded');
        xhr.send(`data=${JSON.stringify(data)}&action=addPostText`);

        /*let formu = new FormData();
        formu.append("text",text);
        formu.append("image",image);

        
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.status==200 && xhr.readyState==4){
                let res = xhr.responseText;
                console.log(res);
            }

        };

        xhr.open("POST","https://pratices.000webhostapp.com/post.php",true);
        xhr.setRequestHeader("Content-Type","multipart/form-data");
        xhr.send(formu);*/
        
    }

    const handleClick = (e)=>{
       /* if(form.text===undefined && form.image===undefined){
            alert("Empty fields not allowed");
        }else if(form.text==="" && form.image===undefined){
            alert("Empty fields not allowed");
            
        }*/
        if(form.text===undefined ){
            alert("Empty fields not allowed");
        }else if(form.text===""){
            alert("Empty fields not allowed");
           
        }else{
            if((form.text!=="" || form.text!==undefined)&& form.image===undefined){
                //solo texto
                //console.log("solo texto");
               // console.log(form);
                handleAddPost();
            }else if((form.text==="" || form.text===undefined)&& form.image!==undefined){
                //solo imagen
                /*console.log("solo imagen");
                console.log(form);*/
            }else if((form.text!=="" || form.text!==undefined)&& form.image!==undefined){
                //todo
                /*console.log("todo");
                console.log(form);
               */
            }
        }
    };

    const handleChange =(e)=>{
       
        if(e.target.name==="text"){
            setForm({
                ...form,
                [e.target.name]:e.target.value
            });
        }else if(e.target.name==="image"){
            const value = e.target.files[0];
            setData(value);  
        }

    }

    useEffect(()=>{
        if(data!==null){
            setForm({
                ...form,
                image:data
            });
        }
    },[data]);
 

    return <AddPostFormView 
                form={form} 
                onChange={handleChange} 
                onClick={handleClick} 
                clearFields={handleClearFields}
                clearImage={handleClearImage}/>;
};

export default AddPostForm;