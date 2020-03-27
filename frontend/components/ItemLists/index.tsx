import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import Loader from './Loader';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroller';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

import { List } from 'antd';
import { Review } from 'types/review';
import { ImageOptimized } from 'components/ImageOptimized';
import { EditingMode } from './EditingMode';
import { REVIEW_STATUS } from 'utils/reviewStatus';

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
    reviewMeta: {
      count: number;
    };
  };
  isEditingMode: boolean;
  fetchMore: Function;
}

const dynamicLink = (nameLink: string, href: string, as = ''): JSX.Element => {
  return (
    <Link href={href} as={as}>
      <Title>{nameLink}</Title>
    </Link>
  );
};

const ListUi: React.FC<PropsReview> = ({ data, isEditingMode, fetchMore }) => {
  const [hasMore, setHasMore] = useState(true);
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={page => {
        fetchMore({
          variables: { status: REVIEW_STATUS.publish, page },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;

            const reviews = [...prev.reviews, ...fetchMoreResult.reviews];
            if (data.reviewMeta.count === reviews.length) {
              setHasMore(false);
            }
            return Object.assign({}, prev, {
              reviews,
            });
          },
        });
      }}
      hasMore={hasMore}
      loader={data.reviews.length > 0 && <Loader qty={Array(1).fill(null)} />}
    >
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data.reviews}
        renderItem={item => (
          <StyledListItem extra={<ImageOptimized width={200} height={200} alt="logo" imgPath={item.imageCover} />}>
            <ListItem
              className="list-item"
              title={
                <Link href="/review/[reviewId]" as={`/review/${item._id}`}>
                  <Title>{item.titleReview}</Title>
                </Link>
              }
            />
            <div className="review-intro">{item.introReview}</div>
            <div className="author-name">{item?.user?.name}</div>
            {!isEditingMode ? (
              <div className="date">
                {`${item?.categoryReview?.name || 'ไม่ระบุ'} - ${dayjs(item.updated).format('DD MMMM')}`}
              </div>
            ) : (
              <EditingMode status={item.status} id={item._id} />
            )}
          </StyledListItem>
        )}
      />
    </InfiniteScroll>
  );
};
const ListItem = styled(List.Item.Meta)``;
interface Props {
  loading: boolean;
  data: {
    reviews: Review[];
    reviewMeta: {
      count: number;
    };
  };
  isEditingMode?: boolean;
  fetchMore?: Function;
}
export const ItemLists: FunctionComponent<Props> = ({ loading, data, isEditingMode = false, fetchMore }) => {
  if (loading || !data) {
    return <Loader qty={Array(6).fill(null)} />;
  }
  return <ListUi data={data} isEditingMode={isEditingMode} fetchMore={fetchMore} />;
};
