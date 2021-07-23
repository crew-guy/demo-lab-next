import {objectFunction} from '@data/lab'

interface doctorObj {
    name: string,
    qualification: string,
    imgSrc: any,
    speciality: string,
    phoneNumber: string,
    whatsappNumber: string,
    consultOnline:string
}

export const doctors : Array<doctorObj> = [
    {
        name:"Abdur Rehman",
        qualification: "MBBS, MD",
        imgSrc:objectFunction('doc1.PNG'),
        speciality:"ENT specialist",
        phoneNumber:"9820178330",
        whatsappNumber:"9820178330",
        consultOnline:"https://www.practo.com/noida/clinic/one-pro-lab-ent-clinic-sector-51",
    }
];
