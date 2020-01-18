import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default function PostList() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const res = await axios.get(URL)

    setPosts(res.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
