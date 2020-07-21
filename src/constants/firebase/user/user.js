import * as firebase from "firebase/app";

import Database, { routes_database } from "../database/database";
import Firebase from "../setup/firebase";
import EventManager from "../../helpers/EventManager";
import { errorAlert } from "../../../assets/js/Alerts";

class user_firebase {

    constructor() {

        this.uid = "";
        //@correo electronico
        this.email = "";
        //Local || githup
        this.accountType = ""
        this.information = {
            name: "",
            lastName: "",
            //Estudiante || Donador
            role: "",
            accept: false
        }
        this.event = new EventManager();

        this.auth = Firebase.auth();

        this.getUserChangeLocal(() => {

        })
    }

    loginGithup() {
        var provider = new firebase.auth.GithubAuthProvider();
        Firebase.auth().signInWithRedirect(provider);
    }

    getUserGithup(load) {
        Firebase.auth().getRedirectResult().then(({ user }) => {

            if (user) {
                var url = routes_database.user + "/" + user.uid;
                Database.evalueteRouteExist(url, (exist, userState) => {
                    if (!exist) {
                        this.createUserDatabase(user.uid, user.email, "githup");

                        if (user) {
                            //  var uid = result.user.uid;
                            user.sendEmailVerification();
                        }
                    } else {
                        var userS = userState.val();
                        this.updateUser(userS);
                        this.updateAccountType(userS.accountType);
                    }


                    var url2 = routes_database.user + "/" + user.uid + "/information";
                    Database.evalueteRouteExist(url2, (exist2) => {
                        this.getUserChangeLocal();
                        load(user, exist2);
                    });

                })
            } else {
                load(user, false)
            }

        });
    }


    login(user, password, load) {
        this.auth.signInWithEmailAndPassword(user, password).then(() => {
            load && load();
        }).catch((error) => {
            console.error(error.message);
            if (error.code === 'auth/invalid-email') {
                errorAlert('Tienes un error en tu correo electrónico. Intentalo nuevamente.');
            } else if (error.code === 'auth/user-not-found') {
                errorAlert('No hay un usuario registrado con este correo electrónico.');
            } else if (error.code === 'auth/wrong-password') {
                errorAlert('Tu correo electrónico o contraseña estan equivocados.');
            }
        });;
    }

    register(user, password) {


        return this.auth.createUserWithEmailAndPassword(user, password);



    }

    logout(load) {
        this.auth.signOut().then(() => {
            this.updateUser({ email: "", uid: "" });
            this.updateAccountType("");
            this.updateInformation({
                name: "",
                lastName: "",
                role: "",
                accept: false
            });
            load && load(true);
        }).catch(function (error) {
            load && load(false)
        });
    }

    getUserChangeLocal(load) {
        if (this.userFirebase == null) {
            Firebase.auth().onAuthStateChanged((user) => {


                if (user) {
                    // User is signed in.

                    this.updateUser({ uid: user.uid, email: user.email });
                    this.event.exeEvent("updateUser");


                    var url3 = routes_database.user + "/" + this.uid + "/accountType";
                    Database.readBrachOnlyDatabase(url3, (snap) => {
                        var type = snap.val();
                        if (type) {
                            this.updateAccountType(type)

                        }
                    })

                    var url = routes_database.user + "/" + this.uid + "/information";
                    Database.evalueteRouteExist(url, (exist, snap) => {
                        if (exist) {
                            var info = snap.val();
                            this.updateInformation(info);
                            this.event.exeEvent("updateInformation");
                        }
                    });

                    load && load(true);

                } else {
                    // No user is signed in.
                    load && load(false);
                }
            });
        }
    }


    createUserDatabase(uid, email, accountType, pass, load) {

        if (uid === null) {



            this.register(email, pass).then((userdata) => {


                let url = routes_database.user + "/" + userdata.user.uid;
                var user = {
                    uid: userdata.user.uid, email, accountType
                }
                Database.writeDatabase(url, user, () => {
                    this.updateUser(user);
                    this.updateAccountType(accountType);

                    if (userdata.user) {
                        //  var uid = result.user.uid;
                        userdata.user.sendEmailVerification();
                        load && load(userdata);
                    }
                });



            }).catch((error) => {
                console.error(error.message);
                if (error.code === 'auth/invalid-email') {
                    errorAlert('Tienes un error en tu correo electrónico. Intentalo nuevamente.');
                } else if (error.code === 'auth/user-not-found') {
                    errorAlert('No hay un usuario registrado con este correo electrónico.');
                } else if (error.code === 'auth/wrong-password') {
                    errorAlert('Tu correo electrónico o contraseña estan equivocados.');
                }
            });



        } else {

            let url = routes_database.user + "/" + uid;
            var user = {
                uid, email, accountType
            }
            Database.writeDatabase(url, user, () => {
                this.updateUser(user);
                this.updateAccountType(accountType);

            });

        }



    }



    createInformation(name, lastName, role, accept) {

        if (this.uid !== "") {
            let url = routes_database.user + "/" + this.uid + "/information";
            let information = {
                name, lastName, role, accept
            };

            Database.writeDatabase(url, information, () => {
                this.updateInformation(information);
            })

        }
    }

    updateAccountType(type) {
        this.accountType = type;
        this.event.exeEvent("updateType");
    }

    updateUser(user) {
        let { uid, email } = user;

        this.uid = uid;
        this.email = email;
        this.event.exeEvent("updateUser");
    }

    updateInformation(information) {
        this.information.name = information.name;
        this.information.lastName = information.lastName;
        this.information.role = information.role;
        this.information.accept = information.accept;
        this.event.exeEvent("updateInformation");
    }


}

var User = new user_firebase();

export default User;