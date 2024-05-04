# 🎶 Desafío Latam - Mi Repertorio 🎵

¡Bienvenido al Desafío Latam - Mi Repertorio! Este proyecto forma parte de un desafío diseñado para poner a prueba tus habilidades en el desarrollo de servidores con Express conectados a PostgreSQL, implementando operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## Descripción

La escuela de música “E-Sueño” está promoviendo presentaciones en vivo de sus estudiantes de canto. Para gestionar las canciones que interpretarán, la escuela ha contratado a un desarrollador freelance para crear una aplicación tipo CRUD. Tu tarea es desarrollar un servidor con Express que se conecte a PostgreSQL utilizando el paquete pg y que utilice funciones asíncronas para interactuar con la base de datos.

## 🚀 Rutas Disponibles

- **POST /cancion**: Recibe los datos de una canción y realiza la inserción en la tabla de canciones.
- **GET /canciones**: Devuelve un JSON con los registros de la tabla de canciones.
- **PUT /cancion**: Recibe los datos de una canción que se desea editar y actualiza el registro correspondiente en la tabla de canciones.
- **DELETE /cancion**: Recibe el ID de una canción por queryString y elimina el registro correspondiente de la tabla de canciones.

## Referencia

Tienes a disposición un Apoyo Desafío - Mi Repertorio con la aplicación cliente que se muestra en la siguiente imagen, lista para el consumo de estas rutas, por lo que deberás enfocarte solo en el desarrollo backend

![image](https://github.com/jwoodleybolivard/Desafio_Mi_Repertorio/assets/125617339/09610495-2a7b-4d01-ba5b-4834fe224a1a)


## Requerimientos

1. **POST /cancion**: Crea una ruta que reciba los datos de una canción y los inserte en la tabla de canciones de manera asíncrona.
   - Puntuación: 3 Puntos

2. **GET /canciones**: Crea una ruta que devuelva un JSON con todos los registros de la tabla de canciones.
   - Puntuación: 2 Puntos

3. **PUT /cancion**: Crea una ruta que reciba los datos de una canción a editar y actualice el registro correspondiente en la tabla de canciones de manera asíncrona.
   - Puntuación: 3 Puntos

4. **DELETE /cancion**: Crea una ruta que reciba el ID de una canción por queryString y elimine el registro correspondiente de la tabla de canciones de manera asíncrona.
   - Puntuación: 2 Puntos

## Instrucciones Adicionales

- Utiliza el archivo de soporte proporcionado por Desafío Latam para la aplicación cliente.
- Si lo prefieres, puedes crear tu propia interfaz siempre y cuando cumpla con los requisitos del desafío.
- Utiliza las consultas SQL proporcionadas para crear la base de datos y la tabla de canciones.

## Autor ✒️
- **Jean Woodley Bolivard** - [Jean Woodley Bolivard](https://github.com/jwoodleybolivard)

¡éxito! 💪✨
