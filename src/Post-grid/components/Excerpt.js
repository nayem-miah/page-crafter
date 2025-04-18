import truncateExcerpt from "../utils/truncateWords";
import { RawHTML } from '@wordpress/element';
export default function Excerpt( { excerpt, excerptMaxWords, showExcerpt } ) {
	return (
		<>
			{ showExcerpt && (
				<div className="post-grid-excerpt">
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
