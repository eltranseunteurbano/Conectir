import React from 'react'

const SplashScreen = () => {

    const style = {
        backgroundColor: "#ffffff",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }

    return(
        <section style={style}>
            <img src={process.env.PUBLIC_URL + 'Images/LogoHorizontal.svg'} alt="Logo" />
            <h1> Cargando... </h1>
        </section>
    )
    
}

export default SplashScreen;