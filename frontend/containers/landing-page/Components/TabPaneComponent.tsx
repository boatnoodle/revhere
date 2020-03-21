import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';
import { CategoryReview } from 'types/categoryReview';
import { CategoryLoader } from './CategoryLoader';

const { TabPane } = Tabs;
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
  div.ant-tabs-ink-bar {
    display: none !important;
  }
  .ant-tabs-bar {
    margin-top: 15px;
    margin-bottom: 0 !important;
  }
`;

const TabPaneStyled = styled(TabPane)``;

interface Props {
  data: {
    categoryLists: CategoryReview[];
  };
  setCategoryReview: Function;
}
const CategoryLists: React.FC<Props> = ({ data: { categoryLists }, setCategoryReview }) => {
  return (
    <TabsStyled onTabClick={key => setCategoryReview(key)} defaultActiveKey="0" animated={false}>
      <TabPaneStyled tab={<Span>สำรวจ</Span>} key={null} />
      {categoryLists.map(({ _id, name }, index) => (
        <TabPaneStyled tab={<Span>{name}</Span>} key={_id} />
      ))}
    </TabsStyled>
  );
};

interface TabPaneProps {
  setCategoryReview: any;
  data: {
    categoryLists: CategoryReview[];
  };
  loading: boolean;
}

export const TabPaneComponent: React.FC<TabPaneProps> = ({ setCategoryReview, data, loading }) => {
  if (loading || !data) {
    return <CategoryLoader qty={Array(6).fill(null)} />;
  }

  return <CategoryLists data={data} setCategoryReview={setCategoryReview} />;
};
