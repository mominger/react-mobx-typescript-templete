//const fs = require('fs')

const matchReg = /^\.([^\{\s]+)/gm
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

function compile(soure) {
  let res = true
  const mapArr = []

  while(res) {
    res = matchReg.exec(soure)
    if (res) {
      mapArr.push({
        fullStr: res[0],
        cssName: res[1],
        index: res[2]
      })
    }
  }

  const headerContent = []
  const exportContent = []
  mapArr.forEach(map => {
    const name = map.cssName
    headerContent.push(isDev ? `\$${name}: ${name};` : `\$${name}: ${name}- + unique-id();`)
    exportContent.push(`${name}: \$${name};`)

    const reg = new RegExp(`^\\.${name}`, 'm')
    soure = soure.replace(reg, `.#{\$${name}}`)
  })

  soure = `${headerContent.join('\n')}\n${soure}\n\n:export {\n${exportContent.join('\n')}\n}`

  //fs.writeFileSync('./test.scss', soure, {encoding: 'utf-8'})

  return soure
}

module.exports = function (source) {
  const newSoure = compile(source)
  return newSoure
};
