import { createPrintStyle } from "./createPrintStyle";
import { renderAsync } from "./renderAsync";

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/** print react component
 * @param element jsx element
 */
export const printComponent = async (element: JSX.Element) => {
  const style = createPrintStyle();
  const container = await renderAsync(element);
  await sleep(200);
  window.print();
  container.parentNode!.removeChild(container);
  style.parentNode!.removeChild(style);
};
