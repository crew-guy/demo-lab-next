interface labObj {
    labName: string,
    labLocation: string,
    labHeroImages: Array<any>,
    contactNumber: string,
    labLink:string,
    labMapImage:string,
}
export const bucketID = "edfd61d0-03c6-4955-bba0-959e15735fd1"
export const objectFunction = (string:String):String => {
    return `https://cdn.farmako.in/labs/${bucketID}/${string}`
}

export const lab : labObj = {
    labName: "Aashirwad Diagnostics",
    labHeroImages: [
        objectFunction('1.png'),
        objectFunction('2.png'),
        objectFunction('3.png'),
    ],
    contactNumber: "+919810414970",
    labLocation: "Gurgaon Sector 52, Gurgaon",
    labLink: "http://maps.google.com/maps?q=28.6184,77.3738",
    labMapImage:`https://cdn.farmako.in/labs/${bucketID}/map.png`
}

