import React from "react";

export interface IBasePrinterProps {
    unMount: () => void;
}

export abstract class BasePrinter<T extends IBasePrinterProps> extends React.Component<T> {

    private _styleTag: HTMLStyleElement;

    constructor(props: T) {
        super(props);
        const style = document.createElement("style");
        style.type = "text/css";
        /** TODO find a wait to add style and make it readable from code */
        style.innerHTML =
            "@media screen{.print-wrapper{display:none}}@media print{body *{visibility:hidden}.print-wrapper,.print-wrapper *{visibility:visible!important}.print-wrapper{position:absolute;left:0;top:0;width:100%}}";
        this._styleTag = document.head.appendChild(style);
    }

    protected abstract _renderContent(): JSX.Element;

    public render(): JSX.Element {
        try {
            return (
                <div className="print-section">
                    {this._renderContent()}
                </div>
            );
        } catch (e) {
            this._styleTag.remove();
            throw Error("Failed to render" + e);
        }
    }

    public componentDidMount(): void {
        window.print();
        /** 100 to wait for css to be applied  */
        setTimeout(() => {
            this._styleTag.remove();
            this.props.unMount();
        }, 100);
    }





}
