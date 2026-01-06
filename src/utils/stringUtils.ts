/**
 * 字符串工具类
 * 提供常用的字符串处理方法
 */
export class StringUtils {
  /**
   * 首字母大写
   * @param str 输入字符串
   * @returns 首字母大写的字符串
   */
  static capitalize(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * 驼峰命名转换
   * @param str 输入字符串（支持空格、下划线、连字符分隔）
   * @returns 驼峰命名字符串
   */
  static toCamelCase(str: string): string {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, '')
      .replace(/[-_]/g, '');
  }

  /**
   * 下划线命名转换
   * @param str 输入字符串
   * @returns 下划线命名字符串
   */
  static toSnakeCase(str: string): string {
    return str
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, '')
      .replace(/\s+/g, '_')
      .replace(/-/g, '_');
  }

  /**
   * 截断字符串并添加省略号
   * @param str 输入字符串
   * @param maxLength 最大长度
   * @param suffix 后缀，默认为 '...'
   * @returns 截断后的字符串
   */
  static truncate(str: string, maxLength: number, suffix: string = '...'): string {
    if (!str || str.length <= maxLength) return str;
    return str.slice(0, maxLength - suffix.length) + suffix;
  }

  /**
   * 移除字符串两端的空白字符
   * @param str 输入字符串
   * @returns 去除空白后的字符串
   */
  static trim(str: string): string {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /**
   * 检查字符串是否为空（包括 null、undefined、空字符串、纯空白字符）
   * @param str 输入字符串
   * @returns 是否为空
   */
  static isEmpty(str: string | null | undefined): boolean {
    return !str || str.trim().length === 0;
  }

  /**
   * 反转字符串
   * @param str 输入字符串
   * @returns 反转后的字符串
   */
  static reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  /**
   * 生成随机字符串
   * @param length 字符串长度
   * @param chars 可选字符集，默认为字母数字
   * @returns 随机字符串
   */
  static randomString(length: number = 10, chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

