<?php
/**
 * Plugin Name:       Third Party Extensions
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       third-party-extensions
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Registers the scripts and styles required to extend and render
 * the Gutenberg's settings page.
 */
function tpe_enqueue_settings_page_assets() {
	$script_path       = 'build/index.js';
	$script_asset_path = 'build/index.asset.php';
	$script_asset      = require( $script_asset_path );

	$script_url = plugins_url( $script_path, __FILE__ );

	wp_enqueue_script(
		'third-party-extensions-assets',
		$script_url,
		$script_asset['dependencies'],
		$script_asset['version']
	);
}
add_action( 'gutenberg_settings_page_after_enqueue_assets', 'tpe_enqueue_settings_page_assets' );
