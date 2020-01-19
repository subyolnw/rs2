import Head from 'next/head'

import CommentList from '../../comments/components/CommentList'

export default function Post({ post }) {
  const { id, title, body } = post

  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={body} />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1579369153879-ef472f177873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        />
      </Head>
      <dl>
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Title:</dt>
        <dd>{title}</dd>
        <dt>Body:</dt>
        <dd>{body}</dd>
      </dl>
      <CommentList id={id}></CommentList>
    </>
  )
}
