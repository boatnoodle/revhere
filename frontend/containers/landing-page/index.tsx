import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { TabPaneComponent } from './Components/TabPaneComponent';
import { StandardGrid } from 'components/StandardGrid';
import { Notification } from 'components/Notification';
import { ContactUsForm } from 'components/ContactUsForm';
import { ItemLists } from 'components/ItemLists';
import { GET_CATEGORY_LISTS, GET_REVIEWS } from './graphql';
import { REVIEW_STATUS } from 'utils/reviewStatus';

export const LandingPage: FunctionComponent = () => {
  const { data: categoriesData, loading } = useQuery(GET_CATEGORY_LISTS);
  const [getReviews, { data: reviewsData, loading: reviewsLoading, fetchMore }] = useLazyQuery(GET_REVIEWS);
  const [categoryReview, setCategoryReview] = useState(null);

  useEffect(() => {
    if (categoryReview === 'null') {
      getReviews({ variables: { status: REVIEW_STATUS.draft } });
    } else {
      getReviews({ variables: { status: REVIEW_STATUS.draft, categoryReview } });
    }
  }, [categoryReview]);

  return (
    <Fragment>
      <Notification
        title="ยินดีต้อนรับเข้าสู่ Revhere"
        description="Revhere เป็นเว็บบอร์ดน้องใหม่ ที่มีการจัดหมวดหมู่ตามความสนใจนั้นๆ คุณสามารถเขียน และแบ่งปันประสบการณ์ คำวิจารณ์ และบอกต่อสิ่งๆนั้น ให้กับชุมชนที่มีความสนใจเดียวกัน"
      />
      <TabPaneComponent setCategoryReview={setCategoryReview} data={categoriesData} loading={loading} />
      <StandardGrid
        left={<ItemLists data={reviewsData} loading={reviewsLoading} fetchMore={fetchMore} />}
        right={<ContactUsForm />}
      />
    </Fragment>
  );
};
