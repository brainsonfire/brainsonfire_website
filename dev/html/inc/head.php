<!DOCTYPE html>
<!--[if IE 9]><html class="no-js ie9 lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->

    <title><?php if (!empty($title)) { echo $title; } else { echo 'Title Here'; } ?></title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="images/layout/favicon.ico" />
    <link rel="apple-touch-icon" href="images/layout/apple-favicon.png"/>

	<script src="//use.typekit.net/gyt8tgn.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/foundation.css" />
    <link media="screen, projection" rel="stylesheet" type="text/css" href="css/screen.css" />
    <link media="screen, projection" rel="stylesheet" type="text/css" href="css/dev.css" />
    <link media="print" rel="stylesheet" type="text/css" href="css/print.css" />

    <!--[if lte IE 8]><link media="screen, projection" rel="stylesheet" type="text/css" href="css/ie8.css" /><![endif]-->
    <script src="js/min/modernizr.custom.01216.min.js"></script>
    <!--[if lte IE 8]><script type="text/javascript" src="js/min/respond.min.js"></script><![endif]-->

    <!-- DELETE AFTER IMPLEMENTATION - KEEP IN HTML FOLDER AND LOCAL -->
    <?php if($_SERVER['HTTP_HOST'] == 'localhost'): ?>
        <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
    <?php endif;?>

</head>
