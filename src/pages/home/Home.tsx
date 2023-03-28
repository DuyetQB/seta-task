import MainTable from "../../components/table/Table";
import { useFetch } from "../../hooks/UseFetch";
import { onfetchDataDetail } from "../../apis/GetDataDetail";
import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layout/Layout";

const Home = () => {
  const { data: datas, loading } = useFetch(
    async () => await onfetchDataDetail(),
    []
  );
  const navigate = useNavigate();
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      className: "ant-table-cell-coler",
      render: (value: any, item: any) => <>{<a>{item.title}</a>}</>,
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      render: (value: any, item: any) => <>{item.body} </>,
    },
  ];

  return (
    <MainLayout>
      <Row>
        <Col span={20}>
          <h2>List post</h2>
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={() => navigate("/create-new")}>
            New
          </Button>
        </Col>
      </Row>
      <MainTable
        rowKey="id"
        loading={loading}
        data={datas?.data}
        columns={columns}
        textEmpty={"Empty"}
        bordered={false}
        onChange={void 0}
        total={20}
        request={null}
      />
    </MainLayout>
  );
};

export default Home;
