import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Router from './routes';
import { ActiveLinkProvider } from './context/ActiveLinkContext';

function App() {

  return (
    <MantineProvider>
      <ActiveLinkProvider>
      <Notifications />
      <Router />
      </ActiveLinkProvider>
    </MantineProvider>
  )
}

export default App
