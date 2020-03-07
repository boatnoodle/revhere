import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import IconHot from '../../../assets/icons/icon-hot.svg';
import IconTime from '../../../assets/icons/icon-time.svg';
import IconHashTag from '../../../assets/icons/icon-hastag.svg';
import IconLike from '../../../assets/icons/icon-like.svg';
import styled from 'styled-components';

import { ItemLists } from './ItemLists';
import { Tabs } from 'antd';
import { PrimaryButton } from '~/components/Button';

const { TabPane } = Tabs;
const tabLists = [
  {
    icon: <IconHot />,
    content: <ItemLists />,
    title: 'กระแส',
  },
  {
    icon: <IconTime />,
    content: 'test',
    title: 'ล่าสุด',
  },
  {
    icon: <IconHashTag />,
    content: 'test',
    title: 'มาแรง',
  },
  {
    icon: <IconLike />,
    content: 'test',
    title: 'แนะนำสำหรับคุณ',
  },
];

const Span = styled.span`
  & path.a,
  & path.b {
    fill: #657786;
  }
  ,
  & svg {
    color: #657786;
    display: flex;
  }
`;

const TabsStyled = styled(Tabs)`
  .ant-tabs-tab-active span path {
    fill: #17bf63 !important;
  }
`;

export const TabPaneComponent: FunctionComponent = () => {
  return (
    <React.Fragment>
      <TabsStyled defaultActiveKey="0" animated={false}>
        {tabLists.map(({ icon, content, title }, index) => (
          <TabPane
            tab={
              <Span>
                {icon}
                {title}
              </Span>
            }
            key={String(index)}
          >
            {content}
          </TabPane>
        ))}
      </TabsStyled>
      <Link href="/create-review">
        <PrimaryButton as="a">เขียนรีวิว</PrimaryButton>
      </Link>
    </React.Fragment>
  );
};
