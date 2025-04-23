document.addEventListener( 'DOMContentLoaded', function () {
	const pagination = document.querySelector( '.pagination' );

	if ( ! pagination ) return;

	pagination.addEventListener( 'click', function ( e ) {
		if ( ! e.target.classList.contains( 'pg-page' ) ) return;

		e.preventDefault();

		const page = e.target.getAttribute( 'data-page' );
		const attributes = window.pgBlockAttributes || {}; // Make sure this exists in your localize
		console.log( 'attributes..................', attributes );
		fetch( pg_ajax_object.ajax_url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams( {
				action: 'pg_ajax_posts',
				attributes: JSON.stringify( attributes ),
				page,
			} ),
		} )
			.then( ( res ) => res.text() )
			.then( ( html ) => {
		
				document.querySelector( '.post-grid' ).innerHTML = html;
			} )
			.catch( ( err ) => console.error( 'Pagination error:', err ) );
	} );
} );
