import axios from 'axios'

import Post from '@modules/posts/components/Post'

function PostPage({ post }) {
  return <Post post={post}></Post>
}

PostPage.getInitialProps = async ctx => {
  const res = await axios.get(`/posts/${ctx.query.id}`)

  return { post: res.data }
}

export default PostPage
