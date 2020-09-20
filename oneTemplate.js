const cors = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'http://54.178.36.181:3000/'
const template = document.getElementById('template')
const data = []
let dataCount = 0

const loader = `
      <div class="text-center">
        <div
          class="spinner-border text-info"
          role="status"
          style="width: 10rem; height: 10rem"
        >
          <span class="sr-only">Loading...</span>
        </div>
         <div class="text-info" style="margin-left:50px; font-size:64px;">Loading.....</div>
      </div>
      `
const body = document.querySelector('.row')
body.innerHTML = loader

fetch(cors + BASE_URL)
  .then((response) => {
    return response.json()
  })
  .then((myJson) => {
    data.push(...myJson)
    data.sort((a, b) => a.id - b.id)
    let removeTarget = document.querySelector('.text-center')
    removeTarget.remove()
    const urlParams = new URLSearchParams(window.location.search);
    const number = urlParams.get('number')

    const iframe = data.find(a => a.id === parseInt(number))

    console.log(iframe.preview)


    const iframeHTML = `
      <iframe src="${iframe.preview}" width="100%" height="1000px" frameborder="1" scrolling="yes"></iframe>
    `

    const i = document.querySelector(".iframe")

    i.innerHTML = iframeHTML

  })







