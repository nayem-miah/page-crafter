( function ( $ ) {
	document.addEventListener( 'DOMContentLoaded', () => {
		$( document ).on(
			'click',
			'.pagination button.pg-page, .pagination button.pg-prev, .pagination button.pg-next',
			function ( e ) {
				e.preventDefault();

				const pagedNum = parseInt( $( this ).data( 'page' ) );
				if ( ! pagedNum ) return;

				const $block = $( this ).closest( '[data-query]' );
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
				console.log( 'Data Query:', data_query );
				console.log( 'Data Attributes:', data_attr );
				$.ajax( {
					url: pg_ajax_object.ajax_url,
					type: 'POST',
					data: {
						action: 'pagination', // AJAX action name is 'pagination', this will be handled in the PHP add actions function 'wp_ajax_pagination'
						paged: pagedNum,
						data_query,
						data_attr,
						nonce: pg_ajax_object.nonce,
					},
					success( response ) {
						console.log( 'AJAX response:', response );
						if ( response.success && response.data ) {
							$block.find( '.post-grid' ).html( response.data );
						} else {
							console.error( 'Invalid response data:', response );
						}
					},
				} );
			}
		);
	} );
} )( jQuery );
