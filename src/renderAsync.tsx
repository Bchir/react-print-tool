import React, { Fragment, FunctionComponent, useEffect } from "react";
import ReactDOM from "react-dom";
import { createContainer } from "./createContainer";

type PromiseProps = {
  resolve: (value?: HTMLDivElement) => void;
};

export const renderAsync = (element: JSX.Element): Promise<HTMLDivElement> => {
  return new Promise(resolve => {
    const container = createContainer();

    const PromiseComponent: FunctionComponent<PromiseProps> = props => {
      useEffect(() => {
        props.resolve(container);
      });
      return <Fragment>{props.children}</Fragment>;
    };

    ReactDOM.render(
      <PromiseComponent resolve={resolve}>{element}</PromiseComponent>,
      container,
    );
  });
};
