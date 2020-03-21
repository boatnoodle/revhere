import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader speed={2} width="100%" height={180} backgroundColor="#d7d7d7" foregroundColor="#e9e9e9">
    <rect x="244" y="63" rx="0" ry="0" width="0" height="6" />
    <circle cx="79" cy="75" r="55" />
    <rect x="165" y="41" rx="5" ry="5" width="30%" height="9" />
    <rect x="165" y="61" rx="5" ry="5" width="50%" height="9" />
    <rect x="165" y="84" rx="5" ry="5" width="50%" height="9" />
    <rect x="80%" y="109" rx="12" ry="12" width="122" height="26" />
  </ContentLoader>
);
