<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> TAB DI PRESENTAZIONE </title>
    <link rel=stylesheet href="/static/css/stile.css"> 
    <script src="/static/js/button-cancella.js" defer> </script>


</head>

<body>
    <h1 class="waitingForConnection"> WEWE ecco la lista dei libri !! </h1>   <!-- myname "chiave"-> e mi restituisce "valore" -->
    <ul>
        <#list libri as libro>
        <li> ${libro.author} è l'autore di ${libro.title} edito nell'anno #{libro.yearr}
        <a class="disappari" id="elimina" href = "/deleteBook?id=${libro.id}"> Elimina </a></li>             <!-- collego stringa "elimina" -> per andare -->
        </#list>
    </ul>

<p> 

<#if libri?has_content>        <!-- 'has_content'-> fornito da free markeR --> 
    <p> Ci sono #{libri?size} libri nell'elenco </p>
<#else> 
    <p> Non ci sono libri nello scaffale </p> 
</#if>

<p> <a href= static/html/aggiungi-libro.html> Aggiungi un libro </a>
</p>
<p id="pi">
 <a href= "#" id="butto"> Elimina un libro </a>
</p>


</body>
</html>


