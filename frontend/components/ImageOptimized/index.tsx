import React from 'react';

interface Props {
  imgPath: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const ImageOptimized: React.FC<Props> = ({ imgPath, width, height, alt = '' }) => {
  const imageSplit = imgPath.split('/');
  const path = imageSplit[0];
  const nameImage = imageSplit[1];

  let dataSrc = `https://revhere.gumlet.com/${path}/${nameImage}`;
  if (width && height) {
    dataSrc += `?w=${width}&h=${height}`;
  } else {
    if (width) {
      dataSrc += `?w=${width}`;
    }

    if (height) {
      dataSrc += `?h=${height}`;
    }
  }

  return <img data-src={dataSrc} alt={alt} />;
};
