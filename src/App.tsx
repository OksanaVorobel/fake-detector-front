import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import {store} from "./stories/store";
import HomePage from './pages/Home/HomePage'
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";
import DetectImagePage from "./pages/DetectImage/DetectImagePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/detect" element={<DetectImagePage/>}/>
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
