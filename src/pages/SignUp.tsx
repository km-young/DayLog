import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { AiFillCloseCircle, AiFillEye, AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { LoginForm } from '../types';
import { useNavigate } from 'react-router';
const SignUp = () => {
  const navigate = useNavigate();

  // 비밀번호 눈알 아이콘 클릭 시 type 변경 할 수 있는 함수
  // 비밀번호 , 비밀번호체크랑 따로 구현했습니다.
  const [isViewPW, setIsViewPW] = useState(false);
  const [isViewCheckPW, setIsViewCheckPW] = useState(false);
  const handleClickViewPW = () => {
    setIsViewPW(!isViewPW);
  };
  const handleClickCheckPW = () => {
    setIsViewCheckPW(!isViewCheckPW);
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
              {/* <AiFillCloseCircle className="close-icon" /> */}
              <CloseIcon />
            </ItemContainer>
            <ItemContainer>
              <InputBox
                type={isViewPW ? 'text' : 'password'}
                placeholder="비밀번호"
              />
              <ViewIcon
                onClick={handleClickViewPW}
                style={{ color: isViewPW ? 'black' : '#ddd' }}
              />
            </ItemContainer>
            <ItemContainer>
              <InputBox
                type={isViewCheckPW ? 'text' : 'password'}
                placeholder="비밀번호 확인"
              />
              <ViewIcon
                onClick={handleClickCheckPW}
                style={{ color: isViewCheckPW ? 'black' : '#ddd' }}
              />
            </ItemContainer>
          </InputContainer>
          <JoinButton>등록하기</JoinButton>
        </FormTag>
        <PTag>SNS 회원가입</PTag>
        <SocialLoginButtonContainer>
          <GoogleIcon />
          <GitIcon />
        </SocialLoginButtonContainer>
        <MoveSignInButton onClick={() => navigate('/signin')}>
          이미 회원이신가요?
        </MoveSignInButton>
      </Container>
    </>
  );
};

export default SignUp;

const FormTag = styled.form``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 25.7rem;
  margin: 0 auto;
`;

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
`;

const ItemContainer = styled.div`
  position: relative;
`;

const InputBox = styled.input`
  width: 21.5rem;
  height: 2.4rem;
  padding: 0 3rem 0 1rem;
  font-size: 1rem;
  background-color: #fafafa;
  border: 1.3px solid #ddd;
  border-radius: 8px;
  &::placeholder {
    color: #d1d1d1;
  }
`;

const JoinButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 1.1rem;
  background-color: #e4e4e4;
  margin: 4rem 0 2.5rem 0;
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
`;


const MoveSignInButton = styled.button`
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

// ICON
const CloseIcon = styled(AiFillCloseCircle)`
  position: absolute;
  bottom: 7px;
  right: 20px;
  font-size: 26px;
  color: #ddd;
  cursor: pointer;
  &:hover {
    color: #d1d1d1;
  }
`;

const ViewIcon = styled(AiFillEye)`
  position: absolute;
  bottom: 5px;
  right: 18px;
  font-size: 30px;
  color: #ddd;
  cursor: pointer;
  &:hover {
    color: #d1d1d1;
  }
`;

const GoogleIcon = styled(FcGoogle)`
  font-size: 4rem;
  cursor: pointer;
`;

const GitIcon = styled(AiFillGithub)`
  font-size: 4rem;
  cursor: pointer;
`;
