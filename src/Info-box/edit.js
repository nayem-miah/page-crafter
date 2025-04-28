import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';
import './editor.scss';
import AdvanceTab from './tab/AdvanceTab';
import GeneralTab from './tab/GeneralTab';
import StyleTab from './tab/StyleTab';
export default function Edit( { attributes, setAttributes } ) {
	const {
		title,
		icon,
		content,
		contentAlign,
		showTitle,
		showContent,
		titleTag,
		readMore,
		readMoreIcon,
		readMoreAlign,
		readMoreType,
		readMoreIconShow,
		titleHoverColor,
		titleColor,
		titleMargin,
	} = attributes;
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<TabPanel
					className="pagecrafter-tab-panel"
					activeClass="is-active"
					tabs={ [
						{
							name: 'general',
							title: (
								<span>
									<Icon icon={ tableOfContents } /> General
								</span>
							),
						},
						{
							name: 'styles',
							title: (
								<span>
									<Icon icon={ styles } /> Styles
								</span>
							),
						},
						{
							name: 'advanced',
							title: (
								<span>
									<Icon icon={ cog } /> Advanced
								</span>
							),
						},
					] }
				>
					{ ( tab ) => {
						switch ( tab.name ) {
							case 'general':
								return (
									<GeneralTab
										setAttributes={ setAttributes }
										attributes={ attributes }
									/>
								);
							case 'styles':
								return (
									<StyleTab
										attributes={ attributes }
										setAttributes={ setAttributes }
									/>
								);
							case 'advanced':
								return (
									<AdvanceTab
										setAttributes={ setAttributes }
									/>
								);
							default:
								return null;
						}
					} }
				</TabPanel>
			</InspectorControls>
			<div className="info-box">
				<div className="info-box__icon">
					<span className={ icon }></span>
				</div>
				{ showTitle && (
					<div
						className="info-box__title"
						style={ { '--contentAlign': contentAlign } }
					>
						<RichText
							className="text"
							style={ {
								'--titleMarginTop': titleMargin.top
									? titleMargin.top + 'px'
									: '0px',
								'--titleMarginRight': titleMargin.right
									? titleMargin.right + 'px'
									: '0px',
								'--titleMarginBottom': titleMargin.bottom
									? titleMargin.bottom + 'px'
									: '0px',
								'--titleMarginLeft': titleMargin.left
									? titleMargin.left + 'px'
									: '0px',
							} }
							placeholder={ __( 'Title..', 'infobox' ) }
							tagName={ titleTag }
							onChange={ ( texts ) =>
								setAttributes( { title: texts } )
							}
							value={ title }
						/>
					</div>
				) }

				{ showContent && (
					<div
						className="info-box__content"
						style={ { '--contentAlign': contentAlign } }
					>
						<RichText
							placeholder={ __( 'Content..', 'infobox' ) }
							tagName="p"
							onChange={ ( texts ) =>
								setAttributes( { content: texts } )
							}
							value={ content }
						/>
					</div>
				) }

				{ readMoreType !== 'None' && (
					<div
						className="info-box__read-more"
						style={ {
							'--readMoreAlign': readMoreAlign,
						} }
					>
						<div
							className={ `info-box__read-more-content ${
								readMoreType === 'Button' ? 'hasButton' : ''
							}` }
						>
							<RichText
								placeholder={ __( 'Read More..', 'infobox' ) }
								tagName="p"
								onChange={ ( texts ) =>
									setAttributes( { readMore: texts } )
								}
								value={ readMore }
							/>
							{ readMoreIconShow && (
								<span className={ readMoreIcon }></span>
							) }
						</div>
					</div>
				) }
			</div>
		</div>
	);
}
