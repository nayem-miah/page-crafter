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
		ContentMargin,
		ContentHoverColor,
		ContentColor,
		callActionBack,
		callActionColor,
		callActionHoverBack,
		callActionHoverColor,
		callActionPadding,
		desktopHide,
		MobileHide,
		tabHide,
		additionalClass,
		callActionBorderType,
		callActionBorderRadius,
		callActionborderColor,
		callActionBorderWidth,
		callActionborderHoverColor,
		BorderRadius,
		borderHoverColor,
		borderColor,
		BorderWidth,
		BorderType,
		backgroundHover,
		background,
		boxShadowColor,
		boxShadowHover,
		boxShadowControl,
		isBoxShadow,
		margin,
		padding,
	} = attributes;

	return (
		<div { ...useBlockProps( { className: additionalClass } ) }>
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
										MobileHide={ MobileHide }
										tabHide={ tabHide }
										desktopHide={ desktopHide }
										additionalClass={ additionalClass }
									/>
								);
							default:
								return null;
						}
					} }
				</TabPanel>
			</InspectorControls>
			<div
				className={ `info-box ${ desktopHide && 'desktopHide' }  ${
					tabHide && 'tabHide'
				} ${ MobileHide && 'MobileHide' }` }
				style={ {
					'--BorderWidth': `${ BorderWidth.top } ${ BorderWidth.right } ${ BorderWidth.bottom } ${ BorderWidth.left }`,
					'--BorderRadius': `${ BorderRadius.top } ${ BorderRadius.right } ${ BorderRadius.bottom } ${ BorderRadius.left }`,
					'--BorderType': BorderType,
					'--borderColor': borderColor,
					'--borderHoverColor': borderHoverColor,
					'--backgroundHover': backgroundHover,
					'--background': background,
					'--boxShadow': isBoxShadow
						? `${ boxShadowControl.top } ${ boxShadowControl.right } ${ boxShadowControl.bottom } ${ boxShadowControl.left } ${ boxShadowColor }`
						: 'none',

					'--boxShadowHover': isBoxShadow
						? `${ boxShadowControl.top } ${ boxShadowControl.right } ${ boxShadowControl.bottom } ${ boxShadowControl.left } ${ boxShadowHover }`
						: 'none',

					'--margin': `${ margin.top } ${ margin.right } ${ margin.bottom } ${ margin.left }`,
					'--padding': `${ padding.top } ${ padding.right } ${ padding.bottom } ${ padding.left }`,
				} }
			>
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
								'--titleColor': titleColor,
								'--titleHoverColor': titleHoverColor,
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
							style={ {
								'--ContentColor': ContentColor,
								'--ContentHoverColor': ContentHoverColor,
								'--ContentMarginTop': ContentMargin.top
									? ContentMargin.top
									: '0px',
								'--ContentMarginRight': ContentMargin.right
									? ContentMargin.right
									: '0px',

								'--ContentMarginBottom': ContentMargin.bottom
									? ContentMargin.bottom
									: '0px',

								'--ContentMarginLeft': ContentMargin.left
									? ContentMargin.left
									: '0px',
							} }
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
							style={ {
								'--readMoreColor': callActionColor,
								'--readMoreHoverColor': callActionHoverColor,
								'--readMoreBackground': callActionBack,
								'--readMoreHoverBack': callActionHoverBack,

								'--callToActionPaddingTop':
									callActionPadding.top
										? callActionPadding.top
										: '0px',
								'--callToActionPaddingRight':
									callActionPadding.right
										? callActionPadding.right
										: '0px',
								'--callToActionPaddingBottom':
									callActionPadding.bottom
										? callActionPadding.bottom
										: '0px',
								'--callToActionPaddingLeft':
									callActionPadding.left
										? callActionPadding.left
										: '0px',

								'--callBorderType': callActionBorderType,
								'--callBorderColor': callActionborderColor,
								'--callBorderHoverColor':
									callActionborderHoverColor,
								'--callBorderWidth': `${ callActionBorderWidth.top } ${ callActionBorderWidth.right } ${ callActionBorderWidth.bottom } ${ callActionBorderWidth.left }`,
								'--callBorderRadius': `${ callActionBorderRadius.top } ${ callActionBorderRadius.right } ${ callActionBorderRadius.bottom } ${ callActionBorderRadius.left }`,
							} }
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
