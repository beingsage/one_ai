"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import SearchIcon from '@mui/icons-material/Search';
// import ChatIcon from '@mui/icons-material/Chat';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import type {Session, Router, Navigation } from '@toolpad/core';


//speed dial

// import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';



const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];



const NAVIGATION: Navigation = [

  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'History',
    icon: <HistoryIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Templates',
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function DemoPageContent({ pathname }: { pathname: string }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography></Typography>
//     </Box>
//   );
// }


function Search() {
  return (
    <React.Fragment>
      <Tooltip title="Search" enterDelay={1000}>
        <div>
          <IconButton
            type="button"
            aria-label="search"
            sx={{
              display: { xs: 'inline', md: 'none' },
            }}
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Tooltip>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon />
              </IconButton>
            ),
            sx: { pr: 0.5 },
          },
        }}
        sx={{ display: { xs: 'none', md: 'inline-block' }, mr: 1 }}
      />
    </React.Fragment>
  );
}



interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;



  const [session, setSession] = React.useState<Session | null>({
    user: {
      name: 'Bharat Kashyap',
      email: 'bharatkashyap@outlook.com',
      image: 'https://avatars.githubusercontent.com/u/19550456',
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);





  const [pathname, setPathname] = React.useState('/dashboard');

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

//speeddial
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);



  return (
    // preview-start
    
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}>
        
       
      <DashboardLayout  slots={{ toolbarActions: Search }}>
      <Box sx={{ position:'relative', width: 800, maxWidth: '100%', left: 200, top: 50}}>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Box>
      {/* <DemoPageContent pathname={pathname} /> */}
      </DashboardLayout>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'relative', bottom: -3330, right: 300 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
      </AppProvider>
      
  );
}
console.log("hello world");

