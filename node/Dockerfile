FROM ghcr.io/inkohx/archlinux:base

ARG NODE_VERSION=20

RUN paru -S --noconfirm volta-bin \
  && fish -c "volta setup" \
  && volta completions fish --output ~/.config/fish/conf.d/volta-completions.fish  \
  && volta install node@${NODE_VERSION} pnpm yarn \
  && fish -c "pnpm install-completion fish"
