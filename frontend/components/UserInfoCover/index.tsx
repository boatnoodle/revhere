import React from 'react';
import styled from 'styled-components';
import { OutlinePrimaryButton } from 'components/Button';
import { useSession } from 'hooks/useSession';
import { Loader } from './Loader';

const Container = styled.div`
  background-color: black;
  background-image: url('https://scontent.furt3-1.fna.fbcdn.net/v/t1.0-0/p640x640/57426210_2152690504811248_727909996469157888_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_oc=AQnGPxEhlaky0GVJ-eB_ytBRiNhKPdUAIz56lF0MmbZCuGvbkXh_kjjQ2kSeR_JIQLg&_nc_ht=scontent.furt3-1.fna&_nc_tp=6&oh=50d8bfd022a48d271ad9c381a4d31c61&oe=5E9D4957');
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: 12px;
  padding: 30px 0 30px 30px;
  display: flex;
  align-items: center;
  div.avatar {
    img {
      border-radius: 50%;
      width: 140px;
    }
  }
  div.content {
    margin-left: 30px;
    div.name {
      font-size: 1.6em;
      letter-spacing: 0.08px;
      color: #ffffff;
      text-shadow: 0px 0px 10px #00000029;
    }
    div.desc {
      width: 80%;
      text-align: left;
      font: Regular 16px/26px IBM Plex Thai;
      letter-spacing: 0.26px;
      color: #ffffff;
      text-shadow: 0px 0px 10px #00000029;
    }
  }
`;
const EditProfileBtn = styled(OutlinePrimaryButton)`
  align-self: flex-end;
  margin-left: auto;
  margin-right: 20px;
`;

export const UserInfoCover: React.FC = () => {
  const { user, initializing } = useSession();
  if (initializing) {
    return <Loader />;
  } else {
    return (
      <Container>
        <div className="avatar">
          <img src={user ? user.photoURL : ''} />
        </div>
        <div className="content">
          <div className="name">Nattashit Moonchanabaht</div>
          <div className="desc">
            หนอนหนังสือหัดอ่าน ชื่นชอบวรรณกรรมแปลจากยุคคลาสสิก โดยเฉพาะจากรัสเซีย เยอรมัน บ้างก็อ่าน non-fiction
            แล้วแต่อารมณ์
          </div>
        </div>
        <EditProfileBtn>แก้ไขข้อมูลส่วนตัว</EditProfileBtn>
      </Container>
    );
  }
};
