import React from "react";
import Styled from "styled-components";
import { Carousel } from "components/Carousel";

const CardComponent = Styled.div`
 float: left;
    overflow: hidden;
    width: 300px;
    text-align: center;
    border: 1.5px solid rgb(210,209,209);
    border-radius: 17px;
    background-color: white;
    margin: 0 10px;
`;
const CardWrapper = Styled.div`
    padding: 40px 20px;
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
    font-size: 1.3em;
    margin-top: 10px;
`;
const ItemDescription = Styled.div`
    font-size: 1em;
`;
const Img = Styled.img`
    width:100%;
`;
interface Props {
  title: String;
  subTitle?: String;
  loading?: boolean;
  items: Array<Object>;
}
export const ReviewItems: React.FunctionComponent<Props> = ({
  title = "title",
  subTitle = null,
  items = [],
  loading = false
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
            <Img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
            <ItemLabel>{index}</ItemLabel>
            <ItemDescription>Description</ItemDescription>
          </CardComponent>
        ))}
      </Carousel>
    </CardWrapper>
  );
};
