import React, {FC, useEffect} from 'react';
import styled, {css} from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import ColorInput, {InputType} from "../components/Input";
import Button from "../components/Button";
import {useForm} from "react-hook-form";
import {login, registration} from "../http/userApi";
import {IUserInfo, setUserAuth, setUserData} from "../store/features/UserSlice";
import {useDispatch} from "react-redux";
import {ILoginUser} from "../types/registerUser";

interface ModalProps {
    show: boolean;
}

interface ILoginPageProps {
    modalContentRef: React.RefObject<HTMLDivElement>
    loginButtonRef: React.RefObject<HTMLDivElement>
    handleLoginClose: () => void;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;

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
  background-color: ${props => props.color || props.theme.colors.primary};
  position: relative;

  @media only screen and (max-width: 600px) {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
  }
  
`

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
                                            loginButtonRef
                                        }) => {
    const dispatch = useDispatch()
    const handleCloseModal = (event: MouseEvent) => {
        if (modalContentRef.current &&
            !modalContentRef.current.contains(event.target as Node) &&
            loginButtonRef.current &&
            !loginButtonRef.current.contains(event.target as Node)) {
            setShowModal(false);
        }
    };


    useEffect(() => {
        if (showModal){
            let modal = document.querySelector('.modal')
            if (modal)
                (modal as HTMLElement).style.height = `${window.innerHeight}px`;
            document.body.style.overflow = "hidden";
            if (window.innerWidth > 800) {
                document.body.style.paddingRight = `16px`;
            }
            window.addEventListener('resize', () => {
                if (modal) {
                    (modal as HTMLElement).style.height = `${window.innerHeight}px`;
                }
            });

        }
        document.addEventListener('click', handleCloseModal);
        return () => {
            // document.removeEventListener('resize')
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
    } = useForm<ILoginUser>()

    const onSubmit = async (data: ILoginUser) => {
        let InputData: IUserInfo | void = await login(data)
          .then(() => {
              setShowModal(false);
          });

        if (InputData) {
            dispatch(setUserData(InputData));
        }
        dispatch(setUserAuth(true))
    };

    return (
        <>
            <Modal className={'modal'} show={showModal}>
                <ModalContent ref={modalContentRef}>
                    <LoginWrapper>
                        <CloseIcon className={'closeModalIcon'} onClick={handleLoginClose}/>
                        <PageTitle>Авторизация</PageTitle>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <ColorInput {...register('login')} type={InputType.Text} label={'Login'} id={'login'}/>
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