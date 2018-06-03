import React from "react";

export interface IPrintFromHtmlProps {
  component?: JSX.Element;
  html?: string;
  unMountMe: () => void;
}

// tslint:disable:max-line-length
export class PrintFromHtml extends React.Component<IPrintFromHtmlProps, {}> {
  private styleTag: HTMLStyleElement;

  constructor(props: IPrintFromHtmlProps) {
    super(props);
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML =
      "@media screen{.print-wrapper{display:none}}@media print{body *{visibility:hidden}.print-wrapper,.print-wrapper *{visibility:visible!important}.print-wrapper{position:absolute;left:0;top:0;width:100%}}";
    this.styleTag = document.head.appendChild(style);
  }

  public render(): JSX.Element {
    try {
      return (
        <div className="print-section">
          {this.renderComponent()}
          {this.renderHTML()}
        </div>
      );
    } catch (e) {
      this.styleTag.remove();
      throw Error("Failed to render template " + e);
    }
  }

  public componentDidMount(): void {
    window.print();
    setTimeout(() => {
      this.styleTag.remove();
      this.props.unMountMe();
    }, 100);
  }

  private renderComponent(): JSX.Element {
    if (this.props.component !== undefined) {
      return this.props.component;
    } else {
      return <div />;
    }
  }
  private renderHTML(): JSX.Element {
    if (this.props.html !== undefined) {
      return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />;
    } else {
      return <div />;
    }
  }
}
