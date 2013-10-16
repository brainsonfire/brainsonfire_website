<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
	<head>
		<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script type="text/javascript" src="//use.typekit.net/vnn2jfd.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
        <title><?php wp_title(''); ?></title>
        <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/all.css" type="text/css"/>
        <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri(); ?>/style.css"  />
		<?php if ( is_singular() ) wp_enqueue_script( 'theme-comment-reply', get_template_directory_uri()."/js/comment-reply.js" ); ?>
		<?php wp_enqueue_script('jquery'); wp_head(); ?>
		<script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.main.js"></script>
        <!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/ie.css" media="screen"/><![endif]-->
        <!--[if IE]><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/ie.js"></script><![endif]-->
        <script type="text/javascript">var switchTo5x=true;</script>
		<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
        <script type="text/javascript">stLight.options({publisher: "ur-33f01021-9a7c-9a45-9dcd-e5c5e7da36dd", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>
	</head>
	<body class="blog">
        <div id="wrapper">
            <header id="header">
                <div class="header-holder">
                    <h1 class="logo"><a href="http://www.brainsonfire.com"><?php bloginfo('name'); ?></a></h1>
                    <nav id="nav">
                        <a href="#" class="opener">open</a>
                        <?php if(has_nav_menu('primary'))
							  wp_nav_menu( array('container' => false,
							 'theme_location' => 'primary',
							 'menu_class' => 'slide') ); ?>
                    </nav>
                </div>
            </header>
            <?php if(is_active_sidebar('banner')): dynamic_sidebar('banner'); endif; ?>