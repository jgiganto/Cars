import styled from '@emotion/styled';

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${({theme: {loadingBackgroundColor}}) => loadingBackgroundColor};
`;

const FormTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
`;

const FormTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
`;

const FormTitle = styled.h4`
  font-size: smaller;
  color: black;
`;

const FormTitleNew = styled.h1`
  align-self: center;
  font-size: 2rem;
  color: black;
  margin-bottom: 1.5rem;
`;

const FormInput = styled.input`
  border-radius: 3px;
  padding: 0.4rem;
  width: 100%;
  border: 0.1rem solid
    ${({theme: {generalPrimaryColor}}) => generalPrimaryColor};
`;

const FormButtons = styled.div`
  display: flex;
`;

const FormButton = styled.button`
  width: 100px;
  height: 32px;
  border-radius: 5px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  outline: none;
  color: ${({theme: {white}}) => white};
  background: ${({theme: {purple}}) => purple};
  &:hover:enabled {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
    cursor: pointer;
    opacity: 0.9;
    background-color: ${({theme: {tableTrBGColor}}) => tableTrBGColor};
  }
  &:active:enabled {
    transform: translateY(4px);
  }
  &:disabled {
    background-color: transparent;
    color: transparent;
  }
`;

export {
  FormWrapper,
  FormTitlesWrapper,
  FormTitleWrap,
  FormTitle,
  FormTitleNew,
  FormInput,
  FormButtons,
  FormButton,
};
