import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { toast, ToastContainer} from "react-toastify"
import GlobalStyle from './styles/global';
import "react-toastify/dist/ReactToastfy.css";


function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
