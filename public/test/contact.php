<?php
// $server="localhost";
// $username="root";
// $password="";
// $database="buisness";
$server="localhost";
$username="u331999046_contactus";
$password="8433303An";
$database="u331999046_hiven";
$con=mysqli_connect($server,$username,$password,$database);
if (!$con){
    die("not connect to database");
}
if ($con){
    echo("connected");
}
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // header('Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE, PUT');
    // header('Access-Control-Allow-Headers: Content-Type, Authorization');

    $email = $_POST["email"];
    $name = $_POST["name"];
    $feedback=$_POST['feedback'];
    $number=$_POST['number'];
    $insert = mysqli_query($con, "INSERT INTO `u331999046_hiven`.`feedback` ( `email`, `name`,`feedback`,`number`, `dt`) VALUES ( '$email', '$name','$feedback','$number', current_timestamp());");
}
?>
