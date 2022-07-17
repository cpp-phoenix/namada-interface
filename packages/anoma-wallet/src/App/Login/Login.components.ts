import styled from "styled-components/macro";

export const LoginViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 80%;
  margin: 40px 0;
  padding: 20px 0;
  color: ${(props) => props.theme.colors.titleColor};

  & > label {
    width: 100%;

    & > div > input {
      width: 100%;
    }
  }
`;
