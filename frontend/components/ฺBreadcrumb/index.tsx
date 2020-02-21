import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'antd';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'หน้าหลัก',
  },
  //   {
  //     path: 'first',
  //     breadcrumbName: 'first',
  //     children: [
  //       {
  //         path: '/general',
  //         breadcrumbName: 'General',
  //       },
  //       {
  //         path: '/layout',
  //         breadcrumbName: 'Layout',
  //       },
  //       {
  //         path: '/navigation',
  //         breadcrumbName: 'Navigation',
  //       },
  //     ],
  //   },
  {
    path: 'create-review',
    breadcrumbName: 'เขียนรีวิว',
  },
];
const BreadCrumb: FunctionComponent = () => {
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? <span>{route.breadcrumbName}</span> : <Link href={paths.join('/')}>{route.breadcrumbName}</Link>;
  }
  return <Breadcrumb itemRender={itemRender} routes={routes} />;
};
export default BreadCrumb;
