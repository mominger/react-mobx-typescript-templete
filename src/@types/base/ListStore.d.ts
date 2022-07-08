interface ListStore {
  next: (page: number, size?: number) => Promise<Array<any>>;
}
