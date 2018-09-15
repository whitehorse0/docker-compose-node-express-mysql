const express = require('express')
const router = express.Router()
const database = require('../config/database-manager')
const connection = database.createConnection()

router.get('/', function (req, res, next) {
    connection.query('CALL sp_GetOrders();', function (error, result, fields) {
        if (error) throw error
        if(result[0].length== 0){
          res.status(404).send({
              code: 404,
              message: "Orders not found"
          })
        }else{
          res.status(202).send({
              code : 202,
              message: "Success get orders",
              data : result[0]
          })
        }
      })
})

module.exports = router