<?php get_header(); ?>

<div id="main">
    <div class="m1">
        <article id="content">
        	<?php if (have_posts()) : ?>
            <div class="c1">                        	
                <div class="post-title archive"><h2><?php _e('Search Results', 'base'); ?></h2></div>
                
                <?php while (have_posts()) : the_post(); ?>
                <div class="post">                    
                    <h2><?php the_title(); ?></h2>                    
                    <?php the_excerpt(); ?>
                    <a href="<?php the_permalink(); ?>" class="link-more">Read More</a>
                </div>
                <?php endwhile; ?>
                
                <div class="post-paging">
                    <?php previous_posts_link(__('newer posts', 'base')) ?>
                    <?php next_posts_link(__('older posts', 'base')) ?>
                </div>
            </div>
            <?php else : ?>
            <div class="c1">  
                <div class="post-title archive">
                    <h2><?php _e('No posts found.', 'base'); ?></h2>
                </div>
                <div class="content">
                    <p><?php _e('Try a different search?', 'base'); ?></p>
                    <?php get_search_form(); ?>
                </div>
            </div>
            <?php endif; ?>
        </article>
        <?php get_sidebar('archive'); ?>
    </div>
</div>

<?php get_footer(); ?>
