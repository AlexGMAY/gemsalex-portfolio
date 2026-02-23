class GoogleMapsLoader {
  private static instance: GoogleMapsLoader;
  private promise: Promise<typeof google> | null = null;

  static getInstance(): GoogleMapsLoader {
    if (!GoogleMapsLoader.instance) {
      GoogleMapsLoader.instance = new GoogleMapsLoader();
    }
    return GoogleMapsLoader.instance;
  }

  load(apiKey: string): Promise<typeof google> {
    if (this.promise) return this.promise;

    this.promise = new Promise((resolve, reject) => {
      // Check if already loaded
      if (window.google && window.google.maps) {
        resolve(window.google);
        return;
      }

      // Create script
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places`;
      script.async = true;
      script.defer = true;

      script.onload = () => resolve(window.google);
      script.onerror = reject;

      document.head.appendChild(script);
    });

    return this.promise;
  }
}

export const googleMapsLoader = GoogleMapsLoader.getInstance();
