import React from 'react';

interface Props {
  imgPath: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const ImageOptimized: React.FC<Props> = ({ imgPath, width, height, alt = '' }) => {
  let dataSrc = `https://revhere.gumlet.com/fetch/${imgPath}`;
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
