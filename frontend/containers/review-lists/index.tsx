import React, { FunctionComponent, Fragment } from 'react';
import { StandardGrid } from 'components/StandardGrid';
import { ItemLists } from 'components/ItemLists';
import { useQuery } from '@apollo/react-hooks';
import { GET_MY_REVIEW } from './graphql';
import { ContactUsForm } from 'components/ContactUsForm';
import { UserInfoCover } from 'components/UserInfoCover';

export const ReviewLists: FunctionComponent = () => {
  const { data, loading, fetchMore } = useQuery(GET_MY_REVIEW);

  return (
    <Fragment>
      <UserInfoCover />
      <StandardGrid
        left={<ItemLists data={data} loading={loading} fetchMore={fetchMore} isEditingMode />}
        right={<ContactUsForm />}
      />
    </Fragment>
  );
};
