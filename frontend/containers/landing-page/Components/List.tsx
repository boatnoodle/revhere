import React, { FunctionComponent, Fragment } from 'react';
import { List, Typography } from 'antd';
import IconCommunities from '../../../assets/icons/icon-communities.svg';
import Styled from 'styled-components';

const data = [
  {
    name: 'Marvel',
    memberCount: 'สมาชิก 15.2k',
    imageUrl:
      'https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A',
  },
  {
    name: 'Gohub',
    memberCount: 'สมาชิก -1k',
    imageUrl:
      'https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A',
  },
  {
    name: 'Fazwaz Group',
    memberCount: 'สมาชิก 1.1 B',
    imageUrl:
      'https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A',
  },
  {
    name: 'Future Makers',
    memberCount: 'สมาชิก 1 ตัว',
    imageUrl:
      'https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-9/s960x960/74396069_2594174023999170_8719079083155128320_o.jpg?_nc_cat=102&_nc_oc=AQlutKLKb3uNoRq709fD6_1rLDbaTcEIneNb1Srk4016I6lI9IlwFSHJ06jCVeymodc&_nc_ht=scontent.furt3-1.fna&_nc_tp=7&oh=dd756c038d1b68c9bac24b5fe85a4cdd&oe=5EFDF82A',
  },
];
const HeadTitle = Styled.div`
    display:flex;
    height:48px;
    align-items: center;
    & div{display:flex;}
    & span{margin-left:10px;}
`;
const StyledListItem = Styled(List.Item)`
    & div {display:flex;}
    & div.with-new-line{flex-direction:column}
    & img{border-radius:50%} 
    & span {font-weight:500;margin-left:10px;}
    & span.txt-muted{
        font-size: 13px;
        color: gray;
        font-weight: unset;
    }
    & button{position: absolute !important;right:14px;}
`;
const StyledButton = Styled.button`
   border-radius: 16px;
    border: 1px solid #17BF63!important;
    background-color: white;
    font-weight: bolder;
    color: #17BF63;
    padding: 2px 23px;
    font-size: 16px;
`;
const LookMore = Styled.div`
    font-weight: 500;
    text-align: center;
`;
export const ListComponent: FunctionComponent = () => {
  return (
    <Fragment>
      <HeadTitle>
        <div>
          <IconCommunities />
          <span>ห้องแนะนำ</span>
        </div>
      </HeadTitle>
      <List
        size="large"
        footer={
          <LookMore>
            <a href="#">ดูทั้งหมด</a>
          </LookMore>
        }
        bordered
        dataSource={data}
        renderItem={item => (
          <StyledListItem>
            <div>
              <img src={item.imageUrl} width={32} height={32} />
              <div className="with-new-line">
                <span>{item.name}</span>
                <span className="txt-muted">{item.memberCount}</span>
              </div>
              <StyledButton>เข้าร่วม</StyledButton>
            </div>
          </StyledListItem>
        )}
      />
    </Fragment>
  );
};
