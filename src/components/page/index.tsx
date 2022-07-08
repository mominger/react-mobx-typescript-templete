import React, { useCallback, useEffect, useState } from 'react';

type PageProps = {
  // 头部
  header?: Element;
  // 底部
  footer?: Element;
  //
  className?: string;
  // 等待请求的资源
  store?: PageStore | Array<PageStore>;
  //
  children: any;
};

async function execute(
  store: PageStore | Array<PageStore> | undefined,
  call,
): Promise<any> {
  if (store) {
    if (Array.isArray(store)) {
      for (const s of store) {
        s[call] && (await s[call]());
      }
    } else {
      store[call] && (await store[call]());
    }
  }
}

/**
 *
 */
export default function Page(props: PageProps) {
  const { header, footer, store } = props;
  const [init, setInit] = useState(!props.store);

  //刷新
  const onRefresh = useCallback(async () => {
    try {
      await execute(store, 'onLoad');
    } catch (e) {
      console.error(e);
    }
    setInit(true);
  }, []);

  //store卸载
  useEffect(() => {
    onRefresh();
    return () => {
      execute(store, 'onUnload');
    };
  }, []);

  //

  if (!init) {
    return <div></div>;
  }

  //
  return (
    <div className={props.className}>
      {/*  */}
      {header}
      {/*  */}
      {props.children}
      {/*  */}
      {footer}
    </div>
  );
}
