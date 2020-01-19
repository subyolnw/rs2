import { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'

import PostForm from './PostForm'

export default function EditPost() {
  const [post, setPost] = useState()
  const {
    query: { id }
  } = useRouter()
  const path = `/posts/${id}`

  const updatePost = async post => {
    axios.patch(path, post)
  }

  const fetchPost = async () => {
    const res = await axios.get(path)

    setPost(res.data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return post ? (
    <PostForm submitText="Update" post={post} onSubmit={updatePost}></PostForm>
  ) : (
    <Skeleton active></Skeleton>
  )
}
