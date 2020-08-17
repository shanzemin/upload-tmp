'use strict'

const fse = require('fs-extra')
const path = require('path')
const md5 = require('md5')

module.exports = dir => {
  return async function (ctx, next) {
    fse.ensureDirSync(dir)
    const files = []
    for (const file of ctx.request.files) {
      file.name = file.filename
      file.filename = path.basename(file.filepath)
      const target = path.join(dir, file.filename)
      fse.copyFileSync(file.filepath, target)
      file.path = target

      const stats = fse.statSync(target)
      file.size = stats.size
      const fileBuf = fse.readFileSync(target)
      file.md5 = md5(fileBuf)
      files.push(file)
    }
    ctx.request.files = files
    await next()
  }
}
