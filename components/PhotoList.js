import { List, Card } from 'antd'

import useFetch from '../lib/useFetch'

export default function PhotoList() {
  const photos = useFetch('/photos?_page=1')

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3
      }}
      dataSource={photos}
      renderItem={photo => (
        <List.Item>
          <Card hoverable cover={<img alt="example" src={photo.url} />}>
            <Card.Meta title={photo.title} description={photo.thumbnailUrl} />
          </Card>
        </List.Item>
      )}
    />
  )
}
