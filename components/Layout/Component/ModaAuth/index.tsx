import React, { useState, useEffect } from 'react';

import { Modal } from 'antd';
import { ButtonFacebookAuth } from '../ButtonFacebookAuth';

interface Iprops {
    visible: boolean;
    handleCancel(any): void;
}
export const ModalAuth: React.FunctionComponent<Iprops> = ({ visible, handleCancel }) => {
    return (
        <Modal title="เข้าสู่ระบบ" visible={visible} onCancel={handleCancel} footer={null}>
            <ButtonFacebookAuth />
        </Modal>
    );
};
