import styled, { createGlobalStyle, keyframes } from 'styled-components';

import logo from './logo.svg';

import './App.css';

const App = () => {

  return (
    <AppWrapper>
      <GlobalBackgroundStyle/>
      <AppHeader>
        <AppLogo src={logo} alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AppLink
            href="https://pl.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </AppLink>
      </AppHeader>
      <Button>Button</Button>
      <TomatoButton as="a">TomatoButton</TomatoButton>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    && {
      background-color: ${({color}) => color ? color : '#333333'};
    }
`;

const GlobalBackgroundStyle = createGlobalStyle`
  header${AppHeader} {
    background-color: #000077;
    color: red;
  }
`;

const appLogoSpin = keyframes`
  form {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: ${appLogoSpin} infinite 20s linear;
    }
`;

const AppLink = styled.a`
    color: #61dafb;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: yellow;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

export default App;
