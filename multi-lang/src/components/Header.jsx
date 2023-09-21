import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n, t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-between items-center px-16 py-3 bg-slate-100">
      <div>
        <ul className="flex items-center">
          <li className="no-underline list-none mr-6 py-4">
            <NavLink to="/">{t('home')}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t('about')}</NavLink>
          </li>
        </ul>
      </div>
      <div>
        <label>Choose your language : </label>
        <select
          className="p-1 bg-white rounded border border-slate-300 hover:border-indigo-300"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ko">한국인</option>
          <option value="hi">हिंदी</option>
          <option value="sp">español</option>
        </select>
      </div>
    </div>
  );
}
