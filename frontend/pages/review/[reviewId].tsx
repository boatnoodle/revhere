import React, { FunctionComponent } from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { useRouter } from 'next/router';
import { withApollo } from 'providers/web-client/with-apollo-client';
import { Layouts } from 'components/Layout';
import { Review } from 'containers/review';
import { GET_REVIEW } from 'containers/review/graphql';
import { optimizedImgSrc } from 'components/ImageOptimized';

function ReviewPage(props) {
  const { reviewId, data } = props;
  const { review } = data;

  return (
    <Layouts>
      <NextSeo
        title={`${review?.titleReview} | Revhere`}
        description={review?.introReview}
        facebook={{
          appId: '219527889221901',
        }}
        canonical="https://revhere.com"
        openGraph={{
          url: 'https://revhere.com',
          title: `${review?.titleReview} | Revhere`,
          description: review?.introReview,
          images: [
            {
              url: review?.imageCover && optimizedImgSrc({ imgPath: review?.imageCover, width: 320 }),
              width: 320,
              alt: 'image-cover',
            },
          ],
          type: 'website',
          // eslint-disable-next-line @typescript-eslint/camelcase
          site_name: 'Revhere',
        }}
      />
      <Review reviewId={reviewId} />
    </Layouts>
  );
}

ReviewPage.getInitialProps = async ctx => {
  const { query, apolloClient } = ctx;
  const { reviewId } = query;
  const queries = await apolloClient.query({
    query: GET_REVIEW,
    variables: { _id: reviewId, forceQuery: false },
    skip: !reviewId,
  });
  return { ...queries, reviewId };
};

export default withApollo(ReviewPage, { ssr: true });
