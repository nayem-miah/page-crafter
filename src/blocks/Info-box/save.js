import { RichText, useBlockProps } from '@wordpress/block-editor';
import formatSpacing from '../../utils/spacingFormat';
export default function save( { attributes } ) {
	const {
		title,
		icon,
		content,
		contentAlign,
		showTitle,
		showContent,
		titleTag,
		readMoreType,
		readMoreAlign,
		readMoreIconShow,
		readMoreIcon,
		readMore,
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
		additionalClass,
		desktopHide,
		MobileHide,
		tabHide,
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
		background,
		backgroundHover,
		boxShadowColor,
		boxShadowHover,
		boxShadowControl,
		isBoxShadow,
		margin,
		padding,
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
		'--boxShadow': isBoxShadow
			? `${ boxShadowControl.top } ${ boxShadowControl.right } ${ boxShadowControl.bottom } ${ boxShadowControl.left } ${ boxShadowColor }`
			: 'none',
		'--boxShadowHover': isBoxShadow
			? `${ boxShadowControl.top } ${ boxShadowControl.right } ${ boxShadowControl.bottom } ${ boxShadowControl.left } ${ boxShadowHover }`
			: 'none',
	};

	return (
		<div { ...useBlockProps.save( { className: additionalClass } ) }>
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
						<RichText.Content
							className="text"
							tagName={ titleTag }
							value={ title }
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
						/>
					</div>
				) }

				{ showContent && (
					<div
						className="info-box__content"
						style={ { '--contentAlign': contentAlign } }
					>
						<RichText.Content
							tagName="p"
							value={ content }
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
							<RichText.Content tagName="p" value={ readMore } />
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
