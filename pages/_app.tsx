import React, { Fragment } from "react";
import { DefaultSeo } from "next-seo";
import App from "next/app";
import withApollo from "../hooks/withApollo";

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

// since "apollo" isn't a native Next.js prop we have to declare it's type.
interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
  render() {
    // instead of creating a client here, we use the rehydrated apollo client provided by our own withApollo provider.
    const { Component, pageProps, apollo } = this.props;
    const title = "Revhere | รวมทุกรีวิว ที่คุณต้องการ";

    const description =
      "แพลตฟอร์ม สำหรับ ค้นหาทุกรีวิวที่คุณต้องการ ไม่ว่าจะเป็น ร้านอาหารชั้นนำ, สถานที่ท่องเที่ยว, หนังที่น่าดู และ อื่นๆ อีกมากมาย...";
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
            url: "https://phukethomevilla.com",
            title,
            description,
            images: [
              {
                url: "https://phukethomevilla.com/logo.png",
                alt: "Revhere",
                width: 882,
                height: 244
              }
            ],
            type: "website",
            site_name: "Revhere"
          }}
        />
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Fragment>
    );
  }
}
// before exporting our App we wrapp it with our own withApollo provider to have access to the our rehydrated apollo client.
export default withApollo(MyApp);
