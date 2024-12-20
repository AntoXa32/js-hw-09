const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

formEl.addEventListener('input', event => {
  const target = event.target;
  const { name, value } = target;

  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
    formData[name] = value;
    console.log(value);
  }
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});
