import { PanelBody } from '@wordpress/components';
import ActionBtn from '../generalTabComp/ActionBtn';
import Content from '../generalTabComp/Content';
import Image from '../generalTabComp/Image';
import General from '../generalTabComp/General';
import { useState } from '@wordpress/element';
export default function GeneralTab( { attributes, setAttributes } ) {
	const {
		numberOfPosts,
		displayImage,
		readMore,
		showTitle,
		showExcerpt,
		showMeta,
		excerptMaxWords,
		readMoreAlignment,
		columns,
		columnGap,
		contentAlignment,
	} = attributes;

	const [ openPanel, setOpenPanel ] = useState( 'general' ); // default open panel

	const togglePanel = ( panelKey ) => {
		if ( openPanel !== panelKey ) {
			setOpenPanel( panelKey );
		}
	};

	return (
		<div>
			<General
				order={ attributes?.order }
				setAttributes={ setAttributes }
				columnGap={ columnGap }
				columns={ columns }
				numberOfPosts={ numberOfPosts }
				togglePanel={ togglePanel }
				openPanel={ openPanel }
			/>
			<Image
				setAttributes={ setAttributes }
				displayImage={ displayImage }
				togglePanel={ togglePanel }
				openPanel={ openPanel }
			/>
			<Content
				setAttributes={ setAttributes }
				showExcerpt={ showExcerpt }
				showTitle={ showTitle }
				showMeta={ showMeta }
				excerptMaxWords={ excerptMaxWords }
				contentAlignment={ contentAlignment }
				togglePanel={ togglePanel }
				openPanel={ openPanel }
			/>
			<ActionBtn
				setAttributes={ setAttributes }
				readMore={ readMore }
				readMoreAlignment={ readMoreAlignment }
				togglePanel={ togglePanel }
				openPanel={ openPanel }
			/>
			<PanelBody
				title="Pagination"
				initialOpen={ openPanel === 'pagination' }
				onToggle={ () => togglePanel( 'pagination' ) }
			>
				<p>General settings content here</p>
			</PanelBody>
		</div>
	);
}
