# Introduct

## Template engine (handlebars)

## Morgan

HTTP request logger middleware for node.js

The format function will be called with three arguments tokens, req, and res, where tokens is an object with all defined tokens, req is the HTTP request and res is the HTTP response. The function is expected to return a string that will be the log line, or undefined / null to skip logging.

## Middleware

Parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

## Basic routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)
Where:

- app is an instance of express.
- METHOD is an HTTP request method, in lowercase.
- PATH is a path on the server.
- HANDLER is the function executed when the route is matched.

### Query parameters

## MVC model - view - controller

### Create source code priciples MVC

## Connect with mongodb

    - To make the connection between mongodb and nodejs easy we use mongoose

### Mongoose [https://github.com/Automattic/mongoose]

Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.

### install `npm install mongoose`

### Connect to DB

First, we need to define a connection. If your app uses only one database, you should use mongoose.connect. If you need to create additional connections, use mongoose.createConnection.

Both connect and createConnection take a mongodb:// URI, or the parameters host, database, port, options.

- await mongoose.connect('mongodb://localhost/my_database');

### Defining a Model

Models are defined through the Schema interface.
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
author: ObjectId,
title: String,
body: String,
date: Date
});
