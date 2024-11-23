"use client"
import { useParams, useRouter } from "next/navigation";

const page = () => {
  const { slug } = useParams();

  return <div>Blog Post: {slug}</div>;
};

export default page;
