<?php
$pi = 3.14159;

$raio = (double) fgets(STDIN);

$area = $pi * pow($raio, 2);

printf("A=%.4f\n", $area);
?>