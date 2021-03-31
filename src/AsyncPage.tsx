import React, { useState, useEffect } from "react";
import { Loading } from "./components/loading";
import { pagesMap } from "./pagesMap";

const pages = import.meta.glob("./pages/Page*.tsx");

const asAsyncPage = (fun: Function) => {
  return () => {
    const [comp, setComp] = useState(Loading);
    useEffect(() => {
      // @ts-ignore
      fun().then((mod) => {
        // use the `default` export for pages
        setComp(mod.default);
      });
    });

    return comp;
  };
};

export const asyncFromPagename = (name: string) => {
  // @ts-ignore
  const promise = pages[pagesMap[name]];
  return asAsyncPage(promise)();
};
