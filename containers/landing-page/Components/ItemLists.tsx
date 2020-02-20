import React, { FunctionComponent } from 'react';
import { List, Avatar, Icon } from 'antd';
import Styled from 'styled-components';
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
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
const ListItem = Styled(List.Item)`
    padding:0 !important;
    border-bottom:none;
    border:1px solid #e8e8e8;
    display: flex !important;
    flex-direction: row-reverse !important;
    & .ant-list-item-extra{
        margin-left:0 !important;
    }
    & .ant-list-item-extra img{
        border-radius:10px;
    }
`;
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
        <ListItem
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={120}
              height={120}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<a href={item.href}>{item.title}</a>} />
          {item.content}
        </ListItem>
      )}
    />
  </React.Fragment>
);
