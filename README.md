# Astro Starter Kit: Blog

## start up

根据 [.env.example](.env.example) 建立 `.env` 文件

根据需要整个项目替换 `astro-ai`

```bash
pnpm i
pnpm db:dev # 启动docker 的数据库和redis, 把数据库结构的orm代码生成, 初始化数据库表
pnpm dev
```

一些系统级的第三方服务配置，请在系统运行时在 [config](http://localhost:3000/lab/config) 中配置

本地修改了数据结构后运行

```bash
pnpm db:update # 修改数据库的数据结构
```

当要上测试库的时候如果这次有修改数据结构需要先生成数据结构迁移脚本

```bash
pnpm db:migrate:dev # 修改数据库的数据结构
```

上线时如果这次有修改数据结构需要在线上数据库执行

```bash
pnpm db:migrate:deploy # 把数据结构迁移脚本运行
```

这步应该在`cicd`中自动执行，如果已实现请删除

## 常见问题

- 当包安装非常慢，可以考虑科学上网

```bash
export http_proxy="http://127.0.0.1:1087"; export HTTP_PROXY="http://127.0.0.1:1087"; export https_proxy="http://127.0.0.1:1087"; export HTTPS_PROXY="http://127.0.0.1:1087"
```

## 相关资料

[astro](https://docs.astro.build/zh-cn/getting-started/)

[vue3](https://cn.vuejs.org)

[prisma](https://www.prisma.io/) - Prisma provides the best experience for your team to work and interact with databases. Even complex things like connection pooling, caching, real-time database subscriptions are a breeze with our products.

[zenstack](https://zenstack.dev/) - A TypeScript toolkit that enhances Prisma ORM with flexible Authorization and auto-generated, type-safe APIs/hooks, simplifying full-stack development

[zod](https://zod.dev/) TypeScript-first schema validation with static type inference
