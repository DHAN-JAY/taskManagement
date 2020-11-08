/*
* function will format date with separator
* @param date - date object
* @separator separator - string
* @return formatted date dd-mm-yyyy
* */
export const getDDMMYYYYFormatWithSeparator = (date = new Date(), separator='') => {
    if(!(date instanceof Date))
        return;
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();
    return dd + separator + mm + separator + date.getFullYear()
}

/*
* function will format date with separator
* @param date - date object
* @separator separator - string
* @return formatted date dd-mm-yyyy
* */
export const getYYYYMMDDFormatWithSeparator = (date = new Date(), separator='') => {
    if(!(date instanceof Date))
        return;
    const mm = date.getMonth() + 1 // getMonth() is zero-based
    const dd = date.getDate()
    const yyyy = date.getFullYear()
    return yyyy + separator + mm + separator + dd
}

/*
* function will return selected date
* @param date - date object
* @param selectedDays
* @return array of date
* */
export const getSaturdayAndSundayFromMonth = (date=new Date(), selectedDays=[]) => {
    const getTot = daysInMonth(date.getMonth(),date.getFullYear());
    let selectedDate = [];
    for(let i=1;i<=getTot;i++){
        let newDate = new Date(date.getFullYear(),date.getMonth(),i)
        if(newDate.getDay()===0){
            selectedDate.push(i)
        }else if(newDate.getDay()===6){
            selectedDate.push(i)
        }
    }
}

/*
* function will return no of days in a month
* @param month - number
* @param year - number
* @return - number
* */
export const daysInMonth = (month,year) => {
    return new Date(year, month, 0).getDate();
}

/*
* function will add number of days to date
* @param date - date object
* @param numberOfDaysToAdd - number(days you want to add)
* @return - date object
* */
export const addDaysToDate = (date,numberOfDaysToAdd) => {
    var copiedDate = new Date(date.getTime());
    copiedDate.setDate(copiedDate.getDate() + parseInt(numberOfDaysToAdd))
    return copiedDate
}

/*
* function will subract number of days to date
* @param date - date object
* @param numberOfDaysToSubtract- number(days you want to subtract)
* @return - date object
* */
export const subtractDaysToDate = (date,numberOfDaysToSubtract) => {
    var newDate = new Date(date.getTime());
    newDate.setDate(date.getDate()-numberOfDaysToSubtract)
    return newDate
 //   return new Date(date.getTime() - (parseInt(numberOfDaysToSubtract) * 24 * 60 * 60 * 1000))
}

/*
* function will calculate the monday of the week of current date and return the date
* @param date - date object
* @return - date object
* */
export const getSunday = (date) => {
    let newDate = new Date(date);
    var day = newDate.getDay(),
        diff = newDate.getDate() - day;
    return new Date(newDate.setDate(diff));
  }

export const getArrayOfWeekDays = (selectedDate,endDate,dayDiff) => {
    let date = new Date(selectedDate)
    date.setDate(date.getDate()-1)
    let week = []
    if(dayDiff <7){
        for (let i = 0; i <= dayDiff; i++) {
            // const first = date.getDate() - date.getDay() + i
            // date.setDate(first)
            date.setDate(date.getDate()+1)
            const day = getYYYYMMDDFormatWithSeparator(new Date(date), "-").slice(0, 10)
            let dayInNumber=date.getDay()
            let dayName
            if(dayInNumber===0){
                dayName='SUN'
            }
            else if(dayInNumber===1){
                dayName='MON'
            }
            else if(dayInNumber===2){
                dayName='TUE'
            }
            else if(dayInNumber===3){
                dayName='WED'
            }
            else if(dayInNumber===4){
                dayName='THU'
            }
            else if(dayInNumber===5){
                dayName='FRI'
            }
            else {
                dayName='SAT'
            }
            week.push({dayStr: " "+day+" ", date: new Date(date), dayName:dayName, startDate:new Date(date)})
        }
    }
    else if (dayDiff>=7 && dayDiff<31){
        // date.setDate(date.getDate()+1)
        for (let i = 0; i < Math.ceil(dayDiff/7); i++) {
            // const first = date.getDate() - date.getDay() + i
            // date.setDate(first)
            let startDay = getYYYYMMDDFormatWithSeparator(new Date(date.setDate(date.getDate()+1)), "-").slice(0, 10)
            let endDay = getYYYYMMDDFormatWithSeparator(new Date(date.setDate(date.getDate()+6)), "-").slice(0, 10)
            if (new Date(endDay)>endDate){
                endDay = getYYYYMMDDFormatWithSeparator(new Date(endDate), "-").slice(0, 10)
            }
            week.push({dayStr: " "+startDay+" to "+endDay+" ", date: new Date(startDay) +"-"+ new Date(endDay), dayName:"Week "+(i+1), startDate:new Date(startDay)})
        }
    }
    else if(dayDiff<366){
        for(let i=0;i < Math.ceil(dayDiff/30);i++){
            let startDay = getYYYYMMDDFormatWithSeparator(new Date(date.setDate(date.getDate()+1)), "-").slice(0, 10)
            let endDay = getYYYYMMDDFormatWithSeparator(new Date(date.setDate(date.getDate()+29)), "-").slice(0, 10)
            if (new Date(endDay)>endDate){
                endDay = getYYYYMMDDFormatWithSeparator(new Date(endDate), "-").slice(0, 10)
            }
            week.push({dayStr: " "+startDay+" to "+endDay+" ", date: new Date(startDay) +"-"+ new Date(endDay), dayName:"Month "+(i+1), startDate:new Date(startDay)})
        }
    }
    else {
        for(let i=0;i < Math.ceil(dayDiff/365);i++){
            let startDay = getYYYYMMDDFormatWithSeparator(new Date(date.setDate(date.getDate()+1)), "-").slice(0, 10)
            let endDay = getYYYYMMDDFormatWithSeparator(new Date(date.setDate(date.getDate()+364)), "-").slice(0, 10)
            if (new Date(endDay)>endDate){
                endDay = getYYYYMMDDFormatWithSeparator(new Date(endDate), "-").slice(0, 10)
            }
            week.push({dayStr: " "+startDay+" to "+endDay+" ", date: new Date(startDay) +"-"+ new Date(endDay), dayName:"Year "+(i+1), startDate:new Date(startDay)})
        }
    }

    return week
}
