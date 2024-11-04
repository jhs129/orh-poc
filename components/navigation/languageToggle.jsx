import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const LanguageToggle = () => {
  const router = useRouter();
  const currentLocale = Cookies.get('locale') || 'en-US';

  const handleLanguageChange = (event) => {
    const selectedLocale = event.target.value;
    Cookies.set('locale', selectedLocale, { expires: 365 });
    router.reload(); // Reload to apply the new locale
  };

  return (
    <select value={currentLocale} onChange={handleLanguageChange}>
      <option value="en-US">English</option>
      <option value="es-US">Español</option>
    </select>
  );
};

export default LanguageToggle;
