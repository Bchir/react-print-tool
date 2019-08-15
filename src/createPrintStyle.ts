export const createPrintStyle = () => {
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `@media screen {
  .print-wrapper {
    display: none;
  }
}
@media print {
  body * {
    visibility: hidden;
  }
  .print-wrapper,
  .print-wrapper * {
    visibility: visible !important;
  }
  .print-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}`;
  return document.head.appendChild(style);
};
