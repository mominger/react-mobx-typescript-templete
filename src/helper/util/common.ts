export const isUrl = (url: string): boolean => {
  return /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(url);
};

export const isEmail = (address: string): boolean => {
  return /@/.test(address);
};

export const toFixed = (num, v = 2) => {
  const vv = Math.pow(10, v);
  return Math.round(num * vv) / vv;
};

export const toFixedFloor = (num, v = 2) => {
  const vv = Math.pow(10, v);
  return Math.floor(num * vv) / vv;
};
