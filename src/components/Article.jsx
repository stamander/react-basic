import { useState } from "react";
import PublishButton from "./PublishButton";

const Article = (props) =>{

  const [isPublished,setIspubilished] = useState(false)
  const publishArticle = () => {
    setIspubilished(true)
  }

  return(
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      {/* <button onClick={() => setIspubilished(true)}>公開</button> */}
      <PublishButton isPublished = {isPublished} onClick={publishArticle } />
    </div>
  );
};

export default Article;