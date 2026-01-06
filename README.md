# tulan-utils

一个实用的 JavaScript 工具类库，提供常用的字符串处理和日期格式化功能。

## 安装

### 步骤 1：配置 npm 以使用 GitHub Packages

在你的项目根目录创建或编辑 `.npmrc` 文件，添加以下内容：

```
@guangee:registry=https://npm.pkg.github.com
```

### 步骤 2：身份验证（必需）

**重要**：GitHub Packages 即使是公开包，也需要身份验证才能下载。

#### 方法一：使用 npm login（推荐）

```bash
npm login --scope=@guangee --registry=https://npm.pkg.github.com
```

然后输入：
- **Username**: 你的 GitHub 用户名（例如：guangee）
- **Password**: 你的 GitHub Personal Access Token（不是密码！）
- **Email**: 你的 GitHub 邮箱

#### 方法二：在 .npmrc 中直接配置 token

在 `.npmrc` 文件中添加：

```
@guangee:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

将 `YOUR_GITHUB_TOKEN` 替换为你的 GitHub Personal Access Token。

#### 如何创建 GitHub Personal Access Token

1. 访问 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 设置名称和过期时间
4. 勾选 `read:packages` 权限（如果包是私有的，还需要 `repo` 权限）
5. 点击 "Generate token" 并复制 token（只显示一次，请妥善保存）

### 步骤 3：安装包

```bash
npm install @guangee/tulan-utils
```

**推荐使用版本范围**（自动获取兼容更新）：
```json
{
  "dependencies": {
    "@guangee/tulan-utils": "^0.1.0"
  }
}
```

### 故障排除

#### 问题 1：404 Not Found

**错误信息**：`npm ERR! 404 '@guangee/tulan-utils@0.1.0' is not in this registry`

**解决方案**：
1. 确认包已经发布到 GitHub Packages（检查仓库的 Packages 页面）
2. 确认 `.npmrc` 文件配置正确
3. 确认已进行身份验证

#### 问题 2：401 Unauthorized

**错误信息**：`npm ERR! 401 Unauthorized`

**解决方案**：
1. 确认已运行 `npm login` 或配置了 token
2. 确认 token 有 `read:packages` 权限
3. 确认 token 未过期
4. 如果使用 `.npmrc` 配置 token，确认格式正确

#### 问题 3：403 Forbidden

**错误信息**：`npm ERR! 403 Forbidden`

**解决方案**：
1. 确认 token 有正确的权限
2. 如果是私有包，确认 token 有 `repo` 权限
3. 确认你的 GitHub 账号有访问该包的权限

#### 问题 4：包找不到

**检查清单**：
- [ ] 包已经发布（创建了 Release 或手动触发发布）
- [ ] `.npmrc` 文件存在且配置正确
- [ ] 已进行身份验证
- [ ] 包名和版本号正确（`@guangee/tulan-utils@0.1.0`）
- [ ] 网络连接正常

## 使用方法

### 字符串工具类 (StringUtils)

```javascript
import { StringUtils } from '@guangee/tulan-utils';

// 首字母大写
StringUtils.capitalize('hello'); // 'Hello'

// 驼峰命名转换
StringUtils.toCamelCase('hello world'); // 'helloWorld'

// 下划线命名转换
StringUtils.toSnakeCase('Hello World'); // 'hello_world'

// 截断字符串
StringUtils.truncate('这是一个很长的字符串', 5); // '这是一个...'

// 检查是否为空
StringUtils.isEmpty(''); // true

// 反转字符串
StringUtils.reverse('hello'); // 'olleh'

// 生成随机字符串
StringUtils.randomString(10); // 'aB3dEfG9hI'
```

### 日期工具类 (DateUtils)

```javascript
import { DateUtils } from '@guangee/tulan-utils';

// 格式化日期
DateUtils.format(new Date(), 'YYYY-MM-DD'); // '2024-01-01'
DateUtils.format(new Date(), 'YYYY-MM-DD HH:mm:ss'); // '2024-01-01 12:00:00'

// 获取相对时间
DateUtils.getRelativeTime(new Date(Date.now() - 5 * 60 * 1000)); // '5分钟前'

// 判断是否为今天
DateUtils.isToday(new Date()); // true

// 获取天数差
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-01-10');
DateUtils.getDaysDiff(date1, date2); // 9

// 添加天数
DateUtils.addDays(new Date(), 7); // 7天后的日期

// 获取月份第一天和最后一天
DateUtils.getFirstDayOfMonth(new Date());
DateUtils.getLastDayOfMonth(new Date());
```

## API 文档

### StringUtils

- `capitalize(str: string): string` - 首字母大写
- `toCamelCase(str: string): string` - 转换为驼峰命名
- `toSnakeCase(str: string): string` - 转换为下划线命名
- `truncate(str: string, maxLength: number, suffix?: string): string` - 截断字符串
- `trim(str: string): string` - 去除两端空白
- `isEmpty(str: string | null | undefined): boolean` - 检查是否为空
- `reverse(str: string): string` - 反转字符串
- `randomString(length?: number, chars?: string): string` - 生成随机字符串

### DateUtils

- `format(date: Date | number, format?: string): string` - 格式化日期
- `getRelativeTime(date: Date | number): string` - 获取相对时间描述
- `isToday(date: Date | number): boolean` - 判断是否为今天
- `isSameDay(date1: Date | number, date2: Date | number): boolean` - 判断是否为同一天
- `getDaysDiff(date1: Date | number, date2: Date | number): number` - 获取天数差
- `addDays(date: Date | number, days: number): Date` - 添加天数
- `getFirstDayOfMonth(date: Date | number): Date` - 获取月份第一天
- `getLastDayOfMonth(date: Date | number): Date` - 获取月份最后一天

## 开发

```bash
# 安装依赖
npm install

# 构建
npm run build

# 测试
npm test
```

## 版本管理和更新

### 版本号说明

本项目遵循[语义化版本](https://semver.org/lang/zh-CN/)规范（Semantic Versioning）：
- **主版本号（MAJOR）**：不兼容的 API 修改
- **次版本号（MINOR）**：向下兼容的功能性新增
- **修订号（PATCH）**：向下兼容的问题修正

### 包不会自动更新

**重要**：npm 包不会自动更新。即使你发布了新版本，已安装的项目也不会自动获取最新版本。

### 版本范围配置

在你的项目 `package.json` 中，可以通过版本范围来控制更新策略：

```json
{
  "dependencies": {
    "@guangee/tulan-utils": "^0.1.0"  // 推荐：允许次版本和修订号更新
    // "@guangee/tulan-utils": "~0.1.0"  // 只允许修订号更新
    // "@guangee/tulan-utils": "0.1.0"    // 精确版本，不会自动更新
  }
}
```

**版本范围说明**：
- `^0.1.0`：允许更新到 `0.x.x`（推荐，自动获取兼容更新）
- `~0.1.0`：只允许更新到 `0.1.x`（只获取补丁更新）
- `0.1.0`：精确版本，不会更新（需要手动修改）

### 如何更新包

1. **检查可用更新**：
```bash
npm outdated @guangee/tulan-utils
```

2. **更新到最新兼容版本**（如果使用 `^` 或 `~`）：
```bash
npm update @guangee/tulan-utils
```

3. **更新到最新版本**（忽略版本范围）：
```bash
npm install @guangee/tulan-utils@latest
```

4. **更新到特定版本**：
```bash
npm install @guangee/tulan-utils@0.2.0
```

## 发布

项目使用 GitHub Actions 自动发布到 GitHub Packages。当创建新的 Release 时，会自动触发构建和发布流程。

**注意**：在首次使用前，请确保：
1. 将 `package.json` 中的 `@yourusername` 替换为你的 GitHub 用户名
2. 将 `.github/workflows/publish.yml` 中的 `scope: '@yourusername'` 替换为你的 GitHub 用户名
3. GitHub Actions 会自动使用 `GITHUB_TOKEN`，无需额外配置

### 发布新版本流程

1. 更新 `package.json` 中的版本号（遵循语义化版本）
2. 提交代码并推送到仓库
3. 在 GitHub 上创建新的 Release，标签格式为 `v0.1.0`（与 package.json 中的版本号对应）
4. GitHub Actions 会自动构建并发布到 GitHub Packages

## License

MIT

