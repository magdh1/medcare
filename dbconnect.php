<?php

  define(‘HOST’,’localhost’);

  define(‘USER’,’your_user_name’);

  define(‘PASS’,’your_password);

  define(‘DB’,database_name’);

  $con = mysqli_connect(HOST,USER,PASS,DB);

   if (!$con){

                 die(“Error in connection” . mysqli_connect_error()) ;

  }

?>