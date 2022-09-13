function Comment({ comment }) {
  return (
    <div>
      {comment.id} {comment.title}
    </div>
  );
}
export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
  };
}

export async function getStaticProps(){
    
}