import React from 'react';
import Styled from 'styled-components';
const CardComponent = Styled.div`
    width: 300px;
    text-align: center;
    border: 1.5px solid rgb(210, 209, 209);
    border-radius: 17px;
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
interface Props {
    title: String
    subTitle?: String,
    loading?: boolean,
    items: Array<Object>,
}
export const ReviewItems: React.FunctionComponent<Props> = ({ title = 'title', subTitle = null, items = [], loading = false }) => {

    const Subtitle = () => {
        return subTitle && <SubTitle>{subTitle}</SubTitle>;
    }

    return (
        <CardWrapper>
            <Title>{title}</Title>
            <Subtitle />
            <CardComponent>
                <img src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                <ItemLabel>Test</ItemLabel>
                <ItemDescription>Description</ItemDescription>
            </CardComponent>
        </CardWrapper>
    );
}
