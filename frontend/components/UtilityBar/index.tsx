import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  padding: 15px;
  color: #fff;
  background: #263238 0% 0% no-repeat padding-box;
`;

const ReactNode = styled.div``;

const CloseOutlinedAbsolute = styled(CloseOutlined)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

interface Props {
  content: JSX.Element;
}

export const UtilityBar: React.FC<Props> = ({ content }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(!visible);
  };
  return (
    <>
      {visible && (
        <Wrapper>
          <ReactNode>{content}</ReactNode>
          <CloseOutlinedAbsolute onClick={handleClose} />
        </Wrapper>
      )}
    </>
  );
};
