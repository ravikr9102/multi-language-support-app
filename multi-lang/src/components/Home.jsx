import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation();
  return (
    <section className="p-10">
      <figure className="flex justify-center items-center">
        <img
          className="w-1/3
         h-80 object-cover"
          src="/assets/pani-puri-recipe.webp"
        />
      </figure>
      <div>
        <h1 className="text-center text-3xl py-2">{t('title')}</h1>
        <p className="text-center">{t('content')}</p>
      </div>
    </section>
  );
}
