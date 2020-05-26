import React from "react";
import s from "./Login.module.css"
import { Layout, Form, Input, Button } from 'antd';
import FirebaseContext from '../../context/firebaseContext';
const { Content } = Layout;

class LoginPage extends React.Component {
    onFinish = ({ email, password }) => {
        const { auth } = this.context
    auth
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                console.log("####:res", res)
            })
    }
    onFinishFailed = (errorMsg) => {
        console.log("####: errorMsg", errorMsg);
    }
    render() {
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        return (
            <Layout>
                <Content>
                    <div className={s.root}>
                        <div className={s.form_wrap}>
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item
                                    label="Username"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
        </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Content>
            </Layout>
        );
    }


}
LoginPage.contextType = FirebaseContext;
export default LoginPage;