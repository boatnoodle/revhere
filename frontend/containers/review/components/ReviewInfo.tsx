import React from 'react';
import styled from 'styled-components';

import { Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import FacebookIcon from '../../../assets/icons/icon-facebook.svg';

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

export const ReviewInfo = () => {
  return (
    <Container>
      <ImageProfile>
        <img
          src="https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A"
          alt="image-profile"
          width="44"
          height="44"
        />
      </ImageProfile>
      <InfoReview>
        <OwnerReviewName>Rofeeya Dsh</OwnerReviewName>
        <div>2 มีนาคม</div>
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
