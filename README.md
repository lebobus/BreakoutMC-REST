# BreakoutMC-REST
Easy to use REST API for BreakoutMC using nodejs.


## API Reference

#### Get all users.

| Method | End point | Parameter | Returns                |
| :----- | :-------- | :-------  | :------------------------- |
| `GET`  | `/users`  | `none`    | JSON list of all users. |

#### Get user by UUID.

| Method | End point       | Parameter | Returns                |
| :----- | :-------------- | :-------  | :------------------------- |
| `GET`  | `/users/:uuid`  | `UUID`    | JSON list of selected user. |

  