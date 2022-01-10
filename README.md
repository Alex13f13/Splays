# Splays

![01](https://user-images.githubusercontent.com/46814661/148819994-bcd3ecb3-2fc0-403a-91bd-912995ee3d1e.jpg)
![02](https://user-images.githubusercontent.com/46814661/148819997-8f7077af-a9c4-40e2-bdf7-2e6abcdfe650.jpg)

## URL

https://splays-app.herokuapp.com

## Router Client

<br>

| Route                                       | HTTP Verb | Description           |
| ------------------------------------------- | --------- | --------------------- |
| `/`                                         | GET       | Landing               |
| `/`                                         | GET       | Home (isLogin?)       |
| `/profile/:id`                              | GET       | User profile          |
| `/profile/:id/emblems`                      | GET       | User emblems          |
| `/profile/:id/ship`                         | GET       | User ship             | 
| `/profile/allUsers`                         | GET       | All users page        | 
| `/planet-map`                               | GET       | Map with all planets  |
| `/planet-map/:id/:challengename/challenge`  | GET       | Planet challenge      |
| `/planet-map/:id/challenge/win`             | GET       | Win challenge details |

## Router Server

<br>

| Route                              | HTTP Verb | Description        |
| ---------------------------------- | --------- | ------------------ |
| `/auth/signup`                     | POST      | Signup             |
| `/auth/login`                      | POST      | Login              |
| `/auth/logout`                     | GET       | Logout             |
| `/auth/:id/user`                   | GET       | User               |
| `/auth/isloggedin`                 | GET       | Check user login   |
| `/profile/allusers`                | GET       | Get all users      |
| `/profile/:id/user`                | GET       | Get all user ships |
| `/profile/:id/edit-profile`        | PUT       | Edit profile       |
| `/profile/:id/edit-ship`           | PUT       | Edit ship          |
| `/profile/:id/emblems`             | GET       | Get emblems        |
| `/profile/image`                   | POST      | Cloudinary image   |
| `/profile/:id/delete`              | DELETE    | Delete-profile     |
| `/planet/allplanets`               | GET       | List all planets   |
| `/planet/:id/details`              | GET       | Planet details     |
| `/planet/:planetId/:userId`        | PUT       | User award         |
