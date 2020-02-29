import Icon from '@ant-design/icons';
import React from 'react';
interface SvgLocalIconProps {
  fileName: string;
  color?: string;
  style?: React.CSSProperties;
}
export const SvgLocalIcon: React.FC<SvgLocalIconProps & any> = ({ fileName, style, ...rest }) => (
  <Icon
    {...rest}
    style={{ ...style, lineHeight: 0 }}
    component={() => (
      <div
        style={{ lineHeight: 0 }}
        dangerouslySetInnerHTML={{ __html: require(`assets/icons/${fileName}.svg?include`) }}
      />
    )}
  />
);
