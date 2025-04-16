import { google } from "google-maps";

declare global {
  interface Window {
    google: typeof google;
  }
}
