import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
// import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { List } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_MY_REVIEWS } from '../graphql';
import { Review } from 'types/review';

const status = {
  PUBLISH: 'PUBLISH',
  DRAFT: 'DRAFT',
};
const params = {
  variables: {
    status: status.DRAFT,
  },
};
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

interface PropsReview {
  data: {
    reviews: Review[];
  };
}

const ListUi: React.FC<PropsReview> = ({ data: { reviews } }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={reviews}
      renderItem={item => (
        <StyledListItem extra={<img width={144} height={144} alt="logo" src={item.imageCover} />}>
          <ListItem title={<Title href={`/review/${item._id}`}>{item.titleReview}</Title>} />
          {item.introReview}
          <AuthorName>Nattasit Moonchanabaht</AuthorName>
          หนังสือ - 6 มีนาคม
        </StyledListItem>
      )}
    />
  );
};
const ListItem = styled(List.Item.Meta)``;
export const ItemLists: FunctionComponent = () => {
  const { data, loading, error } = useQuery(GET_MY_REVIEWS, params);
  if (loading) {
    return <Loader qty={Array(6).fill(null)} />;
  }
  return <ListUi data={data} />;
};
