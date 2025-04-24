( function ( $ ) {
	document.addEventListener( 'DOMContentLoaded', () => {
		$( document ).on( 'click', '.pagination a.pg-page', function ( e ) {
			e.preventDefault();
			alert( 'Pagination script loaded!' );
			let pagedNum = parseInt( $( this ).data( 'page' ) );
			if ( ! pagedNum ) return;

			let $block = $( this ).closest( '[data-query]' );
			if ( ! $block.length ) {
				console.error( 'Block wrapper not found!' );
				return;
			}

			let data_query = $block.attr( 'data-query' );
			let data_attr = $block.attr( 'data-attributes' );

			try {
				data_query = JSON.parse( data_query );
				data_attr = JSON.parse( data_attr );
			} catch ( error ) {
				console.error( 'Invalid JSON in data attributes' );
				return;
			}

			$.ajax( {
				url: stybleLocalize.ajaxUrl,
				type: 'POST',
				data: {
					action: 'styble_pagination',
					paged: pagedNum,
					data_query,
					data_attr,
					nonce: stybleLocalize.nonce,
				},
				success: ( response ) => {
					if ( response.success && response.data ) {
						$block.find( '.post-grid' ).html( response.data );
						$( 'html' ).animate(
							{
								scrollTop: $block.offset().top - 60,
							},
							100
						);
					} else {
						console.error(
							'AJAX success but data invalid',
							response
						);
					}
				},
				error: ( xhr ) => {
					console.error( 'AJAX error:', xhr );
				},
			} );
		} );
	} );
} )( jQuery );
