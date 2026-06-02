
const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
}

// const form = document.getElementById('feedback-form');
const form =document.querySelector('.feedback-form')
// Додаємо обробник події submit
form.addEventListener('input', (e)=> {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log( JSON.stringify(formData));
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


document.addEventListener('DOMContentLoaded',()=>{
    const JSONdata = localStorage.getItem(STORAGE_KEY);
    const mdata    = JSON.parse(JSONdata);
    // console.log(mdata);
    if (mdata.email!=="" || mdata.message!=="") {
       formData.email   = mdata.email;
       formData.message = mdata.message;       
       form.elements['email'].value   = mdata.email;
       form.elements['message'].value = mdata.message;
    }
});