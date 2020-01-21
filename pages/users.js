import UserList from '@modules/users/components/UserList'
import * as actions from '@modules/users/actions'

function UsersPage() {
  return <UserList></UserList>
}

UsersPage.getInitialProps = async ({ store }) => {
  const action = actions.fetchUsers()

  await store.dispatch(action)

  return {}
}

export default UsersPage
