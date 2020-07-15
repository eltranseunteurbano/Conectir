import * as firebase from "firebase/app";

import Database, { routes_database } from "../database/database";
import Firebase from "../setup/firebase";
import EventManager from "../../helpers/EventManager";


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

        this.getUserChangeLocal(() => { })
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
                    } else {
                        var userS = userState.val();
                        this.updateUser(userS);
                        this.updateAccountType(userS.accountType);
                    }


                    var url2 = routes_database.user + "/" + user.uid + "/information";
                    Database.evalueteRouteExist(url2, (exist2) => {
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

            this.auth.createUserWithEmailAndPassword(email, pass).then((userdata) => {
              

                let url = routes_database.user + "/" + userdata.user.uid;
                var user = {
                    uid: userdata.user.uid, email, accountType
                }
                Database.writeDatabase(url, user, () => {
                    this.updateUser(user);
                    this.updateAccountType(accountType);
                    load && load();
                });

            }).catch((error) => {
                console.log(error);
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