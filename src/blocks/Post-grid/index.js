
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: {
		src: 'grid-view',
		background: '#FFFFFF',
		foreground: '#10B981',
	},
	edit: Edit,
} );



