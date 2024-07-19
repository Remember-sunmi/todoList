const $date = document.getElementById('date');

const displayDate = function () {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    $date.innerHTML = `${year}년 ${month}월 ${day}일`
}

displayDate();


