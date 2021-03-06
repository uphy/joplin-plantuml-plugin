import joplin from 'api';
import { ContentScriptType } from 'api/types';

const contentScriptId = 'plantuml';

joplin.plugins.register({
	onStart: async function () {
		await joplin.contentScripts.register(
			ContentScriptType.MarkdownItPlugin,
			contentScriptId,
			'./markdownItPlantUmlPlugin.js'
		);
	},
});
