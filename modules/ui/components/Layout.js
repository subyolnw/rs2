import { Layout as AntLayout, Menu } from 'antd'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'

const { Header, Content } = AntLayout

const StyledContent = styled(Content)`
  padding: 1rem;
  background: #fff;
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
          <Menu.Item key="/users">
            <Link href="/users">
              <a>Users</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/posts">
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/todos">
            <Link href="/todos">
              <a>Todos</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/photos">
            <Link href="/photos">
              <a>Photos</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <StyledContent>{children}</StyledContent>
    </AntLayout>
  )
}
