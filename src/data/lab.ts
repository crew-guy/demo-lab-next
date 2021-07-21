// ======================================>
// TODO => Changeables
const labLong = 28.570969720000118
const labLat = 77.37952129983528
export const bucketID = "edfd61d0-03c6-4955-bba0-959e15735fd1"
const labName = "Aashirwad Diagnostics" 
const contactNumber = "9958340010"
const labLocation = "Sector Beta 1, Greater Noida"

// ======================================> 

interface labObj {
    labName: string,
    labLocation: string,
    labHeroImages: Array<any>,
    contactNumber: string,
    labLink:string,
    labMapImage:string,
    labLat:number,
    labLong:number,
}
export const objectFunction = (string:String):String => {
    return `https://cdn.farmako.in/labs/${bucketID}/${string}`
}

export const lab : labObj = {
    labName,
    labHeroImages: [
        objectFunction('1.png'),
        objectFunction('2.png'),
        objectFunction('3.png'),
    ],
    contactNumber,
    labLocation,
    labLink: `http://maps.google.com/maps?q=${labLong},${labLat}`,
    labMapImage: `https://cdn.farmako.in/labs/${bucketID}/map.png`,
    labLat,
    labLong,
}

