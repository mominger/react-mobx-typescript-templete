export default {
  isUrl(url: string): boolean {
    return /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(url);
  },

  isEmail(address: string): boolean {
    return /@/.test(address);
  },

  convertWeek(date) {
    return ('' + date)
      .replace(/\s0/, ' 周日')
      .replace(/\s1/, ' 周一')
      .replace(/\s2/, ' 周二')
      .replace(/\s3/, ' 周三')
      .replace(/\s4/, ' 周四')
      .replace(/\s5/, ' 周五')
      .replace(/\s6/, ' 周六');
  },

  toFixed(num, v = 2) {
    const vv = Math.pow(10, v);
    return Math.round(num * vv) / vv;
  },

  toFixedFloor(num, v = 2) {
    const vv = Math.pow(10, v);
    return Math.floor(num * vv) / vv;
  },
};
