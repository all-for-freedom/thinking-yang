# 依赖升级指南

## 当前可升级的依赖

根据 `pnpm outdated` 的输出，以下依赖可以升级：

### 安全升级（小版本）
- `astro`: 5.15.9 → 5.16.0
- `svelte`: 5.43.12 → 5.43.14
- `baseline-browser-mapping`: 2.8.29 → 2.8.30

### 需要谨慎升级（大版本，可能有破坏性变更）
- `@iconify/svelte`: 4.2.0 → 5.1.0 ⚠️
- `marked`: 16.4.2 → 17.0.1 ⚠️
- `remark-directive`: 3.0.1 → 4.0.0 ⚠️
- `remark-github-admonitions-to-directives`: 1.0.5 → 2.1.0 ⚠️
- `tailwindcss`: 3.4.18 → 4.1.17 ⚠️ (Tailwind CSS v4 是重大更新)

## 推荐升级步骤

### 方案 1：仅升级安全的小版本（推荐先试这个）

```bash
pnpm update astro svelte baseline-browser-mapping
```

### 方案 2：升级所有依赖（包括大版本）

⚠️ **警告**：这可能会引入破坏性变更，需要测试所有功能

```bash
# 1. 备份当前 package.json
cp package.json package.json.backup

# 2. 升级所有依赖
pnpm update --latest

# 3. 检查是否有错误
pnpm install

# 4. 测试项目
pnpm dev
pnpm build
```

### 方案 3：逐步升级（最安全）

1. 先升级小版本
2. 测试通过后，逐个升级大版本依赖
3. 每次升级后运行测试

## 注意事项

- Tailwind CSS v4 是重大更新，可能需要修改配置
- `@iconify/svelte` v5 可能有 API 变更
- `marked` v17 可能有 API 变更
- 升级后务必测试所有功能

