# 安装指南

## 快速开始

### 1. 配置 .npmrc

在你的项目根目录创建 `.npmrc` 文件：

```bash
echo "@guangee:registry=https://npm.pkg.github.com" > .npmrc
```

### 2. 身份验证

#### 方式一：交互式登录（推荐）

```bash
npm login --scope=@guangee --registry=https://npm.pkg.github.com
```

输入信息：
- Username: 你的 GitHub 用户名
- Password: 你的 GitHub Personal Access Token（不是密码）
- Email: 你的 GitHub 邮箱

#### 方式二：使用 token 文件

编辑 `.npmrc` 文件，添加：

```
@guangee:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### 3. 安装包

```bash
npm install @guangee/tulan-utils
```

## 创建 GitHub Personal Access Token

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token (classic)"
3. 设置名称（如：npm-packages）
4. 选择过期时间
5. 勾选权限：
   - `read:packages`（必需）
   - `repo`（如果包是私有的）
6. 点击 "Generate token"
7. **立即复制 token**（只显示一次）

## 常见错误

### 404 Not Found
- 检查包是否已发布
- 检查 `.npmrc` 配置
- 检查包名和版本号

### 401 Unauthorized
- 运行 `npm login` 或配置 token
- 检查 token 权限

### 403 Forbidden
- 检查 token 权限
- 检查账号访问权限

