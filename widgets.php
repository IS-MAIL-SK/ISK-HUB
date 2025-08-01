<?php
// inc/widgets.php - Widget Areas
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
