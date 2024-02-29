import { ReactNode } from "react";
import { Portal } from "./Portals";
import * as S from "./ModalBase.styles";
import { Icon } from "@/ui/components/Icon/Icon";

type ModalBaseProps = {
  children: ReactNode;
  handleShowModal: () => void;
  showModal: boolean;
  style?: React.CSSProperties;
};

export const ModalBase = ({
  children,
  handleShowModal,
  showModal,
  style,
}: ModalBaseProps) => {
  return (
    <Portal wrapperId="modal-root">
      {showModal && (
        <>
          <S.Overlay onClick={handleShowModal} />
          <S.ModalWrapper style={style}>
            <S.Content>
              <S.CloseButton onClick={handleShowModal}>
                <Icon name="close" />
              </S.CloseButton>
              {children}
            </S.Content>
          </S.ModalWrapper>
        </>
      )}
    </Portal>
  );
};
