import React from 'react';
import styles from './PropertiesPanel.module.css';
import PropertiesPanelButton from './PropertiesPanelButton/PropertiesPanelButton';
import { saveCardToJSON } from '../../utils/fileUtils';
import { emptyData } from '../../data/testFilledData';

function PropertiesPanel() {
    return (
        <div className={styles.panel}>
            <PropertiesPanelButton text="Project Size" />
            <PropertiesPanelButton text="Object List" />
            <PropertiesPanelButton
                text="Export JSON"
                onClick={() => saveCardToJSON(emptyData)}
            />
            <PropertiesPanelButton text="Import JSON" />
        </div>
    );
}

export { PropertiesPanel };
