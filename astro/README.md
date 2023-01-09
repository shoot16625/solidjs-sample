# SolidJS With Astro

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

# run app
pnpm dev

# build app
pnpm build
```

## 参考

- https://docs.astro.build/ja/concepts/why-astro/
- https://qiita.com/tronicboy/items/4c10f98a60d4c4f0044c
- https://reffect.co.jp/html/astro
- https://zenn.dev/shotam/articles/ce1274b82de177
