import { PanelBody } from '@wordpress/components';
export default function AdvanceTab() {
    return (
        <div>
            <PanelBody title="Visibility Option" initialOpen={ false }>
                <p>General settings content here</p>
            </PanelBody>
            <PanelBody title="Advanced" initialOpen={ false }>

            </PanelBody>
        </div>
    );
}
