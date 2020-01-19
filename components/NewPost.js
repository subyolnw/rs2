import axios from 'axios'

import PostForm from './PostForm'

export default function NewPost() {
  const createPost = async post => {
    axios.post('/posts', post)
  }

  return <PostForm submitText="Create" onSubmit={createPost}></PostForm>
}
