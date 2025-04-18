import { RawHTML } from '@wordpress/element';
export default function Title( { showTitle, title, link, contentAlignment } ) {
	return (
		<>
			{ showTitle && (
				<div className="post-grid-title">
					<h5 style={{textAlign: contentAlignment}}>
						<a href={ link }>
							<RawHTML>{ title }</RawHTML>
						</a>
					</h5>
				</div>
			) }
		</>
	);
}
