import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { List, Avatar, Tag } from 'antd';
import { Review } from 'types/review';
import { OutlinePrimaryButton } from 'components/Button';

const Title = styled.div`
  font-size: 1.5em;
  font-weight: 500;
`;

interface Props {
  data: {
    reviews: [Review];
  };
}
export const ReviewListMain: FunctionComponent<Props> = ({ data }) => {
  const { reviews } = data;
  return (
    <Fragment>
      <Title>รีวิวทั้งหมด</Title>
      <List
        dataSource={reviews}
        renderItem={item => (
          <List.Item key={item._id}>
            <List.Item.Meta
              avatar={<Avatar src={`https://revhere.gumlet.com/fetch/${item.imageCover}`} />}
              title={
                <Link href={`/review/${item._id}`}>
                  <a>{item.titleReview}</a>
                </Link>
              }
              description={item.introReview}
            />
            <Tag color="orange">{item.status}</Tag>
            <Link href={`/update-review/${item._id}`}>
              <OutlinePrimaryButton as="a">แก้ไข</OutlinePrimaryButton>
            </Link>
          </List.Item>
        )}
      />
    </Fragment>
  );
};
