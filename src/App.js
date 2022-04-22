import React, { Component } from 'react';
import './App.css';
import {HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom';
import Friends from './routes/Friends';
import Profile from './routes/Profile';
import Chats from './routes/Chats';
import Chatting from './routes/Chatting';
import Find from './routes/Find';
import More from './routes/More';
import './reset.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Friends />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/chatting" element={<Chatting />} />
        <Route path="/find" element={<Find />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
