import { AppProvider } from '@toolpad/core';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html><body>
      
  
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <AppProvider>
        {children}
      </AppProvider>
    </AppRouterCacheProvider>
    </body></html>
  );
}
