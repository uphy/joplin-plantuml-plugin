import { defineMode } from './codemirror/plantuml'

export default function (context) {
    return {
        plugin: function (CodeMirror) {
            defineMode(CodeMirror);
            CodeMirror.defineMode('joplin-plantuml', (config) => {
                return CodeMirror.multiplexingMode(
                    CodeMirror.getMode(config, { name: 'joplin-markdown' }),
                    {
                        open: "```plantuml", close: "```",
                        mode: CodeMirror.getMode(config, { name: 'plantuml' }),
                        delimStyle: 'comment'
                    }
                );
            });
        },
        codeMirrorOptions: { mode: 'joplin-plantuml' },
    }
}
