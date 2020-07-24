import React from 'react';

const StepContext = React.createContext({
    steps: [
        {
            orden: "1",
            description: "Características de mi equipo",
            action: "Comenzar",
        },
        {
            orden: "2",
            description: "Protege tu computador",
            action: "Proteger mi equipo",
        },
        {
            orden: "3",
            description: "Agenda la validación de tu computador",
            action: "Agendar",
        },
        {
            orden: "4",
            description: "¡Estás listo! Ya puedes compartir tu equipo",
            action: "Compartir",
        }
    ]
});
export default StepContext;