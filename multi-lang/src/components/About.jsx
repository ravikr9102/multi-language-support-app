import { useTranslation } from 'react-i18next';
export default function About() {
  const { t } = useTranslation();
  return (
    <section className="p-10">
      <h1 className="text-center text-3xl py-4">{t('aboutme')}</h1>
      <p>{t('description')}</p>
    </section>
  );
}
