<?php if ($this->previewMode): ?>
    <div class="form-control">
        <pre><?= e($value) ?></pre>
    </div>
<?php else: ?>
    <div
        id="<?= $this->getId() ?>"
        class="field-codeeditor size-<?= $size ?> <?= $stretch?'layout-relative':'' ?>"
        data-control="codeeditor"
        data-font-size="<?= $fontSize ?>"
        data-word-wrap="<?= $wordWrap ?>"
        data-code-folding="<?= $codeFolding ?>"
        data-auto-close-tags="<?= $autoClosing ?>"
        data-tab-size="<?= $tabSize ?>"
        data-theme="<?= $theme ?>"
        data-show-invisibles="<?= $showInvisibles ? 'true' : 'false' ?>"
        data-autocompletion="<?= $autocompletion ?>"
        data-enable-snippets="<?= $enableSnippets ?>"
        data-display-indent-guides="<?= $displayIndentGuides ? 'true' : 'false' ?>"
        data-show-print-margin="<?= $showPrintMargin ? 'true' : 'false' ?>"
        data-highlight-active-line="<?= $highlightActiveLine ? 'true' : 'false' ?>"
        data-use-soft-tabs="<?= $useSoftTabs ? 'true' : 'false' ?>"
        data-show-gutter="<?= $showGutter ? 'true' : 'false' ?>"
        data-read-only="<?= $readOnly ? 'true' : 'false' ?>"
        data-show-minimap="<?= $readOnly ? 'true' : 'false' ?>"
        data-language="<?= $language ?>"
        data-margin="<?= $margin ?>"
        <?= $this->formField->getAttributes() ?>
    >
        <div class="editor-container"></div>
        <div class="editor-toolbar">
            <ul>
                <li class="searchbox-enable">
                    <a href="javascript:;">
                        <i class="icon-search"></i>
                        <abbr title="ctrl+f"><?= e(trans('cms::lang.editor.open_searchbox')) ?></abbr>
                    </a>
                </li>
                <li class="searchbox-disable">
                    <a href="javascript:;">
                        <i class="icon-search"></i>
                        <abbr title="ctrl+f or esc"><?= e(trans('cms::lang.editor.close_searchbox')) ?></abbr>
                    </a>
                </li>
                <li class="replacebox-enable">
                    <a href="javascript:;">
                        <i class="icon-random"></i>
                        <abbr title="ctrl+h"><?= e(trans('cms::lang.editor.open_replacebox')) ?></abbr>
                    </a>
                </li>
                <li class="replacebox-disable">
                    <a href="javascript:;">
                        <i class="icon-random"></i>
                        <abbr title="ctrl+h or esc"><?= e(trans('cms::lang.editor.close_replacebox')) ?></abbr>
                    </a>
                </li>
                <li class="fullscreen-enable">
                    <a href="javascript:;">
                        <i class="icon-desktop"></i>
                        <abbr title="ctrl+shift+f"><?= e(trans('cms::lang.editor.enter_fullscreen')) ?></abbr>
                    </a>
                </li>
                <li class="fullscreen-disable">
                    <a href="javascript:;">
                        <i class="icon-desktop"></i>
                        <abbr title="ctrl+shift+f or esc"><?= e(trans('cms::lang.editor.exit_fullscreen')) ?></abbr>
                    </a>
                </li>
            </ul>
        </div>
        <input name="<?= $name ?>" data-value-bag id="<?= $this->getId('value') ?>" type="hidden" value="<?= e($value) ?>">
    </div>
<?php endif ?>
