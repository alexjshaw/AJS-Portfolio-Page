import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import Router from './routes';

function App() {

  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  )
}

export default App
