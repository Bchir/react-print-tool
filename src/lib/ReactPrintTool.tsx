import React from "react";
import ReactDOM from "react-dom";
import { StringPrinter } from "../components/StringPrinter";
import { ReactComponentPrinter } from "../components/ReactComponentPrinter";

export class ReactPrintTool {

    private container: HTMLDivElement | undefined;

    /** print react component */
    public printFromReactComponent = (component: JSX.Element): void => {
        if (this.container === undefined) {
            this._createContainer();
        }
        ReactDOM.render(<ReactComponentPrinter component={component} unMount={this._unMount} />, (this.container as HTMLDivElement));
    }

    /** print html content from string */
    public printFromString = (html: string): void => {
        if (this.container === undefined) {
            this._createContainer();
        }
        ReactDOM.render(<StringPrinter html={html} unMount={this._unMount} />, (this.container as HTMLDivElement));
    }

    private _unMount = (): void => {
        if (this.container !== undefined) {
            ReactDOM.unmountComponentAtNode(this.container);
        }
    }

    private _createContainer(): any {
        const element: HTMLDivElement = document.createElement("div");
        element.className = "print-wrapper";
        this.container = document.body.appendChild(element);
    }
}
