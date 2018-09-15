const express = require('express')
const router = express.Router()
const database = require('../config/database-manager')
const connection = database.createConnection()
const reducer = (accumulator, currentValue) => accumulator + currentValue

router.get('/', function (req, res, next) {
  connection.query(
    `SELECT product.label, product.amount, product.tax_id,
    tax.name as tax_name, tax.label as tax_label, tax.id 
    FROM product
    INNER JOIN tax
    ON product.tax_id = tax.id;
    `,
   function (error, result, fields) {
    let products = []
    if (error) throw error
    if (result.length > 0) {
      let data = {
        item: JSON.parse(JSON.stringify(result)),
        total_amount: 0,
        total_tax_amount: 0,
        grand_amount: 0
      }

      data.item.map((i) => {
        let tax_amount = 0
        switch (i.tax_name) {
          case 'food':
          tax_amount = ((1 * i.amount)/100) + 10
          break;
          case 'tobacco':
          tax_amount = (10 * i.amount)/ 100
          break;
          case 'entertainment':
          tax_amount = (1 * (i.amount - 100)) /100
          break;
        }
        
        i.tax_amount = tax_amount
        i.total_amount = i.amount + tax_amount
        return i;
      })
      data.item.sort((a, b) => b.tax_amount - a.tax_amount)

      let total_amount = data.item.map(i => i.amount).reduce(reducer)
      let total_tax_amount = data.item.map(i => i.tax_amount).reduce(reducer)
      let grand_amount = data.item.map(i => i.total_amount).reduce(reducer)

      data.total_amount = total_amount
      data.total_tax_amount = total_tax_amount
      data.grand_amount = grand_amount
      
      products = data
    }
    res.render('index', { products })
  })
})

module.exports = router