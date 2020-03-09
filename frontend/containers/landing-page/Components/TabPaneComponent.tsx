import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ItemLists } from './ItemLists';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const tabLists = [
  {
    title: 'สำรวจ',
  },
  {
    title: 'หนังสือ',
  },
  {
    title: 'ภาพยนต์',
  },
  {
    title: 'ดนตรี',
  },
  {
    title: 'คอร์ส',
  },
  {
    title: 'สถานที่',
  },
];

const Span = styled.span`
  color: white;
  font-size: 16px;
  justify-content: center;
  display: flex;
`;

const TabsStyled = styled(Tabs)`
  .ant-tabs-tab:first-child {
    margin-left: 0px;
  }
  .ant-tabs-tab {
    margin-left: 10px;
    margin-right: 0px;
    background: #90a4ae 0% 0% no-repeat padding-box;
    width: 124px;
    border-radius: 12px;
    opacity: 1;
    height: 51px;
  }
  .ant-tabs-tab-active {
    span {
      color: #17bf63 !important;
      font-weight: bolder;
      path {
        fill: #17bf63 !important;
      }
    }
    border: 1px solid #17bf63;
    background: #ffffff;
  }
`;

const TabPaneStyled = styled(TabPane)``;

export const TabPaneComponent: FunctionComponent = () => {
  return (
    <TabsStyled defaultActiveKey="0" animated={false}>
      {tabLists.map(({ title }, index) => (
        <TabPaneStyled tab={<Span>{title}</Span>} key={String(index)}>
          <ItemLists />
        </TabPaneStyled>
      ))}
    </TabsStyled>
  );
};
