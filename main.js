//WARGAMES JOSHUA SIMULATOR 3000
let step = 0
let name = ''
let phoneNumber = ''
let comment = ''
$('#contact').on('click', function () {
  $('span').focus()
})
$('span').on('input', function () {
  var v = $(this).text()
  v = v.replace(/\s/g, '')
  t = $(this)
  l = $('li:last-of-type')

  if (step == 0) {
    name = v
  } else if (step == 1) {
    phoneNumber = v
  } else if (step == 2) {
    comment = v
  }
})

$('span').on('keyup', (e) => {
  if (e.keyCode == 13) {
    if (step == 0 && name.length > 0) {
      l.after(`<li>Hi ${name}！請留下真的找得到你的電話`)
      t.text('')
      step = 1
    } else if (step == 1 && phoneNumber.length > 0) {
      l.after(
        `<li>｡◕◡◕｡)ﾉ 非常感谢，有什麼疑惑或感興趣的項目嗎？歡迎告訴我們，`
      )
      t.text('')
      step = 2
    } else if (step == 2 && comment.length > 0) {
      l.after(`<li>幫你打開信箱了，記得寄信給我們唷 ヾ(＠゜▽゜@)ノ`)
      t.text('')
      window.location.href = `mailto:michelle210181@gmail.com ?Subject=${name} 詢問網頁製作, 電話號碼 ${phoneNumber}&body=${comment}`
    }
  } else {
    return
  }
})

setInterval(function () {
  $('.blink').toggleClass('blinker')
}, 400)
