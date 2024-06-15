import express, { Request, Response, NextFunction} from "express";
import {ExpressError, NotFoundError } from "./expressError.js";

const app = express();
app.use(express.json());

import { User } from "./models/user";
import { myDataSource } from "./db/data-source";
myDataSource.initialize();

/***************************************************************** Data Mapper */
// register routes
app.get("/users", async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(User).find()
  res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(User).findOneBy({
      id: +req.params.id,
  })
  return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
  const user = myDataSource.getRepository(User).create(req.body)

  const results = await myDataSource.getRepository(User).save(user)
  return res.send(results)
})

app.put("/users/:id", async function (req: Request, res: Response) {
  const user = await myDataSource.getRepository(User).findOneBy({
      id: +req.params.id,
  })
  if (!user) throw Error
  myDataSource.getRepository(User).merge(user, req.body)

  const results = await myDataSource.getRepository(User).save(user)
  return res.send(results)
})

app.delete("/users/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(User).delete(req.params.id)
  return res.send(results)
})


app.get("/", async function (req: Request, res: Response) {

  return res.send({"msg": "Hi"})
})


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError();
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err: ExpressError, req: Request, res: Response, next: NextFunction) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);

  const status = err?.status ?? 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

export default app;