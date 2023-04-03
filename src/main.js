import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';

const app = createApp(App);

// Register components:
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
