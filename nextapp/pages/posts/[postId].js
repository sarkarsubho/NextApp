function Post({post}){
  
    return (
        <>
        <h2>
            {post.id} :- {post.title}
        </h2>
        <p>
            {post.body}
        </p>
        
        </>
    )
}

export default Post
export async function getStaticPaths (){
    const response =await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data =await response.json();
    const paths=data.map((e)=>{
        return{
            params:{
                postId: `${e.id}`
            }
        }
    })
  return {
    // paths:[
    //     {
    //         params:{postId: "1"}
    //     },
    //     {
    //         params:{postId: "2"}
    //     },
    //     {
    //         params:{postId: "3"}
    //     },
    //     {
    //         params:{postId: "4"}
    //     },
    //     {
    //         params:{postId: "5"}
    //     },
    //     {
    //         params:{postId: "6"}
    //     },
    //     {
    //         params:{postId: "7"}
    //     },
    //     {
    //         params:{postId: "8"}
    //     },
    //     {
    //         params:{postId: "9"}
    //     },
    // ],
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context){
       const {params} =context
    const response =await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data =await response.json();

    return {
        props:{
            post:data
        }
    }
}