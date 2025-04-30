import formatSpacing from '../../../utils/spacingFormat';

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

							'--readMorePadding-desktop': formatSpacing(
								readMorePadding?.Desktop
							),
							'--readMorePadding-tablet': formatSpacing(
								readMorePadding?.Tablet
							),
							'--readMorePadding-mobile': formatSpacing(
								readMorePadding?.Mobile
							),

							'--readMoreMargin-desktop': formatSpacing(
								readMoreMargin?.Desktop
							),
							'--readMoreMargin-tablet': formatSpacing(
								readMoreMargin?.Tablet
							),
							'--readMoreMargin-mobile': formatSpacing(
								readMoreMargin?.Mobile
							),
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
