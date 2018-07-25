# react-print-tool

Provides functions to print react component or html content from a string

## Installation
  
```
npm install react-print-tool
```

## Usage

import the react tool object and use one of the functions provided

## Example

```Typescript
 import { PrintTool } from "react-print-tool"

//use your own react component
 PrintTool.printFromReactComponent(<TheBestReactComponent prop={data} />)

 //OR use html in a string
 PrintTool.printFromString("<div>Hello world</div>")

```