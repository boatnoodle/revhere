import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import { List, message, Avatar, Spin } from 'antd';

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 500;
`;

const data = [
  {
    id: 1,
    name: 'nattashit',
    email: 'nattasit31@hotmail.com',
    password: 'nattasit22539',
  },
  {
    id: 1,
    name: 'nattashit',
    email: 'nattasit31@hotmail.com',
    password: 'nattasit22539',
  },
  {
    id: 1,
    name: 'nattashit',
    email: 'nattasit31@hotmail.com',
    password: 'nattasit22539',
  },
  {
    id: 1,
    name: 'nattashit',
    email: 'nattasit31@hotmail.com',
    password: 'nattasit22539',
  },
];

interface Props {
  title?: string;
}
const Cover: FunctionComponent<Props> = ({ title }) => {
  return (
    <Fragment>
      <Title>รีวิวทั้งหมด</Title>
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.email}
            />
            <div>{item.password}</div>
          </List.Item>
        )}
      />
    </Fragment>
  );
};

export default Cover;
