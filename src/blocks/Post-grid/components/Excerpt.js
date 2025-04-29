import truncateExcerpt from "../../../utils/truncateWords";
import { RawHTML } from '@wordpress/element';
export default function Excerpt( {
	excerpt,
	excerptMaxWords,
	showExcerpt,
	contentAlignment,
	desMargin,
	desColor,
	desHoverColor

} ) {
	return (
		<>
			{ showExcerpt && (
				<div
					className="post-grid-excerpt"
					style={ {
						'--excerptTextAlign': contentAlignment,
						'--excerptColor': desColor,
						'--excerptHoverColor': desHoverColor,
						'--excerptMarginTop': desMargin?.top,
						'--excerptMarginRight': desMargin?.right,
						'--excerptMarginBottom': desMargin?.bottom,
						'--excerptMarginLeft': desMargin?.left,
					} }
				>
					<p>
						<RawHTML>
							{ truncateExcerpt( excerpt, excerptMaxWords ) }
						</RawHTML>
					</p>
				</div>
			) }
		</>
	);
}
