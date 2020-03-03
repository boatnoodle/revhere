import React, { FunctionComponent, Fragment } from 'react';
import GroupLists from 'components/group-lists';

const data = [
  {
    name: 'Apple Club',
    memberCount: 'สมาชิก 15.2k',
    imageUrl:
      'https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A',
  },
];
export const Component: FunctionComponent = () => {
  return (
    <Fragment>
      <GroupLists data={data} />
    </Fragment>
  );
};

export default Component;
