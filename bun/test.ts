import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE)
const execWithFish = (...args: string[]) => container.exec("fish", "-c", ...args)

// Show versions
await execWithFish('proto list bun')

// Show paths
await execWithFish('proto bin bun')
