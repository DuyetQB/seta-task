import http from "../utils/httpService";

export const onfetchDataDetail = async () => {
  const result = await http.get(`/posts`);
  console.log(result);
  const { data,status } = result;
  return { data,status }
  return result.data;
};

export const onCreateNewPost = async (request: any) => {
  const result = await http.post(`/posts`,request);
  console.log(result);
  const { data,status } = result;
  return { data,status }
};
