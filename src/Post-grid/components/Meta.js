import { dateI18n, format, getSettings } from '@wordpress/date';
export default function Meta( { showMeta, author, date, contentAlignment } ) {
	return (
		<>
			{ showMeta && (
				<div
					className="post-grid-meta"
					style={ { textAlign: contentAlignment } }
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
