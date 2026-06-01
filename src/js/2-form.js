
const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
}

const form = document.getElementById('feedback-form');
// Додаємо обробник події submit
form.addEventListener('input', (e)=> {
    e.preventDefault(); // блокує стандартну відправку
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log( JSON.stringify(formData));
    // e.e
});
// console.log(form);

// Обробка submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formData);
    // Очищення після відправки
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
    console.log(formData);
});