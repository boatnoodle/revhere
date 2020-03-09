import React, { FunctionComponent } from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = ({ qty }) => {
  return qty.map((item, key) => (
    <ContentLoader
      key={key}
      speed={2}
      width={800}
      height={177}
      viewBox="0 0 800 177"
      backgroundColor="#dddddd"
      foregroundColor="#aeaeae"
    >
      <rect x="618" y="13" rx="17" ry="17" width="149" height="138" />
      <rect x="11" y="14" rx="0" ry="0" width="290" height="15" />
      <rect x="12" y="48" rx="0" ry="0" width="549" height="11" />
      <rect x="12" y="72" rx="0" ry="0" width="549" height="11" />
      <rect x="12" y="100" rx="0" ry="0" width="549" height="11" />
      <rect x="12" y="125" rx="0" ry="0" width="549" height="11" />
    </ContentLoader>
  ));
};

export default MyLoader;
