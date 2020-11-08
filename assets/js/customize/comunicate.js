function NHDeComunicationSearch(e) {
    console.log(`[nhdComunicationSearch] >>>>>> ${JSON.stringify(e)}`);
}

if (window.location.href.indexOf("ide-runtime") > -1) {
    generateVscode();
}

function generateVscode() {
    require.config({ paths: { 'vs': './vs' } });
    // window.MonacoEnvironment = { getWorkerUrl: () => proxy };

    // let proxy = URL.createObjectURL(new Blob([`
    //     self.MonacoEnvironment = {
    //         baseUrl: 'https://unpkg.com/monaco-editor@latest/min/'
    //     };
    //     importScripts('https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js');
    // `], { type: 'text/javascript' }));

    require.config({
        'vs/nls': {
            availableLanguages: {
                '*': 'de'
            }
        }
    });

    require(["./vs/editor/editor.main"], function() {
        let editor = monaco.editor.create(document.getElementById('containerddd'), {
            value: [
                'function x() {',
                '\tconsole.log("Hello world!");',
                '}'
            ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark',
            // automaticLayout: true
            // model: monaco.editor.createModel("# Sample markdown", "markdown"),
            wordWrap: 'on',
            automaticLayout: true,
            minimap: {
                enabled: true
            },
            scrollbar: {
                vertical: 'auto'
            }
        });
    });
}