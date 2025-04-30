import { RawHTML } from '@wordpress/element';
import formatSpacing from './../../../utils/spacingFormat.js';
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

							'--titleMargin-desktop': formatSpacing(
								titleMargin?.Desktop
							),
							'--titleMargin-tablet': formatSpacing(
								titleMargin?.Tablet
							),
							'--titleMargin-mobile': formatSpacing(
								titleMargin?.Mobile
							),
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
