import { rest } from "msw";

const handler = rest.get("/", (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ main: true }));
});

export default handler;
