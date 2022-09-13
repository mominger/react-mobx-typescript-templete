import { useStore } from '@/hooks';
import { Page, Header } from '@/components';
import { observer } from 'mobx-react';
import useTranslation from './hooks/useTranslation';
import './index.scss';
import { useNavigate } from 'react-router-dom';

interface IProps {}

const Demo = (props: IProps) => {
  const { demoStore: store, userStore } = useStore();

  const navigate = useNavigate();

  //test i18n
  //const chain = i18n.use();
  const t = useTranslation();

  return (
    <Page store={store} className="demo">
      <p>This is demo page</p>

      {/* test i18n */}
      <div className="test-i18n">
        <div>i18n hook name: {t.name}</div>
        <button
          onClick={() => {
            userStore.setLocale('zh-cn');
          }}
        >
          change language to zh
        </button>
        <button
          onClick={() => {
            userStore.setLocale('en-gb');
          }}
        >
          change language to en
        </button>
      </div>
    </Page>
  );
};

export default observer(Demo);
