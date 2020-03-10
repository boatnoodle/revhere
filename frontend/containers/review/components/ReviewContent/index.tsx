import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import UserDetail from 'components/detail-badge';
import { Review } from 'types/review';

const Title = styled.div`
  font-size: 1.4em;
  font-weight: 500;
`;

const Container = styled.div`
  padding: 20px 25px;
  border: 1px solid #ccd6dd;
  border-radius: 8px;
`;

const ContentBox = styled.div`
  font-size: 1.2em;
`;

interface Props {
  data: {
    review: Review;
  };
}

export const ReviewContent: FunctionComponent<Props> = ({ data }) => {
  const { review } = data;

  function createMarkup() {
    return { __html: review.body };
  }

  return (
    <Container className="tk-ibm-plex-thai-looped">
      <Title>{review.titleReview}</Title>
      <UserDetail
        imageUrl="https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A"
        title="Nattashit Moonchanabaht"
        subTitle="3 ชั่วโมงที่แล้ว"
      />
      <ContentBox dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  );
};
