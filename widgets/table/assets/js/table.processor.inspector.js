/*
 * Inspector cell processor for the table control.
 * The inspector processor uses a Inspector widget to edit a complex field in a cell.
 */
+function ($) { "use strict";

    // NAMESPACE CHECK
    // ============================

    if ($.wn.table === undefined) {
        throw new Error("The $.wn.table namespace is not defined. Make sure that the table.js script is loaded.");
    }
    if ($.wn.table.processor === undefined) {
        throw new Error("The $.wn.table.processor namespace is not defined. Make sure that the table.processor.base.js script is loaded.");
    }

    // CLASS DEFINITION
    // ============================

    const Base = $.wn.table.processor.base;
    const BaseProto = Base.prototype;

    const InspectorProcessor = function (tableObj, columnName, columnConfiguration) {
        $(document).on('hiding.oc.inspector', this.onInspectorHidden.bind(this));

        this.inspector = null;

        //
        // Parent constructor
        //

        Base.call(this, tableObj, columnName, columnConfiguration);
    }

    InspectorProcessor.prototype = Object.create(BaseProto);
    InspectorProcessor.prototype.constructor = InspectorProcessor;

    InspectorProcessor.prototype.dispose = function () {
        BaseProto.dispose.call(this);
        $(document).off('hiding.oc.inspector', this.onInspectorHidden.bind(this));
    }

    /*
     * Renders the cell in the normal (no edit) mode
     */
    InspectorProcessor.prototype.renderCell = function(value, cellContentContainer) {
        this.createViewContainer(cellContentContainer, value);

        if (this.columnConfiguration.readonly || this.columnConfiguration.readOnly) {
            cellContentContainer.classList.add('readonly');
            cellContentContainer.setAttribute('tabindex', 0);
        }
    }

    /*
     * This method is called when the cell managed by the processor
     * is focused (clicked or navigated with the keyboard).
     */
    InspectorProcessor.prototype.onFocus = function(cellElement, isClick) {
        if (this.activeCell === cellElement)
            return

        this.activeCell = cellElement
        if (!this.columnConfiguration.readonly && !this.columnConfiguration.readOnly && isClick) {
            this.buildEditor(cellElement, this.getCellContentContainer(cellElement))
        } else {
            this.getCellContentContainer(cellElement).focus()
        }
    }


    /*
     * Forces the processor to hide the editor when the user navigates
     * away from the cell. Processors can update the sell value in this method.
     * Processors must clear the reference to the active cell in this method.
     */
    InspectorProcessor.prototype.onUnfocus = function() {
        if (!this.activeCell) {
            return;
        }

        this.showViewContainer(this.activeCell);
        this.activeCell = null;
    }

    InspectorProcessor.prototype.buildEditor = function(cellElement, cellContentContainer) {
        // Hide the view container
        this.hideViewContainer(this.activeCell);

        // Create the Inspector control
        this.inspector = document.createElement('div');
        this.inspector.setAttribute('class', 'inspector-input');
        this.inspector.setAttribute('data-inspectable', 'true');
        this.inspector.setAttribute('data-inspector-title', this.columnConfiguration.inspectorTitle ?? this.columnConfiguration.title);
        this.inspector.setAttribute('data-inspector-offset-y', '0');
        if (this.columnConfiguration.description) {
            this.inspector.setAttribute('data-inspector-description', this.columnConfiguration.description);
        }
        this.inspector.setAttribute('data-inspector-config', this.getInspectorConfiguration());

        cellContentContainer.appendChild(this.inspector);

        window.setTimeout(() => {
            this.inspector.click();
        }, 50);
    }

    InspectorProcessor.prototype.getInspectorConfiguration = function() {
        if (Array.isArray(this.columnConfiguration.properties)) {
            return JSON.stringify(this.columnConfiguration.properties);
        } else if (typeof this.columnConfiguration.properties !== 'object') {
            throw new Error('The properties configuration must be an object or an array.');
        }

        const config = [];

        Object.entries(this.columnConfiguration.properties).forEach(([key, value]) => {
            const settings = value;
            settings.property = key;
            config.push(settings);
        });

        return JSON.stringify(config);
    }

    InspectorProcessor.prototype.onInspectorHidden = function(ev, data) {
        if (!this.inspector || ev.target !== this.inspector) {
            return;
        }

        this.tableObj.setCellValue(this.activeCell, data.values);
    };

    $.wn.table.processor.inspector = InspectorProcessor;
}(window.jQuery);