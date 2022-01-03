<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <script src="../../librerias/jquery-3.6.0.min.js"></script>
        
    <script>
        function validar(value){

           if(value==""){
               $(".name").after("Rellena este campo");
           }
        }
    </script>
</head>
<body>
    <form action="">
        <label for="name"></label>
        <input type="text" id="name" class="name">
        <br>
        <label for="lastName"></label>
        <input type="text" id="lastName" class="lastName">
        <br>
        <label for="cellphone"></label>
        <input type="text" id="cellphone" class="cellphone">

        <input type="submit" value="Enviar" onclick="validar()">
    </form>
</body>

</html>