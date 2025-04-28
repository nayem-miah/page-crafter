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
		} else if ( from === 'readMoreBack' ) {
			setAttributes( {
				readMoreBackgroundActive: 'default',
			} );
		} else if ( from === 'readMoreColor' ) {
			setAttributes( {
				readMoreColorActive: 'default',
			} );
		} else if ( from === 'infoTitleColor' ) {
			setAttributes( {
				activeColor: 'default',
			} );
		} else if ( from === 'infoContentColor' ) {
			setAttributes( {
				activeContentColor: 'default',
			} );
		} else if ( from === 'infoCallActionColor' ) {
			setAttributes( {
				activeCallActionColor: 'default',
			} );
		} else if ( from === 'infoCallActionBackColor' ) {
			setAttributes( {
				activeCallActionBack: 'default',
			} );
		} else if ( from === 'infoCallActionBorderColor' ) {
			setAttributes( {
				ActiveCallActionborderColor: 'default',
			} );
		} else if ( from === 'infoBorderColor' ) {
			setAttributes( {
				ActiveBorderColor: 'default',
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
		} else if ( from === 'readMoreBack' ) {
			setAttributes( {
				readMoreBackgroundActive: 'hover',
			} );
		} else if ( from === 'readMoreColor' ) {
			setAttributes( {
				readMoreColorActive: 'hover',
			} );
		} else if ( from === 'infoTitleColor' ) {
			setAttributes( {
				activeColor: 'hover',
			} );
		} else if ( from === 'infoContentColor' ) {
			setAttributes( {
				activeContentColor: 'hover',
			} );
		} else if ( from === 'infoCallActionColor' ) {
			setAttributes( {
				activeCallActionColor: 'hover',
			} );
		} else if ( from === 'infoCallActionBackColor' ) {
			setAttributes( {
				activeCallActionBack: 'hover',
			} );
		} else if ( from === 'infoCallActionBorderColor' ) {
			setAttributes( {
				ActiveCallActionborderColor: 'hover',
			} );
		} else if ( from === 'infoBorderColor' ) {
			setAttributes( {
				ActiveBorderColor: 'hover',
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
