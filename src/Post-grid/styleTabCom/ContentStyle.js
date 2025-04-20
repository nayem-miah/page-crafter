import { BoxControl, ColorPalette, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import GroupButton from './GroupButton';
export default function ContentStyle( {
	setAttributes,
	activeBackground,
	contentBackgroundHover,
	contentBackground,
	contentPadding,
	contentMargin,
	titleMargin,
	titleActiveColor,
	titleHoverColor,
	titleColor,
} ) {
	const currentContentBackgroundColor =
		activeBackground === 'default'
			? contentBackground
			: contentBackgroundHover;

	const currentTitleColor =
		titleActiveColor === 'default' ? titleColor : titleHoverColor;

	const handleColorChange = ( color ) => {
		if ( activeBackground === 'default' ) {
			setAttributes( { contentBackground: color } );
		} else {
			setAttributes( { contentBackgroundHover: color } );
		}
	};

	const handleTitleColorChange = ( color ) => {
		if ( titleActiveColor === 'default' ) {
			setAttributes( { titleColor: color } );
		} else {
			setAttributes( { titleHoverColor: color } );
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
					<GroupButton
						active={ activeBackground }
						setAttributes={ setAttributes }
						from={ 'contentBackground' }
					/>
				</div>
			</div>

			<div style={ { marginTop: '16px' } }>
				<ColorPalette
					value={ currentContentBackgroundColor }
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
			<PanelBody title="Title" initialOpen={ false }>
				<strong>{ __( 'Color', 'postgrid' ) }</strong>
				<GroupButton
					active={ titleActiveColor }
					setAttributes={ setAttributes }
					from={ 'titleColor' }
				/>
				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentTitleColor }
						onChange={ handleTitleColorChange }
						disableCustomColors={ false }
					/>
				</div>
			</PanelBody>
			<PanelBody title="Meta" initialOpen={ false }>
				<h1>This is for Meta</h1>
			</PanelBody>
			<PanelBody title="Description" initialOpen={ false }>
				<h1>This is for description</h1>
			</PanelBody>
		</PanelBody>
	);
}
