const TrmApi = require("trm-api").default;
const { Router } = require('express')
const { axios } = require('axios')
const { API_KEY } = process.env
const { History } = require('../db')
const router = Router()
const trmApi = new TrmApi(API_KEY);

let currentDate = new Date().toJSON().slice(0, 10);
let date = currentDate.toString()

router.get('/', (req, res, next) => {
    trmApi.history({ order: "DESC", limit: 101 })
    .then((data) => {
        let trm_registers = []
        data.map((trm) => {
            let amount = trm.valor.toString()
            let since_date = trm.vigenciadesde.toString().split('T')
            since_date = since_date[0]
            let date_since_date = new Date(since_date)
            let expiration_date = trm.vigenciahasta.toString().split('T')
            expiration_date = expiration_date[0]
            let date_expiration_date = new Date(expiration_date)
            trm_registers.push({
                amount: amount,
                since_date: date_since_date,
                expiration_date: date_expiration_date
            })
        })
        History.bulkCreate(trm_registers,{
            ignoreDuplicates: true,
          }).then(()=>{
            res.send('succesfully added') 
        }).catch((error) => next(error))
    })
    .catch((error) => {next(error); console.log('falle')});
})

module.exports = router;