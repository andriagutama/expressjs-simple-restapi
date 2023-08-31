# ExpressJS Simple REST API

Based on tutorial at : https://santrikoding.com/tutorial-set/tutorial-expressjs-restful-api

#### install dependencies

```
npm install
```

##### install nodemon

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