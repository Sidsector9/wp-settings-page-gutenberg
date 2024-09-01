/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import { AdminSettings } from './admin-settings';

domReady( () => {
	const adminEl = document.getElementById( 'admin-root' );

	if ( adminEl ) {
		const settingsRoot = createRoot( adminEl );
		settingsRoot.render( <AdminSettings /> );
	}
} );
