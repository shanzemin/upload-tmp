'use strict'

const { app, assert } = require('egg-mock/bootstrap')

describe('test/app/controller/home.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json')
    assert(app.config.keys.startsWith(pkg.name))

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  })

  it('should POST /upload', async () => {
    const res = await app.httpRequest()
      .post('/upload')
      .field('name', 'test file')
      .attach('file', 'test/fixtures/测试.txt')
    assert(res.status === 200)
    assert(res.body[0].name === '测试.txt')
  })
})
