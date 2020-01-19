import { Row, Col } from 'antd'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import * as yup from 'yup'

export default function PostForm({ post, submitText, onSubmit }) {
  return (
    <Row>
      <Col xs={{ span: 24 }} md={{ span: 8, offset: 8 }}>
        <Formik
          initialValues={{ title: post.title || '', body: post.body || '' }}
          validationSchema={yup.object().shape({
            title: yup.string().required('ใส่มาดิ'),
            body: yup.string().required()
          })}
          onSubmit={onSubmit}
        >
          <Form>
            <Form.Item name="title" label="Title">
              <Input name="title" />
            </Form.Item>
            <Form.Item name="body" label="Body">
              <Input.TextArea name="body" />
            </Form.Item>
            <SubmitButton>{submitText}</SubmitButton>
          </Form>
        </Formik>
      </Col>
    </Row>
  )
}
