import { createPrintStyle } from "./createPrintStyle";
import { renderAsync } from "./renderAsync";

/** print react component
 * @param element jsx element
 */
export const printComponent = async (element: JSX.Element) => {
  const style = createPrintStyle();
  const container = await renderAsync(element);
  window.print();
  container.parentNode!.removeChild(container);
  style.parentNode!.removeChild(style);
};
