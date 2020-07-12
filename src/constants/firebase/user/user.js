import * as firebase from "firebase/app";

import Database, { routes_database } from "../database/database";
import Firebase from "../setup/firebase";


class user_firebase {

    constructor() {

        this.uid = "";
        //@correo electronico
        this.email = "";
        //Estudiante || Donador
        this.type = ""
        this.information = {
            name: "",
            lastName: "",
            email: ""
        }
        this.accept = false;

        this.auth = Firebase.auth();

        this.getUserChangeLocal(() => { })
    }

    loginGithup() {
        var provider = new firebase.auth.GithubAuthProvider();
        Firebase.auth().signInWithRedirect(provider);
    }

    getUserGithup(load) {
        Firebase.auth().getRedirectResult().then(({ user }) => {
            console.log(user)
            if (user) {
                this.createUserDatabase(user.uid, user.email);
            }
            load(user)
        });
    }


    login(user, password, load) {
        this.auth.signInWithEmailAndPassword(user, password).then(() => {
            load();
        });
    }

    register(user, password, load) {
        this.auth.createUserWithEmailAndPassword(user, password).then((result) => {
            if (result.user) {
                //  var uid = result.user.uid;
                load(result);
            }
        }).catch((error) => {
            throw new Error(error.message);
        })
    }

    logout(load) {
        this.auth.signOut().then(() => {
            load(true);
        }).catch(function (error) {
            load(false)
        });
    }

    getUserChangeLocal(load) {
        if (this.userFirebase == null) {
            Firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // User is signed in.
                    this.updateUser({ uid: user.uid, email: user.email });
                    load && load(true);

                } else {
                    // No user is signed in.
                    load && load(false);
                }
            });
        }
    }


    createUserDatabase(uid, email) {

        let url = routes_database.user + "/" + uid;
        var user = {
            uid, email
        }
        Database.writeDatabase(url, user, () => {
            User.updateUser(user);
        });

    }



    createInformation(name, lastName, role, accept) {

        if (this.uid != "") {
            let url = routes_database.user + "/" + this.uid + "/information";
            let information = {
                name, lastName, role, accept
            };

            Database.writeDatabase(url, information)

        }
    }

    updateUser(user) {
        let { uid, email } = user;

        this.uid = uid;
        this.email = email;
    }


}

var User = new user_firebase();

export default User;