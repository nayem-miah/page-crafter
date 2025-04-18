import truncateExcerpt from "../utils/truncateWords";
import { RawHTML } from '@wordpress/element';
export default function Excerpt( {
	excerpt,
	excerptMaxWords,
	showExcerpt,
	contentAlignment,
} ) {
	return (
		<>
			{ showExcerpt && (
				<div
					className="post-grid-excerpt"
					style={ { textAlign: contentAlignment } }
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
