import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(
	metadata.name,
	{
		icon: {
			src: 'info-outline',
			background: '#FFFFFF',
			foreground: '#10B981',
		},
		edit: Edit,
		save,
	}
);
