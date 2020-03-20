import React, { FunctionComponent, Fragment } from 'react';
import { TabPaneComponent } from './Components/TabPaneComponent';
import { StandardGrid } from 'components/StandardGrid';
import { Notification } from 'components/Notification';
import { ContactUs } from './Components/ContactUs';
import { ItemLists } from './Components/ItemLists';

export const LandingPage: FunctionComponent = () => {
  return (
    <Fragment>
      <Notification
        title="ยินดีต้อนรับเข้าสู่ Revhere"
        description="Revhere เป็นเว็บบอร์ดน้องใหม่ ที่มีการจัดหมวดหมู่ตามความสนใจนั้นๆ คุณสามารถเขียน และแบ่งปันประสบการณ์ คำวิจารณ์ และบอกต่อสิ่งๆนั้น ให้กับชุมชนที่มีความสนใจเดียวกัน"
      />
      <TabPaneComponent />
      <StandardGrid content={<ContactUs />} left={<ItemLists />} />
    </Fragment>
  );
};
