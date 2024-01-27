FROM ghcr.io/inkohx/archlinux:base

RUN fish -c "proto install deno --pin" \
  && fish -c "deno completions fish > ~/.config/fish/conf.d/deno_completion.fish"
