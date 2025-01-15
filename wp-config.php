<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tizair' );

/** Database username */
define( 'DB_USER', 'wordpress' );

/** Database password */
define( 'DB_PASSWORD', 'Tizair' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '(=kRzE+K^fZtq EDSyncN?D#l=W;1<^LHqFkGpJy$~&ZH[(cw[I6[EuO#CCW(8s8' );
define( 'SECURE_AUTH_KEY',  '(r,vYl!>ibcV#Em;W>q60oi~Db[1`Ei7AHqYXpgZ-f5I9XPC<Q,|/en|>:c;sub|' );
define( 'LOGGED_IN_KEY',    '3c)K)$x:)Wn&rRvY{9Xny4K>@x0H~I0`id&,E@V5PCK@:1*ep3J$Q:0G_9~~hp`.' );
define( 'NONCE_KEY',        'L@/oG?i[YKV;wl<s)aMa.(&FW/^ce!lU/-rtYj`IVg_JIooiIvM.?1TM.{G04}Y|' );
define( 'AUTH_SALT',        'Nd BV_ngY<^tUeIOUCy##/$qTfSvUCk1{IY<^+-J6aN$Z{<W&ZBeP+k^Vp<ZQF 9' );
define( 'SECURE_AUTH_SALT', 'v{C;xwOc %^P>/;EEM-sG+APw|!t4vFS|7^<XO5=X^U$$Mp{=9 4u9Q5hpx5;eD:' );
define( 'LOGGED_IN_SALT',   'Y5WW5qD -Wnr:#^R[^j{2`=~f|!])uwbL-wqjDMKc-?%I&&Ok{99>=Bikt8;}o+D' );
define( 'NONCE_SALT',       'M9p-<nV+lPEFoShZf3F*CA:9Vc$|L]KT@2WGbA2O4f^leMEawDDwP%(2}9VG4<dA' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
