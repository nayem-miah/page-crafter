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
	metaColor,
	metaHoverColor,
	metaActiveColor,
	metaMargin,
	desMargin,
	desColor,
	desHoverColor,
	desActiveColor,
	togglePanel,
	openPanel,
} ) {
	const currentContentBackgroundColor =
		activeBackground === 'default'
			? contentBackground
			: contentBackgroundHover;

	const currentTitleColor =
		titleActiveColor === 'default' ? titleColor : titleHoverColor;

	const currentMetaColor =
		metaActiveColor === 'default' ? metaColor : metaHoverColor;

	const currentDesColor =
		desActiveColor === 'default' ? desColor : desHoverColor;
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
	const handleMetaColorChange = ( color ) => {
		if ( metaActiveColor === 'default' ) {
			setAttributes( { metaColor: color } );
		} else {
			setAttributes( { metaHoverColor: color } );
		}
	};
	const handleDesColorChange = ( color ) => {
		if ( desActiveColor === 'default' ) {
			setAttributes( { desColor: color } );
		} else {
			setAttributes( { desHoverColor: color } );
		}
	};

	return (
		<PanelBody
			title="Content"
			opened={ openPanel === 'content' }
			onToggle={ () => togglePanel( 'content' ) }
		>
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

				<BoxControl
					label={ __( 'Title Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ titleMargin }
					onChange={ ( newPadding ) =>
						setAttributes( { titleMargin: newPadding } )
					}
				/>
			</PanelBody>
			<PanelBody title="Meta" initialOpen={ false }>
				<strong>{ __( 'Color', 'postgrid' ) }</strong>
				<GroupButton
					active={ metaActiveColor }
					setAttributes={ setAttributes }
					from={ 'metaColor' }
				/>
				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentMetaColor }
						onChange={ handleMetaColorChange }
						disableCustomColors={ false }
					/>
				</div>

				<BoxControl
					label={ __( 'Meta Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ metaMargin }
					onChange={ ( newPadding ) =>
						setAttributes( { metaMargin: newPadding } )
					}
				/>
			</PanelBody>
			<PanelBody title="Description" initialOpen={ false }>
				<strong>{ __( 'Color', 'postgrid' ) }</strong>
				<GroupButton
					active={ desActiveColor }
					setAttributes={ setAttributes }
					from={ 'desColor' }
				/>
				<div style={ { marginTop: '16px' } }>
					<ColorPalette
						value={ currentDesColor }
						onChange={ handleDesColorChange }
						disableCustomColors={ false }
					/>
				</div>

				<BoxControl
					label={ __( 'Meta Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ desMargin }
					onChange={ ( newPadding ) =>
						setAttributes( { desMargin: newPadding } )
					}
				/>
			</PanelBody>
		</PanelBody>
	);
}
