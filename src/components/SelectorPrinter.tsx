import { BasePrinter, IBasePrinterProps } from "./BasePrinter";
import React from "react";

export interface ISelectorPrinterProps extends IBasePrinterProps {
  querySelector: string;
}

export class SelectorPrinter extends BasePrinter<ISelectorPrinterProps> {
  protected _renderContent(): JSX.Element {
    let html = document.querySelector(this.props.querySelector);
    if (html === null) {
      throw Error("no element selected ! please recheck your selector");
    } else {
      return <div dangerouslySetInnerHTML={{ __html: html.outerHTML }} />;
    }
  }
}
