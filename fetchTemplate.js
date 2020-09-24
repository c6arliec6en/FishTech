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
    fetchTargetData(data)
    let removeTarget = document.querySelector('.text-center')
    removeTarget.remove()
  })

  .then(() => {
    document.querySelectorAll('.lazy').forEach((element) => io.observe(element))
  })

const handleScroll = () => {
  if (window.scrollY + window.screen.height >= document.body.scrollHeight) {
    loadMore()
  }
}

const loadMore = () => {
  dataCount += 24
  fetchTargetData(data)
}

const fetchTargetData = (targetData) => {
  targetData.slice(dataCount, dataCount + 24).forEach((item) => {
    template.innerHTML += `
        <a href="./model?number=${item.id}" class="col-sm-6 col-md-4 lazy" target="_blank">
          <img src="${item.img}">
           <div class="tag">${item.name}</div>
        </a>
    `
  })
}

window.addEventListener('scroll', handleScroll)
