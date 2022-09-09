import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

 const Profile = () => {
  const router =useRouter()
  const handleclick=()=>{
   router.push("/intro")
  }
  return <h1>
    <Link href={"/intro"}>
      <a > intro Link</a>
    </Link>
    <button onClick={handleclick}> Programatic navigate</button>
    </h1>;
};
 
export default Profile