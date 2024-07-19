// 입력
function addTask() {
    const taskInput = document.getElementById('task-input');
    const inputText = taskInput.value.trim();

    if (inputText !== '') {
        const inputList = document.getElementById('inputList');
        const listText = document.createElement('li');

        listText.innerHTML = `${inputText} <button class="delete_btn"><img src="./img/x_icon.png" alt="x_icon"></button>`;

        inputList.appendChild(listText);
        taskInput.value = '';
    }
}

// 버튼을 클릭했을 때 입력
document.getElementById('add-btn').addEventListener('click', addTask);

// 엔터키를 눌렀을 때 입력
document.getElementById('task-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// 삭제
document.getElementById('inputList').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete_btn') || event.target.parentElement.classList.contains('delete_btn')) {
        const listItem = event.target.closest('li');
        listItem.remove();
    }
});