# サンプルコード

```zsh
# setup node
curl -L git.io/nodebrew | perl - setup
nodebrew install v18.12.0
nodebrew use v18.12.0

# setup pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -
pnpm config set auto-install-peers true
pnpm config list

# create project
pnpm create astro@latest
pnpm astro add solid tailwind
```

## 関連

- https://blog.hey3.dev/posts/create-solidjs-template
