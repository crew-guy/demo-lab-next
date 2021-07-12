import { bucketID } from "./lab";

interface Metadata {
    title: string,
    content: string,
    image: string,
}

export const rootWord = process.env.INSTI_TYPE === "lab" ? "lab" : "clinic"
export const capitalizedRootWord = rootWord.charAt(0).toUpperCase() + rootWord.slice(1);

const instiName = "Molxpert Diagnostics"

export const metadata: Metadata = {
    title: `${instiName} | Smart and Digital ${capitalizedRootWord}}`,
    content: `This institute is a smart and digital ${rootWord} of new India. If you visit this institute, you will get all your medical records on your phone.`,
    image:`https://cdn.farmako.in/labs/${bucketID}/1.png`
}