import styled from 'styled-components';

export const FormWrap = styled.div`
  & > input[type=email] {
    border: none;
    padding: 15px;
    width: 100%;
    font-family: 'Varela Round', sans-serif;
    font-size: 16px;
    outline: none;
    border-radius: 3px;
  }

  & > button {
    border: none;
    margin-top: 25px;
    padding: 10px;
    font-family: 'Fredoka One', sans-serif;
    font-weight: normal;
    font-size: 20px;
    outline: none;
    border-radius: 3px;
    background-color: ${props => props.theme.colors.mainPurple};
    color: white;

    :hover {
      cursor: pointer;
      position: relative;
      top: -2px;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,1);
    }

    :active {
      position: relative;
      top: 2px;
      box-shadow: none;
    }

    :disabled {
      opacity: 0.5;
    }
  }
`;