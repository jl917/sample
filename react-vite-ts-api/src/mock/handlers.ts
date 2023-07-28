import { RequestHandler } from "msw";

const pages = import.meta.glob("./api/*.ts");

export const handlers: RequestHandler[] = [];

const modules = Object.values(pages);

for (let i = 0; i < modules.length; i++) {
  handlers.push((await modules[i]()).default)
}
