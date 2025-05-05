import { PanelBody } from '@wordpress/components';
import Alignment from '../../../components/Alignment';
import { useState } from '@wordpress/element';
export default function GeneralTab( { setAttributes, attributes } ) {
    const { btnAlign } = attributes;
	const [ openPanel, setOpenPanel ] = useState( 'general' ); // default open panel

	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};
	return (
		<div>
			<PanelBody
				title="General"
				opened={ openPanel === 'general' }
				onToggle={ () => togglePanel( 'general' ) }
			>
				<Alignment
					value={ btnAlign }
					attributeKey="btnAlign"
					setAttributes={ setAttributes }
				/>
			</PanelBody>
		</div>
	);
}
