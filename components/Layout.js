import { Layout as AntLayout, Menu } from 'antd'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const { Header, Content } = AntLayout

const StyledContent = styled(Content)`
  padding: 1rem;
`

export default function Layout({ children }) {
  const { pathname } = useRouter()

  return (
    <AntLayout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname]}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/users">Users</Menu.Item>
          <Menu.Item key="/posts">Posts</Menu.Item>
          <Menu.Item key="/todos">Todos</Menu.Item>
          <Menu.Item key="/photos">Photos</Menu.Item>
        </Menu>
      </Header>
      <StyledContent>{children}</StyledContent>
    </AntLayout>
  )
}
