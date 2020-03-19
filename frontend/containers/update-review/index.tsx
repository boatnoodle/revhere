import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import BreadCrumb from 'components/Breadcrumb';
import ContentLoader from 'react-content-loader';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/th';

import { Formik } from 'formik';
import { GET_REVIEW, UPDATE_REVIEW } from 'containers/create-review/graphql';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FormReview } from 'components/FormReview';
import { UtilityBar } from 'components/UtilityBar';
import { PrimaryButton } from 'components/Button';

dayjs.extend(relativeTime);
dayjs.locale('th');

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

const ButtonAbsolute = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

const TopBarStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  text-align: center;
  justify-content: center;
`;

type Props = {
  reviewId: {};
};

export const UpdateReview: FunctionComponent<Props> = ({ reviewId }) => {
  const { data, loading, error } = useQuery(GET_REVIEW, { variables: { _id: reviewId } });
  const [updateReview, { loading: loadingUpdateReview }] = useMutation(UPDATE_REVIEW);

  const initialValues = {
    _id: data?.review?._id,
    titleReview: '' || data?.review?.titleReview,
    introReview: '' || data?.review?.introReview,
    body: '' || data?.review?.body,
    imageCover: '' || data?.review?.imageCover,
    tags: '' || data?.review?.tags,
    categoryReview: '' || data?.review?.categoryReview?._id,
    status: '' || data?.review?.status,
  };

  const onSubmit = async (values): Promise<any> => {
    updateReview({ variables: { payload: { ...values } } });
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

  const TopBar = (): JSX.Element => {
    return (
      <TopBarStyled>
        <ButtonAbsolute>เผยแพร่</ButtonAbsolute>
        <div>
          <b>บันทึกแบบร่างแล้ว</b> - {dayjs().to(dayjs(data?.review?.updatedAt))}{' '}
          {loadingUpdateReview && 'กำลังบันทึก...'}
        </div>
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
