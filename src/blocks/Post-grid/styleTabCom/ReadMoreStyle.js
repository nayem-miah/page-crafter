import { BoxControl, ColorPalette, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import GroupButton from './../../../components/GroupButton';

export default function ReadMoreStyle( {
	readMoreBackgroundActive,
	readMoreBackgroundHover,
	readMoreBackground,
	setAttributes,
	readMorePadding,
	readMoreMargin,
	readMoreColor,
	readMoreColorHover,
	readMoreColorActive,
	togglePanel,
	openPanel,
} ) {
	const currentReadMoreBackgroundColor =
		readMoreBackgroundActive === 'default'
			? readMoreBackground
			: readMoreBackgroundHover;
	const currentReadMoreColor =
		readMoreColorActive === 'default' ? readMoreColor : readMoreColorHover;

	const handleReadMoreBackgroundColorChange = ( color ) => {
		if ( readMoreBackgroundActive === 'default' ) {
			setAttributes( { readMoreBackground: color } );
		} else {
			setAttributes( { readMoreBackgroundHover: color } );
		}
	};

	const handleReadMoreColorChange = ( color ) => {
		if ( readMoreColorActive === 'default' ) {
			setAttributes( { readMoreColor: color } );
		} else {
			setAttributes( { readMoreColorHover: color } );
		}
	};

	return (
		<PanelBody
			title="Read More"
			opened={ openPanel === 'readMore' }
			onToggle={ () => togglePanel( 'readMore' ) }
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
						active={ readMoreBackgroundActive }
						setAttributes={ setAttributes }
						from={ 'readMoreBack' }
					/>
				</div>
			</div>
			<div style={ { marginTop: '16px' } }>
				<ColorPalette
					value={ currentReadMoreBackgroundColor }
					onChange={ handleReadMoreBackgroundColorChange }
					disableCustomColors={ false }
				/>
			</div>

			<div style={ { marginTop: '16px', marginBottom: '16px' } }>
				<strong>{ __( 'Color', 'postgrid' ) }</strong>
				<div
					style={ {
						display: 'flex',
						justifyContent: 'center',
						marginTop: '8px',
					} }
				>
					<GroupButton
						active={ readMoreColorActive }
						setAttributes={ setAttributes }
						from={ 'readMoreColor' }
					/>
				</div>
			</div>
			<div style={ { marginTop: '16px' } }>
				<ColorPalette
					value={ currentReadMoreColor }
					onChange={ handleReadMoreColorChange }
					disableCustomColors={ false }
				/>
			</div>

			<PanelBody title="Spacing" initialOpen={ false }>
				<BoxControl
					label={ __( 'Padding', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ readMorePadding }
					onChange={ ( newPadding ) =>
						setAttributes( { readMorePadding: newPadding } )
					}
				/>
				<BoxControl
					label={ __( 'Margin', 'postgrid' ) }
					units={ [
						{ label: 'px', value: 'px' },
						{ label: '%', value: '%' },
						{ label: 'em', value: 'em' },
						{ label: 'rem', value: 'rem' },
						{ label: 'vw', value: 'vw' },
						{ label: 'vh', value: 'vh' },
					] }
					values={ readMoreMargin }
					onChange={ ( newPadding ) =>
						setAttributes( { readMoreMargin: newPadding } )
					}
				/>
			</PanelBody>
		</PanelBody>
	);
}
