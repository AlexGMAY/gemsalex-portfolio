import { Calendly } from "@types/calendly";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement | null;
        prefill: Record<string, unknown>;
        utm: Record<string, unknown>;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}
