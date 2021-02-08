# Social Network Mongo API
![NoSql API](https://img.shields.io/github/languages/top/yooperjb/social_api) ![MIT](https://img.shields.io/badge/license-MIT-blue)

## Description
This project represents an example of using Express.js for routing a MongoDB database, and the Mongoose ODM for creating and querying a social network API. It offers the ability to create users, thoughts, and reactions; update users and thoughts, and add and delete friends.

An example video walking through the different routes in Insomnia can be viewed [here](https://drive.google.com/file/d/1ke6gzUQqmsWgVdIrtaa8mTDx9l6Fr0RL/view?usp=sharing).

## Table of Contents
* [Installation Requirements](#install)
* [NPM Packages Used](#npm)
* [Application Usage](#usage)
* [Tests](#tests)
* [Questions](#questions)

## <a name=install></a>Installation Requirements

### <a name=npm></a>NPM Packages
* [express](https://expressjs.com/) - web application framework
* [mongoose](https://mongoosejs.com/) - mongodb object modeling for node.js
* [moment](https://momentjs.com/) - date/time formatter

***

## <a name=usage></a>Application Usage
The application can be cloned from github using:
```
git clone git@github.com:yooperjb/social_api.git
```
To the use the API MongoDB must be installed locally, or by using a service such at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). For testing purposes a local installation is recommended. The database settings are within the server.js file which will create and connect to the database described.

To run the application, from root use:
```
npm start
```
## Tests
No tests were completed yet for this application. 

## Questions
Any questions or feedback regarding this project can be sent directly to my [email](mailto:jason.barnes@humboldt.edu). This project and others can be found at my [Github page]('https://github.com/yooperjb').