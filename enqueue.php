<?php
// inc/enqueue.php - Enqueue Scripts and Styles
function isk_hub_scripts() {
    wp_enqueue_style('isk-hub-style', get_stylesheet_uri());
    wp_enqueue_style('isk-hub-fonts', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    wp_enqueue_script('isk-hub-script', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'isk_hub_scripts');
?>
