import joplin from 'api';
import { ContentScriptType } from 'api/types';
import { registerSettings, loadSettings } from './settings'

const contentScriptId = 'plantuml';

joplin.plugins.register({
	onStart: async function () {
		await registerSettings();
		joplin.contentScripts.onMessage(contentScriptId, async (message) => {
			if ("settings" === message) {
				return loadSettings();
			}
			return null;
		});
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			contentScriptId,
			'./markdownItPlantUmlPlugin.js'
		);
		await joplin.contentScripts.register(
			ContentScriptType.CodeMirrorPlugin,
			contentScriptId,
			'./codeMirrorPlantUmlPlugin.js'
		);
	},
});
