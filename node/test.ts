import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE);
const execWithFish = (command: string) => container.exec("fish", "-c", command);

// Show versions
await execWithFish("proto versions node");
await execWithFish("proto versions npm");
await execWithFish("proto versions pnpm");
await execWithFish("proto versions yarn");

// Show paths
await execWithFish("proto bin node");
await execWithFish("proto bin npm");
await execWithFish("proto bin pnpm");
await execWithFish("proto bin yarn");
