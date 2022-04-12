// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող
// txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU)
// քանակը(os.cpus()):


const random = require('random')
const fs = require('fs')
const os = require('os')

const name = Array.from(" ".repeat(8)).map(x=>x=random.int(0,9)).join("")

fs.writeFile(`${name}.txt`, os.cpus().length.toString(), err => {
    if (err) {
      console.error(err)
      return
    }}
)
