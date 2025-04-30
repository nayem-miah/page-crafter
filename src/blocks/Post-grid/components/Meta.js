import { dateI18n, format, getSettings } from '@wordpress/date';
import formatSpacing from '../../../utils/spacingFormat';
export default function Meta( {
	showMeta,
	author,
	date,
	contentAlignment,
	metaMargin,
	metaHoverColor,
	metaColor,
} ) {
	return (
		<>
			{ showMeta && (
				<div
					className="post-grid-meta"
					style={ {
						'--metaTextAlign': contentAlignment,
				

						'--metaMargin-desktop': formatSpacing(
							metaMargin?.Desktop
						),
						'--metaMargin-tablet': formatSpacing(
							metaMargin?.Tablet
						),
						'--metaMargin-mobile': formatSpacing(
							metaMargin?.Mobile
						),
						
						'--metaColor': metaColor,
						'--metaHoverColor': metaHoverColor,
					} }
				>
					{ author?.[ 0 ] && <span>By { author[ 0 ].name }</span> }{ ' ' }
					<time dateTime={ format( 'c', date ) }>
						{ dateI18n( getSettings().formats.date, date ) }
					</time>
				</div>
			) }
		</>
	);
}
