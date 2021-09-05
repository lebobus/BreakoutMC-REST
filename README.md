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


## License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
