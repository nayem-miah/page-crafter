export default function ReadButton( {
	readMore,
	readMoreAlignment,
	link,
	readMoreBackground,
	readMoreBackgroundHover,
	readMoreColor,
	readMoreColorHover,
	readMoreMargin,
	readMorePadding,
} ) {
	return (
		<>
			{ readMore && (
				<div
					className="post-grid-btn"
					style={ { textAlign: readMoreAlignment } }
				>
					<a
						style={ {
							'--readMoreBackground': readMoreBackground,
							'--readMoreBackgroundHover':
								readMoreBackgroundHover,
							'--readMoreColor': readMoreColor,
							'--readMoreColorHover': readMoreColorHover,
							'--readMorePaddingTop': readMorePadding?.top,
							'--readMorePaddingRight': readMorePadding?.right,
							'--readMorePaddingBottom': readMorePadding?.bottom,
							'--readMorePaddingLeft': readMorePadding?.left,
							'--readMoreMarginTop': readMoreMargin?.top,
							'--readMoreMarginRight': readMoreMargin?.right,
							'--readMoreMarginBottom': readMoreMargin?.bottom,
							'--readMoreMarginLeft': readMoreMargin?.left,
						} }
						href={ link }
					>
						<span>Read More</span>
					</a>
				</div>
			) }
		</>
	);
}
