import React from 'react';
import './Login.css';
// import App from '../App';
import { signInWithGoogle, sigInWithFacebook } from 'C:/Users/KastooriDasari/Desktop/signup-firebase/src/firebase.js';
const Login = (props) => {

    const {
      
        email,
        setEmail,
        password,
        setPassword,
        handlelogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        PassswordError, } = props;

    return (
        <body>
            <div className='container'>
            <section className='login'>

                <label>Email   :</label>&nbsp;
                <input id='email' className="email" type="text" OutoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p id='emailerror'className="errorMsg">{emailError}</p>
                <label>Password :</label>
                <input id='psw' type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                <p id='passerror'className="errorMsg">{PassswordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button id="btn" classname="ka" onClick={handlelogin}>Sign In</button>
                            <p>Don't have an account ?<span id='signuplink'  onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) :
                        (
                            <>
                                <button id="btn1" classname="ka" onClick={handleSignup}>Sign Up</button>
                                <p>Have an account ?<span id='signinlink' onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>
                        )}
                </div>
                <button id='btn2' onClick={signInWithGoogle} > Sign In Google</button><br />
                <button id='btn3' onClick={sigInWithFacebook} > Sign In Facebook</button>
            </section>
            </div>
        </body>
    )
}
export default Login