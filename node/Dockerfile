FROM ghcr.io/inkohx/archlinux:base

ARG NODE_VERSION=18

RUN paru -S --noconfirm volta-bin \
  && volta install node@${NODE_VERSION} pnpm@latest yarn@berry
