import docImage1 from '@assets/images/doc-image.png'

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
        name:"Dr. Asha Sharma",
        qualification: "DGO, MBBS",
        imgSrc:docImage1,
        speciality:"Obstetrics, Gynaecology",
        phoneNumber:"+919810414970",
        whatsappNumber:"+919810414970",
        consultOnline:"https://www.practo.com/gurgaon/doctor/dr-ashasharma-gynecologist-obstetrician-1",
    },
];
