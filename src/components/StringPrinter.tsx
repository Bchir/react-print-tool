import { BasePrinter, IBasePrinterProps } from "./BasePrinter";
import React from "react";

export interface IStringPrinterProps extends IBasePrinterProps {
    html: string;
}

export class StringPrinter extends BasePrinter<IStringPrinterProps> {
    protected _renderContent(): JSX.Element {
        return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />;
    }

}