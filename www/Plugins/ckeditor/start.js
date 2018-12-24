/**
 * Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */




function InitCKEditor(element_id, filebrowserUploadUrl) {
    /* exported initSample */

    if (CKEDITOR.env.ie && CKEDITOR.env.version < 9)
        CKEDITOR.tools.enableHtml5Elements(document);

    // The trick to keep the editor in the sample quite small
    // unless user specified own height.
    CKEDITOR.config.height = 250;
    CKEDITOR.config.width = 'auto';
    CKEDITOR.replace(elmento_id, {
        //filebrowserUploadUrl: filebrowserUploadUrl,
        filebrowserBrowseUrl: "/CKE/FileBrowser",
    });
}

