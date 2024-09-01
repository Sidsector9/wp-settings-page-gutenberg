import { __ } from '@wordpress/i18n';
import { PluginArea } from '@wordpress/plugins';
import {
	BaseControl,
	TextControl,
	Button,
	SlotFillProvider,
	Slot,
	Fill
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export const AdminSettings = () => {

	const [ appData, setAppData ] = useState( { fname: 'Siddharth', lname: 'Thevaril' } );

	return (
		<SlotFillProvider>
			<h1>{ __( 'Settings using Gutenberg components' ) }</h1>

			<BaseControl label={ __( 'First Name' ) }>
				<TextControl
					onChange={ ( fname ) => setAppData( { ...appData, fname } ) }
				/>
			</BaseControl>

			<BaseControl label={ __( 'Last Name' ) }>
				<TextControl
					onChange={ ( lname ) => setAppData( { ...appData, lname } ) }
				/>
			</BaseControl>

			<Slot name="gutenberg-settings-additional-fields" fillProps={ { appData, setAppData } } />

			<PluginArea scope={ window.PluginGutenbergSettingsFields.scope } />

			<br />

			<Button variant='primary'>
				{ __( 'Save' ) }
			</Button>
		</SlotFillProvider>
	);
};

window.PluginGutenbergSettingsFields = ( { children } ) => {
	return (
		<>
			<Fill name="gutenberg-settings-additional-fields">
				{ ( fillProps ) => children( fillProps ) }
			</Fill>
		</>
	);
};

window.PluginGutenbergSettingsFields.scope = 'gutenberg-settings-additional-fields-scope';
