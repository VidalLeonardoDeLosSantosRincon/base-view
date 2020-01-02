import React,{Fragment} from "react";

//assets
import "../../assets/css/presentational/AddPostFormView.css";

//components
import iconPhoto from "../../assets/images/photos-icon.png";
import iconClearPhoto from "../../assets/images/clear-image-icon.png";

const AddPostFormView = ({form,onChange,onClick,clearFields,clearImage}) =>(
    <Fragment>
        <div id="ctr-post-form">
            <form id="post-form">
                <label id="text-label" htmlFor="text">What's in your mind?</label>
                <textarea name="text" id="text" cols="30" rows="4"
                    onChange={onChange}
                    value={form.text? form.text:""}
                ></textarea>

               <span id="image-option-box">
                    <label id="image-label" htmlFor="image" style={{display:"none"}}>
                        <img id="image-icon"src={iconPhoto} alt="upload-image-icon"/>
                    </label>
                    <input type="file" accept=".jpg, .gif , .png , .jpeg" name="image" id="image"
                        onChange={onChange} 
                        />
                    <img id="clear-image-icon" src={iconClearPhoto} alt="clear-image-icon" onClick={clearImage} style={{display:"none"}}/>
                </span>

                <input id="btn-save" type="button" value="Save" onClick={onClick}/>
                <input id="btn-cancel" type="button" value="Cancel" onClick={clearFields}/>
            </form> 
        </div>
    </Fragment>
);

export default AddPostFormView;