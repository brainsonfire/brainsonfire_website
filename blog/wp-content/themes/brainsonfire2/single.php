<?php get_header(); ?>

<div id="main">	
	<?php if (have_posts()) : ?>
	
	<?php while (have_posts()) : the_post(); ?>
    <div class="m1">
        <article id="content">
            <div class="c1">
                <div class="post single">
                    <?php if(has_post_thumbnail()): ?>
                    <div class="img-box">
                        <?php $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(get_the_ID()), 'single-post-thumbnail');?>
                        <a href="<?php the_permalink(); ?>"><img src="<?php echo $image_url[0]; ?>" alt="image description"></a>
                    </div>
                    <?php endif; ?>
                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                    <div class="post-info">
                        <em class="date">Posted on <?php the_time('F jS, Y'); ?></em>
                        <ul>
                            <li><a href="http://bof.crowdstaging.com/blog/author/<?php echo strtolower( get_the_author_meta('display_name') ); ?>/"><?php echo get_the_author_meta('nickname');?></a></li>
                            <li><?php comments_popup_link(__('No Comments', 'base'), __('1 Comment', 'base'), __('% Comments', 'base')); ?></li>
                        </ul>
                    </div>
                    <ul class="social-networks">
                        <li><a class="google st_googleplus_custom" href="#">google</a></li>
                        <li><a class="pinterest st_pinterest_custom" href="http://pinterest.com/brainsonfire/">pinterest</a></li>
                        <li><a class="linkedln st_linkedin_custom" href="#">linkedln</a></li>
                        <li><a class="twitter st_twitter_custom" href="https://twitter.com/BrainsOnFire">twitter</a></li>
                        <li><a class="facebook st_facebook_custom" href="https://www.facebook.com/BrainsOnFire">facebook</a></li>
                        <li><a class="email st_email_custom" href="#">email</a></li>
                        <li><a class="rss st_google_reader_custom" href="http://feeds.feedburner.com/BrainsOnFireBlog">rss</a></li>
                    </ul>
                    <?php the_content(); ?>
                </div>
                <div class="social">
                    <span class='st_googleplus_hcount' displayText='Google +'></span>
                    <span class='st_pinterest_hcount' displayText='Pinterest'></span>
                    <span class='st_linkedin_hcount' displayText='LinkedIn'></span>
                    <span class='st_twitter_hcount' displayText='Tweet'></span>
                    <span class='st_facebook_hcount' displayText='Facebook'></span>
                    <span class='st_email_hcount' displayText='Email'></span>
                </div>
                <div class="commets-block">
                    <?php comments_template(); ?>
                </div>
                <div class="post-paging">
                    <?php previous_post_link('%link', 'older posts'); ?>
                    <?php next_post_link('%link', 'newer posts'); ?>
                </div>
            </div>
        </article>
        <aside id="sidebar">
            <?php get_search_form(); ?>
            <ul class="accordion">
                <li>
                    <h3>author: <a href="http://bof.crowdstaging.com/blog/author/<?php echo strtolower( get_the_author_meta('display_name') ); ?>/"><em><?php echo get_the_author_meta('nickname');?></em></a></h3>
                    <a href="#" class="opener">authors: <?php echo get_the_author_meta('display_name');?></a>
                    <div class="slide">
                        <?php echo get_the_author_meta('description');?>
                    </div>
                </li>
                <?php if(is_active_sidebar('related-posts')): ?>
                <li>
                	<?php dynamic_sidebar('related-posts'); ?>
                </li>
                <?php endif; ?>
            </ul>
        </aside>
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