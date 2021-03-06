import joplin from 'api';
import { ContentScriptType, SettingItemType } from 'api/types';

const settingSection = 'plantuml.settings';
export const settingKeyOpenMarker = 'openMarker';
export const settingKeyCloseMarker = 'closeMarker';

export async function loadSettings() {
    return {
        openMarker: await joplin.settings.value(settingKeyOpenMarker),
        closeMarker: await joplin.settings.value(settingKeyCloseMarker)
    }
}

export async function registerSettings() {
    await joplin.settings.registerSection(settingSection, {
        label: 'PlantUML',
        iconName: 'fas fa-sitemap'
    });

    await joplin.settings.registerSetting(settingKeyOpenMarker, {
        type: SettingItemType.String,
        value: '@startuml',
        description: 'String to use as opening delimiter.',
        section: settingSection,
        public: true,
        label: 'Open Marker'
    });

    await joplin.settings.registerSetting(settingKeyCloseMarker, {
        type: SettingItemType.String,
        value: '@enduml',
        description: 'String to use as closing delimiter.',
        section: settingSection,
        public: true,
        label: 'Close Marker'
    });
};

export async function get(key: string) {
    return joplin.settings.value(settingKeyOpenMarker);
}
