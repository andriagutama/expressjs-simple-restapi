# ExpressJS Simple REST API

Based on tutorial at : https://santrikoding.com/tutorial-set/tutorial-expressjs-restful-api

#### setup database

create new mysql database with name "db_expressjs_simple_restapi" or any name you want. database config is in config/database.js file.

create table `posts`

```sql
CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL
);
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);
```

#### install dependencies

```
npm install
```

#### install nodemon

```
npm install -g nodemon
```

#### run application

```
nodemon npm start
```

server will run on http://localhost:3000

#### get all post

```http
GET /api/posts
```

#### create post

```http
POST /api/posts/store

{
    "title" : "Tutorial Express.js Restful API",
    "content" : "Belajar Membuat CRUD Restful API Dengan Express.js, Dimana Materi Dijelaskan Secara Terstruktur Step By Step https://santrikoding.com/tutorial-set/tutorial-expressjs-restful-api"
}
```

failed response
```javascript
{
    "errors": [
        {
            "msg": "Invalid value",
            "param": "title",
            "location": "body"
        },
        {
            "msg": "Invalid value",
            "param": "content",
            "location": "body"
        }
    ]
}
```

success response
```javascript
{
    "status": true,
    "message": "Post added"
}
```

#### get post

```http
GET /api/posts/:id
```

#### update post

```http
PATCH /api/posts/update/:id

{
    "title" : "Tutorial Express.js Restful API",
    "content" : "Belajar Membuat CRUD Restful API Dengan Express.js, Dimana Materi Dijelaskan Secara Terstruktur Step By Step https://santrikoding.com/tutorial-set/tutorial-expressjs-restful-api"
}
```

#### delete post

```http
DELETE /api/posts/delete/:id
```
