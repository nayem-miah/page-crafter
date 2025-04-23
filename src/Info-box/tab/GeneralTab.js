import { PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
import Alignmnet from '../generalTabCom/Alignment';
export default function GeneralTab( { showContent, showTitle, contentAlign, setAttributes } ) {
	const [ openPanel, setOpenPanel ] = useState( 'general' ); // default open panel

	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};

	return (
		<div>
			<PanelBody
				title="Content"
				opened={ openPanel === 'pagination' }
				onToggle={ () => togglePanel( 'pagination' ) }
			>
				<Alignmnet
					fromWhere="content"
					setAttributes={ setAttributes }
					alignProp={ contentAlign }
				/>
			</PanelBody>
		</div>
	);
}
