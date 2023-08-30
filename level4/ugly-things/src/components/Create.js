import React, { useState, useEffect } from "react";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("TITLE");
  const [description, setDescription] = useState("DESCRIPTION");
  const [image, setImage] = useState("IMAGE");
  const [posts, setPosts] = useState([])
  const [deleteMsg, setDeleteMsg] = useState("");
  
  // useEffect(() => {
    
  //     axios.get("https://api.vschool.io/sfalvo/thing").then((response) => {
  //       setPosts(response.data);
  //       // console.log(response.data);  
  //     });
      
  // }, []);

  const getImages = () => {
    axios.get("https://api.vschool.io/sfalvo/thing").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  
  useEffect(() => {
    getImages();
  }, []);



  const postImage = () => {
    axios
    .post("https://api.vschool.io/sfalvo/thing", {
      title: title,
      description: description,
      imgUrl: image,
    })
    .then((response) => {
      console.log(response.data);
      setPosts((prev)=>[...prev,response.data] );
      console.log(Array.isArray(posts))
      console.log(posts);
      
    })
    .catch((error) => console.log(error));
  };
  
  const editImage=(id)=>{
    axios.put(`https://api.vschool.io/sfalvo/thing/${id}`,{
      title:title,
      description:description,
      imgUrl: image,
    })
  }

  // const deleteImage=(id)=>{
  //   axios
  //     .delete(`https://api.vschool.io/sfalvo/thing/${id}`)
  //     .then(() => {
  //       alert("Post deleted!");
  //       setPosts(posts)
  //     });
  // }

  const deleteImage = (id) => {
    axios
      .delete(`https://api.vschool.io/sfalvo/thing/${id}`)
      .then((response) => {
        console.log(response.data);
        posts.filter((post) => {
          setDeleteMsg(response.data.msg + ' ' + post.title);
          setTimeout(() => {
            setDeleteMsg("");
          }, 3000);
          getImages();
          return post
        });
      });
  };
  return (
    <>
      <form className="form">
        <div className="form-input">
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            name="image"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-button">
          <button className="btn-submit" type="button" onClick={postImage}>
            Submit
          </button>
        </div>
      </form>
      <div>{deleteMsg}</div>
      <section className="container">
        <div>{title}</div>
        <div>{description}</div>
        <div>{image}</div>
      </section>
      <section className="posts">
        <div>
          <h2>Things List</h2>
          <ul>
          {Array.isArray(posts) ? posts.map((post)=>{
            return (
              <li key={post._id}><h3>{post.title}</h3><p><img src={post.imgUrl} alt=""/> </p>{post.description}
            <button onClick={()=>editImage(post._id)}>edit</button>
            <button onClick={()=>deleteImage(post._id)}>DELETE</button>
            </li>
            )
          })
          : null }
        </ul>
        </div>

      </section>
    </>
  );
};

export default Create;
