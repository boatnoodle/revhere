import React from 'react';
import Styled from 'styled-components';
import { Carousel } from 'components/Carousel';

const CardComponent = Styled.div`
    display: flex;
    overflow: hidden;
    width: 250px;
    height: 180px;
    text-align: center;
    border: 1.5px solid rgb(210,209,209);
    border-radius: 17px;
    margin: 0 10px;
    background: #ffffff url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEa0kE1BQAkvPikex-btLIzZ7UbZZZO0YuvvUbSM7q1tLtGMeR) no-repeat right top;
    background-size: 250px 180px;
    flex-direction: column;
    justify-content: flex-end;
    text-align: left;

`;
const CardWrapper = Styled.div`
    padding: 20px 0;
`;

const Title = Styled.div`
    font-size:2em;
    font-weight:300;
    color:black;
`;
const SubTitle = Styled.div`
    font-size:1em;
    font-weight:200;
    margin-bottom:15px;
`;
const ItemLabel = Styled.div`
color: white;
    width: 100%;
    font-size: 1.3em;
    padding: 5px;
    background-color: hsla(0, 0%, 0%, 0.33);
    & div.desc{
        width:100%;
        font-size: .7em;
    }
`;
interface Props {
  title: string;
  subTitle?: string;
  loading?: boolean;
  items: Array<number>;
}
export const ReviewItems: React.FunctionComponent<Props> = ({
  title = 'title',
  subTitle = null,
  items = [],
  loading = false,
}) => {
  const Subtitle = () => {
    return subTitle && <SubTitle>{subTitle}</SubTitle>;
  };

  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Subtitle />
      <Carousel>
        {items.map((item, index) => (
          <CardComponent key={index}>
            <ItemLabel>
              หูฟัง Sony รุ่น Love Neewan ใช้ดีมากครับ{index}
              <div className="desc">Nattasit 1 ชั่วโมงที่แล้ว</div>
            </ItemLabel>
          </CardComponent>
        ))}
      </Carousel>
    </CardWrapper>
  );
};
