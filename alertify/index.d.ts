declare var alertify: alertify.IAlertifyStatic;

declare namespace alertify {
    interface IAlertifyStatic {
        alert(): IAlertifyStatic;

        /*
         * @message {String or DOMElement} The dialog contents.
         *
         * alertify.alert(message);
         *
         */
        alert(message: string): IAlertifyStatic;

        /*
         * @title {String or DOMElement} The dialog title.
         * @message {String or DOMElement} The dialog contents.
         *
         * alertify.alert(title, message);
         *
         */
        alert(title: string, message: string): IAlertifyStatic;

        /*
         * @message {String or DOMElement} The dialog contents.
         * @onok {Function} Invoked when the user clicks OK button or closes the dialog.
         *
         * alertify.alert(message, onok);
         *
         */
        alert(message: string, onok: () => void): IAlertifyStatic;

        /*
         * @title {String or DOMElement} The dialog title.
         * @message {String or DOMElement} The dialog contents.
         * @onok {Function} Invoked when the user clicks OK button or closes the dialog.
         *
         * alertify.alert(title, message, onok);
         *
         */
        alert(title: string, message: string, onok: () => void): IAlertifyStatic;

        /**
         * Used to set alertify properties
         * @param Properties
         */
        set(args: IProperties): IAlertifyStatic;

        /**
        * Resize the dialog to a specific width/height (the dialog must be 'resizable').
        * @width {Number or String} The new dialog width in pixels or precent (#.#%).
        * @height {Number or String} The new dialog height in pixels or precent (#.#%).
        */
        resizeTo(width: string, height: string): IAlertifyStatic;

        /**
        * Closes the current dialog instance.
        */
        close(): void;

        /**
        * close all open dialogs.
        */
        closeAll(): void;

        /**
        *  close all open dialogs except this one.
        */
        closeOthers(): void;

        show(): void;
    }

    /**
    * Properties for alertify.set function
    */
    interface IProperties {
        message?: string;
        autoReset?: boolean;
        basic?: boolean;
        closable?: boolean;
        closableByDimmer?: boolean;
        invokeOnCloseOff?: boolean;
        frameless?: boolean;
        defaultFocusOff?: boolean;
        maintainFocus?: boolean;
        maximizable?: boolean;
        modal?: boolean;
        movable?: boolean;
        moveBounded?: boolean;
        overflow?: boolean;
        padding?: boolean;
        pinnable?: boolean;
        pinned?: boolean;
        preventBodyShift?: boolean;
        resizable?: boolean;
        startMaximized?: boolean;
        transition?: string;
        transitionOff?: boolean;
        onshow?: () => void;
    }

    interface theme {
        input: string,
        ok: string,
        cancel: string
    }

}
