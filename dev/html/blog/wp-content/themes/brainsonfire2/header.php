<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" <?php language_attributes(); ?>>
	<head>
		<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title><?php wp_title(''); ?></title>

		<script src="http://192.168.1.2/bof/dev/html/js/min/modernizr.custom.01216.min.js"></script>
    	<!--[if lte IE 8]><script type="text/javascript" src="http://192.168.1.2/bof/dev/html/js/min/respond.min.js"></script><![endif]-->
		
		<script src="//use.typekit.net/gyt8tgn.js"></script>
		<script>try{Typekit.load();}catch(e){}</script>
        
        <link rel="stylesheet" media="all" href="<?php echo get_template_directory_uri(); ?>/all.css" type="text/css"/>
        <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri(); ?>/style.css"  />
		<?php if ( is_singular() ) wp_enqueue_script( 'theme-comment-reply', get_template_directory_uri()."/js/comment-reply.js" ); ?>

		<!-- <?php wp_enqueue_script('jquery'); wp_head(); ?>
			 <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery.main.js"></script>-->
		
		<script src="http://192.168.1.2/bof/dev/html/js/min/jquery-1.11.1.min.js"></script>
		<script src="http://192.168.1.2/bof/dev/html/js/min/blog-helper.min.js"></script>

        <!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/ie.css" media="screen"/><![endif]-->
        <!--[if IE]><script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/ie.js"></script><![endif]-->

        <script type="text/javascript">var switchTo5x=true;</script>
		<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
        <script type="text/javascript">stLight.options({publisher: "ur-33f01021-9a7c-9a45-9dcd-e5c5e7da36dd", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>

        <!--GA-->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-43012620-1', 'brainsonfire.com');
            ga('send', 'pageview');
        </script>
        <!--/end GA-->
	</head>
	
	<body class="blog">
		<div id="wrapper">

		<div class="off-canvas-wrap" data-offcanvas>

			<div class="inner-wrap">

				<header id="header">

					<div class="row">

						<a id="logo" href="../home.php"><img src="../images/layout/brains_of_fire_logo.png" alt="Brains on Fire"></a>
						
						<div class="tab-bar">
							<a class="right-off-canvas-toggle menu-icon" href="#"><span>Menu</span></a>
						</div>

					</div>

					<nav class="right-off-canvas-menu">

						<a class="exit-off-canvas"></a>

						<ul class="primary-nav">
							<li><a href="../home.php">Home</a></li>
							<li><a href="../movements.php">Build a Movement</a></li>
							<li><a href="../learn_movement.php">Learn to Build a Movement</a></li>
							<li><a href="../case_studies.php">Case Studies</a></li>
							<li><a href="../individual.php">Meet Our Tribe</a></li>
						</ul>

						<ul class="secondary-nav">
							<li><a href="blog/">Blog</a></li>
							<li><a href="../books.php">Books</a></li>
							<li><a href="../speaking.php">Speaking</a></li>
							<li><a href="../store.php">Store</a></li>			
							<li><a href="../hello.php">Hello</a></li>
							<li><a href="http://brainsonfirenews.tumblr.com/">Published</a></li>
						</ul>

					</nav>

				</header>

	            <?php if(is_active_sidebar('banner')): dynamic_sidebar('banner'); endif; ?>