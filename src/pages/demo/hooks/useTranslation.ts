import i18n from '@/helper/i18n';

export default function useTranslation() {
  const chain = i18n.use();

  return {
    name: `hook_i18n_ ${chain.home.name}`,
  };
}
