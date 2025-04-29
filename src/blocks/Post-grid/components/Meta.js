import { dateI18n, format, getSettings } from '@wordpress/date';
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
						'--metaMarginTop': metaMargin?.top,
						'--metaMarginRight': metaMargin?.right,
						'--metaMarginBottom': metaMargin?.bottom,
						'--metaMarginLeft': metaMargin?.left,
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
