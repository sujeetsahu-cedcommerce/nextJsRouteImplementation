"use client";
import { useRouter } from "next/navigation";
import React from "react";

const User3 = (props) => {
  const router = useRouter();
  return (
    <div>
      <button onClick={router.push(`/user/${props.id}`)}> User3</button>
    </div>
  );
};

export default User3;
