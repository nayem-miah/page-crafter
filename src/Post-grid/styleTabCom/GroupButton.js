import { Button, ButtonGroup } from '@wordpress/components';

export default function GroupButton( {
	active,
	setAttributes,
	from,
	titleStyle,
} ) {
	const handleDefault = () => {
		if ( from === 'titleColor' ) {
			setAttributes( {
				titleStyle: {
					...titleStyle,
					activeColor: 'default',
				},
			} );
		} else if ( from === 'contentBackground' ) {
			setAttributes( {
				activeBackground: 'default',
			} );
		}
	};

	const handleHover = () => {
		if ( from === 'titleColor' ) {
			setAttributes( {
				titleStyle: {
					...titleStyle,
					activeColor: 'hover',
				},
			} );
		} else if ( from === 'contentBackground' ) {
			setAttributes( {
				activeBackground: 'hover',
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
				onClick={ handleDefault }
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
				onClick={ handleHover }
			>
				Hover
			</Button>
		</ButtonGroup>
	);
}
