import Link from "next/link";

 function PostList({posts}){

    return(
        <>
         <h1> List Of Posts</h1>
         {
            posts.map((el)=>{
                return <div key={el.id}>
                    {/* if the link tag not ahave an child ancar tag pas it a prop clled passHerf */}
                    <Link href={`posts/${el.id}`} passHref>
                     <h2>
                        {el.id}:- {el.title}
                        <hr></hr>
                    </h2>
                    
                    </Link>
                   
                </div>
            })
         }
        </>
    )
}

export async function getStaticProps(){

    const response =await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data =await response.json();

    return {
        props:{
            posts:data
        }
    }
}

export default PostList