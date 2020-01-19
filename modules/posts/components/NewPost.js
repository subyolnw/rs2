import axios from 'axios'
import { useRouter } from 'next/router'

import PostForm from './PostForm'

export default function NewPost() {
  const router = useRouter()

  const createPost = async post => {
    await axios.post('/posts', post)

    router.push('/posts')
  }

  return <PostForm submitText="Create" onSubmit={createPost}></PostForm>
}
