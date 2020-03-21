import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';

const ContentLoaderContainer = styled.div`
  margin: 10px auto 16px auto;
  & svg:not(:first-child) {
    margin-left: 10px;
  }
`;
export const CategoryLoader = ({ qty }) => {
  return (
    <ContentLoaderContainer>
      {qty.map((item, key) => (
        <ContentLoader
          key={key}
          speed={2}
          width={124}
          height={51}
          viewBox="0 0 124 51"
          backgroundColor="#dddddd"
          foregroundColor="#aeaeae"
        >
          <rect x="245" y="59" rx="0" ry="0" width="0" height="6" />
          <rect x="0" y="0" rx="12" ry="12" width="124" height="51" />
        </ContentLoader>
      ))}
    </ContentLoaderContainer>
  );
};
