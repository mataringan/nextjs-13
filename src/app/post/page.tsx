"use client";
import React, { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState<any[]>([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  async function loadJson() {
    const response = await fetch(url);
    const result = await response.json();
    setPost(result);
  }

  useEffect(() => {
    loadJson();
  }, []);

  return (
    <div>
      <ul>{post && post.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </div>
  );
}
