import useLocalStorage from '../utils/useLocalStorage';

const defaultSettings = {
    notifications: 'weekly'
};

const App = () => {
  const [appSettings, setAppSettings] = useLocalStorage(
    'app-settings',
    defaultSettings
  );

  return (
    <div>
      <p>Your application's settings:</p>
      <pre>
        <code>{appSettings}</code>
      </pre>
      <button onClick={() => setAppSettings(defaultSettings)}>Reset settings</button>
    </div>
  );
};