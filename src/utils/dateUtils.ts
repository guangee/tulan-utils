/**
 * 日期工具类
 * 提供常用的日期处理方法
 */
export class DateUtils {
  /**
   * 格式化日期
   * @param date 日期对象或时间戳
   * @param format 格式化模板，默认 'YYYY-MM-DD HH:mm:ss'
   * @returns 格式化后的日期字符串
   */
  static format(date: Date | number, format: string = 'YYYY-MM-DD HH:mm:ss'): string {
    const d = typeof date === 'number' ? new Date(date) : date;
    
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');
    
    return format
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }

  /**
   * 获取相对时间描述（如：刚刚、5分钟前、2小时前等）
   * @param date 日期对象或时间戳
   * @returns 相对时间描述
   */
  static getRelativeTime(date: Date | number): string {
    const d = typeof date === 'number' ? new Date(date) : date;
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    if (seconds < 60) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    if (days < 30) return `${days}天前`;
    if (months < 12) return `${months}个月前`;
    return `${years}年前`;
  }

  /**
   * 判断是否为今天
   * @param date 日期对象或时间戳
   * @returns 是否为今天
   */
  static isToday(date: Date | number): boolean {
    const d = typeof date === 'number' ? new Date(date) : date;
    const today = new Date();
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  }

  /**
   * 判断是否为同一天
   * @param date1 日期1
   * @param date2 日期2
   * @returns 是否为同一天
   */
  static isSameDay(date1: Date | number, date2: Date | number): boolean {
    const d1 = typeof date1 === 'number' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'number' ? new Date(date2) : date2;
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  /**
   * 获取两个日期之间的天数差
   * @param date1 日期1
   * @param date2 日期2
   * @returns 天数差（绝对值）
   */
  static getDaysDiff(date1: Date | number, date2: Date | number): number {
    const d1 = typeof date1 === 'number' ? new Date(date1) : date1;
    const d2 = typeof date2 === 'number' ? new Date(date2) : date2;
    const diff = Math.abs(d1.getTime() - d2.getTime());
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }

  /**
   * 添加天数
   * @param date 日期对象或时间戳
   * @param days 要添加的天数（可以为负数）
   * @returns 新的日期对象
   */
  static addDays(date: Date | number, days: number): Date {
    const d = typeof date === 'number' ? new Date(date) : new Date(date);
    d.setDate(d.getDate() + days);
    return d;
  }

  /**
   * 获取月份的第一天
   * @param date 日期对象或时间戳
   * @returns 月份第一天的日期对象
   */
  static getFirstDayOfMonth(date: Date | number): Date {
    const d = typeof date === 'number' ? new Date(date) : new Date(date);
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }

  /**
   * 获取月份的最后一天
   * @param date 日期对象或时间戳
   * @returns 月份最后一天的日期对象
   */
  static getLastDayOfMonth(date: Date | number): Date {
    const d = typeof date === 'number' ? new Date(date) : new Date(date);
    return new Date(d.getFullYear(), d.getMonth() + 1, 0);
  }
}

