const $clock = document.getElementById('clock');

const Clock = function () {
    const now = new Date ();
    const hours24 = now.getHours ();
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours24  >= 12 ? 'PM' : "AM";

    $clock.innerHTML = `${hours12}:${minutes} <span class=smallText>${ampm}</span>`
}

Clock();
setInterval(() => Clock(), 1000);