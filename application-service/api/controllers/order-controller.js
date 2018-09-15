const database = require('../config/database-manager')
const connection = database.createConnection()

class OrderController {

  list () {
    return (req, res, next) => {
      connection.query('CALL sp_GetOrders();', function (error, result, fields) {
        if (error) throw error
        if(result[0].length== 0){
          res.status(202).send({
              code: 202,
              message: "Order data is empty",
              data: []
          })
        }else{
          res.status(202).send({
              code : 202,
              message: "Success get orders",
              data : result[0]
          })
        }
      })
    }
  }

}

module.exports = new OrderController()