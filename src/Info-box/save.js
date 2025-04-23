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
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className="info-box">
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
						/>
					</div>
				) }

				{ showContent && (
					<div
						className="info-box__content"
						style={ { '--contentAlign': contentAlign } }
					>
						<RichText.Content tagName="p" value={ content } />
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
