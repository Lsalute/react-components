import React from 'react';
import styled, { css } from 'styled-components';

type ModalType = {
  isShow: boolean;
};
const Modal = styled.div<ModalType>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const ModalOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray75};
  opacity: 0.5;
`;

type ModalDialogType = {
  width: number;
};
const ModalDialog = styled.div<ModalDialogType>`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: ${({ width }) => width}px;
  width: 100%;
`;
const ModalContent = styled.div`
  padding: 20px 20px 15px 20px;
  background-color: #fff;
`;
const ModalBody = styled.div``;
type ModalFooterType = {
  align: string;
};
const ModalFooter = styled.div<ModalFooterType>`
  display: flex;
  justify-content: ${({ align }) => align};
  align-items: center;
`;
const ModalButton = css``;
const ModalConfirm = styled.button`
  ${ModalButton};
`;
const ModalCancel = styled.button`
  ${ModalButton};
`;

type buttonAlignType = 'flex-end' | 'center' | 'flex-start';
type ModalWithNoTitle = {
  isShow: boolean;
  isFooter?: boolean;
  confirmText?: string;
  cancelText?: string;
  width?: number;
  buttonAlign?: buttonAlignType;
  onClose?: () => void;
  onSubmit: () => void;
};
const ModalWithNoTitle: React.FC<ModalWithNoTitle> = ({
  isShow,
  isFooter = false,
  confirmText = '확인',
  cancelText = '취소',
  width = 300,
  buttonAlign = 'flex-end',
  onClose,
  onSubmit,
  children,
}) => {
  return (
    <Modal isShow={isShow}>
      <ModalOverlay></ModalOverlay>
      <ModalDialog width={width}>
        <ModalContent>
          <ModalBody>{children}</ModalBody>
          {isFooter && (
            <ModalFooter align={buttonAlign}>
              <ModalConfirm onClick={onSubmit}>{confirmText}</ModalConfirm>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalDialog>
    </Modal>
  );
};

export default ModalWithNoTitle;
