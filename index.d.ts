interface Options {
  prefix?: string;
  queryInterceptors?: any[];
  initialData?: any;
}

interface NxStatic {
  $local: import('@jswork/next-abstract-storage');
  $event: import('@jswork/event-mitt').EventMitt;
  $page: (key?: string) => any;
  $global: any;
  TaroreactKits: {
    create(options?: Options): any;
  };
}
