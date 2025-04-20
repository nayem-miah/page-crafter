import { RawHTML } from '@wordpress/element';
export default function Title( {
	showTitle,
	title,
	link,
	contentAlignment,
	titleStyle,
} ) {


	
	return (
		<>
			{ showTitle && (
				<div className="post-grid-title">
					<h5
						style={ {
							textAlign: contentAlignment,
							'--titleMarginTop': titleStyle?.margin?.top,
							'--titleMarginBottom': titleStyle?.margin?.bottom,
							'--titleMarginLeft': titleStyle?.margin?.left,
							'--titleMarginRight': titleStyle?.margin?.right,
						} }
					>
						<a
							style={ {
								'--titleColor': titleStyle?.color,
								'--titleHoverColor': titleStyle?.hoverColor,
								'--titleFontSize':
									titleStyle?.typhography?.fontSize,
								'--titleFontWeight':
									titleStyle?.typhography?.fontWeight,
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
