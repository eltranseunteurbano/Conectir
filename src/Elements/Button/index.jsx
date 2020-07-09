import React from 'react'
import './index.scss'

import { useHistory } from 'react-router-dom'

import { GoMarkGithub } from 'react-icons/go'

import * as firebase from "firebase/app";
import Firebase from '../../constants/firebase/setup/firebase'

const Button = ({ title = 'Aquí va el titulo', type = "active", data = "default", redirect }) => {

    let history = useHistory();

    const onClickGoTo = (link) => {
        
        if (data === 'github') {
            var provider = new firebase.auth.GithubAuthProvider();
            Firebase.auth().signInWithRedirect(provider);

            Firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
              });
        }else{
            history.push(link)
        }
    }

    return (
        data === 'default' ?
            <button disabled={type === 'disabled' ? true : false}
                className={type === "active" ? "button button-active" : type === 'secundary' ? "button button-secundary" : "button"}
                onClick={() => onClickGoTo(redirect)}
            >

                {type === 'disabed' ? "" : ""} {title}
            </button>
            :
            data === 'github' ?

                <button className="button button-github" onClick={() => onClickGoTo(redirect)}>
                    <span> <GoMarkGithub title="Ingresar con GitHub" /> </span>
                    {title}
                </button>

                :

                ''
    )

}

export default Button;