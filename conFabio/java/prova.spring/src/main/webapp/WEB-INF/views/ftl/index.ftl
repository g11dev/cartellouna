<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> TAB DI PRESENTAZIONE </title>
    <link rel=stylesheet href="C:\Users\KepLenPC16\Desktop\prova.spring\src\main\webapp\static\css\stile.css">
    <style>

    /*  IMPORTO DIRETTAMENTE IN HTML IL CSS */
@-webkit-keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.0; }
}

    /*CREO LA CLASSE IN CUI INSERIRE CSS */
.waitingForConnection {
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(.5, 0, 1, 1);
  -webkit-animation-duration: 1.7s;
  font-family: sans-serif; font-size: 1.8em; color: darkred;
  font-weight: bold;
}

    </style> <!-- Dentro <style> inserisco tutte robe del css --> 


</head>

<body>
    <h1 class="waitingForConnection"> WEWE ecco la lista dei libri !! </h1>   <!-- myname "chiave"-> e mi restituisce "valore" -->
    <ul>
        <#list libri as libro>
        <li> ${libro.author} è l'autore di ${libro.title} edito nell'anno #{libro.yearr}</li>
        </#list>
    </ul>

<p> 

<#if libri?has_content>        <!-- 'has_content'-> fornito da free market --> 
    <p> Ci sono #{libri?size} libri nell'elenco </p>
<#else> 
    <p> Non ci sono libri nello scaffale </p> 
</#if>

<p> <a href= static/html/aggiungi-libro.html> Aggiungi un libro </a> </p>


</body>
</html>
