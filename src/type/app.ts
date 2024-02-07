export namespace App {}

declare global {
  interface Window {
    dataLayer: Record<string, string | number | undefined>[];
    grecaptcha: any;
  }
}
