import React from "react";
import { printComponent } from "./printComponent";

/** print html content from string
 * @param html a valid html content as string
 */
export const printHtml = (html: string) => {
  return printComponent(<div dangerouslySetInnerHTML={{ __html: html }} />);
};
