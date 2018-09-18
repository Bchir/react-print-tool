# react-print-tool

Provides methods to opens print preview for a specific component

## Installation
  
```
npm install react-print-tool
```

## Usage

Import the react tool object and use one of the provided methods

## Example

```Typescript

 import { PrintTool } from "react-print-tool"

//use your own react component
 PrintTool.printFromReactComponent(<TheBestReactComponent prop={data} /> )

 // use html in a string
 PrintTool.printFromString("<div>Hello world</div>" )

// use selector to print existing html element
 PrintTool.printExistingElement("div.elementClass #elementID")

// print Pdf 
let reader = new FileReader ();
let file :File;
reader.readAsDataURL(file);
// let say file was loaded
PrintTool.printFromPdfFileBase64(reader.result);

// Or just pass the File it self we will take care of the read process ;) 
// note this methode can take some time if the file is big ( waiting the FileReader)
PrintTool.printFromPdfFile(file);


```