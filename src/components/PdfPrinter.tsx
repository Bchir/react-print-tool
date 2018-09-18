

import { BasePrinter, IBasePrinterProps } from "./BasePrinter";
import React from "react";

export interface IReactPdfPrinterProps extends IBasePrinterProps {
    pdfContentbase64:string;
}

export class ReactPdfPrinter extends BasePrinter<IReactPdfPrinterProps> {
    protected _renderContent(): JSX.Element {
        return <embed type="application/pdf" 
        src={`data:application/pdf;base64,${this.props.pdfContentbase64}`}/>;
    }
}