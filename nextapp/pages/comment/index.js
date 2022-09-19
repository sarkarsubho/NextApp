import { useState } from "react";

export default function CommentPage() {
  const [comment, setComment] = useState([]);

  const loadData = async function () {
    let data = await fetch("/api/comments");
    data = await data.json();
    setComment(data);
  };
  return (
    <div style={{"margin":"40%"}}>
      <button onClick={loadData}>Load Comment</button>
      {
        comment.map(e=>{
            return <div>
                {e.id} .- {e.title}
            </div>
        })
      }
    </div>
  );
}
