// Ініціалізація лічильника
let count = 0;

// Отримання елементів
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// Обробка натискань кнопок
buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count = 0;
        }

        // Оновлення значення
        value.textContent = count;

        // Зміна кольору
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
    });
})