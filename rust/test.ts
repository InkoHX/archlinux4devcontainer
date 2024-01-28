import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE);
const execWithFish = (...args: string[]) =>
	container.exec("fish", "-c", ...args);

await execWithFish("proto list rust");
await execWithFish("which rustup");
await execWithFish("which rustc");
await execWithFish("which cargo");
