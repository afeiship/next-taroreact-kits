interface Options {
  prefix?: string;
  queryInterceptors?: any[];
  initialData?: any;
}

interface NxStatic {
  NxTaroreactKits: {
    create(options?: Options): any;
  };
}
