import { Router } from "express";

const routes = Router();

routes.post("/users");
routes.get("/users", (req: any, res: any) => {
  return res.json("ola");
});
routes.get("/users/:id");
routes.get("/genders");

export default routes;
