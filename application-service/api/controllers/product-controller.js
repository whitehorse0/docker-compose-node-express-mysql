const database = require('../config/database-manager')
const connection = database.createConnection()

class ProductController {

  list () {
    return (req, res, next) => {
      connection.query('CALL sp_GetProduct();', function (error, result, fields) {
        if (error) throw error
        if(result[0].length== 0){
          res.status(404).send({
              code: 404,
              message: "Products not found"
          })
        }else{
          res.status(202).send({
              code : 202,
              message: "Success get products",
              data : result[0]
          })
        }
      })
    }
  }
  
  listProductTax () {
    return (req, res, next) => {
      connection.query('CALL sp_GetProduct();', function (error, result, fields) {
        if (error) throw error
        if(result[0].length== 0){
          res.status(404).send({
              code: 404,
              message: "Products tax not found"
          })
        }else{
          res.status(202).send({
              code : 202,
              message: "Success get products tax",
              data : result[0]
          })
        }
      })
    }
  }



}

module.exports = new ProductController()