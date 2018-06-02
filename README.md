#react-print-tool

provides functions to print react component or html content from a string

##Installation
  
   npm install react-print-tool

##Usage

import the react tool object and use one of the fuctions provided

##Example

```Typescript
 import { PrintTool } from "react-print-tool"

//use your own react component
 PrintTool.printFromReactComponent(<ReactComponent/>)
 
 //OR use html in a string
 PrintTool.printFromString("<div></div>")

```