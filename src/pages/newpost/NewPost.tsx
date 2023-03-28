// import Input from "../../components/input/Input";
import MainLayout from "../layout/Layout";
import { Input, Button, Row, Col } from "antd";
import "./NewPost.scss";
import { useState } from "react";
import { onCreateNewPost } from "../../apis/GetDataDetail";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const submitNewPost = async () => {
    try {
      const dataSubmit = {
        title: title,
        body: body,
        userId: Math.random(),
      };
      const result = await onCreateNewPost(dataSubmit);
      if (result?.status === 201) {
        return navigate("/");
      }
    } catch (error) {}
  };
  return (
    <MainLayout>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <h3>Title</h3>

          <Input
            placeholder="type the title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={[16, 26]}>
        <Col span={12}>
          <h3>Body</h3>
          <TextArea
            rows={4}
            placeholder="body"
            maxLength={100}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Col>
      </Row>
      <div className="wrap-button">
        <Button type="primary" onClick={submitNewPost}>
          Upload
        </Button>
      </div>
    </MainLayout>
  );
};

export default NewPost;
