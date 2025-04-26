import { useState } from '@wordpress/element';
import ActionBtn from '../generalTabComp/ActionBtn';
import Content from '../generalTabComp/Content';
import General from '../generalTabComp/General';
import Image from '../generalTabComp/Image';
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
		setOpenPanel( openPanel === panelKey ? null : panelKey );
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
		</div>
	);
}
