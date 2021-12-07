# Splays

## Router Client

<br>

| Route                              | HTTP Verb | Description           |
| ---------------------------------- | --------- | --------------------- |
| `/`                                | GET       | Landing               |
| `/`                                | GET       | Home (isLogin?)       |
| `/profile/:id`                     | GET       | User profile          |
| `/profile/:id/emblems`             | GET       | User emblems          |
| `/profile/:id/ship`                | GET       | User ship             | 
| `/planet-map`                      | GET       | Map with all planets  |
| `/planet-map/:id/challenge`        | GET       | Planet challenge      |
| `/planet-map/:id/challenge/win`    | GET       | Win challenge details |

## Router Server

<br>

| Route                              | HTTP Verb | Description       |
| ---------------------------------- | --------- | ----------------- |
| `/`                                | GET       | Home              |
| `/auth/signup`                     | POST      | Signup            |
| `/auth/login`                      | POST      | Login             |
| `/auth/logout`                     | GET       | Logout            |
| `/auth/:id/user`                   | GET       | User              |
| `/auth/isloggedin`                 | GET       | Check user login  |
| `/auth/:id/edit-profile`           | PUT       | Edit profile      |
| `/auth/:id/edit-ship`              | PUT       | Edit ship         |
| `/auth/:id/delete`                 | DELETE    | delete-profile    |
| `/planet/allplanets`               | GET       | List all planets  |
| `/planet/:id/details`              | GET       | Planet details    |
| `/planet/:planetId/:userId`        | PUT       | User award        |
