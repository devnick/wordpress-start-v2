<?php

/**
 * Custom CSS
 */
function load_css()
{
    wp_register_style('main', get_template_directory_uri() . '/styles/app.css', [], false, 'all');
    wp_enqueue_style('main');
}
add_action('wp_enqueue_scripts', 'load_css');

/**
 * Custom JS
 */
function load_js()
{
    wp_register_style('main', get_template_directory_uri() . '/js/app.js', [], false, 'all');
    wp_enqueue_style('main');
}
add_action('wp_enqueue_scripts', 'load_js');
