import { printHtml } from "./printHtml";

/** print existing html element (only the first match will be rendred)
 * @param selector A DOMString containing one or more selectors to match.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
 */
export const printExistingElement = (selector: string) => {
  const html = document.querySelector(selector);
  if (html === null) {
    throw Error("no element selected ! please recheck your selector");
  }
  return printHtml(html.outerHTML);
};
