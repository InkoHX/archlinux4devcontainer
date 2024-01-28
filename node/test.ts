import { createContainer } from "../test_lib/docker";
import { env } from "../test_lib/env";

await using container = await createContainer(env.DOCKER_IMAGE)
const execWithFish = (...args: string[]) => container.exec("fish", "-c", ...args)

// Show versions
await execWithFish('proto list node')
await execWithFish('proto list npm')
await execWithFish('proto list pnpm')
await execWithFish('proto list yarn')

// Show paths
await execWithFish('proto bin node')
await execWithFish('proto bin npm')
await execWithFish('proto bin pnpm')
await execWithFish('proto bin yarn')
