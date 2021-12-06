# Splays

## Router

<br>

| Route                   | HTTP Verb | Description       |
| ----------------------- | --------- | ----------------- |
| `/`                     | GET       | Landing           |
| `/`                     | GET       | Home (isLogin?)   |
| `/auth/signup`          | POST      | Signup            |
| `/auth/login`           | POST      | Login             |
| `/auth/logout`          | GET       | Logout            |
| `/auth/:id/profile`     | GET       | user-profile      |
| `/auth/isloggedin`      | GET       | Check user login  |
| `/auth/:id/edit`        | PUT       | edit-profile      |
| `/auth/:id/delete`      | DELETE    | delete-profile    |
| `/allPlanets`           | GET       | List all planets  |
| `/planet/:id`           | GET       | Planet details    |
| `/planet/:challenge`    | GET       | Planet challenge  |
| `/challenge/ispassed`   | GET       | Challenge passed? | <!-- Ha conseguido el reto? -->
| `/challenge/:id`        | GET       | Challenge details | <!-- Detalles del reto para la ventana de Congrats -->
| `/challenge/:id/:userid`| PUT       | User award        | <!-- Mandar la insignia a la lista del usuario -->
