/****************************************************************************************
 * This file implements a basic Express server for the backend.
 * We recommend adding your endpoints between the START/END ENDPOINT DEFINITIONS comments
 * If you're not familiar with Express, you may find it helpful to review the `/groups` and `groups/:groupId/users`
 * endpoints below, which exercise basic endpoint and database operations
 ****************************************************************************************/

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const { User, Group } = require("./db");

const app = express();

app.use(bodyParser.json());

app.use("/", express.static(path.resolve(__dirname, "..", "build")));

/******************************
 * START ENDPOINT DEFINITIONS *
 ******************************/

// Quick guide to endpoint definition:
// * router.get("/something")                --> simple GET url
// * router.get("/something/:myVariable")    --> dynamic GET url, myVariable available in `req.params` (as a *string*)
// * router.post("/something")               --> simple POST url, body available as `req.body`
// * query parameters ("/something?foo=bar") --> available in `req.query`; `res.query.foo === 'bar'`

app.get("/groups", async (req, res, next) => {
  try {
    // db query for all groups, returning only the id and name columns
    const groups = await Group.findAll({ attributes: ["id", "name"] })
    // all requests must eventually call one of the following:
    // 1. res.json(obj) - serializes obj to JSON (with toJSON() if necessary) and return it in the response body
    // 2. res.send() - return an empty response body
    // 3. next(error) - return a server error (status code 500)
    // A request that does not do any of these will hang
    res.json(groups);
  } catch (error) {
    next(error);
  }
});

app.get("/groups/:groupId/users", async (req, res, next) => {
  try {
    // db query for Group with primary key specified by :groupId in the path
    const group = await Group.findByPk(req.params.groupId);
    if (!group) {
      res.status(404); // set the HTTP status code to 404
      res.send(); // send an empty response body
      return;
    }
    const users = await group.getUsers(); // database query for all Users in the Group
    res.json(users);
  } catch (error) {
    next(error);
  }
});

/****************************
 * END ENDPOINT DEFINITIONS *
 ****************************/

app.listen(5000, () => {
  console.log("App running on http://localhost:5000");
});

module.exports = app;
