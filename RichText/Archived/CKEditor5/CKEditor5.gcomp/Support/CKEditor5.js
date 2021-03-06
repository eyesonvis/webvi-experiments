(function () {
    'use strict';

    const create = async function (selector) {
        const elements = document.querySelectorAll(selector);
        if (elements.length !== 1) {
            throw new Error(`Expected a single element with selector ${selector} but found ${elements.length}`);
        }
        const element = elements[0];
        element.innerHTML = '';

        const ckeditorContainer = document.createElement('div');
        ckeditorContainer.classList.add('webvi-ckeditor-container');
        const textarea = document.createElement('textarea');
        ckeditorContainer.appendChild(textarea);
        element.appendChild(ckeditorContainer);

        await window.ClassicEditor.create(textarea);
    };

    window.WebVICKEditor5 = {create};
}());
