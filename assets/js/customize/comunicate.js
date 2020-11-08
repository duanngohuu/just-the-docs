function NHDeComunicationSearch(e) {
    console.log(`[nhdComunicationSearch] >>>>>> ${JSON.stringify(e)}`);
}

const oldLog = console.log;
const oldError = console.error;
const oldInfo = console.info;
const oldWarn = console.warn;

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

    // https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html
    window.vsEditorControl = window.vsEditorControl || {};
    require(["./vs/editor/editor.main"], function() {
        window.vsEditorControl = monaco.editor.create(document.getElementById('containerddd'), {
            value: [
                `console.log('Hello các vị thần, test phát đi ạ hihi ^^');`
            ].join('\n'),
            language: 'javascript',
            theme: 'vs-dark',
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

    const logger = document.getElementById('runresult');

    document.getElementById('clickMe').addEventListener('click', doRun);
    document.getElementById('clickConsole').addEventListener('click', function(e) {
        if (logger.style.display === 'none') {
            logger.style.display = 'block';
            this.innerText = 'Close console';
        } else {
            logger.style.display = 'none';
            this.innerText = 'Open console';
        }

        doRun();
    });

    function doRun() {
        logger.innerHTML = '';
        logger.style.color = 'white';
        // logger.scrollIntoView();

        function forceConsole() {
            if (logger.style.display === 'none') {
                console.log = oldLog;
                console.error = oldError;
                console.warn = oldWarn;
                console.info = oldInfo;

                return;
            }

            if (!console) {
                console = {};
            }

            console.log = function(message) {
                if (typeof message == 'object') {
                    logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
                } else {
                    logger.innerHTML += message + '<br />';
                }
            }

            console.error = function(message) {
                if (typeof message == 'object') {
                    logger.innerHTML += `<p style="color: red">${(JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />'}<p>`;
                } else {
                    logger.innerHTML += `<p style="color: red">${message + '<br />'}<p>`;
                }
            }

            console.info = function(message) {
                if (typeof message == 'object') {
                    logger.innerHTML += `<p style="color: blue">${(JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />'}<p>`;
                } else {
                    logger.innerHTML += `<p style="color: blue">${message + '<br />'}<p>`;
                }
            }

            console.warn = function(message) {
                if (typeof message == 'object') {
                    logger.innerHTML += `<p style="color: orange">${(JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />'}<p>`;
                } else {
                    logger.innerHTML += `<p style="color: orange">${message + '<br />'}<p>`;
                }
            }
        };

        forceConsole();

        try {
            eval(window.vsEditorControl.getModel().getValue());
        } catch (error) {
            if (logger.style.display === 'none') {
                console.error(error);
            } else {
                logger.innerHTML += `<p style="color: red">${error + '<br />'}<p>`;
            }
        }
    }
}