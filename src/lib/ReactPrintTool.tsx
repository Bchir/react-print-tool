import React from "react";
import ReactDOM from "react-dom";
import { StringPrinter } from "../components/StringPrinter";
import { ReactComponentPrinter } from "../components/ReactComponentPrinter";
import { SelectorPrinter } from "../components/SelectorPrinter";

/**
 * react tool used to open printing preview for a specific content
 */
export class ReactPrintTool {
  private _container: HTMLDivElement | undefined;
  private _getContainer = (): HTMLDivElement => {
    if (this._container === undefined) {
      const element: HTMLDivElement = document.createElement("div");
      element.className = "print-wrapper";
      this._container = document.body.appendChild(element);
    }
    return this._container as HTMLDivElement;
  };

  /** print react component
   * @param component a react component
   * @throws Error if component couldn't render
   */
  public printFromReactComponent = (component: JSX.Element): void => {
    ReactDOM.render(
      <ReactComponentPrinter component={component} unMount={this._unMount} />,
      this._getContainer() as HTMLDivElement
    );
  };

  /** print html content from string
   * @param html a valid html content as string
   * @throws Error if content is not valid html
   */
  public printFromString = (html: string): void => {
    ReactDOM.render(
      <StringPrinter html={html} unMount={this._unMount} />,
      this._getContainer()
    );
  };

  /** print existing html element (only the first match will be rendred)
   * @param selector A DOMString containing one or more selectors to match.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
   * @throws  This string must be a valid  selector. If it isn't, a SYNTAX_ERR exception is thrown.
   */
  public printExistingElement = (selector: string): void => {
    ReactDOM.render(
      <SelectorPrinter querySelector={selector} unMount={this._unMount} />,
      this._getContainer()
    );
  };

  private _unMount = (): void => {
    if (this._container !== undefined) {
      ReactDOM.unmountComponentAtNode(this._container);
    }
  };
}
