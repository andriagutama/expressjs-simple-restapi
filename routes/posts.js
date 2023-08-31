const express = require('express');
const router = express.Router();

//import database
const connection = require('../config/database');
const { body, validationResult } = require('express-validator');

/**
 * INDEX POSTS
 */

router.get('/', function (req, res) {
    //query
    connection.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Posts',
                data: rows
            })
        }
    });
});

/**
 * STORE POSTS
 */

router.post('/store', [
	//validation
	body('title').notEmpty(),
	body('content').notEmpty(),
], (req, res) => {
	const errors = validationResult(req);

	if(!errors.isEmpty()) {
		return res.status(422).json({
			errors : errors.array()
		});
	}

	//define form data
	let formData = {
		title : req.body.title,
		content : req.body.content,
	};

	//insert query
	connection.query('INSERT INTO posts SET ?', formData, function(err, rows) {
		if(err) {
			return res.status(500).json({
				status : false,
				message : 'Internal server error',
			});
		}else {
			return res.status(201).json({
				status  : true,
				message : 'Post added',
			});
		}
	});
});

/**
 * SHOW POSTS
 */

router.get('/(:id)', function(req, res) {
	let id = req.params.id;

	connection.query(`SELECT * FROM posts WHERE id = ${id}`, function (err, rows) {
		if(err) {
			return res.status(500).json({
				status : false,
				message : 'Internal server error',
			});
		}

		//if post not found
		if(rows.length <= 0) {
			return res.status(404).json({
				status : false,
				message : 'Data not found',
			});
		}else {
			return res.status(201).json({
				status  : true,
				message : 'Post data',
				data : rows[0],
			});
		}
	});
});

/**
 * UPDATE POSTS
 */

router.patch('/update/:id', [
	//validation
	body('title').notEmpty(),
	body('content').notEmpty(),
], (req, res) => {
	const errors = validationResult(req);

	if(!errors.isEmpty()) {
		return res.status(422).json({
			errors : errors.array()
		});
	}

	//id post
	let id = req.params.id;

	//data post
	let formData = {
		title : req.body.title,
		content : req.body.content,
	};

	//update query
	connection.query(`UPDATE posts SET ? WHERE id = ${id}`, formData, function (err, rows) {
		if(err) {
			return res.status(500).json({
				status : false,
				message : 'Internal server error',
			});
		}else {
			return res.status(201).json({
				status  : true,
				message : 'Post updated',
			});
		}
	});
});

/**
 * DELETE POSTS
 */

router.delete('/delete/:id', function (req, res) {
	let id = req.params.id;

	connection.query(`DELETE FROM posts WHERE id = ${id}`, function (err, rows) {
		if(err) {
			return res.status(500).json({
				status : false,
				message : 'Internal server error',
			});
		}else {
			return res.status(201).json({
				status  : true,
				message : 'Post deleted',
			});
		}
	});
});

module.exports = router;