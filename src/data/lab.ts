// ======================================>
// TODO => Changeables
const labLong = 28.48424414281754
const labLat = 77.50739847539676
export const bucketID = "f32daa37-6d86-45ef-b6a5-418298f0ffe6"
const labName = "Lund Pro Lab" 
const contactNumber = "9820178330"
const labLocation = "Sector 51, Noida"

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
    // labHeroImages: [
    //     objectFunction('1.png'),
    //     objectFunction('2.png'),
    //     objectFunction('3.png'),
    //     objectFunction('4.png'),
    //     objectFunction('5.png'),
    //     objectFunction('6.png'),
    // ],
    labHeroImages: [
        'https://unsplash.it/100/400',
        'https://unsplash.it/200/400',
        'https://unsplash.it/300/400',
        'https://unsplash.it/400/400',
        'https://unsplash.it/500/400',
        'https://unsplash.it/600/400',
    ],
    contactNumber,
    labLocation,
    labLink: `http://maps.google.com/maps?q=${labLong},${labLat}`,
    labMapImage: `https://cdn.farmako.in/labs/${bucketID}/map.png`,
    labLat,
    labLong,
}

