import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(
	metadata.name,
	{
		icon: {
			src: 'edit-page',
			background: '#FFFFFF',
			foreground: '#10B981',
		},
		edit: Edit,
		save,
	}
);
