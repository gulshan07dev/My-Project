// get the elements
const dateValue = document.getElementById('date');
const result = document.getElementById('result');
const btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(dateValue.value).getDay();
    const resultText = document.createTextNode(`You Were Born On ${week[date]}`);
    result.appendChild(resultText);
}); 