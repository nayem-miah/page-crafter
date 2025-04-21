import { Button, ButtonGroup } from '@wordpress/components';

export default function GroupButton( { active, setAttributes, from } ) {
	const handleDefault = () => {
		if ( from === 'titleColor' ) {
			setAttributes( {
				titleActiveColor: 'default',
			} );
		} else if ( from === 'contentBackground' ) {
			setAttributes( {
				activeBackground: 'default',
			} );
		} else if ( from === 'metaColor' ) {
			setAttributes( {
				metaActiveColor: 'default',
			} );
		} else if ( from === 'desColor' ) {
			setAttributes( {
				desActiveColor: 'default',
			} );
		}
	};

	const handleHover = () => {
		if ( from === 'titleColor' ) {
			setAttributes( {
				titleActiveColor: 'hover',
			} );
		} else if ( from === 'contentBackground' ) {
			setAttributes( {
				activeBackground: 'hover',
			} );
		} else if ( from === 'metaColor' ) {
			setAttributes( {
				metaActiveColor: 'hover',
			} );
		} else if ( from === 'desColor' ) {
			setAttributes( {
				desActiveColor: 'hover',
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
