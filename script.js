const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

function formatTime(date) {
    const hours12 = date.getHours() % 24 || 24;
    const minutes = date.getMinutes ();

    return `${hours12.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}`;
}

function formatDate(date) {
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`}