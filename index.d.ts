interface Options {
  prefix?: string;
  queryInterceptors?: any[];
  initialData?: any;
}

interface NxStatic {
  TaroreactKits: {
    create(options?: Options): any;
  };
}
