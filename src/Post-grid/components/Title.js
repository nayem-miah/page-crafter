import { RawHTML } from '@wordpress/element';
export default function Title( {
	showTitle,
	title,
	link,
	contentAlignment,
	titleColor,
	titleHoverColor,
	titleMargin,
} ) {
	return (
		<>
			{ showTitle && (
				<div className="post-grid-title">
					<h5
						style={ {
							textAlign: contentAlignment,
							'--titleMarginTop': titleMargin?.top,
							'--titleMarginBottom': titleMargin.bottom,
							'--titleMarginLeft': titleMargin?.left,
							'--titleMarginRight': titleMargin?.right,
						} }
					>
						<a
							style={ {
								'--titleColor': titleColor,
								'--titleHoverColor': titleHoverColor,
							} }
							href={ link }
						>
							<RawHTML>{ title }</RawHTML>
						</a>
					</h5>
				</div>
			) }
		</>
	);
}
