declare module "@/lib/views" {
  export function incrementViewCount(resourceId: string): Promise<void>;
  export function getViewCount(resourceId: string): Promise<number>;
}

declare module "@/lib/socials" {
  export function shareOnSocial(
    platform: string,
    url: string,
    text?: string
  ): void;
  export function copyToClipboard(url: string): void;
}
