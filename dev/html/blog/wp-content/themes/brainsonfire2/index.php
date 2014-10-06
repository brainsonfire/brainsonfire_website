<?php get_header(); ?>

<div id="main">
    <div class="m1">
        <article id="content">
            <?php if (have_posts()) : ?>
            
            <div class="c1">
                <?php while (have_posts()) : the_post(); ?>
                <div class="post">
                    <?php if(has_post_thumbnail()): ?>
                    <div class="img-box">
                        <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'blog-post-thumbnail');?>
                        <a href="<?php the_permalink(); ?>"><img src="<?php echo $image_url[0]; ?>" alt="image description"></a>
                    </div>
                    <?php endif; ?>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="post-info">
                        <em class="date">Posted on <?php the_time('F jS, Y'); ?></em>
                        <ul>
                            <li><?php the_author_posts_link(); ?></li>
                            <?php $comments = get_comments_number(get_the_ID()); ?>
                            <?php if($comments > 0): ?>
	                            <li><?php comments_popup_link(__('No Comments', 'base'), __('1 Comment', 'base'), __('% Comments', 'base')); ?></li>
                            <?php else: ?>    
                            	<li><a class="no-comments" href="<?php comments_link(); ?>">0 Comments</a></li>
                            <?php endif; ?>
                        </ul>
                    </div>
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
            <div class="post">
                <div class="head">
                    <h1><?php _e('Not Found', 'base'); ?></h1>
                </div>
                <div class="content">
                    <p><?php _e('Sorry, but you are looking for something that isn\'t here.', 'base'); ?></p>
                </div>
            </div>
            <?php endif; ?>
        </article>
        <?php get_sidebar(); ?>
    </div>
</div>

<?php get_footer(); ?>
