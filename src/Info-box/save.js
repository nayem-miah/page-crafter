import { RichText, useBlockProps } from '@wordpress/block-editor';

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
	} = attributes;

	return (
		<div { ...useBlockProps.save( { className: additionalClass } ) }>
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
						<RichText.Content
							className="text"
							tagName={ titleTag }
							value={ title }
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
