# create-react
Se basa en un comando bash que crea, a partir de unos templates que he definido, los ficheros asociados a un component, reducer, action o saga.

## Cómo se usa
Para usarlo, simplemente deberemos abrir una terminal y escribir `create-react` seguido de dos parámetros: 

- Elemento a crear
- Nombre del elemento a crear

Así, por ejemplo:

``
create-react component Prueba
`` 

Creará un componente y todos los ficheros asociados a él llamado *Prueba*.

## Options
Como hemos dicho antes, el comando admite dos parámetros. El primero de ellos es el tipo de elemento que queremos crear (*component*, *reducer*,*action* o *saga*), y el segundo, el nombre del elemento.

  ### 1. component
---
Crea un componente dentro del directorio src/components. Los archivos asociados que crea son:

1. **Component.js**: componente react con extensión js que contiene la plantilla básica que usamos en todos los componentes.

2. **Component.css**: fichero css asociado al componente por si queremos darle formato al html.

3. **\_\_tests\_\_/Component.test.js**: fichero test del componente con extensión js dentro del directorio \_\_tests\_\_ con la plantilla de los tests que usaremos para los componentes.

Para ejecutarlo, simplemente escribimos:

- ``create-react component Prueba`` 

### 2. reducer
---
Crea un reducer dentro del directorio src/reducers. Los archivos que se generan son:

1. **nombre.reducer.js**: reducer del componente que contiene la plantilla de un reducer react básico.

2. **\_\_tests\_\_/reducer.test.js**: fichero test del reducer con extensión js creado dentro del directorio \_\_tests\_\_ que contiene la plantilla básica para testear los reducers. 

3. **index.js**: fichero con extensión js mediante el cual exportaremos la función principal del reducer. Si ya existe el fichero, añade el import y el export del reducer.

Para crear el reducer, simplemente escribimos:

- ``create-react reducer Prueba`` 

### 3. action
---
De igual forma que los dos anteriores, crea un action dentro del directorio src/actions con los siguientes archivos:

1. **nombre.action.js**: acción del componente que contiene la plantilla de un action de react básico, aunque probablemente no tengamos ni que tocarlo.

2. **\_\_tests\_\_/actiontest.js**: fichero test del action con extensión js creado dentro del directorio \_\_tests\_\_ que contiene la plantilla básica para testear los actions. 

3. **index.js**: fichero con extensión js mediante el cual exportaremos nuestro action. Si ya existe el fichero, añade el export del action.

Para ejecutarlo, simplemente escribimos:

- ``create-react action Prueba`` 

### 4. saga
---

## Cómo instalarlo

1. Descargar el proyecto del repositorio: https://github.com/SergioFdezRc/create-react
2. Dar permisos de ejecución al fichero create-react con el comando `chmod +x create-react`
3. *(**Opcional**) Cambiar el nombre del directorio por .create-react*.
4. Crear un enlace  simbólico del fichero create-react en el directorio `usr/bin` con el comando `sudo ln -s /directory/to/file/create-react /usr/bin/create-react`

Haciendo esto, ya podremos ejecutar el comando libremente desde cualquier path.

## Vídeo de ejecución

- **Vídeo de ejemplo**: [create-react-example](https://trello-attachments.s3.amazonaws.com/5c8a6203ee30b85fca1bf242/5e09e0781d582512c3c23330/cccd2bc0440adc9a013e0b560a553b5b/create-react-example.mp4)
