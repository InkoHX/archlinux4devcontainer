import { type } from "arktype";

export const schema = type({
  DOCKER_IMAGE: "string",
});

export const env = schema.assert(Bun.env);
