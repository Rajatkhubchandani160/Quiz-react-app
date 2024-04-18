"use client"
import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Quiz from './Components/Quiz/Quiz'

const App = () => {
  const {user,loginWithRedirect,logout,isAuthenticated }=useAuth0();
  return (
    <>
    {isAuthenticated ? 
    <>
    <div id="base-container">
    <div className='box'>
    <img src={user.picture} alt={user.name} />
    </div>
    <h3>{user.name}</h3>
    <h4>{user.email}</h4>
    <div id="buttons">
    {/* <button   onClick={()=>loginWithRedirect()}>Log In</button> */}
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
    </div>
    <Quiz user={user}/>
    </>
    :
    <>
    <div id="base-container">
    <div className='box'>
        {/* <img src="#" alt="" /> */}
    </div>
    <h3>Username</h3>
    <h4>Gmail</h4>
    <div id="buttons">
    <button   onClick={()=>loginWithRedirect()}>Log In</button>
    </div>
    <h5>Its time to Test Your BGMI Skills with a MCQ's test</h5>
    <p>Login ASAP to Join Quiz!</p>
    </div>
    </>
   
    
    }
    </>
  )
}

export default App