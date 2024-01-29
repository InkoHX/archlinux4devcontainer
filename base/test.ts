import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE);

// Check if the required tools are installed
await container.exec("which", "starship");
await container.exec("which", "git");
await container.exec("which", "vim");
await container.exec("which", "paru");
await container.exec("which", "fish");

const execWithFish = (command: string) => container.exec("fish", "-c", command);

await execWithFish("which proto");
