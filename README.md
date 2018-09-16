# Table of Contents
- [Intro](#intro)
- [Docker](#docker)
- [Express - Mysql](#express)
    - [Quickstart](#quickstart)
- [Routing](#routing)
    - [Basic Routing](#basic-routing)
    - [Route Groups](#route-groups)
        - [Route Prefixes](#route-group-prefixes)
- [Template](#template) 

---

<a name="intro"></a>

# DOCKER-COMPOSE-NODE-EXPRESS-MYSQL

Functionality provided by 'Docker Compose' for defining and running multi-container Docker applications.

---

<a name='docker'></a>

### Docker

* [Docker][repo-docker] ([Site][website-docker], cc) - Docker is a computer program that performs operating-system-level virtualization, also known as "containerization". It was first released in 2013 and is developed by Docker, Inc. Docker is used to run software packages called "containers".

[repo-docker]: https://github.com/docker
[website-docker]: https://www.docker.com/

<a name='express'></a>

### Express

* [Express - Mysql][repo-express-mysql] ([Site][website-express-mysql], cc) - Adding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app. A pure node.js JavaScript Client implementing the MySql protocol.

[repo-express-mysql]: https://github.com/mysqljs/mysql
[website-express-mysql]: https://expressjs.com/en/guide/database-integration.html#mysql


<a name="quickstart"></a>

## Quickstart

Running:

```sh
docker-compose up

```
> **NOTES** Listen on: http://localhost:9090/

---

<a name="routing"></a>

# Routing

<a name="basic-routing"></a>

## Basic Routing


You will define all of the routes for your application in the `routes/index.js` file. The most basic routes simply accept a URI and a `Closure`:


```javascript
const express = require('express')
const router = express.Router()

route.get('/foo', function (req, res, next) {
  let bar = []
  res.render('index', { bar }) // if you want to compiles your template inserts locals there, and creates html or ejs file on views.
  
  // or you can do something other ways
  /*
   * res.status(202).send({
   *   code : 202,
   *   message: "Success get bar",
   *   data : bar
   * })
   *
   */
})
```

#### Available Router Methods

The router allows you to register routes that respond to any HTTP verb:

```javascript
const express = require('express')
const router = express.Router()

router.get('/', home.list())
router.get('/taxs', taxs.list())
router.get('/products', product.list())
router.get('/products/tax', product.listProductTax())
router.get('/orders', order.list())
```

<a name="route-groups"></a>

## Route Groups

Route groups allow you to share route attributes, such as middleware or namespaces, across a large number of routes without needing to define those attributes on each individual route. Shared attributes are specified in an array format as the first parameter to the `$router->group` method.

<a name="route-group-prefixes"></a>

### Route Prefixes

The `prefix` group attribute may be used to prefix each route in the group with a given URI. For example, you may want to prefix all route URIs within the group with `api`:

```javascript
const express = require('express')
const router = express.Router()
const index = require('./routes/index')
const app = express()

router.use('/', index)

app.use('/api/v1', router)
```
For more information about Plates, see [here](http://expressjs.com/en/guide/routing.html).

---

<a name="template"></a>
# Template

This project uses template Embedded JavaScript templating. For more information about Plates, see [here](http://ejs.co/).
