import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions'

export default function PostList() {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    const action = actions.fetchPosts()

    dispatch(action)
  }, [])

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
