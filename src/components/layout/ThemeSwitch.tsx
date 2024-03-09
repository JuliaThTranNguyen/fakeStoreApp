import MaterialUISwitch from '../../commons/styles/MaterialUISwitch';
import useColorTheme from '../../hooks/useColorTheme';

export default function ThemeSwitch() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const handleSwitch = () => {
    setColorTheme(colorTheme === 'dark' ? 'light' : 'dark');
  };
  return (
    <MaterialUISwitch checked={colorTheme === 'dark'} onChange={handleSwitch} />
  );
}
