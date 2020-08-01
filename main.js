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
    // alert('請填入姓名或公司名稱')
    swal("請填入姓名/公司名稱", "", "warning", { button: "好的/Okey" })
  } else if (!email) {
    swal("請填入Email方便我們與您聯絡", "", "warning", { button: "好的/Okey" })
  } else if (!text.value) {
    swal("請留下您的需求或任何建議", "", "warning", { button: "好的/Okey" })
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

    swal("我們將盡快與您聯絡！", "", "success", { button: "好的/Okey" })

  }

})