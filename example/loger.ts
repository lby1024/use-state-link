type Fn = (...arg: any[]) => any
type Api = {
  get: Fn
  set: Fn
}

export const loger = (api: Api) => (next: Fn) => (value: any) => {
  console.log('before', api.get());
  next(value)
  console.log('after', api.get());
  console.log('======================');
}
