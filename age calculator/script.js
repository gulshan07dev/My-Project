const dob = document.getElementById('dob');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    const birthdate = dob.value;
    const birthdateObj = new Date(birthdate);
    const { years, months, days, hours, minutes, seconds } = calculateAge(birthdateObj);

    result.innerHTML = `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and <span id="seconds">${seconds}</span> seconds old.`;

    // Update the seconds every second
    setInterval(() => {
        const secondsEl = document.getElementById('seconds');
        secondsEl.textContent = Number(secondsEl.textContent) + 1;
    }, 1000);
})

function calculateAge(birthDate) {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    // Check if the birthday hasn't occurred yet this year
    if (now.getMonth() < birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
        years--;
        months += 12;
    }

    // Check if the days are negative, meaning the month should be adjusted
    if (days < 0) {
        months--;
        // Calculate the number of days in the previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        days += (new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 0)).getDate();
    }

    // Check if the hours are negative, meaning the day should be adjusted
    if (hours < 0) {
        days--;
        hours += 24;
    }

    // Check if the minutes are negative, meaning the hour should be adjusted
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }

    // Check if the seconds are negative, meaning the minute should be adjusted
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}
