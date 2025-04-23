import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { title, icon, content } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className="info-box">
				<div className="info-box__icon">
					<span className={ icon }></span>
				</div>
				<div className="info-box__title">
					<RichText.Content
						className="text"
						tagName="h3"
						value={ title }
					/>
				</div>
				<div className="info-box__content">
					<RichText.Content tagName="p" value={ content } />
				</div>
			</div>
		</div>
	);
}
