const form = document.querySelector('#contact-form')

//form information
const input = document.querySelectorAll('.c-input')
const text = document.querySelector('.c-text')

form.addEventListener('submit', () => {
  event.preventDefault()

  const name = input[0].value
  const email = input[1].value
  const phone = input[2].value

  if (!name) {
    console.log('name cant be empty')
  } else if (!email) {
    console.log('Email cant be empty')
  } else if (!text.value) {
    console.log('info cant be empty')
  } else {

    var template_params = {
      "name": name,
      "email": email,
      "phone": phone,
      "info": text.value
    }

    var service_id = "default_service";
    var template_id = "demand";
    emailjs.send(service_id, template_id, template_params);

  }

})