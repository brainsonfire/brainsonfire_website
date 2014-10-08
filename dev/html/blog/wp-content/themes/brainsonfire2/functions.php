<?php

//staging restrictions
if (file_exists(sys_get_temp_dir() . '/staging-restrictions.php'))
{
    define('STAGING_RESTRICTIONS', true);
    require_once sys_get_temp_dir() . '/staging-restrictions.php';
}

include(get_template_directory() . '/widgets.php');

add_theme_support('automatic-feed-links');

if ( ! isset($content_width)) $content_width = 900;

//remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'wp_generator');

add_action('after_setup_theme', 'theme_localization');
function theme_localization()
{
    load_theme_textdomain('base', get_template_directory() . '/languages');
}


if (function_exists('register_sidebar'))
{
    register_sidebar(array(
        'id'            => 'banner',
        'name'          => __('Banner', 'base'),
        'before_widget' => '<div class="banner-block">',
        'after_widget'  => '</div>',
        'before_title'  => '',
        'after_title'   => ''
    ));
    register_sidebar(array(
        'id'            => 'contact-info',
        'name'          => __('Contact Info', 'base'),
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',
        'after_title'   => ''
    ));
    register_sidebar(array(
        'id'            => 'social-network',
        'name'          => __('Social Network', 'base'),
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',
        'after_title'   => ''
    ));
    register_sidebar(array(
        'id'            => 'related-posts',
        'name'          => __('Related Posts', 'base'),
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '',
        'after_title'   => ''
    ));
    register_sidebar(array(
        'id'            => 'archive-sidebar',
        'name'          => __('Archive Sidebar', 'base'),
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ));
    register_sidebar(array(
        'id'            => 'default-sidebar',
        'name'          => __('Default Sidebar', 'base'),
        'before_widget' => '<li>',
        'after_widget'  => '</li>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ));
}

if (function_exists('add_theme_support'))
{
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(50, 50, true); // Normal post thumbnails
    add_image_size('default-single-post-thumbnail', 400, 9999, true);
    add_image_size('blog-post-thumbnail', 769, 274, true);
    add_image_size('single-post-thumbnail', 769, 439, true);
    add_image_size('related-post-thumbnail', 270, 111, true);
}

register_nav_menus(array(
    'top'     => __('Top Navigation', 'base'),
    'primary' => __('Primary Navigation', 'base'),
));


//add [email]...[/email] shortcode
function shortcode_email($atts, $content)
{
    $result = '';
    for ($i = 0; $i < strlen($content); $i++)
    {
        $result .= '&#' . ord($content{$i}) . ';';
    }

    return $result;
}

add_shortcode('email', 'shortcode_email');

// register tag [template-url]
function filter_template_url($text)
{
    return str_replace('[template-url]', get_bloginfo('template_url'), $text);
}

add_filter('the_content', 'filter_template_url');
add_filter('get_the_content', 'filter_template_url');
add_filter('widget_text', 'filter_template_url');

// register tag [site-url]
function filter_site_url($text)
{
    return str_replace('[site-url]', get_bloginfo('url'), $text);
}

add_filter('the_content', 'filter_site_url');
add_filter('get_the_content', 'filter_site_url');
add_filter('widget_text', 'filter_site_url');


/* Replace Standart WP Menu Classes */
function change_menu_classes($css_classes)
{
    $css_classes = str_replace("current-menu-item", "active", $css_classes);
    $css_classes = str_replace("current-menu-parent", "active", $css_classes);

    return $css_classes;
}

add_filter('nav_menu_css_class', 'change_menu_classes');


//allow tags in category description
$filters = array('pre_term_description', 'pre_link_description', 'pre_link_notes', 'pre_user_description');
foreach ($filters as $filter)
{
    remove_filter($filter, 'wp_filter_kses');
}


//Make WP Admin Menu HTML Valid
function wp_admin_bar_valid_search_menu($wp_admin_bar)
{
    if (is_admin())
        return;

    $form = '<form action="' . esc_url(home_url('/')) . '" method="get" id="adminbarsearch"><div>';
    $form .= '<input class="adminbar-input" name="s" id="adminbar-search" tabindex="10" type="text" value="" maxlength="150" />';
    $form .= '<input type="submit" class="adminbar-button" value="' . __('Search', 'base') . '"/>';
    $form .= '</div></form>';

    $wp_admin_bar->add_menu(array(
        'parent' => 'top-secondary',
        'id'     => 'search',
        'title'  => $form,
        'meta'   => array(
            'class'    => 'admin-bar-search',
            'tabindex' => -1,
        )
    ));
}

function fix_admin_menu_search()
{
    remove_action('admin_bar_menu', 'wp_admin_bar_search_menu', 4);
    add_action('admin_bar_menu', 'wp_admin_bar_valid_search_menu', 4);
}

add_action('add_admin_bar_menus', 'fix_admin_menu_search');

add_filter('next_posts_link_attributes', 'posts_link_next_class');
function posts_link_next_class()
{
    return 'class="btn-next"';
}

add_filter('previous_posts_link_attributes', 'posts_link_prev_class');
function posts_link_prev_class()
{
    return 'class="btn-prev"';
}

add_filter('next_post_link', 'add_css_class_to_next_post_link');
function add_css_class_to_next_post_link($link)
{
    $link = str_replace("<a ", "<a class='btn-next'  ", $link);

    return $link;
}

add_filter('previous_post_link', 'add_css_class_to_prev_post_link');
function add_css_class_to_prev_post_link($link)
{
    $link = str_replace("<a ", "<a class='btn-prev'  ", $link);

    return $link;
}

add_filter('pre_option_link_manager_enabled', '__return_true');


/**
 * Base URL of site
 *
 * @param bool $return
 * @return string
 */
function base_url($return = false)
{
    // base_url
    if ($_SERVER['HTTP_HOST'] == 'localhost' )
    {
		// loalhost
        $uriParts = explode('/', $_SERVER['REQUEST_URI']);
        $base_url = "http://localhost/" . $uriParts[1] . "/";

    } else
    {
        // production
        $base_url = 'http://' . $_SERVER['HTTP_HOST'] . '/';
    }

    if ($return)
        return $base_url;
    else
        echo $base_url;
}