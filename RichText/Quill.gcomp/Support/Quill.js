(function () {
    'use strict';

    class ReferenceManager {
        constructor () {
            this._nextReference = 1;
            this.references = new Map();
        }

        createReference (obj) {
            const reference = this._nextReference;
            this._nextReference += 1;
            this.references.set(reference, obj);
            return reference;
        }

        getObject (reference) {
            return this.references.get(reference);
        }

        closeReference (reference) {
            this.references.delete(reference);
        }
    }
    const referenceManager = new ReferenceManager();

    const validateKatex = function () {
        if (window.katex === undefined) {
            throw new Error('The format "formula" requires the Include Formula Plugin VI to be called. Katex was not imported successfully.');
        }
    };

    const validateHighlight = function () {
        if (window.hljs === undefined) {
            throw new Error('The format "code-block" requires the Include Code-Block VI to be called. Highlight.js was not imported successfully.');
        }
    };

    const createQuillTemplate = function (formats) {
        const quillTemplate = `
            <div class="webvi-quill-container">
                <div class="webvi-quill-toolbar">
                    <span class="ql-formats">
                    </span>
                </div>
                <div class="webvi-quill-editor"></div>
            </div>
        `;
        // https://quilljs.com/docs/formats/
        const quillButtonTemplates = {
            // inline
            'font': '<select class="ql-font"></select>',
            'size': '<select class="ql-size"></select>',

            'bold': '<button class="ql-bold"></button>',
            'italic': '<button class="ql-italic"></button>',
            'underline': '<button class="ql-underline"></button>',
            'strike': '<button class="ql-strike"></button>',

            'color': '<select class="ql-color"></select>',
            'background': '<select class="ql-background"></select>',

            'script': '<button class="ql-script" value="sub"></button><button class="ql-script" value="super"></button>',

            'code': '<button class="ql-code"></button>',
            'link': '<button class="ql-link"></button>',

            // block
            'header': '<button class="ql-header" value="1"></button><button class="ql-header" value="2"></button>',
            'blockquote': '<button class="ql-blockquote"></button>',
            'code-block': '<button class="ql-code-block"></button',

            'list': '<button class="ql-list" value="ordered"></button><button class="ql-list" value="bullet"></button>',
            'indent': '<button class="ql-indent" value="-1"></button><button class="ql-indent" value="+1"></button>',

            'direction': '<button class="ql-direction" value="rtl"></button>',
            'align': '<select class="ql-align"></select>',

            // embeds
            'formula': '<button class="ql-formula"></button>',
            'image': '<button class="ql-image"></button>',
            'video': '<button class="ql-video"></button>',

            // actions
            'clean': '<button class="ql-clean"></button>',

            // custom
            'spacer': '<div class="webvi-quill-spacer"></div>'
        };
        const template = document.createElement('template');
        template.innerHTML = quillTemplate;
        const templateClone = template.content.cloneNode(true);
        const container = templateClone.querySelector('.webvi-quill-container');
        const toolbar = templateClone.querySelector('.webvi-quill-toolbar');
        const editor = templateClone.querySelector('.webvi-quill-editor');
        const formatsContainer = templateClone.querySelector('.ql-formats');
        formats.forEach(function (format) {
            if (quillButtonTemplates[format] === undefined) {
                throw new Error(`Unsupported format: ${format}. Supported formats: ${Object.keys(quillButtonTemplates).join(',')}`);
            }
            formatsContainer.insertAdjacentHTML('beforeend', quillButtonTemplates[format]);
        });
        return {
            container,
            toolbar,
            editor
        };
    };

    const setDisabledHelper = function (quill, disabled) {
        const enable = !disabled;
        quill.enable(enable);
        quill.options.bounds.classList.toggle('webvi-quill-disable', disabled);
    };

    const createQuill = function (selector, formatsJSON, disabled) {
        const elements = document.querySelectorAll(selector);
        if (elements.length !== 1) {
            throw new Error(`Expected to find one element with selector ${selector}, but found ${elements.length}`);
        }
        const formats = JSON.parse(formatsJSON);
        const element = elements[0];
        element.innerHTML = '';

        if (formats.includes('formula')) {
            validateKatex();
        }

        if (formats.includes('code-block')) {
            validateHighlight();
        }

        const {container, toolbar, editor} = createQuillTemplate(formats);
        const filteredFormats = formats.filter(format => format !== 'spacer');
        element.appendChild(container);

        const config = {
            modules: {
                syntax: true,
                toolbar
            },
            theme: 'snow',
            bounds: container,
            formats: filteredFormats
        };

        const quill = new window.Quill(editor, config);
        setDisabledHelper(quill, disabled);
        const quillReference = referenceManager.createReference(quill);
        return quillReference;
    };

    const destroyQuill = function (quillReference) {
        const quill = referenceManager.getObject(quillReference);
        if (quill instanceof window.Quill === false) {
            return;
        }
        referenceManager.closeReference(quillReference);
        quill.options.bounds.parentNode.removeChild(quill.options.bounds);
    };

    const getContents = function (quillReference) {
        const quill = referenceManager.getObject(quillReference);
        if (quill instanceof window.Quill === false) {
            throw new Error('Expected instance of Quill object');
        }
        const deltas = quill.getContents();
        const deltasJSON = JSON.stringify(deltas);
        return deltasJSON;
    };

    const setContents = function (quillReference, deltasJSON) {
        const quill = referenceManager.getObject(quillReference);
        if (quill instanceof window.Quill === false) {
            throw new Error('Expected instance of Quill object');
        }
        const deltas = JSON.parse(deltasJSON);
        quill.setContents(deltas);
    };

    const setDisabled = function (quillReference, disabled) {
        const quill = referenceManager.getObject(quillReference);
        if (quill instanceof window.Quill === false) {
            throw new Error('Expected instance of Quill object');
        }
        setDisabledHelper(quill, disabled);
    };

    window.WebVIQuill = {
        createQuill,
        destroyQuill,
        getContents,
        setContents,
        setDisabled,
        validateKatex,
        validateHighlight
    };
}());
