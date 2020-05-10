/*!
 * FileInput Croatian (Hrvatski) Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['hr'] = {
        fileSingle: 'datoteka',
        filePlural: 'datoteke',
        browseLabel: 'Odaberi &hellip;',
        removeLabel: 'Ukloni',
        removeTitle: 'Ukloni odabrane datoteke',
        cancelLabel: 'Odustani',
        cancelTitle: 'Prekini prijenos',
        pauseLabel: 'Pauza',
        pauseTitle: 'Pauziraj prijenos',
        uploadLabel: 'Učitaj',
        uploadTitle: 'Učitaj odabrane datoteke',
        msgNo: 'Ne',
        msgNoFilesSelected: 'Datoteka nije odabrana',
        msgPaused: 'Pauzirano',
        msgCancelled: 'Otkazano',
        msgPlaceholder: 'Odaberi {files}...',
        msgZoomModalHeading: 'Detaljan pregled',
        msgFileRequired: 'Za prijenos morate odabrati datoteku.',
        msgSizeTooSmall: 'Datoteka "{name}" (<b>{size} KB</b>) je premala. aMora biti veća od <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Datoteka "{name}" (<b>{size} KB</b>) prelazi maksimalno dopuštenu veličinu prijenosa od <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Morate odabrati najmanje <b>{n}</b> {files} za prijenos.',
        msgFilesTooMany: 'Broj odabranih datoteka za prijenos <b>({n})</b> prelazi maksimalno dopušteni broj <b>({m})</b>.',
        msgTotalFilesTooMany: 'Možete prenijeti maksimalno <b>{m}</b> datoteka (<b>{n}</b> trenutno priloženih datoteka).',
        msgFileNotFound: 'Datoteka "{name}" ne postoji!',
        msgFileSecured: 'Sigurnosna ograničenja sprječavaju čitanje datoteke "{name}".',
        msgFileNotReadable: 'Datoteka "{name}" nije čitljiva.',
        msgFilePreviewAborted: 'Pregled datoteke je prekinut za "{name}".',
        msgFilePreviewError: 'Došlo je do pogreške prilikom čitanja datoteke "{name}".',
        msgInvalidFileName: 'Nevažeći ili nepodržani znakovi u nazivu datoteke "{name}".',
        msgInvalidFileType: 'Nevažeća vrsta datoteke "{name}". Samo su "{types}" datoteke podržane.',
        msgInvalidFileExtension: 'Nevažeći datotečni nastavak "{name}". Samo su "{extensions}" datoteke podržane.',
        msgFileTypes: {
            'image': 'slike',
            'html': 'HTML',
            'text': 'tekst',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'objekt'
        },
        msgUploadAborted: 'Prijenos datoteke je prekinut',
        msgUploadThreshold: 'Obrada...',
        msgUploadBegin: 'Inicijalizacija...',
        msgUploadEnd: 'Gotovo',
        msgUploadResume: 'Nastavi prijenos...',
        msgUploadEmpty: 'Nema dostupnih podataka za prijenos.',
        msgUploadError: 'Greška u prijenosu',
        msgDeleteError: 'Greška priliko brisanja',
        msgProgressError: 'Greška',
        msgValidationError: 'Greška validacije',
        msgLoading: 'Učitavanje datoteke {index} od {files} &hellip;',
        msgProgress: 'Učitavanje datoteke {index} od {files} - {name} - {percent}% dovršeno.',
        msgSelected: '{n} {files} odabrano',
        msgFoldersNotAllowed: 'Dozvoljen je samo drag & drop datoteka! Preskočeno je {n} mapa.',
        msgImageWidthSmall: 'Širina slikovne datoteke "{name}" mora biti najmanje {size} px.',
        msgImageHeightSmall: 'Visina slikovne datoteke "{name}" mora biti najmanje {size} px.',
        msgImageWidthLarge: 'Širina slikovne datoteke "{name}" ne smije biti veća od {size} px.',
        msgImageHeightLarge: 'Visina slikovne datoteke "{name}" ne smije biti veća od {size} px.',
        msgImageResizeError: 'Ne mogu počitati dimenzije potrebne za smanjivanje!',
        msgImageResizeException: 'Pogreška prilikom promjene veličine slike.<pre>{errors}</pre>',
        msgAjaxError: 'Nešto je pošlo po zlu sa {operation} operacijom. Molimo pokušajte kasnije!',
        msgAjaxProgressError: '{operation} nije uspjelo!',
        msgDuplicateFile: 'Datoteka "{name}" iste veličine "{size} KB" je već odabrana. Duplikat preskočen.',
        msgResumableUploadRetriesExceeded:  'Prijenos je prekinut nakon <b>{max}</b> pokušaja za datoteku <b>{file}</b>! Detalji greške: <pre>{error}</pre>',
        msgPendingTime: '{time} preostalo',
        msgCalculatingTime: 'računanje preostalog vremena',
        ajaxOperations: {
            deleteThumb: 'brisanje datoteke',
            uploadThumb: 'prijenos datoteke',
            uploadBatch: 'grupni prijenos',
            uploadExtra: 'form data upload'
        },
        dropZoneTitle: 'Drag & drop datoteka ovdje &hellip;',
        dropZoneClickTitle: '<br>(ili kliknite za odabir {files})',
        fileActionSettings: {
            removeTitle: 'Ukloni',
            uploadTitle: 'Prijenos',
            uploadRetryTitle: 'Ponovi prijenos',
            downloadTitle: 'Preuzmi datoteku',
            zoomTitle: 'Povećaj',
            dragTitle: 'Pomicanje / promjena rasporeda',
            indicatorNewTitle: 'Još nije preneseno',
            indicatorSuccessTitle: 'Preneseno',
            indicatorErrorTitle: 'Greška u prijenosu',
            indicatorPausedTitle: 'Prijenos pauziran',
            indicatorLoadingTitle:  'Prijenos ...'
        },
        previewZoomButtonTitles: {
            prev: 'Pogledajte prethodnu datoteku',
            next: 'Pogledajte sljedeću datoteku',
            toggleheader: 'Uključi zaglavlje',
            fullscreen: 'Prebacivanje preko cijelog zaslona',
            borderless: 'Uključite način rada bez obruba',
            close: 'Zatvorite detaljan pregled'
        }
    };
})(window.jQuery);
