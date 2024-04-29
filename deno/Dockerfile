FROM ghcr.io/inkohx/archlinux:base

RUN fish -c "proto install deno --pin=global" \
  && fish -c "deno completions fish > ~/.config/fish/conf.d/deno_completion.fish"
