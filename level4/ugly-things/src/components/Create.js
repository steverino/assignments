import React, {useState} from "react";
import axios from "axios";
 

const Create = () => {
    const [title, setTitle] = useState('') 
    const [description, setDescription] = useState('') 
    const [image, setImage] = useState('') 
    
    
    const postImage = () => {
        console.log(title);
        console.log(description);
        console.log(image);
    }
    
    axios
    .post("https://api.vschool.io/sfalvo/thing/", postImage)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
    
    
    return (
    <>
      <form className="form">
        <div className="form-input">
          <input type="text" name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
          <input type="text" name="image" placeholder="Image" onChange={(e) => setImage(e.target.value)} />
        </div>
        <div className="form-button">
          <button className="btn-submit" type="submit" onClick={postImage}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
