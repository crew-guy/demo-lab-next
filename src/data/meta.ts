import { lab, objectFunction } from "./lab";

interface Metadata {
    title: string,
    content: string,
    image: any,
}

export const rootWord = process.env.INSTI_TYPE === "lab" ? "lab" : "clinic"
export const capitalizedRootWord = rootWord.charAt(0).toUpperCase() + rootWord.slice(1);


export const metadata: Metadata = {
    title: `${lab.labName} | Smart and Digital ${capitalizedRootWord}}`,
    content: `This institute is a smart and digital ${rootWord} of new India. If you visit this institute, you will get all your medical records on your phone.`,
    image:objectFunction("1.png")
}