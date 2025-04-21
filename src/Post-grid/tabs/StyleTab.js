import { PanelBody } from '@wordpress/components';
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
			/>

			<ReadMoreStyle
				readMoreBackground={ readMoreBackground }
				readMoreBackgroundHover={ readMoreBackgroundHover }
                readMoreBackgroundActive={readMoreBackgroundActive}
				setAttributes={setAttributes}
				readMoreMargin={ readMoreMargin }
				readMorePadding={readMorePadding}	
				readMoreColor={readMoreColor}
				readMoreColorActive={readMoreColorActive}
				readMoreColorHover={readMoreColorHover}
			/>
			<PanelBody title="Pagination" initialOpen={ false }>
				<p>General settings content here</p>
			</PanelBody>
		</div>
	);
}
