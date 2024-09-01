<?php
/**
 * Plugin Name:       Gutenberg Settings Page
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-settings-page
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function wpdocs_my_plugin_menu() {
	add_options_page( 
		__( 'My Options', 'textdomain' ),
		__( 'Gutenberg Settings Page', 'textdomain' ),
		'manage_options',
		'gutenberg-settings-page.php',
		'my_plugin_page'
	);
}

add_action( 'admin_menu', 'wpdocs_my_plugin_menu' );

function my_plugin_page() {
	echo '<div id="admin-root" style="max-width: 500px;"></div>';
}

/**
 * Registers the scripts and styles required to render
 * the settings page using Gutenberg components.
 */
function gsp_enqueue_settings_page_assets() {
	$script_path       = 'build/index.js';
	$script_asset_path = 'build/index.asset.php';
	$script_asset      = require( $script_asset_path );

	$script_url = plugins_url( $script_path, __FILE__ );

	wp_enqueue_script(
		'twpv-gutenberg-settings-page',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version']
	);

	/*
	 * This is necessary as it loads styles required by Gutenberg components.
	 */
	wp_enqueue_style( 'wp-edit-blocks' );

	/**
	 * This action can be used by 3rd-party developers looking to extend
	 * the settings page by adding their own scripts and styles.
	 */
	do_action( 'gutenberg_settings_page_after_enqueue_assets' );
}
add_action( 'admin_enqueue_scripts', 'gsp_enqueue_settings_page_assets' );
