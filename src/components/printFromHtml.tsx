import React from "react";

export interface IPrintFromHtmlProps {
  component?: JSX.Element;
  html?: string;
  unMountMe: () => void;
}
// tslint:disable:max-line-length

export class PrintFromHtml extends React.Component<IPrintFromHtmlProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="print-section">
        <style
          dangerouslySetInnerHTML={{
            __html:
              "@media screen{.print-wrapper{display:none}}@media print{body *{visibility:hidden}.print-wrapper,.print-wrapper *{visibility:visible!important}.print-wrapper{position:absolute;left:0;top:0;width:100%}}",
          }}
        />
        {this.props.children}
        {this.props.component !== null &&
          this.props.component !== undefined &&
          this.props.component}
        {this.props.html !== null &&
          this.props.html !== undefined && (
            <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
          )}
      </div>
    );
  }
  public componentDidMount(): void {
    window.print();
    setTimeout(() => this.props.unMountMe());
  }
}
