//设置缓存: 单位秒
const setItem = (key: string, value: any) => {
  const params = {
    date: new Date().getTime(),
    value,
  };
  localStorage.setItem(key, JSON.stringify(params));
};

//默认1天
const getItem = (key: string, day = 1) => {
  const objv = localStorage.getItem(key);
  if (!objv) return null;
  const obj = JSON.parse(objv);
  const date = new Date().getTime();

  if (date - obj?.date > 86400000 * day) {
    removeItem(key);
    return null;
  }
  return obj?.value;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const KEY_MAX_SIX = '_MAX'; //超出1M的存储key 以MAX结尾

//设置大数据，如超过1M的
export const setLargeItem = (key, value) => {
  const large = JSON.stringify(value);
  //取UTF-8 1个中文字符3字节 1024*1024/3=349525
  const splitLarge = large.match(/.{1,349525}/g);

  if (!splitLarge) {
    return;
  }

  //分割value,多个值存储
  const keys: Array<string> = [];
  for (const [i, v] of splitLarge.entries()) {
    const theKey = key + `_${i}`;
    keys.push(theKey);
    setItem(theKey, v);
  }

  //存储key
  setItem(key + KEY_MAX_SIX, keys);
};

//读取大数据，如超过1M的
export const getLargeItem = (key, day = 1) => {
  let obj = getItem(key + KEY_MAX_SIX, day);
  if (!obj) return null;

  if (typeof obj === 'string') {
    obj = JSON.parse(obj);
  }

  let allV = '';
  for (const [i, v] of obj.entries()) {
    const theKey = key + `_${i}`;
    const theV = getItem(theKey, day);

    if (!theV) {
      return null;
    }

    allV += theV;
  }

  const factV = JSON.parse(allV);

  return factV;
};

const Storage = {
  setItem,
  getItem,
  removeItem,
  setLargeItem,
  getLargeItem,
};

export default Storage;
