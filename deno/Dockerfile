FROM ghcr.io/inkohx/archlinux:base

RUN paru -S --noconfirm deno \
  && mkdir -p ~/.config/fish/conf.d \
  && deno completions fish > ~/.config/fish/conf.d/deno_completion.fish
