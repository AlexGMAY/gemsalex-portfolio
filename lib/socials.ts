/**
 * Shares content on social media platforms
 * @param platform - 'twitter', 'facebook', 'linkedin', etc.
 * @param url - URL to share
 * @param text - Optional text to include
 */
export function shareOnSocial(platform: string, url: string, text?: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = text ? encodeURIComponent(text) : "";

  const platforms = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
  };

  const shareUrl = platforms[platform as keyof typeof platforms];

  if (shareUrl) {
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  } else {
    console.warn(`Unsupported platform: ${platform}`);
  }
}

/**
 * Copies URL to clipboard
 * @param url - URL to copy
 */
export function copyToClipboard(url: string) {
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy:", err));
}
