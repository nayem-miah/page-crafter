<?php
/** Plugin Name: PageCrafter
 * Plugin URI: https://nayemmiah.com/
 * Description: Page-crafter is a WordPress Gutenberg Blocks plugin to shape your website in your way without coding knowledge
 * Version: 0.1.0
 * Requires at least: 6.7
 * Requires PHP: 7.4
 * Author: Nayem Miah
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: pagecrafter
 * @package CreateBlock */

if(!defined('ABSPATH')){exit;}

function pagecrafter_block_categories($categories,$post){
return array_merge($categories,array(array('slug'=>'Page-Crafter','title'=>__('Page Crafter','pagecrafter'))));}
add_filter('block_categories_all','pagecrafter_block_categories',10,2);

function pagecrafter_register_blocks(){
$blocks=['Info-box','Post-grid','pagecrafter'];
foreach($blocks as $block){register_block_type(__DIR__."/build/blocks/{$block}");}}
add_action('init','pagecrafter_register_blocks');

function pg_enqueue_assets(){
wp_enqueue_script('pg-pagination',plugin_dir_url(__FILE__).'./src/utils/pagination.js',['jquery'],'1.0',true);
wp_localize_script('pg-pagination','pg_ajax_object',['ajax_url'=>admin_url('admin-ajax.php'),'nonce'=>wp_create_nonce('pg_nonce')]);
wp_add_inline_script('pg-pagination-js','window.pgBlockAttributes = {};');}
add_action('wp_enqueue_scripts','pg_enqueue_assets');

if(!function_exists('truncate_excerpt')){
function truncate_excerpt($excerpt,$word_limit=30){
if(empty($excerpt)){return '';}
$excerpt=wp_strip_all_tags($excerpt);
$words=explode(' ',$excerpt);
if(count($words)<=$word_limit){return implode(' ',$words);}
$truncated=array_slice($words,0,$word_limit);
return implode(' ',$truncated).'...';}}

if(!function_exists('get_padding_css')){
function get_padding_css($values){
$top=isset($values['top'])?$values['top']:0;
$right=isset($values['right'])?$values['right']:0;
$bottom=isset($values['bottom'])?$values['bottom']:0;
$left=isset($values['left'])?$values['left']:0;
return"{$top}px {$right}px {$bottom}px {$left}px;";}}

add_action('wp_ajax_pagination','handle_pagination');
add_action('wp_ajax_nopriv_pagination','handle_pagination');

function handle_pagination(){
if(!isset($_POST['nonce'])||!wp_verify_nonce($_POST['nonce'],'pg_nonce')){wp_send_json_error('Invalid nonce');}
$paged=intval($_POST['paged'])?:1;
$query=$_POST['data_query']??[];
$attrs=$_POST['data_attr']??[];
$query_args=array_merge($query,['paged'=>$paged]);
$posts=get_posts($query_args);
$attributes=$attrs;
$posts_per_page=!empty($attributes['numberOfPosts'])?intval($attributes['numberOfPosts']):5;
$total_posts=wp_count_posts()->publish;
$pagination=$posts_per_page>0?ceil($total_posts/$posts_per_page):1;
ob_start();?><div class="post-grid-wrapper"><?php foreach($posts as $post){setup_postdata($post);?>
<div class="grid-card"><?php if(has_post_thumbnail($post)&&$attributes['displayImage']!=='false'){?>
<div class="post-grid-thumbnail"><?php echo get_the_post_thumbnail($post,'medium');?></div><?php }?><div class="content-body"><div class="post-grid-title"><h5><a href="<?php the_permalink($post);?>"><?php echo esc_html(get_the_title($post));?></a></h5></div></div></div><?php } wp_reset_postdata();?></div><?php if($pagination>1):?><div class="pagination ajax-pagination"><?php for($i=1;$i<=$pagination;$i++):?><button data-page="<?php echo $i;?>"><?php echo $i;?></button><?php endfor;?></div><?php endif;
$html=ob_get_clean();wp_send_json_success($html);}
?>
