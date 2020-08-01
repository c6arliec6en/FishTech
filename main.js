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
    alert('請填入姓名或公司名稱')
  } else if (!email) {
    alert('請填入Email方便我們與您聯絡')
  } else if (!text.value) {
    alert('請留下您的需求，我們將盡快與您聯絡！')
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