import React, { FunctionComponent } from 'react';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { List } from 'antd';
import styled from 'styled-components';
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}
const StyledListItem = styled(List.Item)`
  background: white;
  border-radius: 13px;
  padding: 10px 20px;
  margin-bottom: 10px;
  & .ant-list-item-extra {
    margin-left: 0 !important;
  }
  & .ant-list-item-meta {
    margin-bottom: 10px !important;
  }
  & .ant-list-item-action {
    margin-top: 10px !important;
  }
  & .ant-list-item-main {
    /* margin-left: 20px !important; */
  }
  & img {
    border-radius: 10px;
  }
`;
const Title = styled.a`
  font-size: 1.3em;
  font-weight: bolder;
`;
const AuthorName = styled.div`
  color: #17bf63;
  font-size: 1em;
  font-weight: 700;
`;
const ListItem = styled(List.Item.Meta)``;
export const ItemLists: FunctionComponent = () => (
  <React.Fragment>
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={listData}
      //   footer={
      //     <div>
      //       <b>ant design</b> footer part
      //     </div>
      //   }
      renderItem={item => (
        <StyledListItem
          key={item.title}
          //   actions={[<StarOutlined key="star" />, <LikeOutlined key="like" />, <MessageOutlined key="message" />]}
          extra={
            <img
              width={144}
              height={144}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <ListItem
            // avatar={<Avatar src={item.avatar} />}
            title={<Title href={item.href}>{item.title}</Title>}
            // description={item.description}
          />
          {item.content}
          <AuthorName>Nattasit Moonchanabaht</AuthorName>
          หนังสือ - 6 มีนาคม
        </StyledListItem>
      )}
    />
  </React.Fragment>
);
