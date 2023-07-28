import { rest } from "msw";

const handler = rest.get("/todos", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(["먹기", "자기", "놀기"]));
})

export default handler;
