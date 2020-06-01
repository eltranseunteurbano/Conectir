# Pasos para ejecutar el proyecto
1. Instalar las dependencias y las dependecias de desarrollo con el siguiente comando

    ``` 
    $ npm install 
    ``` 
   
2. Correr el proyecto con el siguiente comando
    ``` 
    $ npm run start 
    ```
    

# Comandos

### Start
Este comando ejecuta el proyecto en modo desarrollo. El proyecto corre en el puerto 8080
``` 
$ npm run build
```

### Build
Este comando construye el proyecto optimizado para producción y genera la carpeta **"build"**
``` 
$ npm run build
```

#
#
***
#
#
# Estilos

### Colores
Los colores están almacenados en el archivo **styleTitle.css** que está en la ruta `src/assets/styles` y son los siguientes:
        
- --color-blue: **#389CFF**;
- --color-black: **#000000**;
- --color-white: **#ffffff**;
- --color-gray-light: **#F2F2F2**;
- --color-gray-dark: **#A1A1A1**;
- --main-color: **var(--color-blue)**;
- --color-blue-hover: **rgb(37, 114, 192)**;
- --main-color-hover: **var(--color-blue-hover)**;

### Fuentes
Las fuentes, tamaños y estilos están almacenados en el archivo **styleTitle.css** que está en la ruta `src/assets/styles` y son los siguientes:

##### Fuente

La fuente es Rubik Font, y es parte de la colección de fuentes de Google 
https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap

##### Tamaños
Dentro del proyecto se están manejando 4 tamaños
- --h1-size: **32px**;
- --h2-size: **20px**;
- --h3-size: **18px**;
- --regular-size: **18px**;

#### Estilos
Se están manejando 3 estilos diferentes:

- --h1-weight: **700**;  /* Bold */
- --h2-weight: **700**; /* Bold */
- --h3-weight: **700**; /* Bold */
- --medium-weight: **500**; /* Medium */
- --regular-weight: **400**; /* Regular */