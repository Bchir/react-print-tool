import { BasePrinter, IBasePrinterProps } from "./BasePrinter";

export interface IReactComponentPrinterProps extends IBasePrinterProps {
    component: JSX.Element;
}

export class ReactComponentPrinter extends BasePrinter<IReactComponentPrinterProps> {
    protected _renderContent(): JSX.Element {
        return this.props.component;
    }
}