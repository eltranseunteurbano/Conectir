class EventManager {

    constructor() {
        this.fLoaf = {};
    }

    getEvent(id, load, type) {
        var ty = type ? type : "only";

        if (this.fLoaf[id] === null || this.fLoaf[id] === undefined) {
            this.fLoaf[id] = {
                accion: [],
                load: false
            }
        }

        if (type !== "reload" && type !== "wait" && this.fLoaf[id].load) {
            if(load !== undefined && load !== null){
                load(this.fLoaf[id].props);
            } 
        } else {

            var action = {
                _this: action,
                load,
                exe: false,
                type: ty
            }

            this.fLoaf[id].accion.push(action);
        }
    }

    exeEvent(id, props, type) {
        var ty = type ? type : "only";

        if (this.fLoaf[id]) {
            this.fLoaf[id].props = props;
            this.fLoaf[id].load = true;
            this.fLoaf[id].accion.forEach((action) => {
                if (action.exe === false || action.type === "reload") {
                    action.exe = true;
                    action.load(this.fLoaf[id].props);
                    if (action.type === "only" || action.type === "wait") {
                        let ind = this.fLoaf[id].accion.indexOf(action._this);
                        if (ind !== -1) {
                            this.fLoaf[id].accion.splice(ind, 1);
                            action._this = null;
                        }
                    }
                }
            });
        } else {

            this.fLoaf[id] = {
                accion: [],
                load: true,
                type: ty,
                props: props
            }

        }
    }
}

export default EventManager;