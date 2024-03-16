import MaterialUISwitch from '../../commons/styles/layout/MaterialUISwitch';
import useColorTheme from '../../hooks/useColorTheme';

export default function ThemeSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const handleSwitchingTheme = () => {
    setColorTheme(colorTheme === 'light' ? 'dark' : 'light');
  };
  return (
    <MaterialUISwitch checked={colorTheme === 'light'} onChange={handleSwitchingTheme} />
  );
}
