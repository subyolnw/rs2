import useFetch from '../../../lib/useFetch'

export default function UserList() {
  const users = useFetch('/users')

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
