let formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";


function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  }
}


function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


populateForm();


form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  
  if (name in formData) {
    formData[name] = value.trim();
    saveToLocalStorage();
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
  formData = { email: "", message: "" };
  form.reset();
});
