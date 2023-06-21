import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutComponentTwo from "./component/customHook/LayoutComponentTwo";
import Home from "./component/Home";
import Error from './component/Error';
import NavBar from './component/NavBar';
// import NavBar from './component/NavBar';



export default function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layout-component-two" element={<LayoutComponentTwo />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

