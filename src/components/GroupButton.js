import { Button, ButtonGroup } from '@wordpress/components';

export default function GroupButton( { active, setAttributes, from } ) {
	const fromToAttributeMap = {
		titleColor: 'titleActiveColor',
		contentBackground: 'activeBackground',
		metaColor: 'metaActiveColor',
		desColor: 'desActiveColor',
		readMoreBack: 'readMoreBackgroundActive',
		readMoreColor: 'readMoreColorActive',
		infoTitleColor: 'activeColor',
		infoContentColor: 'activeContentColor',
		infoCallActionColor: 'activeCallActionColor',
		infoCallActionBackColor: 'activeCallActionBack',
		infoCallActionBorderColor: 'ActiveCallActionborderColor',
		infoBorderColor: 'ActiveBorderColor',
		infoBackground: 'activeBackground',
		infoBoxShadow: 'ActiveboxShadowColor',
	};

	const handleClick = ( mode ) => {
		const attributeName = fromToAttributeMap[ from ];
		if ( attributeName ) {
			setAttributes( {
				[ attributeName ]: mode,
			} );
		}
	};

	return (
		<ButtonGroup>
			<Button
				isPressed={ active === 'default' }
				variant="secondary"
				style={ {
					minWidth: '100px',
					padding: '8px 12px',
					backgroundColor: active === 'default' ? '#008db4' : '',
					color: active === 'default' ? '#fff' : '',
				} }
				onClick={ () => handleClick( 'default' ) }
			>
				Default
			</Button>
			<Button
				isPressed={ active === 'hover' }
				variant="secondary"
				style={ {
					minWidth: '100px',
					padding: '8px 12px',
					backgroundColor: active === 'hover' ? '#008db4' : '',
					color: active === 'hover' ? '#fff' : '',
				} }
				onClick={ () => handleClick( 'hover' ) }
			>
				Hover
			</Button>
		</ButtonGroup>
	);
}
