import { PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
import ContentStyle from '../styleTabCom/ContentStyle';
import ReadMoreStyle from '../styleTabCom/ReadMoreStyle';

export default function StyleTab( { attributes, setAttributes } ) {
	const {
		contentBackground,
		contentBackgroundHover,
		activeBackground,
		contentPadding,
		contentMargin,
		titleColor,
		titleHoverColor,
		titleMargin,
		titleActiveColor,
		metaColor,
		metaHoverColor,
		metaActiveColor,
		metaMargin,
		desMargin,
		desColor,
		desHoverColor,
		desActiveColor,
		readMoreBackgroundActive,
		readMoreBackgroundHover,
		readMoreBackground,
		readMoreColor,
		readMoreColorActive,
		readMoreColorHover,
		readMoreMargin,
		readMorePadding,
	} = attributes;

	const [ openPanel, setOpenPanel ] = useState( 'general' ); // default open panel
	const togglePanel = ( panelKey ) => {
		setOpenPanel( openPanel === panelKey ? null : panelKey );
	};
	return (
		<div>
			<ContentStyle
				setAttributes={ setAttributes }
				activeBackground={ activeBackground }
				contentBackground={ contentBackground }
				contentBackgroundHover={ contentBackgroundHover }
				contentPadding={ contentPadding }
				contentMargin={ contentMargin }
				titleColor={ titleColor }
				titleHoverColor={ titleHoverColor }
				titleActiveColor={ titleActiveColor }
				titleMargin={ titleMargin }
				metaColor={ metaColor }
				metaHoverColor={ metaHoverColor }
				metaActiveColor={ metaActiveColor }
				metaMargin={ metaMargin }
				desMargin={ desMargin }
				desColor={ desColor }
				desHoverColor={ desHoverColor }
				desActiveColor={ desActiveColor }
				openPanel={ openPanel }
				togglePanel={ togglePanel }
			/>

			<ReadMoreStyle
				readMoreBackground={ readMoreBackground }
				readMoreBackgroundHover={ readMoreBackgroundHover }
				readMoreBackgroundActive={ readMoreBackgroundActive }
				setAttributes={ setAttributes }
				readMoreMargin={ readMoreMargin }
				readMorePadding={ readMorePadding }
				readMoreColor={ readMoreColor }
				readMoreColorActive={ readMoreColorActive }
				readMoreColorHover={ readMoreColorHover }
				openPanel={ openPanel }
				togglePanel={ togglePanel }
			/>
			<PanelBody
				title="Pagination"
				opened={ openPanel === 'pagination' }
				onToggle={ () => togglePanel( 'pagination' ) }
			>
				<p>General settings content here</p>
			</PanelBody>
		</div>
	);
}
