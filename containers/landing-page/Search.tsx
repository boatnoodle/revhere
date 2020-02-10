import { FunctionComponent, Fragment } from 'react';
import { Input, Row, Col } from 'antd';
import Styled from 'styled-components';
const { Search } = Input;
const SearchComponent = Styled(Search)`
    input,button{
        height: 50px;
    }
    button{
        width:100px;
    }
`;
const searchProps = {
    placeholder: 'What are you looking for?, Search here for the best results.',
    loading: true,
    enterButton: true,
}
const Title = Styled.p`
    font-size: 2.3em;
    font-weight: 500;
    margin-bottom:10px;
    text-align:center;
`;
const SubTitle = Styled.p`
    font-size: 1.5em;
    font-weight: 300;
    text-align:center;
`;
const SearchZone: FunctionComponent = () => {
    return (
        <Fragment>
            <Row>
                <Col span={12} offset={6}>
                    <Title>Thailand Reviews Factory</Title>
                    <SubTitle>The leading of reviews in Thailand, Explore your finding reviews here!</SubTitle>
                    <SearchComponent {...searchProps} />
                </Col>
            </Row>
        </Fragment>
    );
}

export default SearchZone;