export default function (context) {
    return {
        plugin: function (markdownIt, options) {
            context.postMessage('settings').then(settings => {
                console.log(settings);
            });
            const markdownItPlantUml = require('markdown-it-plantuml');
            markdownIt.use(markdownItPlantUml, {
                // How can I refer settings from here?
                openMarker: '```plantuml',
                closeMarker: '```',
            });
        }
    }
}
