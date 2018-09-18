import React from "react";
import ReactDOM from "react-dom";
import { StringPrinter } from "../components/StringPrinter";
import { ReactComponentPrinter } from "../components/ReactComponentPrinter";
import { SelectorPrinter } from "../components/SelectorPrinter";
import { ReactPdfPrinter } from "../components/PdfPrinter";

/**
 * react tool used to open printing preview for a specific content
 */
export class ReactPrintTool {
  private container: HTMLDivElement | undefined;
  private _getContainer = (): HTMLDivElement => {
    if (this.container === undefined) {
      const element: HTMLDivElement = document.createElement("div");
      element.className = "print-wrapper";
      this.container = document.body.appendChild(element);
    }
    return this.container as HTMLDivElement;
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

  /** print pdf file
   * @param pdfContent pdf file in base64
   * @throws Error if pdf Content is not  valid
   */
  public printFromPdfFileBase64 = (pdfContent: string): void => {
    ReactDOM.render(
      <ReactPdfPrinter pdfContentbase64={pdfContent} unMount={this._unMount} />,
      this._getContainer() as HTMLDivElement
    );
  };

  /** print pdf file
   * @param pdfContent pdf file in base64
   * @throws Error if file could not be read
   */
  public printFromPdfFile = (pdf: File): Promise<void> => {
    return this._readFileContentBase64(pdf)
    .then(content =>
      this.printFromPdfFileBase64(content)
    );
  };

  private _readFileContentBase64 = (pdfFile: File): Promise<string> => {
    let reader: FileReader = new FileReader();
    return new Promise<string>((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = e => {
        reject(e);
      };
      reader.readAsDataURL(pdfFile);
    });
  };

  private _unMount = (): void => {
    if (this.container !== undefined) {
      ReactDOM.unmountComponentAtNode(this.container);
    }
  };
}
