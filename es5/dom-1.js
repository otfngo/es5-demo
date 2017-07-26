var html = document.documentElement;//取得对<html>的引用
console.log(html === document.childNodes[0]);//true
console.log(html === document.firstChild);//true

var body = document.body;//取得对<body>的引用

//querySelector()方法接收一个CSS选择符
//返回与该模式匹配的第一个元素
//如果没有找到匹配的元素，返回null
var body = document.querySelector("body");
var myDiv = document.querySelector("#myDiv");
var selected = document.querySelector(".selected");
var img = document.body.querySelector("img.button");

//querySelectorAll()返回的是所有匹配的元素而不仅仅是一个元素
//这个方法返回的是一个NodeList的实例
//如果没有找个匹配的元素，返回空NodeList
var ems = document.getElementById("myDiv").querySelectorAll("em");
var selecteds = document.querySelectorAll(".selected");
var strongs = document.querySelectorAll("p strong");

