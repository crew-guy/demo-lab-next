interface timingsObj {
    name: string,
    timings?:Array<Date>
    slotTwoTimings?:Array<Date>
}

enum DAYS {
    MONDAY = "Monday"  ,
    TUESDAY= "Tuesday" ,
    WEDNESDAY= "Wednesday" ,
    THURSDAY= "Thursday" ,
    FRIDAY= "Friday" ,
    SATURDAY = "Saturday",
    SUNDAY = "Sunday"
}

export const timings : Array<timingsObj > = [
    {
        name: DAYS.MONDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    },
    {
        name: DAYS.TUESDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    },
    {
        name: DAYS.WEDNESDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    },
    {
        name: DAYS.THURSDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    },
    {
        name: DAYS.FRIDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    },
    {
        name: DAYS.SATURDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    },
    {
        name: DAYS.SUNDAY,
        timings:[new Date(2021, 6,5, 9, 0, 0,0), new Date(2021, 6,5, 13, 0, 0,0)],
        // slotTwoTimings: [new Date(2021, 6,5, 18, 0, 0,0), new Date(2021, 6,5, 20, 0, 0,0)],
    }
];
