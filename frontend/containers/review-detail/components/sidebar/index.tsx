import React, { FunctionComponent, Fragment } from 'react';
import GroupLists from 'components/group-lists';
import styled from 'styled-components';
import IconHeart from '../../../../assets/icons/icon-24-heart.svg';
import IconFacebook from '../../../../assets/icons/icon-24-facebook.svg';
import IconTwitter from '../../../../assets/icons/icon-24-twitter.svg';
import IconCommunication from '../../../../assets/icons/icon-24-communication.svg';
import IconBookmark from '../../../../assets/icons/icon-24-bookmark.svg';

const ReviewMenu = styled.div`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccd6dd;
  & div.item {
    &.highlight {
      font-size: 1.3em;
      font-weight: 500;
      svg path {
        fill: red !important;
      }
    }
    i {
      margin-right: 5px;
    }
    padding: 10px;
    display: flex;
    align-items: center;
  }
`;

const menuLists = [
  {
    icon: <IconHeart />,
    isHighlight: true,
    label: 'ถูกใจรีวิวนี้',
  },
  {
    icon: <IconFacebook />,
    label: 'แชร์รีวิวนี้ไปยัง Facebook',
  },
  {
    icon: <IconTwitter />,
    label: 'ทวีตรีวิวนี้ไปยัง Twitter',
  },
  {
    icon: <IconBookmark />,
    label: 'เก็บไว้ดูภายหลัง',
  },
  {
    icon: <IconCommunication />,
    label: '20 การแสดงความคิดเห็น',
  },
];

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
      <ReviewMenu>
        {menuLists.map(({ icon, label, isHighlight = false }, index) => (
          <div className={'item ' + (isHighlight ? 'highlight' : '')} key={index}>
            <i>{icon}</i>
            {label}
          </div>
        ))}
      </ReviewMenu>
    </Fragment>
  );
};

export default Component;
