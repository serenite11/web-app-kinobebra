import React from 'react';
import styled from "styled-components";

const ProfileInfo = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 200px;
  backdrop-filter: brightness(75%);
  border-radius: 25px;
  display: grid;
  grid-template-columns: 25% 50% 1fr;
  
  @media ${props => props.theme.media.phoneAndTablet}{
    box-sizing: border-box;
    grid-template-columns: auto;
    height: auto;
    padding: 25px 10px;
  }
  
`

const UserAvatarBlock = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  & img {
    max-width: 100%;
    height: 175px;
    border-radius: 100px;
  }
`

const ProfileDetailsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ProfileDetails = styled.div`
  font-size: 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  
`

const EditProfileButton = styled.button`
  font-size: 24px;
  border-radius: 15px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  align-self: center;
  
  @media ${props => props.theme.media.phoneAndTablet}{
    background:#0000001c;
  }
  
  &:hover{
    text-shadow: 0 0 4px #fff;
  }
  
`
const ProfileInfoBlock = () => {
    return (
        <ProfileInfo>
            <UserAvatarBlock>
                <img
                    src={'https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png'}/>
            </UserAvatarBlock>
            <ProfileDetailsBlock>
                <ProfileDetails>Вадим</ProfileDetails>
                <ProfileDetails>vadim.sardarov@yandex.ru</ProfileDetails>
                <ProfileDetails>32 года</ProfileDetails>
            </ProfileDetailsBlock>
                <EditProfileButton>
                    Изменить данные
                </EditProfileButton>

        </ProfileInfo>
    );
};

export default ProfileInfoBlock;