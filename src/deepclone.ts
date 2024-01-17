function cloneFn(fn:any) {
  if (fn.prototype) {
    return function () {
      // @ts-ignore
      return fn.call(this, ...arguments as any);
    };
  }
  return (...args: any[]) => fn.call(undefined, ...args);
}

export function deepClone(data: any, hash = new Map()) {
  const isObj = data instanceof Object;
  if (!isObj) return data;
  if (hash.get(data)) return hash.get(data);

  let res:any = {};
  if (data instanceof Array) res = [];
  if (data instanceof Date) res = new Date(data as any - 0);
  if (data instanceof RegExp) res = new RegExp(data.source, data.flags);
  if (data instanceof Function) res = cloneFn(data);

  hash.set(data, res);
  for (let key in data) {
    if (data.hasOwnProperty(key)) res[key] = deepClone(data[key], hash); // 不克隆继承来的属性
  }
  return res;
}

