import http from 'node:http'

const revision = process.env.REVISION ?? 'unknown'

http
  .createServer((req, res) => {
    if (req.url === '/healthz') return res.end('ok')
    res.setHeader('x-revision', revision)
    res.end('after-hours is open\n')
  })
  .listen(8080)
