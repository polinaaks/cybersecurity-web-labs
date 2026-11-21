// 1. Отримуємо інформацію про браузер та ОС
const osInfo = navigator.platform;
const browserInfo = navigator.userAgent;
const systemData = `ОС: ${osInfo}, Браузер: ${browserInfo}`;

// 2. Зберігаємо у localStorage
localStorage.setItem('systemInfo', systemData);

// 3. Відображаємо у футері
const footer = document.getElementById('system-info');
footer.textContent = localStorage.getItem('systemInfo');


const variant = 1; 
const url = `https://jsonplaceholder.typicode.com/posts/${variant}/comments`;

async function fetchReviews() {
    try {
        const response = await fetch(url);
        const comments = await response.json();
        
        const container = document.getElementById('reviews-container');
        comments.forEach(comment => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${comment.email}</strong>: <p>${comment.body}</p><hr>`;
            container.appendChild(div);
        });
    } catch (error) {
        console.error('Помилка завантаження відгуків:', error);
    }
}
fetchReviews();

const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

// Встановлюємо таймер на 60 секунд
setTimeout(() => {
    modal.style.display = 'block';
}, 60000); // 60000 мс = 1 хвилина

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');

function setSmartTheme() {
    const currentHour = new Date().getHours();
    // Денна тема: від 07:00 до 21:00
    if (currentHour >= 7 && currentHour < 21) {
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
    }
}

// Запускаємо перевірку при завантаженні
setSmartTheme();

// Ручне перемикання теми за допомогою кнопки
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
});

