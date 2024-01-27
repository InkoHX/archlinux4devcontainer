FROM ghcr.io/inkohx/archlinux:base

ARG NODE_VERSION=20

RUN fish -c "proto install node ${NODE_VERSION} --pin" \
  && fish -c "proto install yarn --pin" \
  && fish -c "proto install pnpm --pin" \
  && fish -c "pnpm install-completion fish"
