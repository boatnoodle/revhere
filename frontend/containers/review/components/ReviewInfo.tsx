import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '../../../assets/icons/icon-facebook.svg';
import ContentLoader from 'react-content-loader';
import dayjs from 'dayjs';
import 'dayjs/locale/th';

import { Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { Review } from 'types/review';

dayjs.locale('th');

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content max-content;
  align-items: center;
  column-gap: 10px;
`;

const ImageProfile = styled.div`
  img {
    border-radius: 50%;
  }
`;

const InfoReview = styled.div``;

const OwnerReviewName = styled.div`
  color: #17bf63;
  font-size: 17px;
  letter-spacing: 0.2px;
`;

const LoveButton = styled.div`
  display: grid;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #ea4747 0% 0% no-repeat padding-box;
  color: white;
  border-radius: 16px;
  font-size: 20px;
  cursor: pointer;
`;

const FacebookShareButton = styled(Button)`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`;

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={700}
    height={50}
    viewBox="0 0 700 50"
    backgroundColor="#e6e6e6"
    foregroundColor="#bfbfbf"
  >
    <circle cx="31" cy="27" r="23" />
    <rect x="69" y="35" rx="0" ry="0" width="94" height="10" />
    <rect x="67" y="12" rx="0" ry="0" width="178" height="12" />
    <circle cx="551" cy="23" r="16" />
    <rect x="581" y="9" rx="12" ry="12" width="104" height="27" />
  </ContentLoader>
);

interface Props {
  review: Review;
}

export const ReviewInfo: React.FC<Props> = ({ review }) => {
  return (
    <Container>
      <ImageProfile>
        <img src={review?.user?.photoURL || '/static/logo/logo.png'} alt="image-profile" width="44" height="44" />
      </ImageProfile>
      <InfoReview>
        <OwnerReviewName>{review?.user?.name}</OwnerReviewName>
        <div>{dayjs(review?.updated).format('DD MMMM')} </div>
      </InfoReview>
      <LoveButton>
        <HeartFilled />
      </LoveButton>
      <FacebookShareButton type="primary" shape="round" icon={<FacebookIcon />}>
        แชร์รีวิวนี้
      </FacebookShareButton>
    </Container>
  );
};
