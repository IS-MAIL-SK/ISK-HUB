<?php
// inc/theme-setup.php - Theme Setup
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
?>
