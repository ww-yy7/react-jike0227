import { Button, Card, Form, Input, message } from "antd";
import "./index.scss";
import logo from "@/assets/logo.png";
import { useDispatch } from "react-redux";
import { fetchLogin } from "@/store/modules/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //使用dispach方法
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    //触发异步的action:fetchLogin
    await dispatch(fetchLogin(values));
    //登录之后跳转到首页
    navigate("/");
    //提示登录成功的信息
    message.success("登录成功");
  };
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish} validateTrigger="onBlur">
          <Form.Item
            name="mobile"
            //规则按照顺序执行，等到所有的满足规则，才ok
            rules={[
              {
                required: true,
                message: "请输入手机号!",
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "请输入正确的手机号格式！",
              },
            ]}>
            <Input size="large" placeholder="请输入手机号"></Input>
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码!",
              },
            ]}>
            <Input size="large" placeholder="请输入验证码"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
