const express = require("express");
const router = express.Router();
const db = require("../db");
const ExpressError = require("../expressError");

router.get('/', async (req, res, next) => {
    try {
    const invoices = await db.query('SELECT * FROM invoices');
    return res.json(invoices.rows)
    } catch(e) {
      return next(e)
    }
  })
router.get('/:id', async (req, res, next) => {
    try {
    const id = req.params.id
    const invoice = await db.query('SELECT * FROM invoices WHERE id=$1', [id])
    return res.json(invoice.rows)
    } catch(e) {
      return next(e)
    }
  })
router.post('/', async (req, res, next) => {
    try {
    const {comp_code, amt} = req.body
    const add_invoice = await db.query('INSERT INTO invoices(comp_code, amt) VALUES($1, $2)', [comp_code, amt]);
    const invoice = await db.query('SELECT * FROM invoices WHERE =$1', [comp_code])
    return res.json(invoice.rows)
    } catch(e) {
      return next(e)
    }
  })
router.put('/:id', async (req, res, next) => {
    try {
    const id = req.params.id
    const {comp_code, amt} = req.body
    const select = await db.query("SELECT id, comp_code FROM invoices WHERE id=$1", [req.params.id])
    if (select.rows.length == 0) {
      throw new ExpressError("Row not found", 404)
    }
    const updateInvoice = await db.query('UPDATE invoices SET comp_code=$1, amt=$2 WHERE id=$3', [comp_code, amt, id]);
    return res.json({invoice: {
        id, comp_code, amt
    }})
    } catch(e) {
      return next(e)
    }
  })
router.delete('/:id', async (req, res, next) => {
    try {
    const id = req.params.id    
    const deleteInvoice = await db.query('DELETE FROM invoices where id=$1', [id]);
    return res.json({"status": "deleted"})
    } catch(e) {
      return next(e)
    }
  })
router.get('/companies/:code', async (req, res, next) => {
    try {
    const code = req.params.code
    const company = await db.query('SELECT * FROM companies INNER JOIN invoices on companies.code=invoices.comp_code WHERE companies.code=$1', [code]);
    return res.json(company.rows)
    } catch(e) {
      return next(e)
    }
  })

module.exports = router