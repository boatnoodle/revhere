/* eslint-disable @typescript-eslint/camelcase */
import React, { Fragment } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import { DefaultSeo } from 'next-seo';
import { Firebase, FirebaseContext } from 'components/Firebase';

Router.events.on('routeChangeStart', url => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', url => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

// since "apollo" isn't a native Next.js prop we have to declare it's type.
const MyApp = props => {
  // instead of creating a client here, we use the rehydrated apollo client provided by our own withApollo provider.
  const { Component, pageProps } = props;
  const title = 'Revhere | รวมทุกรีวิว ที่คุณต้องการ';

  const description =
    'แพลตฟอร์ม สำหรับ ค้นหาทุกรีวิวที่คุณต้องการ ไม่ว่าจะเป็น ร้านอาหารชั้นนำ, สถานที่ท่องเที่ยว, หนังที่น่าดู และ อื่นๆ อีกมากมาย...';
  return (
    //adds the apollo provider to provide it's children with the apollo scope.
    <Fragment>
      <DefaultSeo
        title={title}
        description={description}
        // facebook={{
        //   appId: "1010210579171890"
        // }}
        openGraph={{
          url: 'https://revhere.com',
          title,
          description,
          images: [
            {
              url: 'https://revhere.com/logo.png',
              alt: 'Revhere',
              width: 882,
              height: 244,
            },
          ],
          type: 'website',
          site_name: 'Revhere',
        }}
      />
      <FirebaseContext.Provider value={new Firebase()}>
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </Fragment>
  );
};

export default MyApp;
