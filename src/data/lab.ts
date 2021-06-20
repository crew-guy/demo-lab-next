// import labBgImage from '../assets/images/shri-krishna-bg.jpg'

interface labObj {
    labName: string,
    labLocation: string,
    labHeroImages: Array<string>,
    contactNumber: string,
    coordinates:string
}
export const bucketID = "d158ed5e-221c-40cb-af9e-091bf562e660"

export const lab : labObj = {
    labName: "Healius Well Women Clinic",
    labHeroImages: [
        `https://cdn.farmako.in/labs/${bucketID}/1.png`,
        `https://cdn.farmako.in/labs/${bucketID}/2.png`,
        `https://cdn.farmako.in/labs/${bucketID}/3.png`,
        `https://cdn.farmako.in/labs/${bucketID}/4.png`,
    ],
    contactNumber: "+919810414970",
    labLocation: "Gurgaon Sector 52, Gurgaon",
    coordinates:"https://geo:28.4379,77.0785"
}
