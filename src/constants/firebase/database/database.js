import Firebase from "../setup/firebase";

class database_firebase {

    constructor() {
        this.db = Firebase.database();
    }

    inicializate() {


    }

    evalueteRouteExist(id, load) {
        this.db.ref(id).once("value", snapshot => {
            var value = undefined;
            var exist = false;
            if (snapshot.exists()) {
                value = snapshot;
                exist = true;
            }
            load(exist, value);
        });
    }

    evalueteRouteExistMin(id, val, load) {
        this.db.ref(id).once("value", snapshot => {
            var value = undefined;
            var exist = false;
            var key = snapshot.key || "";

            if (snapshot.exists()) {

                if (key === "") {
                    value = snapshot;
                    exist = true;
                } else if (key !== "") {
                    if (key.toLowerCase() === val.toLowerCase()) {
                        value = snapshot;
                        exist = true;
                    }
                }
            } else {

            }
            load(exist, value);
        });
    }

    readBrachOnlyDatabase(ruta, load) {
        var refDataBase = this.db.ref(ruta);
        refDataBase.once('value', (snapshots) => {
            load(snapshots);
        });
    }

    readBrachDatabase(ruta, load) {
        var refDataBase = this.db.ref(ruta);
        refDataBase.on('value', (snapshots) => {
            load(snapshots);
        });
    }

    readBrachDatabaseFilter(ruta, filter, value, load) {
        var refDataBase = this.db.ref(ruta);
        refDataBase.orderByChild(filter).equalTo(value).on('value', (snapshots) => {
            load(snapshots);
        });
    }

    readBrachDatabaseLimitChildN(ruta, limit, load) {
        var refDataBase = this.db.ref(ruta);
        refDataBase.limitToFirst(limit).on('value', (snapshots) => {
            load(snapshots);
        });
    }

    readBrachDatabaseLimitChildNOnly(ruta, limit, load) {
        var refDataBase = this.db.ref(ruta);
        refDataBase.limitToFirst(limit).once('value', (snapshots) => {
            load(snapshots);
        });
    }

    updateDatabase(url, objeto, load) {
        this.db.ref(url).update(objeto, () => {
            load && load(objeto);
        });
    }

    writeDatabase(url, objeto, load) {
        this.db.ref(url).set(objeto, () => {
            load && load(objeto);
        });
    }


    generateUID(url) {
        return this.db.ref(url).push().key || "";
    }

    writeDatabasePush(url, objeto, load) {
        let UID = this.db.ref(url).push().key || "";
        objeto.UID = UID;
        var resultObject = JSON.parse(JSON.stringify(objeto));

        if (UID !== "") {
            this.writeDatabase(`${url}/${UID}`, resultObject, load);
        }
    }

    writeDatabasePushWithOutUID(url, objeto, load) {
        var resultObject = JSON.parse(JSON.stringify(objeto));
        this.db.ref(url).push(resultObject, load);
    }
}

var Database = new database_firebase();

export default Database;

export var routes_database = {
    user: "app/users",
    solicitud: "app/solicitud"
}

