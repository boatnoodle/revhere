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
      {/* // site_name: 'SiteName', */}
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
        }}
      />
      {/* twitter={{
           handle: '@handle',
           site: '@site',
           cardType: 'summary_large_image',
         }} */}
      {/* <Head>
        <meta property="og:title" content={`${review?.titleReview} | Revhere`} />
        <meta name="og:description" content={review?.introReview} />
        <title>{`${review?.titleReview} | Revhere`}</title>
        <meta name="description" content={review?.introReview} />
        {review?.imageCover && (
          <meta property="og:image" content={optimizedImgSrc({ imgPath: review?.imageCover, width: 320 })} />
        )}
      </Head> */}
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
