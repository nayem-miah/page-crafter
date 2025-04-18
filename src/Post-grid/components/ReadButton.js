export default function ReadButton( { readMore, readMoreAlignment, link } ) {
	return (
		<>
			{ readMore && (
				<div
					className="post-grid-btn"
					style={ { textAlign: readMoreAlignment } }
				>
					<a href={ link }>
						<span>Read More</span>
					</a>
				</div>
			) }
		</>
	);
}
