import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import Link from 'next/link';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

import { List } from 'antd';
import { Review } from 'types/review';
import { ImageOptimized } from 'components/ImageOptimized';
import { EditingMode } from './EditingMode';

dayjs.locale('th');

const StyledListItem = styled(List.Item)`
  background: white;
  border-radius: 13px;
  padding: 10px 20px;
  margin-bottom: 10px;
  .ant-list-item-main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .ant-list-item-meta {
      flex: 0;
    }
  }
  & .ant-list-item-extra {
    margin-left: 0 !important;
  }
  & .ant-list-item-meta {
    margin-bottom: 10px !important;
  }
  & .ant-list-item-action {
    margin-top: 10px !important;
  }
  & img {
    border-radius: 10px;
  }
  div.author-name {
    color: #17bf63;
    font-size: 1em;
    font-weight: 700;
  }
  div.review-intro {
  }
  div.date {
    font-weight: 700;
  }
`;
const Title = styled.a`
  font-size: 1.3em;
  font-weight: bolder;
`;

interface PropsReview {
  data: {
    reviews: Review[];
  };
  isEditingMode: boolean;
}

const dynamicLink = (nameLink: string, href: string, as = ''): JSX.Element => {
  return (
    <Link href={href} as={as}>
      <Title>{nameLink}</Title>
    </Link>
  );
};

const ListUi: React.FC<PropsReview> = ({ data: { reviews }, isEditingMode }) => {
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
        <StyledListItem extra={<ImageOptimized width={144} height={144} alt="logo" imgPath={item.imageCover} />}>
          <ListItem
            className="list-item"
            title={
              isEditingMode
                ? dynamicLink(item.titleReview, `/update-review?reviewId=${item._id}`)
                : dynamicLink(item.titleReview, '/review/[reviewId]', `/review/${item._id}`)
            }
          />
          <div className="review-intro">{item.introReview}</div>
          <div className="author-name">{item?.user?.name}</div>
          {!isEditingMode ? (
            <div className="date">
              {`${item?.categoryReview?.name || 'ไม่ระบุ'} - ${dayjs(item?.updated).format('DD MMMM')}`}
            </div>
          ) : (
            <EditingMode status={item.status} id={item._id} />
          )}
        </StyledListItem>
      )}
    />
  );
};
const ListItem = styled(List.Item.Meta)``;
interface Props {
  loading: boolean;
  data: {
    reviews: Review[];
  };
  isEditingMode?: boolean;
}
export const ItemLists: FunctionComponent<Props> = ({ loading, data, isEditingMode = false }) => {
  if (loading || !data) {
    return <Loader qty={Array(6).fill(null)} />;
  }
  return <ListUi data={data} isEditingMode={isEditingMode} />;
};
