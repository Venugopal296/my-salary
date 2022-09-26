import { Modal } from "antd";

import "./modal.scss";

const CustomModal = ({ modal2Open, setModal2Open, children }) => {
    return (
        <Modal
            footer={null}
            centered
            visible={modal2Open}
            width={500}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;
