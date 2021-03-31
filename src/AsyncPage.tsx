import React, { useState, useEffect } from "react";
import { Loading } from "./components/loading";
const pages = import.meta.glob("./pages/*.tsx");
// console.log(pages);

const asAsyncPage = (fun: Function) => {
  return () => {
    const [comp, setComp] = useState(Loading);
    useEffect(() => {
      // @ts-ignore
      fun().then((mod) => {
        setComp(mod.default);
      });
    });

    return comp;
  };
};

const pagesMap = {
  page1: "./pages/Page1.tsx",
  page2: "./pages/Page2.tsx",
};

export const asyncFromPagename = (name: string) => {
  // @ts-ignore
  const promise = pages[pagesMap[name]];
  return asAsyncPage(promise)();
};
