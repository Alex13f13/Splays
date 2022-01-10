# Splays

![01](https://user-images.githubusercontent.com/46814661/148819994-bcd3ecb3-2fc0-403a-91bd-912995ee3d1e.jpg)
![02](https://user-images.githubusercontent.com/46814661/148819997-8f7077af-a9c4-40e2-bdf7-2e6abcdfe650.jpg)

![04](https://user-images.githubusercontent.com/46814661/148821946-30a6ecda-3156-41cb-bca1-117f3817a435.jpg)
![05](https://user-images.githubusercontent.com/46814661/148821958-099eec5d-cdc2-4f14-8910-612d43cac6bc.jpg)
![06](https://user-images.githubusercontent.com/46814661/148821987-475dbb10-1197-4fc6-b0fe-7775d24573cf.jpg)

![08](https://user-images.githubusercontent.com/46814661/148822000-a2327cbf-f983-49ac-8f4a-fec7e43fd18c.jpg)
![09](https://user-images.githubusercontent.com/46814661/148822010-c928714f-dd2e-4b19-a7dd-a9306c74d197.jpg)
![10](https://user-images.githubusercontent.com/46814661/148822018-012717ee-ec97-4462-b258-baf1d75bb961.jpg)

![12](https://user-images.githubusercontent.com/46814661/148822026-2a4109d5-d6e5-44ad-b582-ecafedcfe9af.jpg)
![13](https://user-images.githubusercontent.com/46814661/148822046-442830c1-536b-4463-8cd0-bcde67364c9f.jpg)
![14](https://user-images.githubusercontent.com/46814661/148822058-1f6af1bb-8beb-421a-bf15-c7c649d3d6d1.jpg)

![16](https://user-images.githubusercontent.com/46814661/148822071-910644bc-f8bb-442b-9a4d-6b8cce354cd2.jpg)

![19](https://user-images.githubusercontent.com/46814661/148822106-6d156834-3857-4d69-83f8-91dc895d73ac.jpg)
![20_LINK_AL_TRAILER_O_INCRUSTAR](https://user-images.githubusercontent.com/46814661/148822133-8aba2778-cb51-472c-913c-0509bd7f8864.jpg)
![21](https://user-images.githubusercontent.com/46814661/148822168-676f4217-c9e2-470e-8f1e-213ca541321d.jpg)
![22](https://user-images.githubusercontent.com/46814661/148822173-938d6f32-5d21-49f1-9d2c-24a2e51cf0ec.jpg)
![23](https://user-images.githubusercontent.com/46814661/148822178-9262bcc4-b306-44fa-9088-aeeb09651e72.jpg)

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
