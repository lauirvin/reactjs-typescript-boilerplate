export type Styles = {
  ctaButton: string;
  modDisabled: string;
  modFill: string;
  modInvert: string;
  modNoBorder: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
