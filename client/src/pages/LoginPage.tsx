import React, {FC, useEffect} from 'react';
import styled, {css} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ColorInput, {InputType} from "../components/Input";
import Button from "../components/Button";
import {useForm} from "react-hook-form";

interface ModalProps {
    show: boolean;
}

interface ILoginPageProps {
    modalContentRef: React.RefObject<HTMLDivElement>
    loginButtonRef: React.RefObject<HTMLDivElement>
    handleLoginClose: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;


}

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
    transform: translateY(150%);
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

const LoginPage: FC<ILoginPageProps> = ({
                                            handleLoginClose,
                                            modalContentRef,
                                            showModal,
                                            setShowModal,
                                            loginButtonRef,
                                            setUserAuth
                                        }) => {
    const handleCloseModal = (event: MouseEvent) => {
        if (modalContentRef.current &&
            !modalContentRef.current.contains(event.target as Node) &&
            loginButtonRef.current &&
            !loginButtonRef.current.contains(event.target as Node)) {
            setShowModal(false);
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleCloseModal);
        return () => {
            document.removeEventListener('click', handleCloseModal);
        };
    }, []);

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data: object) => {
        setUserAuth(true)
        setShowModal(false)
    }

    return (
        <>
            <Modal show={showModal}>
                <ModalContent ref={modalContentRef}>
                    <LoginWrapper>
                        <CloseIcon className={'closeModalIcon'} onClick={handleLoginClose}/>
                        <PageTitle>Авторизация</PageTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ColorInput {...register('email')} type={InputType.Email} label={'Email'} id={'email'}/>
                            <ColorInput {...register('password')} type={InputType.Password} label={'Password'}
                                        id={'password'}/>
                            <div>
                                <a>Забыли пароль?</a>
                            </div>
                            <Button>
                                Вход
                            </Button>
                        </form>
                    </LoginWrapper>
                </ModalContent>
            </Modal>
        </>
    );
};

export default LoginPage;