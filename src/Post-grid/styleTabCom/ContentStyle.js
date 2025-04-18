import { __ } from '@wordpress/i18n';
import {
	Button,
	ButtonGroup,
	PanelBody,
	ColorPalette,
	BoxControl,
} from '@wordpress/components';
export default function ContentStyle( {
	setAttributes,
	activeBackground,
	contentBackgroundHover,
	contentBackground,
	contentPadding,
	contentMargin,
} ) {
	const currentColor =
		activeBackground === 'default'
			? contentBackground
			: contentBackgroundHover;

	const handleColorChange = ( color ) => {
		if ( activeBackground === 'default' ) {
			setAttributes( { contentBackground: color } );
		} else {
			setAttributes( { contentBackgroundHover: color } );
		}
	};
	return (
		<PanelBody title="Content" initialOpen={ true }>
			<div style={ { marginTop: '16px', marginBottom: '16px' } }>
				<strong>{ __( 'Background', 'postgrid' ) }</strong>
				<div
					style={ {
						display: 'flex',
						justifyContent: 'center',
						marginTop: '8px',
					} }
				>
					<ButtonGroup>
						<Button
							isPressed={ activeBackground === 'default' }
							variant="secondary"
							style={ {
								minWidth: '100px',
								padding: '8px 12px',
								backgroundColor:
									activeBackground === 'default'
										? '#008db4'
										: '',
								color:
									activeBackground === 'default'
										? '#fff'
										: '',
							} }
							onClick={ () =>
								setAttributes( {
									activeBackground: 'default',
								} )
							}
						>
							Default
						</Button>
						<Button
							isPressed={ activeBackground === 'hover' }
							variant="secondary"
							style={ {
								minWidth: '100px',
								padding: '8px 12px',
								backgroundColor:
									activeBackground === 'hover'
										? '#008db4'
										: '',
								color:
									activeBackground === 'hover' ? '#fff' : '',
							} }
							onClick={ () =>
								setAttributes( {
									activeBackground: 'hover',
								} )
							}
						>
							Hover
						</Button>
					</ButtonGroup>
				</div>
			</div>

			<div style={ { marginTop: '16px' } }>
				<ColorPalette
					value={ currentColor }
					onChange={ handleColorChange }
					disableCustomColors={ false }
				/>
			</div>
			<PanelBody title="Padding" initialOpen={ false }>
				<BoxControl
					label={ __( 'Content Padding', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ contentPadding }
					onChange={ ( newPadding ) =>
						setAttributes( { contentPadding: newPadding } )
					}
				/>
			</PanelBody>
			<PanelBody title="Margin" initialOpen={ false }>
				<BoxControl
					label={ __( 'Content Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ contentMargin }
					onChange={ ( newMargin ) =>
						setAttributes( { contentMargin: newMargin } )
					}
				/>
			</PanelBody>
		</PanelBody>
	);
}
