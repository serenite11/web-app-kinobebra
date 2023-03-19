import React, {FC, useEffect} from 'react';
import styled, {css} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ColorInput, {InputType} from "../components/Input";
import Button from "../components/Button";

const PageTitle = styled.div`
  margin-bottom: 10px;
  font-size: 32px;
`

const LoginWrapper = styled.div`
  padding: 10px;
  color: white;
  margin: 0 auto;
  width: 500px;
  /* height: 500px; */
  border-radius: 25px;
  border: 1px solid white;
  text-align: center;
  background-color: #294421;
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
  }
  
`

interface ModalProps {
    show: boolean;
}

interface IRegisterPageProps {
    registerModalContentRef: React.RefObject<HTMLDivElement>
    registerButtonRef: React.RefObject<HTMLDivElement>
    handleRegisterClose: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;


}

const Modal = styled.div<ModalProps>`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transform: translateY(-100%);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
          props.show &&
          css`
            transform: translateY(0);
            opacity: 1;
            z-index: 1;
          `
  };

  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
  }

  ${props =>
          props.show && 
          css`
            @media only screen and (max-width: 600px) {
            transform: translateY(0);
            opacity: 1;
            z-index: 1;
            }
          `
};
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  z-index: 1000;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
`;

const ButtonStyled = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: none;
  cursor: pointer;
  outline: none;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 7px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  &:hover::before {
    border-color: #ff8100;

  }

`

const LoginPage: FC<IRegisterPageProps> = ({
                                            handleRegisterClose,
                                            registerModalContentRef,
                                            showModal,
                                            setShowModal,
                                            registerButtonRef
                                        }) => {
    const handleCloseModal = (event: MouseEvent) => {
        if (registerModalContentRef.current &&
            !registerModalContentRef.current.contains(event.target as Node) &&
            registerButtonRef.current &&
            !registerButtonRef.current.contains(event.target as Node)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        // Add a click event listener to the document to close the modal when the user clicks outside of it
        document.addEventListener('click', handleCloseModal);

        return () => {
            // Remove the click event listener when the component unmounts
            document.removeEventListener('click', handleCloseModal);
        };
    }, []);

    return (
        <>
            <Modal show={showModal}>
                <ModalContent ref={registerModalContentRef}>
                    <LoginWrapper>
                        <CloseIcon className={'closeModalIcon'} onClick={handleRegisterClose}/>
                        <PageTitle>Регистрация</PageTitle>
                        <ColorInput type={InputType.Text} label={'Ваше имя'}/>
                        <ColorInput type={InputType.Text} label={'Логин'}/>
                        <ColorInput type={InputType.Email} label={'Почта'}/>
                        <ColorInput type={InputType.Password} label={'Пароль'}/>
                        <ColorInput type={InputType.Checkbox} label={'Согласие на обработку данных'}/>

                        <Button>
                            Регистрация
                        </Button>
                    </LoginWrapper>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginPage;