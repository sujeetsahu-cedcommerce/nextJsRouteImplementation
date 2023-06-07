"use client";
import { useRouter } from "next/navigation";
import React from "react";

const User1 = (props) => {
  console.log("props", props);
  const router = useRouter();
  return (
    <div>
      <button onClick={router.push(`/user/${props.id}`)}> User1</button>
    </div>
  );
};

export default User1;
