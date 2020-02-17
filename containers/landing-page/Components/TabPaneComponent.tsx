import React, { FunctionComponent, Fragment } from 'react';
import { Tabs, Icon } from 'antd';

const { TabPane } = Tabs;

export const TabPaneComponent: FunctionComponent = () => {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane tab={<span>Tab 1</span>} key="1">
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <Icon type="android" />
            Tab 2
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
    </Tabs>
  );
};
