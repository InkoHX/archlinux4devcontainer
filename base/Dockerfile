FROM archlinux:base-devel

ARG USERNAME="archlinux"

RUN pacman -Syyu --noconfirm git vim fish starship \
  && useradd -m -g users -g wheel ${USERNAME} \
  && echo "ALL ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
  && chsh --shell /bin/fish ${USERNAME}

USER ${USERNAME}

# Install paru
RUN git clone https://aur.archlinux.org/paru-bin.git /tmp/paru \
  && cd /tmp/paru \
  && makepkg -si --noconfirm \
  && rm -rf /tmp/paru

# Configure Fish and Starship
RUN mkdir -p ~/.config/fish/conf.d \
  && echo "set fish_greeting" >> ~/.config/fish/config.fish \
  && echo "starship init fish | source" >> ~/.config/fish/conf.d/starship.fish \
  && starship preset no-nerd-font > ~/.config/starship.toml \
  && printf "\n[container]\ndisabled = true" >> ~/.config/starship.toml

# https://moonrepo.dev/docs/proto
ENV PROTO_AUTO_INSTALL=true
RUN PROTO_INSTALL_DIR=$HOME/.proto/bin curl -fsSL https://moonrepo.dev/install/proto.sh | bash -s -- --yes --shell fish \
  && fish -c "proto completions --shell fish > ~/.config/fish/conf.d/proto-completions.fish"

CMD [ "fish" ]
