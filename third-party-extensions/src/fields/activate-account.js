import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	ToggleControl
} from '@wordpress/components';

const { PluginGutenbergSettingsFields } = window;

registerPlugin( 'third-party-plugin--activate-account', {
	render: InjectAdditionalFields,
	scope: PluginGutenbergSettingsFields.scope
} );

function InjectAdditionalFields() {
	return (
		<PluginGutenbergSettingsFields>
			{
				( { appData, setAppData } ) => {
					return (
						<BaseControl label={ __( 'Activate Account?' ) }>
							<ToggleControl
								onChange={ ( isAccountActivated ) => setAppData( { ...appData, isAccountActivated } ) }
								checked={ appData.isAccountActivated }
							/>
						</BaseControl>
					)
				}
			}
		</PluginGutenbergSettingsFields>
	);
}
