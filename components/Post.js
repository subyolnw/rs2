import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Post() {
  const {
    query: { id }
  } = useRouter()
  const [post, setPost] = useState({})

  const fetchData = async () => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const res = await axios.get(url)

    setPost(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <dl>
      <dt>ID:</dt>
      <dd>{post.id}</dd>
      <dt>Title:</dt>
      <dd>{post.title}</dd>
      <dt>Body:</dt>
      <dd>{post.body}</dd>
    </dl>
  )
}
