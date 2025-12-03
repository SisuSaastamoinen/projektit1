<?php
// Yksinkertainen MySQL-yhteys

$servername = "localhost";
$username   = "admin";
$password   = "asdqwe";  // lisää salasana jos sinulla on sellainen
$dbname     = "asiakasrekisteri";

$conn = new mysqli($servername, $username, $password, $dbname);

// Tarkistetaan onnistuiko yhteys
if ($conn->connect_error) {
    die("Tietokantavirhe: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");
?>
