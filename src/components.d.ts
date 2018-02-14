/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  LumavateToolbarButton as LumavateToolbarButton
} from './components/lumavate-toolbar-button/lumavate-toolbar-button';

declare global {
  interface HTMLLumavateToolbarButtonElement extends LumavateToolbarButton, HTMLStencilElement {
  }
  var HTMLLumavateToolbarButtonElement: {
    prototype: HTMLLumavateToolbarButtonElement;
    new (): HTMLLumavateToolbarButtonElement;
  };
  interface HTMLElementTagNameMap {
    "lumavate-toolbar-button": HTMLLumavateToolbarButtonElement;
  }
  interface ElementTagNameMap {
    "lumavate-toolbar-button": HTMLLumavateToolbarButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lumavate-toolbar-button": JSXElements.LumavateToolbarButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface LumavateToolbarButtonAttributes extends HTMLAttributes {
      item?: any;
    }
  }
}


import {
  LumavateToolbar as LumavateToolbar
} from './components/lumavate-toolbar/lumavate-toolbar';

declare global {
  interface HTMLLumavateToolbarElement extends LumavateToolbar, HTMLStencilElement {
  }
  var HTMLLumavateToolbarElement: {
    prototype: HTMLLumavateToolbarElement;
    new (): HTMLLumavateToolbarElement;
  };
  interface HTMLElementTagNameMap {
    "lumavate-toolbar": HTMLLumavateToolbarElement;
  }
  interface ElementTagNameMap {
    "lumavate-toolbar": HTMLLumavateToolbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "lumavate-toolbar": JSXElements.LumavateToolbarAttributes;
    }
  }
  namespace JSXElements {
    export interface LumavateToolbarAttributes extends HTMLAttributes {
      backgroundcolor?: string;
      items?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
