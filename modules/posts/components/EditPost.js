import { useEffect, useState } from 'react'
import { Skeleton } from 'antd'
import { useRouter } from 'next/router'
import axios from 'axios'

import PostForm from './PostForm'

export default function EditPost() {
  const [post, setPost] = useState()
  const router = useRouter()
  const path = `/posts/${router.query.id}`

  const updatePost = async post => {
    await axios.patch(path, post)

    router.push(path)
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
