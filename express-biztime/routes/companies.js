const express = require("express");
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
    const companies = await db.query("SELECT * FROM companies");
    return res.json(companies.rows)
    } catch(e) {
      return next(e)
    }
})
router.get('/:code', async (req, res, next) => {
    try {
    const code = req.params.code
    const company = await db.query("SELECT * FROM companies WHERE code=$1", [code]);
    return res.json(company.rows)
    } catch(e) {

      return next(e)
    }
})
router.post('/', async (req, res, next) => {
    try {
    const {code, name, description} = req.body
    const companies = await db.query('INSERT INTO companies(code, name, description) VALUES($1, $2, $3)', [code, name, description]);
    const company = await db.query("SELECT * FROM companies WHERE code=$1", [code])
    return res.json(company.rows)
    } catch(e) {
      return next(e)
    }
})

router.put('/:code', async (req, res, next) => {
    try {
    const code = req.params.code
    const {name, description} = req.body
    const updateCompany = await db.query('UPDATE companies SET name=$1, description=$2 WHERE code=$3', [name, description, code]);
    return res.json({company: {
        code, name, description
    }})
    } catch(e) {
      return next(e)
    }
})

router.delete('/:code', async (req, res, next) => {
    try {
    const code = req.params.code    
    const deleteCompany = await db.query('DELETE FROM companies where code=$1', [code]);
    return res.json({"status": "deleted"})
    } catch(e) {
      return next(e)
    }
})



module.exports = router