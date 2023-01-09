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
pnpm init
pnpm add solid-js solid-meta solid-utils
pnpm add -D vite vite-plugin-solid babel-preset-solid typescript
pnpm tsc --init

# run app
pnpm dev

# build app
pnpm build
```

```zsh
# add tailwind
pnpm add -D tailwindcss postcss autoprefixer
pnpm tailwindcss init
```

## 関連

- https://blog.hey3.dev/posts/create-solidjs-template
