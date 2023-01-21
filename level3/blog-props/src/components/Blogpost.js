import React from "react";


export default function Blogpost(props) {
  console.log();
    return (
    <section className="content">
      <article className="article">
        <h3 className="article--title">{props.title}</h3>
        <h4 className="article--subtitle">{props.subTitle}</h4>
        <p className="article--info">Posted by <span className="author">{props.author}</span> on {props.date}</p>
      </article>
      
    </section>
  );
  
}
