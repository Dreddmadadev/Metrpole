<?php
    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "test@madadev.fr";
    $to = "contact@metropole-equipements.com";
    $subject = "Essai Envoi serveur ";
    $message = "OK";
    $headers = "De :" . $from;
    mail($to,$subject,$message, $headers);
    echo "L'email a été envoyé.";
?>