/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
//Correção do z-indez nos modais
$.fn.modal.Constructor.prototype._enforceFocus = function () {
    var $modalElement = this.$element;
    $(document).on('focusin.modal', function (e) {
        if ($modalElement[0] !== e.target
            && !$modalElement.has(e.target).length
            && $(e.target).parentsUntil('*[role="dialog"]').length === 0) {
            $modalElement.focus();
        }
    });
};


CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here.
    // For complete reference see:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config

    // The toolbar groups arrangement, optimized for two toolbar rows.
    config.toolbarGroups = [
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
        { name: 'links' },
        { name: 'insert' },
        { name: 'tools' },
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'others' },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
        { name: 'styles' },
        { name: 'colors' },
        { name: 'about' }
    ];

    // Remove some buttons provided by the standard plugins, which are
    // not needed in the Standard(s) toolbar.


    // Set the most common block elements.
    config.format_tags = 'p;h1;h2;h3;pre';

    // Simplify the dialog windows.
    config.removeDialogTabs = 'image:advanced;link:advanced';



    config.extraPlugins = 'filebrowser';

    config.extraPlugins = 'font';
    config.extraPlugins = 'justify';
    config.extraPlugins = 'colorbutton';


    config.language = 'pt-br';


};
