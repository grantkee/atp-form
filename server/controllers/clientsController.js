const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllClients = (req, res) => {
  console.log("ooo buddy :D")
  pool.query("SELECT * FROM test", (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const getClientById = (req, res) => {
  console.log("got the deets")
  let sql = "SELECT * FROM test WHERE id = ?"
  let id = parseInt( req.params.id )
  sql = mysql.format(sql, [ id ])

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err)
    console.log(rows)
    return res.json(rows);
  })
}

const createClient = (req, res) => {
  console.log('we got a new one :O')
  const { first_name, last_name, date_of_birth, email, address, city } = req.body
  let sql = "INSERT INTO test ( first_name, last_name, date_of_birth, email, address, city ) VALUES (?, ?, ?, ?, ?, ?)"
  sql = mysql.format(sql, [ first_name, last_name, date_of_birth, email, address, city ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    console.log('post: ' + results)
    return res.json({ newId: results.insertId });
  })
}

const updateClientById = (req, res) => {
  const { firstName, lastName } = req.body
  let sql = "UPDATE clients SET first_name = ?, last_name = ? WHERE id = ?"
  sql = mysql.format(sql, [ firstName, lastName, req.params.id ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.status(204).json();
  })
}

const deleteClientByFirstName = (req, res) => {
  let sql = "DELETE FROM clients WHERE first_name = ?"
  sql = mysql.format(sql, [ req.params.first_name ])

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} Client(s)` });
  })
}

module.exports = {
  getAllClients,
  getClientById,
  createClient
}