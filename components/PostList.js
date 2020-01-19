import Link from 'next/link'

import useFetch from '../lib/useFetch'

export default function PostList() {
  const posts = useFetch('/posts')

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
