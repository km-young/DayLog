import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillCloseCircle, AiFillEye, AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router';

const SignIn = () => {
  const navigate = useNavigate();

  // 비밀번호 눈알 아이콘 클릭 시 type 변경 할 수 있는 함수
  const [isViewIconClick, setIsViewIconClick] = useState(false);
  const handleClickViewIcon = () => {
    setIsViewIconClick(!isViewIconClick);
  };
  return (
    <>
      <Container>
        <InfoBox>
          <InfoText>당신 곁의 개인 비서</InfoText>
          <InfoText>Daylog</InfoText>
        </InfoBox>
        <FormTag>
          <InputContainer>
            <ItemContainer>
              <InputBox type="email" placeholder="이메일" />
              <AiFillCloseCircle className="close-icon" />
            </ItemContainer>
            <ItemContainer>
              <InputBox
                type={isViewIconClick ? 'text' : 'password'}
                placeholder="비밀번호"
              />
              <AiFillEye
                className="view-icon"
                onClick={handleClickViewIcon}
                style={{ color: isViewIconClick ? 'black' : '#ddd' }}
              />
            </ItemContainer>
            <PwLossButtonContainer>
              <PwLossButton>비밀번호를 잊으셨나요?</PwLossButton>
            </PwLossButtonContainer>
          </InputContainer>
          <LoginButton>계속하기</LoginButton>
        </FormTag>
        <PTag>SNS 로그인</PTag>
        <SocialLoginButtonContainer>
          <FcGoogle className="social-login-icons" />
          <AiFillGithub className="social-login-icons" />
        </SocialLoginButtonContainer>
        <MoveSignUpButton onClick={() => navigate('/signup')}>
          아직 회원이 아니신가요?
        </MoveSignUpButton>
      </Container>
    </>
  );
}

export default SignIn

const FormTag = styled.form``;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 25.7rem;
  margin: 0 auto;
`

const InfoBox = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  padding: 0.2rem 0;
`;

const InfoText = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin: 1rem;
  color: #878787;
  cursor: default;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 6.2rem 0 0 0;
`

const ItemContainer = styled.div`
  position: relative;
  .close-icon {
    position: absolute;
    bottom: 7px;
    right: 20px;
    font-size: 26px;
    color: #ddd;
    cursor: pointer;
  }
  .close-icon:hover {
    color: #d1d1d1;
  }
  .view-icon {
    position: absolute;
    bottom: 5px;
    right: 18px;
    font-size: 30px;
    color: #ddd;
    cursor: pointer;
  }
  .view-icon:hover {
    color: #d1d1d1;
  }
`;

const InputBox = styled.input`
  width: 21.5rem;
  height: 2.4rem;
  padding: 0 3rem 0 1rem;
  font-size: 1rem;
  background-color: #fafafa;
  border: 1.3px solid #ddd;
  border-radius: 8px;
  &::placeholder{
    color: #d1d1d1;
  }
`;

const PwLossButton = styled.button`
  border: none;
  background-color: white;
  color: #bbbbbb;
  padding: 0;
  cursor: pointer;
  &:hover{
    color: blue;
  }
`;

const PwLossButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 23.5rem;
`

const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1.1rem;
  background-color: #e4e4e4;
  margin: 2rem 0 2.5rem 0;
  cursor: pointer;
  &:hover {
    background-color: #e1e1e1;
  }
`;

const PTag = styled.p`
  font-size: 0.8rem;
  color: #bbbbbb;
`;

const SocialLoginButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  .social-login-icons {
    font-size: 4rem;
    cursor: pointer;
  }
`;

const MoveSignUpButton = styled.button`
  border: none;
  background-color: white;
  color: #bbbbbb;
  padding: 0;
  margin-top: 3rem;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;