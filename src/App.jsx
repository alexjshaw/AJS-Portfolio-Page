import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Router from './routes';

function App() {

  return (
    <MantineProvider>
      <Notifications />
      <Router />
    </MantineProvider>
  )
}

export default App
