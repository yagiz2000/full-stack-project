//Database oluşturmak için yapılması gerekenler
//Bilgisayarınızda mysql 8.0 command line client'ı açınız
//Gelen command line'a şifrenizi giriniz(Büyük ihtimalle sizin mysql şifreniz olacak)
//Daha sonra CREATE DATABASE deneme; komutunu giriniz

//Her şey düzgünce oluşturulduysa back-end dosyasını clonelayıp çalıştırabilirsiniz.

//Buradaki dökümantasyonu okuyarak hallettim
//https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/
const dbConfig = require("./db.config");


const mysql = require("mysql2");
db = mysql.createPool({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
})

db.promise().query("CREATE TABLE IF NOT EXISTS CategoryTable ( id int NOT NULL AUTO_INCREMENT, title varchar(255), parentId int, isDeleted boolean, PRIMARY KEY (id))");
db.promise().query("CREATE TABLE IF NOT EXISTS userstable (name varchar(255), surname varchar(255), email varchar(255),id int NOT NULL AUTO_INCREMENT, PRIMARY KEY (id))");
db.promise().query("CREATE TABLE IF NOT EXISTS advert_table (id int NOT NULL AUTO_INCREMENT,title varchar(255),description varchar(255), creatorId int REFERENCES userstable(id), PRIMARY KEY (id))")
module.exports = db;