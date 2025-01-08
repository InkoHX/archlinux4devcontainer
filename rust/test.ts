import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE);
const execWithFish = (command: string) => container.exec("fish", "-c", command);

await execWithFish("proto versions rust");
await execWithFish("which rustup");
await execWithFish("which rustc");
await execWithFish("which cargo");
