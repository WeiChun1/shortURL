//製作五碼亂數
function shortenURL(num) {
  const letters_num = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let temp = ''
  for (let i = 0; i < num; i++) {
    temp+=letters_num[Math.ceil(Math.random() * letters_num.length - 1)]
  }
  return temp
}

module.exports = shortenURL