<header id="header">
	<div class="row">
		<?php if (isset($class) && $class == 'home-page'): ?>
			<a id="logo" href="index.php"><img src="images/layout/brains_of_fire_logo-white.png" alt="Brains on Fire"></a>
		<?php else: ?>
			<a id="logo" href="index.php"><img src="images/layout/brains_of_fire_logo.png" alt="Brains on Fire"></a>
		<?php endif; ?>
		<div class="tab-bar">
			<a class="right-off-canvas-toggle menu-icon" href="#"><span>Menu</span></a>
		</div>
	</div>
	<nav class="right-off-canvas-menu">
		<a class="exit-off-canvas"></a>
		<ul class="primary-nav">
			<li><a href="index.php">Home</a></li>
			<li><a href="movements.php">Build a Movement</a></li>
			<li><a href="learn_movement.php">Learn to Build a Movement</a></li>
			<li><a href="case_studies.php">Case Studies</a></li>
			<li><a href="individual.php">Meet Our Tribe</a></li>
		</ul>
		<ul class="secondary-nav">
			<li><a href="blog/">Blog</a></li>
			<li><a href="books.php">Books</a></li>
			<li><a href="speaking.php">Speaking</a></li>
			<li><a href="store.php">Store</a></li>			
			<li><a href="hello.php">Hello</a></li>
			<li><a href="http://brainsonfirenews.tumblr.com/">Published</a></li>
		</ul>
	</nav>
</header>