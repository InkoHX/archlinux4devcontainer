FROM ghcr.io/inkohx/archlinux:base

ARG NODE_VERSION=20

RUN fish -c "proto install node ${NODE_VERSION} --pin=global" \
  && fish -c "proto install npm --pin=global" \
  && fish -c "proto install yarn --pin=global" \
  && fish -c "proto install pnpm --pin=global"
