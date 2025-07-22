document.getElementById("loginForm").addEventListener("submit", function (e)
{
 e.preventDefault();

 const username=document.getElementById("username").value;
 const password=document.getElementById("password").value;

 //Sample log in

 if (username=== "admin" && password=== "password123"){
    window.location.href="portfolio.html";} else
    {document.getElementById("error").textContent="Invalid Credentials!";}

});