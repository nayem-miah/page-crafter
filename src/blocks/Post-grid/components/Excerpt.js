import { RawHTML } from '@wordpress/element';
import formatSpacing from '../../../utils/spacingFormat';
import truncateExcerpt from '../../../utils/truncateWords';
export default function Excerpt( {
	excerpt,
	excerptMaxWords,
	showExcerpt,
	contentAlignment,
	desMargin,
	desColor,
	desHoverColor,
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

						'--desMargin-desktop': formatSpacing(
							desMargin?.Desktop
						),
						'--desMargin-tablet': formatSpacing(
							desMargin?.Tablet
						),
						'--desMargin-mobile': formatSpacing(
							desMargin?.Mobile
						),
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
