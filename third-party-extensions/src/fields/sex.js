import { registerPlugin } from '@wordpress/plugins';
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	RadioControl,
} from '@wordpress/components';

const { PluginGutenbergSettingsFields } = window;

registerPlugin( 'third-party-plugin--sex', {
	render: InjectAdditionalFields,
	scope: PluginGutenbergSettingsFields.scope
} );

function InjectAdditionalFields() {
	return (
		<PluginGutenbergSettingsFields>
			{
				( { appData, setAppData } ) => {
					return (
						<BaseControl label={ __( 'Sex' ) }>
							<RadioControl
								label={ __( 'Male' ) }
								options={ [
									{
										label: __( 'Male' ),
										value: 'male',
									},
									{
										label: __( 'Feale' ),
										value: 'female',
									},
								] }
								onChange={ ( sex ) => setAppData( { ...appData, sex } ) }
								selected={ appData.sex || 'male' }
							/>
						</BaseControl>
					)
				}
			}
		</PluginGutenbergSettingsFields>
	);
}
