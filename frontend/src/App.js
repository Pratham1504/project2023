import React from 'react';
import {BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';

// pages
import Home from './Pages/HomePage/Home'
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/Signup';
import Board from './Pages/Board/board';
import ERROR from './Pages/ERROR/ERROR';
import Landing from './Pages/LandingPage/Landing'
import OrgDetails from './Pages/OrgDeatils/OrgDetails';
import Project from './Pages/ProjectPage/Project';
import ProfilePage from './Pages/profile/profilePage';



function  App  () {
    const user = localStorage.getItem('user');
    console.log("Check here")
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route
                    exact path="/"
                    element={user ? <Landing/> : <Navigate to='/login'/> }
                />
                <Route
                    exact path='/login'
                    element={user ? <Navigate to='/'/> : <Login/>}
                />
                <Route
                    exact path='/signUp'
                    element={user ? <Navigate to ='/'/> : <SignUp/>}
                />
                <Route
                    exact path='/task'
                    element={user ? <Board/>: <Navigate to='/login'/>}
                />
                <Route
                    exact path='/projects'
                    element={user ? <Project/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/orgdetails'
                    element={user ? <OrgDetails/>:<Navigate to='/login'/>}
                    />
                <Route
                    exact path='/home'
                    element={user ? <Home/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/*'
                    element={user ? <Navigate to = '/error'/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/error'
                    element={user ? <ERROR/>:<Navigate to='/login'/>}
                />
                <Route
                    exact path='/profile'
                    element={user ? <ProfilePage/>:<Navigate to='/login'/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  );
            }
export default App;
