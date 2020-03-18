import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Row, Col, message } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { CREATE_REVIEW } from './graphql';
import { FormReview } from 'components/FormReview';
import { UtilityBar } from 'components/UtilityBar';

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
`;

const TopBarStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  text-align: center;
  justify-content: center;
`;

export const CreateReview: FunctionComponent = () => {
  const router = useRouter();
  const [createReview, { loading }] = useMutation(CREATE_REVIEW);
  const initialValues = {
    titleReview: '',
    introReview: '',
    imageCover: null,
    categoryReview: null,
    body: null,
    tags: [],
  };

  const onSubmit = async (values): Promise<any> => {
    const result = await createReview({ variables: { payload: { ...values } } });
    const reviewId = result?.data?.createReview?._id;
    router.push(`/update-review?reviewId=${reviewId}`);
  };

  const TopBar = (): JSX.Element => {
    return (
      <TopBarStyled>
        <div>Draft {loading && 'saving...'}</div>
      </TopBarStyled>
    );
  };

  return (
    <>
      <UtilityBar content={<TopBar />} />
      <Wrapper>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(): JSX.Element => {
            return (
              <Container>
                <FormReview />
              </Container>
            );
          }}
        </Formik>
      </Wrapper>
    </>
  );
};
