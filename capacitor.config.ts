import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.726a906615554009819cffdae8256fb4',
  appName: 'A Lovable project',
  webDir: 'dist',
  server: {
    url: 'https://726a9066-1555-4009-819c-ffdae8256fb4.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1a1625',
      showSpinner: false
    }
  }
};

export default config;