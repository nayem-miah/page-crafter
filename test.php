<?php

$someVar = 'Hello World';

function testFunction( $arg1, $arg2 ) {
	echo '<div>' . $arg1 . ' ' . $arg2 . '</div>';
}

testFunction( $someVar, "<script>alert('xss');</script>" );

if ( true ) {
	echo 'This should be indented.';
}
