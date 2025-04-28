import { ColorPalette, PanelBody, BoxControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import GroupButton from '../../Post-grid/styleTabCom/GroupButton';

import { __ } from '@wordpress/i18n';
export default function StyleTab( { attributes, setAttributes } ) {
	const { titleMargin, titleHoverColor, titleColor, activeColor } =
		attributes;
	const [ openPanel, setOpenPanel ] = useState( 'general' );
	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};

	const currentTitleColor =
		activeColor === 'default' ? titleColor : titleHoverColor;

	const handleTitleColorChange = ( color ) => {
		if ( activeColor === 'default' ) {
			setAttributes( { titleColor: color } );
		} else {
			setAttributes( { titleHoverColor: color } );
		}
	};
	return (
		<div>
			<PanelBody
				title="Title"
				opened={ openPanel === 'title' }
				onToggle={ () => togglePanel( 'title' ) }
			>
				<div style={ { marginTop: '16px', marginBottom: '16px' } }>
					<strong>{ __( 'Color', 'postinfo' ) }</strong>
					<div
						style={ {
							display: 'flex',
							justifyContent: 'center',
							marginTop: '8px',
						} }
					>
						<GroupButton
							active={ activeColor }
							setAttributes={ setAttributes }
							from="infoTitleColor"
						/>
					</div>
				</div>

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
					onChange={ ( newMargin ) =>
						setAttributes( { titleMargin: newMargin } )
					}
				/>
			</PanelBody>
		</div>
	);
}
