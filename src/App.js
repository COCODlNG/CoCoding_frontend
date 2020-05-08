import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MeetingListPage from "./pages/MeetingListPage";
import MeetingManagePage from "./pages/MeetingManagePage";
import MeetingPage from "./pages/MeetingPage";

function App() {
    return (
        <>
            <Route componenet={MeetingListPage} path="/" exact/>
            <Route component={LoginPage} path="/"/>
            <Route component={RegisterPage} path="/register"/>
            <Route component={MeetingManagePage} path="/manage_meeting/:meetingId"/>
            <Route component={MeetingPage} path="/meeting/:meetingId"/>
        </>
    );
}

export default App;
