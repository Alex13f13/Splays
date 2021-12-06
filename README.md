# Splays

## Router

<br>

| Route                              | HTTP Verb | Description       |
| ---------------------------------- | --------- | ----------------- |
| `/`                                | GET       | Landing           |
| `/`                                | GET       | Home (isLogin?)   |
| `/auth/signup`                     | POST      | Signup            |
| `/auth/login`                      | POST      | Login             |
| `/auth/logout`                     | GET       | Logout            |
| `/auth/:id/profile`                | GET       | user-profile      |
| `/auth/isloggedin`                 | GET       | Check user login  | <!-- services -->
| `/auth/:id/edit`                   | PUT       | edit-profile      |
| `/auth/:id/emblems`                | GET       | User emblems      | 
| `/auth/:id/delete`                 | DELETE    | delete-profile    |
| `/planet/allPlanets`               | GET       | List all planets  |
| `/planet/:id/details`              | GET       | Planet details    |
| `/planet/:id/challenge/ispassed`   | GET       | Challenge passed? | <!-- services -->
| `/planet/:id/challenge`            | GET       | Planet challenge  |
| `/planet/:id/win`                  | GET       | Challenge passed  |
| `/planet/:id/:userid`              | PUT       | User award        | <!-- Mandar la insignia a la lista del usuario -->
