import { useState, createContext } from "react";
import { ContextProps, CodeType, ContextType } from "../types/types";

export const Context = createContext<ContextType | null >(null);

export default function ContextProvider({children}: ContextProps) {
    const [ codes, setCodes ] = useState<CodeType[]>([
        {
            name: "Preview",
            src: "assets/images/monitor.svg",
            description: "visualiser le résultat",
        },
        { 
            name: "HTML", 
            src: "assets/images/html.svg",
            description: "éditeur de code html",
            code : `<div>
    <h1>Éditeur de code avec React</h1>
    <p>Codez directement sur votre navigateur.</p>
</div>`
        },
        { 
            name: "CSS", 
            src: "assets/images/css.svg",
            description: "éditeur de code css",
            code: `body {
    font-familly: Roboto, sans-serif;
}`
        },
        { 
            name: "JavaScript", 
            src: "assets/images/js.svg",
            description: "éditeur de code javascript",
            code: `console.log('Hello');`
        }
    ])
  return (
    <Context.Provider value={{ codes, setCodes}}>
      {children}
    </Context.Provider>
  )
}
