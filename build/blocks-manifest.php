<?php
// This file is generated. Do not modify it manually.
return array(
	'pagecrafter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/pagecrafter',
		'version' => '0.1.0',
		'title' => 'PageCrafter',
		'category' => 'Page-Crafter',
		'icon' => 'edit-page',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'pagecrafter',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'Post-grid' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/postgrid',
		'version' => '0.1.0',
		'title' => 'PostGrid',
		'category' => 'Page-Crafter',
		'icon' => 'edit-page',
		'description' => 'A simple post grid',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 10
			),
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 6
			),
			'displayImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'orderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'categories' => array(
				'type' => 'array',
				'items' => array(
					'type' => 'object'
				)
			)
		),
		'textdomain' => 'postgrid',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	)
);
