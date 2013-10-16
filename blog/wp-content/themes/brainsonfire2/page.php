<?php get_header(); ?>

<div id="main">	
	<?php if (have_posts()) : ?>
	
	<?php while (have_posts()) : the_post(); ?>
    <div class="m1">
        <article id="content">
            <div class="c1">
                <div class="post single">                    
                    <h2><?php the_title(); ?></h2>
                    <?php the_content(); ?>
					<?php wp_link_pages(); ?>
                </div>
            </div>
        </article>        
    </div>
    <?php endwhile; ?>
	
	<?php else : ?>
    <div class="post">
        <div class="title">
            <h1><?php _e('Not Found', 'base'); ?></h1>
        </div>
        <div class="content">
            <p><?php _e('Sorry, but you are looking for something that isn\'t here.', 'base'); ?></p>
        </div>
    </div>
    <?php endif; ?>
</div>

<?php get_footer(); ?>