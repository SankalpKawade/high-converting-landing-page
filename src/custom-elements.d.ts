import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'logo-list': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'data-speed'?: string | number;
          'data-direction'?: string;
          tabIndex?: number;
        },
        HTMLElement
      >;
    }
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      'logo-list': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'data-speed'?: string | number;
          'data-direction'?: string;
          tabIndex?: number;
        },
        HTMLElement
      >;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'logo-list': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'data-speed'?: string | number;
          'data-direction'?: string;
          tabIndex?: number;
        },
        HTMLElement
      >;
    }
  }
}
