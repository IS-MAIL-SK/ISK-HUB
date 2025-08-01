<?php
/**
 * Theme Name: ISK-HUB
 * Description: A premium light novel platform theme
 * Version: 1.0
 * Author: Theme Developer
 * Text Domain: isk-hub
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Theme setup
function isk_hub_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('menus');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'isk-hub'),
        'footer' => __('Footer Menu', 'isk-hub'),
    ));
}
add_action('after_setup_theme', 'isk_hub_setup');

// Enqueue styles and scripts
function isk_hub_scripts() {
    wp_enqueue_style('isk-hub-style', get_stylesheet_uri());
    wp_enqueue_style('isk-hub-fonts', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    wp_enqueue_script('isk-hub-script', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'isk_hub_scripts');

// Register widget areas
function isk_hub_widgets_init() {
    register_sidebar(array(
        'name' => __('Sidebar', 'isk-hub'),
        'id' => 'sidebar-1',
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'isk_hub_widgets_init');
?>
