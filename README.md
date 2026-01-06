# tulan-utils

一个实用的 JavaScript 工具类库，提供常用的字符串处理和日期格式化功能。

## 安装

### 配置 npm 以使用 GitHub Packages

首先，在你的项目中创建或编辑 `.npmrc` 文件，添加以下内容：

```
@yourusername:registry=https://npm.pkg.github.com
```

将 `yourusername` 替换为你的 GitHub 用户名。

### 安装包

```bash
npm install @yourusername/tulan-utils
```

**注意**：如果这是私有包，你需要先进行身份验证：

```bash
npm login --scope=@yourusername --registry=https://npm.pkg.github.com
```

然后输入你的 GitHub 用户名和 Personal Access Token（需要 `read:packages` 权限）。

## 使用方法

### 字符串工具类 (StringUtils)

```javascript
import { StringUtils } from '@yourusername/tulan-utils';

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
import { DateUtils } from '@yourusername/tulan-utils';

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

## 发布

项目使用 GitHub Actions 自动发布到 GitHub Packages。当创建新的 Release 时，会自动触发构建和发布流程。

**注意**：在首次使用前，请确保：
1. 将 `package.json` 中的 `@yourusername` 替换为你的 GitHub 用户名
2. 将 `.github/workflows/publish.yml` 中的 `scope: '@yourusername'` 替换为你的 GitHub 用户名
3. GitHub Actions 会自动使用 `GITHUB_TOKEN`，无需额外配置

## License

MIT

