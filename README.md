# react-print-tool

Provides methods to open print preview for a specific component

[![NPM](https://nodei.co/npm/react-print-tool.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-print-tool/)

[![NPM](https://nodei.co/npm-dl/react-print-tool.png)](https://nodei.co/npm/react-print-tool/)
## Installation

if you're using react version >= 16.8.0

```
npm install react-print-tool@latest
```

else

```
npm install react-print-tool@2.0.0
```

## Usage

### Version 3.0.0


```Typescript

import {
  printComponent,
  printExistingElement,
  printHtml
} from "react-print-tool";

//use your own react component
await printComponent(<TheBestReactComponent prop={data} />);

// use html in a string
await printHtml("<div>Hello world</div>");

// use selector to print an existing html element
await printExistingElement("div.elementClass #elementID");

```

### Version 2.0.0

Import the react tool object and use one of the provided methods

## Example

```Typescript

 import { PrintTool } from "react-print-tool"

//use your own react component
 PrintTool.printFromReactComponent(<TheBestReactComponent prop={data} /> )

 // use html in a string
 PrintTool.printFromString("<div>Hello world</div>" )

// use selector to print an existing html element
 PrintTool.printExistingElement("div.elementClass #elementID")

```
