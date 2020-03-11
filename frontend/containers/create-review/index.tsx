import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { Row, Col, message } from 'antd';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/react-hooks';
import { Formik } from 'formik';
import { CREATE_REVIEW } from './graphql';
import { FormCreateReview } from './Components/FormCreateReview';
import { UtilityBar } from 'components/UtilityBar';
import { PrimaryButton } from 'components/Button';
import { MenuCategory } from './Components/MenuCategory';

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

const ButtonAbsolute = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

export const CreateReview: FunctionComponent = () => {
  const router = useRouter();
  const [createReview] = useMutation(CREATE_REVIEW);
  const initialValues = {
    titleReview: '',
    introReview: '',
    imageCover: null,
    reviewCategory: null,
    tags: [],
  };

  const onSubmit = async values => {
    const result = await createReview({ variables: { ...values } });
    message.success('บันทึกรีิวิวสำเร็จ');
    const reviewId = result?.data?.createReview?._id;
    router.push(`/update-review/${reviewId}`);
  };

  const TopBar = () => {
    return (
      <TopBarStyled>
        <ButtonAbsolute>เผยแพร่</ButtonAbsolute>
        <div>บันทึก Draft แล้ว</div>
      </TopBarStyled>
    );
  };

  return (
    <>
      <UtilityBar content={<TopBar />} />
      <Wrapper>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => {
            return (
              <Container>
                <MenuCategory />
                <FormCreateReview />
              </Container>
            );
          }}
        </Formik>
      </Wrapper>
    </>
  );
};
