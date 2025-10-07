import { Calendly } from "@types/calendly";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: object;
        utm?: object;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      showPopupWidget: (url: string) => void;
      closePopupWidget: () => void;
    };
  }
}

export {};
