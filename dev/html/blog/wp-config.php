<?php



/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
// define('WP_CACHE', true); //Added by WP-Cache Manager
// define( 'WPCACHEHOME', '/mnt/stor3-wc2-dfw1/486029/www.brainsonfire.com/web/content/blog/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager

if($_SERVER['SERVER_NAME'] == 'dev.brainsonfire.com') {

	define( 'DB_NAME', '486029_brains_5_5_14' );
	define( 'DB_USER', '486029_bofdbad' );
	define( 'DB_PASSWORD', '25sdDRN69lAm' );
	define( 'DB_HOST', 'mysql51-110.wc2.dfw1.stabletransit.com' );
	define('DB_CHARSET', 'utf8');
	define('DB_COLLATE', '');   
    
} else {
	 define('DB_NAME', 'bof_blog');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_HOST', 'localhost');
    define('DB_CHARSET', 'utf8');
    define('DB_COLLATE', '');   
}

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'u+g>A`Gl|6-<d4nvuH}g%Bi@i<7d~t#6ih9+9]C;U-}-|efZV&6<vi-vD,xo_V6m');
define('SECURE_AUTH_KEY',  '7u)jp8U/w>Y1?y]5Z7M3g.O@j6JHU9xiNeu#<xfs(T:Km/^DQUIkB?!X<HS#a=9r');
define('LOGGED_IN_KEY',    '0aHrDC$>63_K9Mw%j_SAk&z,^h=1>Y%xN3@9 #tT.epO@I-8D_-uE$2+Bpn|>Rg2');
define('NONCE_KEY',        '~f_={-`^7^z#{x;7[(CR/82|e(`Q^%1P7AeXY_WCl-2Saq9{%~g;Y{pBG3V.CyS$');
define('AUTH_SALT',        'stwDL>r#^b0}ji#^T<.1pT?t.>?>sj7OcTF>Yi|%F<c+GJ8k8xV*`C)7q=*wcg4g');
define('SECURE_AUTH_SALT', 'i[W486Z}x~>w-+R&9|@>oZ)C<-0.;]{R:kX8rlK6!ppB)o-r^lo6nA8p2?TkV!]/');
define('LOGGED_IN_SALT',   'gsUV,e+a;W_8MkMsDZ$0SY->YV9C$NO6dC+ 1O^E1:8zNE)-},j%(|kPQO@MWE5m');
define('NONCE_SALT',       'm~R6}b:+NA+^v5-Buh2yQ-uj%u=]Dec:]W;.kTSwLb$+6yETR,}CDfmO0qGz~8fr');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
