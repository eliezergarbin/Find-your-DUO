import express from 'express'

const app = express()

app.get('./ads', () => {
    console.log('Acessou Ads!')
})

app.listen(3333)