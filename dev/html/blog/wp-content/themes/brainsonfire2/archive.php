<?php get_header(); ?>

<div id="main">
    <div class="m1">
        <article id="content">
        	<?php if (have_posts()) : ?>
            <div class="c1">            
            	<?php $post = $posts[0]; // Hack. Set $post so that the_date() works. ?>
				<?php /* If this is a category archive */ if (is_category()) { ?>
                <div class="post-title archive"><h2><?php printf(__( 'Archive for the &#8216;%s&#8217; Category', 'base' ), single_cat_title('', false)); ?></h2></div>
                <?php /* If this is a tag archive */ } elseif( is_tag() ) { ?>			
                <div class="post-title archive"><h2><?php printf(__( 'Posts Tagged &#8216;%s&#8217;', 'base' ), single_tag_title('', false)); ?></h2></div>
                <?php /* If this is a daily archive */ } elseif (is_day()) { ?>
                <div class="post-title archive"><h2><?php _e('The Archives', 'base'); ?></h2></div>
                <?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
                <div class="post-title archive"><h2><?php _e('The Archives', 'base'); ?></h2></div>
                <?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
                <div class="post-title archive"><h2><?php _e('The Archives', 'base'); ?></h2></div>
                <?php /* If this is an author archive */ } elseif (is_author()) { ?>
                <div class="post-title">
                	<?php $authordata = get_userdata(get_query_var('author')); ?>
					<!--
                    <div class="img-box">
                        <?php echo get_avatar($authordata->ID,70); ?>
                    </div>
					-->
                    <h2>Posts by <?php echo $authordata->nickname?></h2>
                </div>
                <?php /* If this is a paged archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
                <div class="post-title archive"><h2><?php _e('The Archives', 'base'); ?></h2></div>
                <?php } ?>            
                
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
                <div class="title">
                    <h1><?php _e('Not Found', 'base'); ?></h1>
                </div>
                <div class="content">
                    <p><?php _e('Sorry, but you are looking for something that isn\'t here.', 'base'); ?></p>
                </div>
            </div>
            <?php endif; ?>
        </article>
        <?php get_sidebar('archive'); ?>
    </div>
</div>

<?php get_footer(); ?>
