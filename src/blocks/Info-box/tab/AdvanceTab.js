import { PanelBody, TextControl } from '@wordpress/components';
import VisibilityOptions from '../../../components/VisibilityOptions';
export default function AdvanceTab( {
	desktopHide,
	tabHide,
	MobileHide,
	setAttributes,
	additionalClass,
} ) {
	return (
		<div>
			<VisibilityOptions
				setAttributes={ setAttributes }
				tabHide={ tabHide }
				desktopHide={ desktopHide }
				MobileHide={ MobileHide }
			/>
			<PanelBody title="Advanced" initialOpen={ false }>
				<TextControl
					label="Custom Class"
					value={ additionalClass }
					onChange={ ( value ) =>
						setAttributes( { additionalClass: value } )
					}
					placeholder="My-custom-class"
				/>
			</PanelBody>
		</div>
	);
}
