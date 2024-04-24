import ReactDOM from 'react-dom/client';
import App from './App';

async function enableMocking() {
  // 우리는 빌드 환경에서도 사용해야 하므로 주석처리
  // if (import.meta.env.MODE !== 'development') {
  //   return;
  // }

  const { worker } = await import('./mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
