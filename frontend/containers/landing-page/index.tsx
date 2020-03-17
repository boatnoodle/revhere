import React, { FunctionComponent, Fragment } from 'react';
import { TabPaneComponent } from './Components/TabPaneComponent';
import StandardGrid from 'components/Standard-grid';
import Notification from 'components/Notification';
import { ContactUs } from './Components/ContactUs';

export const LandingPage: FunctionComponent = () => {
  return (
    <Fragment>
      <Notification
        title="ยินดีต้อนรับเข้าสู่ Revhere"
        description="Revhere เป็นเว็บบอร์ดน้องใหม่ ที่มีการจัดหมวดหมู่ตามความสนใจนั้นๆ คุณสามารถเขียน และแบ่งปันประสบการณ์ คำวิจารณ์ และบอกต่อสิ่งๆนั้น ให้กับชุมชนที่มีความสนใจเดียวกัน"
      />
      <StandardGrid content={<ContactUs />} left={<TabPaneComponent />} />
    </Fragment>
  );
};
