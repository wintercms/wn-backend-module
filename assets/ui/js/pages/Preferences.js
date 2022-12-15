import { delegate } from 'jquery-events-to-dom-events';

((Snowboard) => {
    class Preferences extends Snowboard.Singleton {
        construct() {
            this.widget = null;
        }

        listens() {
            return {
                'backend.widget.initialized': 'onWidgetInitialized',
            };
        }

        onWidgetInitialized(element, widget) {
            if (element === document.getElementById('editorpreferencesCodeeditor')) {
                this.widget = widget;
                this.enablePreferences();
            }
        }

        enablePreferences() {
            delegate('change');

            const checkboxes = {
                show_gutter: 'showGutter',
                highlight_active_line: 'highlightActiveLine',
                use_hard_tabs: '!useSoftTabs',
                display_indent_guides: 'displayIndentGuides',
                show_invisibles: 'showInvisibles',
                show_print_margin: 'showPrintMargin',
                show_minimap: 'showMinimap',
                enable_folding: 'codeFolding',
                bracket_colors: 'bracketColors',
                show_colors: 'showColors',
            };

            Object.entries(checkboxes).forEach(([key, value]) => {
                this.element(key).addEventListener('change', (event) => {
                    this.widget.setConfig(
                        value.replace(/^!/, ''),
                        /^!/.test(value) ? !event.target.checked : event.target.checked,
                    );
                });
            });

            this.element('theme').addEventListener('$change', (event) => {
                this.widget.loadTheme(event.target.value);
            });

            this.element('font_size').addEventListener('$change', (event) => {
                this.widget.setConfig('fontSize', event.target.value);
            });

            this.element('tab_size').addEventListener('$change', (event) => {
                this.widget.setConfig('tabSize', event.target.value);
            });

            this.element('word_wrap').addEventListener('$change', (event) => {
                const { value } = event.target;
                switch (value) {
                    case 'off':
                        this.widget.setConfig('wordWrap', false);
                        break;
                    case 'fluid':
                        this.widget.setConfig('wordWrap', 'fluid');
                        break;
                    default:
                        this.widget.setConfig('wordWrap', parseInt(value, 10));
                }
            });

            document.querySelectorAll('[data-switch-lang]').forEach((element) => {
                element.addEventListener('click', (event) => {
                    event.preventDefault();
                    const language = element.dataset.switchLang;
                    const template = document.querySelector(`[data-lang-snippet="${language}"]`);

                    if (!template) {
                        return;
                    }

                    this.widget.setValue(template.textContent.trim());
                    this.widget.setLanguage(language);
                });
            });
        }

        element(key) {
            return document.getElementById(`Form-field-Preference-editor_${key}`);
        }
    }

    Snowboard.addPlugin('backend.preferences', Preferences);
})(window.Snowboard);

// $(document).ready(function() {

//     var editorEl = $('#editorpreferencesCodeeditor'),
//         editor = editorEl.codeEditor('getEditorObject'),
//         session = editor.getSession(),
//         renderer = editor.renderer

//     editorEl.height($('#editorSettingsForm').height() - 23)

//     $('#Form-field-Preference-editor_theme').on('change', function() {
//         editorEl.codeEditor('setTheme', $(this).val())
//     })

//     $('#Form-field-Preference-editor_font_size').on('change', function() {
//         editor.setFontSize(parseInt($(this).val()))
//     })

//     $('#Form-field-Preference-editor_word_wrap').on('change', function() {
//         editorEl.codeEditor('setWordWrap', $(this).val())
//     })

//     $('#Form-field-Preference-editor_code_folding').on('change', function() {
//         session.setFoldStyle($(this).val())
//     })

//     $('#Form-field-Preference-editor_autocompletion').on('change', function() {
//         editor.setOption('enableBasicAutocompletion', false)
//         editor.setOption('enableLiveAutocompletion', false)

//         var val = $(this).val()
//         if (val == 'basic') {
//             editor.setOption('enableBasicAutocompletion', true)
//         }
//         else if (val == 'live') {
//             editor.setOption('enableLiveAutocompletion', true)
//         }
//     })

//     $('#Form-field-Preference-editor_tab_size').on('change', function() {
//         session.setTabSize($(this).val())
//     })

//     $('#Form-field-Preference-editor_show_invisibles').on('change', function() {
//         editor.setShowInvisibles($(this).is(':checked'))
//     })

//     $('#Form-field-Preference-editor_enable_snippets').on('change', function() {
//         editor.setOption('enableSnippets', $(this).is(':checked'))
//     })

//     $('#Form-field-Preference-editor_display_indent_guides').on('change', function() {
//         editor.setDisplayIndentGuides($(this).is(':checked'))
//     })

//     $('#Form-field-Preference-editor_show_print_margin').on('change', function() {
//         editor.setShowPrintMargin($(this).is(':checked'))
//     })

//     $('#Form-field-Preference-editor_highlight_active_line').on('change', function() {
//         editor.setHighlightActiveLine($(this).is(':checked'))
//     })

//     $('#Form-field-Preference-editor_use_hard_tabs').on('change', function() {
//         session.setUseSoftTabs(!$(this).is(':checked'))
//     })

//     $('#Form-field-Preference-editor_show_gutter').on('change', function() {
//         renderer.setShowGutter($(this).is(':checked'))
//     })

// })
