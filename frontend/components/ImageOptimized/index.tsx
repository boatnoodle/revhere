import React from 'react';

interface Props {
  imgPath: string;
  width?: number;
  height?: number;
  alt?: string;
  style?: {};
}

export const ImageOptimized: React.FC<Props> = ({ imgPath, width, height, alt = '', style = {} }) => {
  if (!imgPath) {
    return <img src="/static/logo/logo.png" alt="image-fallback" width={width} height={height} style={{ ...style }} />;
  }
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

  return <img src={dataSrc} alt={alt} style={{ ...style }} />;
};
