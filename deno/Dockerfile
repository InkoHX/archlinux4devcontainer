FROM ghcr.io/inkohx/archlinux:base

RUN paru -S --noconfirm deno \
  && deno completions fish > ~/.config/fish/conf.d/deno_completion.fish
