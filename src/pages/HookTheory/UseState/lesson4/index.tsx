import React from "react";
import { Typography } from "antd";
import Demo1 from "./demo1";

const { Title } = Typography;
const UseStateLesson4: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>尝试用数组实现自定义useState</Title>
      </Typography>
      <div id={"useState4"}>
        <Demo1 />
      </div>
    </>
  );
};
export default UseStateLesson4;
