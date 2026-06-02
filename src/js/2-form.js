
const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
}


const form =document.querySelector('.feedback-form')
// Додаємо обробник події submit
form.addEventListener('input', (e)=> {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
});


// Обробка submit
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(formData);
    if (formData.email==="" || formData.message ==="") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
    }
    // Очищення після відправки
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData.email   = "";
    formData.message = "";
});



function restoreFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    let mdata = null;

    try {
        mdata = savedData ? JSON.parse(savedData) : null;
    } catch (e) {
        console.error("Invalid JSON in localStorage:", e);
        mdata = null;
    }

    if (mdata && mdata.email && mdata.message) {
       formData.email   = mdata.email;
       formData.message = mdata.message;       
       form.elements['email'].value   = mdata.email;
       form.elements['message'].value = mdata.message;
    }else{
       form.elements['email'].value   = "";
       form.elements['message'].value = ""; 
    }   
};

// Якщо DOM ще не готовий — чекаємо, інакше виконуємо одразу
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", restoreFormData);
} else {
  restoreFormData();
}