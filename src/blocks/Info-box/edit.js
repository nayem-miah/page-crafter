import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { cog, Icon, styles, tableOfContents } from '@wordpress/icons';
import formatSpacing from '../../utils/spacingFormat';
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
		readMoreUrl,
	} = attributes;

	const style = {
		'--padding-desktop': formatSpacing( padding?.Desktop ),
		'--padding-tablet': formatSpacing( padding?.Tablet ),
		'--padding-mobile': formatSpacing( padding?.Mobile ),

		'--margin-desktop': formatSpacing( margin?.Desktop ),
		'--margin-tablet': formatSpacing( margin?.Tablet ),
		'--margin-mobile': formatSpacing( margin?.Mobile ),

		'--BorderWidth-desktop': formatSpacing( BorderWidth?.Desktop ),
		'--BorderWidth-tablet': formatSpacing( BorderWidth?.Tablet ),
		'--BorderWidth-mobile': formatSpacing( BorderWidth?.Mobile ),

		'--BorderRadius-desktop': formatSpacing( BorderRadius?.Desktop ),
		'--BorderRadius-tablet': formatSpacing( BorderRadius?.Tablet ),
		'--BorderRadius-mobile': formatSpacing( BorderRadius?.Mobile ),

		'--BorderType': BorderType || 'solid',
		'--borderColor': borderColor || 'transparent',
		'--borderHoverColor': borderHoverColor || 'transparent',
		'--background': background || 'transparent',
		'--backgroundHover': backgroundHover || 'transparent',
		'--boxShadow': isBoxShadow && boxShadowColor,

		'--boxShadowHover': isBoxShadow && boxShadowHover,

		'--boxShadowControl-desktop': formatSpacing(
			boxShadowControl?.Desktop
		),
		'--boxShadowControl-tablet':
			isBoxShadow && formatSpacing( boxShadowControl?.Tablet ),
		'--boxShadowControl-mobile':
			isBoxShadow && formatSpacing( boxShadowControl?.Mobile ),
	};
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
				style={ style }
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

								'--TitleMargin-desktop': formatSpacing(
									titleMargin?.Desktop
								),
								'--TitleMargin-tablet': formatSpacing(
									titleMargin?.Tablet
								),
								'--TitleMargin-mobile': formatSpacing(
									titleMargin?.Mobile
								),
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
								'--ContentMargin-desktop': formatSpacing(
									ContentMargin?.Desktop
								),
								'--ContentMargin-tablet': formatSpacing(
									ContentMargin?.Tablet
								),
								'--ContentMargin-mobile': formatSpacing(
									ContentMargin?.Mobile
								),
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

								'--callActionPadding-desktop': formatSpacing(
									callActionPadding?.Desktop
								),
								'--callActionPadding-tablet': formatSpacing(
									callActionPadding?.Tablet
								),
								'--callActionPadding-mobile': formatSpacing(
									callActionPadding?.Mobile
								),

								'--callBorderType': callActionBorderType,
								'--callBorderColor': callActionborderColor,
								'--callBorderHoverColor':
									callActionborderHoverColor,

								'--callBorderWidth-desktop': formatSpacing(
									callActionBorderWidth?.Desktop
								),
								'--callBorderWidth-tablet': formatSpacing(
									callActionBorderWidth?.Tablet
								),
								'--callBorderWidth-mobile': formatSpacing(
									callActionBorderWidth?.Mobile
								),

								'--callBorderRadius-desktop': formatSpacing(
									callActionBorderRadius?.Desktop
								),
								'--callBorderRadius-tablet': formatSpacing(
									callActionBorderRadius?.Tablet
								),
								'--callBorderRadius-mobile': formatSpacing(
									callActionBorderRadius?.Mobile
								),
							} }
						>
							<a href={ readMoreUrl }>
								<RichText
									placeholder={ __(
										'Read More..',
										'infobox'
									) }
									tagName="p"
									onChange={ ( texts ) =>
										setAttributes( { readMore: texts } )
									}
									value={ readMore }
								/>
								{ readMoreIconShow && (
									<span className={ readMoreIcon }></span>
								) }
							</a>
						</div>
					</div>
				) }
			</div>
		</div>
	);
}
