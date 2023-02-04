FROM ghcr.io/inkohx/archlinux:base

ARG NODE_VERSION=18

RUN paru -S --noconfirm volta-bin \
  && fish -c "volta setup" \
  && volta completions fish --output ~/.config/fish/conf.d/volta-completions.fish  \
  && volta install node@${NODE_VERSION} pnpm yarn
