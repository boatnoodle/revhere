import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import BreadCrumb from 'components/ฺBreadcrumb';
import ContentLoader from 'react-content-loader';

import { message } from 'antd';
import { Formik } from 'formik';
import { GET_REVIEW, UPDATE_REVIEW_DETAIL } from './graphql';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FormUpdateReview } from './Components/FormUpdateReview';

const Container = styled.div`
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.06);
  margin: 15px auto;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  reviewId: {};
};

export const UpdateReview: FunctionComponent<Props> = ({ reviewId }) => {
  const { data, loading, error } = useQuery(GET_REVIEW, { variables: { _id: reviewId } });
  const [updateReviewDetail] = useMutation(UPDATE_REVIEW_DETAIL);

  const initialValues = {
    titleReview: '' || data?.review?.titleReview,
    introReview: '' || data?.review?.introReview,
    body: '' || data?.review?.body,
  };

  const onSubmit = async values => {
    await updateReviewDetail({ variables: { _id: reviewId, ...values } });
    message.success('Saved!');
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return (
      <Fragment>
        <BreadCrumb />
        <Container>
          <ContentLoader
            speed={2}
            width={1000}
            height={500}
            viewBox="0 0 1200 800"
            backgroundColor="#ffffff"
            foregroundColor="#ecebeb"
          >
            <rect x="64" y="81" rx="0" ry="0" width="194" height="26" />
            <rect x="65" y="133" rx="0" ry="0" width="824" height="24" />
            <rect x="64" y="175" rx="0" ry="0" width="158" height="26" />
            <rect x="194" y="190" rx="0" ry="0" width="1" height="6" />
            <rect x="64" y="256" rx="0" ry="0" width="1000" height="550" />
          </ContentLoader>
        </Container>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <BreadCrumb />
      <Container>
        <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
          {props => {
            return <FormUpdateReview data={data} {...props} />;
          }}
        </Formik>
      </Container>
    </Fragment>
  );
};
