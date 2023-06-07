"use client";
import { useRouter } from "next/navigation";
import React from "react";

const User2 = (props) => {
  const router = useRouter();
  return (
    <div>
      <button onClick={router.push(`/user/${props.id}`)}> User2</button>
    </div>
  );
};

export default User2;
