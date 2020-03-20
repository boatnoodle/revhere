import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import IconCountView from '../../assets/icons/icons8-eye.svg';

import { NextSeo } from 'next-seo';
import { useQuery } from '@apollo/react-hooks';
import { ReviewImageCover } from './components/ReviewImageCover';
import { GET_REVIEW } from './graphql';
import { UtilityBar } from 'components/UtilityBar';
import { ReviewInfo } from './components/ReviewInfo';
import { optimizedImgSrc } from 'components/ImageOptimized';

interface Props {
  reviewId: {};
}

const CategoryReview = styled.div`
  color: #607d8b;
  font-size: 17px;
  letter-spacing: 0.2px;
  margin-bottom: 5px;
`;

const TitleReview = styled.div`
  color: #263238;
  font-size: 24px;
  letter-spacing: 0.38px;
`;

const IntroReview = styled.div`
  color: #263238;
  font-size: 17px;
  letter-spacing: 0.2px;
  margin-top: 8px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  box-shadow: 0px 2px 4px #0000000a;
  background: #ffffff 0% 0% no-repeat padding-box;
  padding-top: 40px;
`;

const Container = styled.div`
  display: grid;
  width: 700px;
  padding-bottom: 20px;
`;

const TopBarStyled = styled.div`
  display: grid;
  position: relative;

  div {
    display: flex;
    align-items: center;
    svg {
      margin-right: 12px;
      .a {
        fill: white;
      }
    }
  }
`;

const ContentBox = styled.div`
  font-size: 1.2em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  line-height: 2rem;
  color: #263238;
`;

export const Review: FunctionComponent<Props> = ({ reviewId }) => {
  const { data, loading, error } = useQuery(GET_REVIEW, { variables: { _id: reviewId } });

  const createMarkup = () => {
    return { __html: data?.review?.body };
  };

  if (loading) {
    return <div>loading</div>;
  }

  if (!data?.review) {
    return <div>ไม่พบรีวิว</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const TopBar = (): JSX.Element => {
    return (
      <TopBarStyled>
        <div>
          <IconCountView /> 165
        </div>
      </TopBarStyled>
    );
  };

  return (
    <>
      <NextSeo
        title={`${data?.review?.titleReview} | Revhere`}
        description={data?.review?.introReview}
        canonical="https://revhere.com"
        openGraph={{
          url: 'https://revhere.com',
          title: `${data?.review?.titleReview} | Revhere`,
          description: data?.review?.introReview,
          images: [
            {
              url: data?.review?.imageCover && optimizedImgSrc({ imgPath: data?.review?.imageCover, width: 320 }),
              width: 320,
              alt: 'image-cover',
            },
          ],
          // site_name: 'SiteName',
        }}
        // twitter={{
        //   handle: '@handle',
        //   site: '@site',
        //   cardType: 'summary_large_image',
        // }}
      />
      <UtilityBar content={<TopBar />} />
      <Wrapper>
        <Container>
          <CategoryReview>{data?.review?.categoryReview?.name}</CategoryReview>
          <TitleReview>{data?.review?.titleReview}</TitleReview>
          <IntroReview>{data?.review?.introReview}</IntroReview>
          <ReviewImageCover imageCover={data?.review?.imageCover} />
          <ReviewInfo />
          <div style={{ margin: '17px 0 32px 0' }}>
            <hr style={{ borderColor: '#fafafa61' }} />
          </div>
          <ContentBox dangerouslySetInnerHTML={createMarkup()} />
        </Container>
      </Wrapper>
    </>
  );
};
