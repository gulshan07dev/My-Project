// get the elements
const dateValue = document.getElementById('date');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    const inputDate = new Date(dateValue.value);
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear();
    const calculatedDay = calculateDay(day, month, year);
    result.innerHTML = `You were born on ${calculatedDay}`;
})

function calculateDay(date, month, year) {
    // Determine the base year and previous year
    let baseYear = 1900;
    let previousYear = year - 1;

    // Calculate the number of leap years from the base year to the previous year
    let leapYears = Math.floor((previousYear - baseYear) / 4) - Math.floor((previousYear - baseYear) / 100) + Math.floor((previousYear - baseYear) / 400);

    // Define the number of days in each month of the given year
    let daysInMonth = [31, (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Calculate the total number of days from the base year to the given date
    let totalDays = 0;
    for (let i = 0; i < month - 1; i++) {
        totalDays += daysInMonth[i];
    }
    totalDays += date;
    totalDays += (year - baseYear) * 365;
    totalDays += leapYears;

    // Calculate the odd day
    const oddDay = totalDays % 7 + 1;
    let days;

    switch (oddDay) {
        case 0:
            days = "Sunday";
            break;

        case 1:
            days = "Monday";
            break;

        case 2:
            days = "Tuesday";
            break;

        case 3:
            days = "Wednesday";
            break;

        case 4:
            days = "Thursday";
            break;

        case 5:
            days = "Friday";
            break;

        case 6:
            days = "Saturday";
            break;

        default:
            days = "😂";
    }

    return days;
}
