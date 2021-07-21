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
        name:"Dr. Yogita Sagar",
        qualification: "DGO, MBBS",
        imgSrc:objectFunction('doctor.png'),
        speciality:"Obstetrics, Gynaecology",
        phoneNumber:"+919810414970",
        whatsappNumber:"+919810414970",
        consultOnline:"https://www.practo.com/gurgaon/doctor/dr-ashasharma-gynecologist-obstetrician-1",
    }
];
