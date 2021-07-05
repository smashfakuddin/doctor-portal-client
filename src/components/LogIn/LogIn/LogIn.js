import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import LoginBg from '../../../img/loginbg.png';
import { UserContext } from './../../../App';
import firebase from 'firebase';
import "firebase/auth";
import firebaseConfig from './firebase.config';

const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email } = result.user;
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
        }).catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
      console.log(loggedInUser)
    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="form-group">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="text-danger">Forgot your password?</label>
                    </div>
                    <div className="from-group mt-4 text-center ">
                        <button className="btn custom-button w-50">Sign in</button>
                    </div>
                    <p className="text-center my-3">Or</p>
                    <div className="from-group ">
                        <button className="btn custom-button w-100 " onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={LoginBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LogIn;