import React from "react";
import ReactDOM from "react-dom";
import { PrintFromHtml } from "../components/printFromHtml";

export class PrintHtml {

    private container: HTMLDivElement | undefined;
    /** print react component */
    public printFromReactComponent = (component: JSX.Element): void => {
        if (this.container === undefined) {
            this.createContainer();
        }
        ReactDOM.render(<PrintFromHtml component={component} unMountMe={this.UnMount} />,
            (this.container as HTMLDivElement));
    }
    /** print html content from string */
    public printFromString = (html: string): void => {
        if (this.container === undefined) {
            this.createContainer();
        }
        ReactDOM.render(<PrintFromHtml html={html} unMountMe={this.UnMount} />,
            (this.container as HTMLDivElement));
    }
    private UnMount = (): void => {
        if (this.container !== undefined) {
            ReactDOM.unmountComponentAtNode(this.container);
        }
    }
    private createContainer(): any {
        const element: HTMLDivElement = document.createElement("div");
        element.className = "print-wrapper";
        this.container = document.body.appendChild(element);
    }
}
