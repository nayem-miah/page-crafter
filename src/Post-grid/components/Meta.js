import { dateI18n, format, getSettings } from '@wordpress/date';
export default function Meta({ showMeta, author, date }) {
	return (
		<>
			{ showMeta && (
				<div className="post-grid-meta">
					{ author?.[ 0 ] && <span>By { author[ 0 ].name }</span> }{ ' ' }
					<time dateTime={ format( 'c', date ) }>
						{ dateI18n(
							getSettings().formats.date,
							date
						) }
					</time>
				</div>
			) }
		</>
	);
}
