FROM archlinux:base-devel

ARG USERNAME="archlinux"

RUN pacman -Syyu --noconfirm git vim fish \
  && useradd -m -g users -g wheel ${USERNAME} \
  && echo "ALL ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME}

USER ${USERNAME}

# Install paru
RUN git clone https://aur.archlinux.org/paru-bin.git /tmp/paru \
  && cd /tmp/paru \
  && makepkg -si --noconfirm \
  && rm -rf /tmp/paru

# No greeting
RUN mkdir -p ~/.config/fish \
  && echo "set fish_greeting" >> ~/.config/fish/config.fish

CMD [ "fish" ]
