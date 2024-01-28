import { $ } from 'zx'

export const createContainer = async (image: string) => {
  const containerId = await $`docker container create -it ${image}`

  await $`docker start ${containerId}`

  return {
    id: containerId,
    exec: (...args: string[]) => $`docker exec ${containerId} ${args}`,
    [Symbol.asyncDispose]: async () => {
      await $`docker rm -f ${containerId}`
    },
  }
}
