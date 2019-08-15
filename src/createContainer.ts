export const createContainer = () => {
  const element: HTMLDivElement = document.createElement("div");
  element.className = "print-wrapper";
  const container = document.body.appendChild(element);
  return container;
};
