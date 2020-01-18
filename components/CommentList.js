import { useState, useEffect } from 'react'
import axios from 'axios'

function CommentList({ id }) {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const res = await axios.get(`/comments?postId=${id}`)

    setComments(res.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.body}</li>
      ))}
    </ul>
  )
}

export default CommentList
