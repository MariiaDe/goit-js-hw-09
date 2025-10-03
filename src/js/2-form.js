const STORAGE_KEY = "feedback-form-state";


const formData = {
  email: "",
  message: ""
};


const form = document.querySelector(".feedback-form");


const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  if (parsedData.email) {
    form.elements.email.value = parsedData.email;
    formData.email = parsedData.email;
  }
  if (parsedData.message) {
    form.elements.message.value = parsedData.message;
    formData.message = parsedData.message;
  }
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value.trim(); 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  
  console.log(formData);

  
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = "";
  formData.message = "";
});