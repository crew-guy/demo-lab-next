import { bucketID } from "./lab";

interface Metadata {
    title: string,
    content: string,
    image: string,
}

export const rootWord = process.env.INSTI_TYPE === "lab" ? "lab" : "clinic"
export const capitalizedRootWord = rootWord.charAt(0).toUpperCase() + rootWord.slice(1);

export const metadata: Metadata = {
    title: `Molxpert Diagnostics | Smart and Digital ${capitalizedRootWord}}`,
    content: `This lab is a smart and digital ${rootWord} of new India. If you visit this lab, you will get all your medical records on your phone.`,
    image:`https://cdn.farmako.in/labs/${bucketID}/1.png`
}