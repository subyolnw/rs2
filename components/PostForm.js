import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import * as yup from 'yup'

export default function PostForm() {
  return (
    <Formik
      initialValues={{ title: '', body: '' }}
      validationSchema={yup.object().shape({
        title: yup.string().required('ใส่มาดิ'),
        body: yup.string().required()
      })}
      onSubmit={value => console.log(value)}
    >
      <Form>
        <Form.Item name="title" label="Title">
          <Input name="title" />
        </Form.Item>
        <Form.Item name="body" label="Body">
          <Input.TextArea name="body" />
        </Form.Item>
        <SubmitButton>Submit Di</SubmitButton>
      </Form>
    </Formik>
  )
}
