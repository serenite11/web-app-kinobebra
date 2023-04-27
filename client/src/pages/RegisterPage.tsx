import React, {FC, useEffect} from 'react';
import styled, {css} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ColorInput, {InputType} from "../components/Input";
import Button from "../components/Button";
import {useForm} from "react-hook-form";

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
  background-color: ${props => props.color || props.theme.colors.primary};
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

const RegisterPage: FC<IRegisterPageProps> = ({
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
        if (showModal){
            document.body.style.overflow = "hidden";
            if (window.innerWidth > 800) {
                document.body.style.paddingRight = `16px`;
            }
        }
        document.addEventListener('click', handleCloseModal);
        return () => {
            document.removeEventListener('click', handleCloseModal);
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [showModal]);

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm()

    const onSubmit = (data: object) => {
        const request={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }
        fetch('http://localhost:8080/auth/sign-up',request).then(response=>response.json())
    }

    return (
        <>
            <Modal show={showModal}>
                <ModalContent ref={registerModalContentRef}>
                    <LoginWrapper>
                        <CloseIcon className={'closeModalIcon'} onClick={handleRegisterClose}/>
                        <PageTitle>Регистрация</PageTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ColorInput {...register('name')} type={InputType.Text} label={'Ваше имя'} id={'name'}/>
                            <ColorInput {...register('login')} type={InputType.Text} label={'Логин'} id={'login'}/>
                            <ColorInput {...register('email')} type={InputType.Email} label={'Почта'} id={'emailReg'}/>
                            <ColorInput {...register('date')} type={InputType.Date} label={'Дата рождения'} id={'dateOfBirth'}/>
                            <ColorInput {...register('avatar')} type={InputType.File} label={'Фото профиля'} id={'avatarUrl'}/>
                            <ColorInput {...register('password')} type={InputType.Password} label={'Пароль'}
                                        id={'passwordReg'}/>

                            <ColorInput {...register('dataAgree')} type={InputType.Checkbox}
                                        label={'Согласие на обработку данных'} id={'agree'}/>

                            <Button>
                                Регистрация
                            </Button>
                        </form>
                    </LoginWrapper>
                </ModalContent>
            </Modal>
        </>
    );
};

export default RegisterPage;