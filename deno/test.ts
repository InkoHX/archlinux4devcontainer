import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE);
const execWithFish = (command: string) =>
	container.exec("fish", "-c", command);

// Show versions
await execWithFish("proto list deno");

// Show paths
await execWithFish("proto bin deno");
