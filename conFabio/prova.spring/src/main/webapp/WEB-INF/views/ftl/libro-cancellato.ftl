<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title> LIBRO CANCELLATO </title>
    <link rel=stylesheet href="C:\Users\KepLenPC16\Desktop\prova.spring\src\main\webapp\static\css\stile.css">
</head>

<body>
    <#if cancellato> <!-- if worka se cancellato = true -->
        <p> Il libro ${libro.title} di ${libro.author} è stato correttamente cancellato. </p>
    <#else>
        <p> Non ho trovato il libro richiesto, non è stato cancellato nulla. </p> 
    </#if>

<p> <a href= "/"> Torna alla lista dei libri </a> </p>


</body>
</html>
