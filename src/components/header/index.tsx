import UniversalHeader from '@airasia/phoenix-widgets/widgets/UniversalHeader';
import { useStore } from '@/helper/hooks';
import Config from '@/helper/config';
import './index.scss';

function Header() {
  const { webStore } = useStore();

  const locale = 'en-gb';
  const currency = 'USD';
  const headerData = {
    components: [
      {
        data: [
          {
            direction: 'left',
            iconName: '',
            iconUrl: 'https://b.staticaa.com/images/logos/airasiacom_logo.svg',
            id: 'aalogo',
            label: '',
            newTab: 'TRUE',
            redirectUrl: 'https://www.airasia.com/en/gb',
            showInMobilePane: 'FALSE',
            type: 'logo',
          },
          {
            direction: 'right',
            iconName: 'CollectionsBookmarkIcon',
            iconUrl: '',
            id: 'mybookings',
            label: 'My Bookings',
            newTab: 'TRUE',
            redirectUrl: 'https://www.airasia.com/member/search?culture=en-GB',
            showInMobilePane: 'TRUE',
            type: 'navigation',
          },
          {
            direction: 'right',
            iconName: 'PlaylistAddCheckIcon',
            iconUrl: '',
            id: 'checkin',
            label: 'Check-in',
            newTab: 'TRUE',
            redirectUrl: 'https://www.airasia.com/check-in/en/GB',
            showInMobilePane: 'TRUE',
            type: 'navigation',
          },
          {
            direction: 'right',
            iconName: 'FlightTakeoffIcon',
            iconUrl: '',
            id: 'flightstatus',
            label: 'Flight Status',
            newTab: 'TRUE',
            redirectUrl: 'https://www.airasia.com/flightstatus/en/GB',
            showInMobilePane: 'TRUE',
            type: 'navigation',
          },
          {
            direction: 'right',
            iconName: 'ForumIcon',
            iconUrl: '',
            id: 'support',
            label: 'Support',
            newTab: 'TRUE',
            redirectUrl: 'https://support.airasia.com/s/?language=en_GB',
            showInMobilePane: 'TRUE',
            type: 'navigation',
          },
          {
            direction: 'right',
            iconName: 'LanguageIcon',
            iconUrl: '',
            id: 'localecurrency',
            label: '',
            newTab: '',
            redirectUrl: '',
            showInMobilePane: 'TRUE',
            type: 'locale-currency',
          },
          {
            direction: 'right',
            iconName: 'AccountCircle',
            iconUrl: '',
            id: 'login',
            label: 'Login/Signup',
            newTab: '',
            redirectUrl: '',
            showInMobilePane: 'FALSE',
            type: 'login',
          },
        ],
      },
    ],
    currencyList: [
      {
        data: [
          {
            longform: 'Australian Dollar',
            shortSymbol: '',
            shortform: 'AUD',
          },
          {
            longform: 'Chinese Renminbi Yuan',
            shortSymbol: '¥',
            shortform: 'CNY',
          },
          {
            longform: 'Euro',
            shortSymbol: '€',
            shortform: 'EUR',
          },
          {
            longform: 'British Pound',
            shortSymbol: '£',
            shortform: 'GBP',
          },
          {
            longform: 'Hong Kong Dollar',
            shortSymbol: 'HK$',
            shortform: 'HKD',
          },
          {
            longform: 'Japanese Yen',
            shortSymbol: '¥',
            shortform: 'JPY',
          },
          {
            longform: 'Malaysia Ringgit',
            shortSymbol: 'RM',
            shortform: 'MYR',
          },
          {
            longform: 'New Zealand Dollar',
            shortSymbol: '₹',
            shortform: 'NZD',
          },
          {
            longform: 'Philippines Peso',
            shortSymbol: '₱',
            shortform: 'PHP',
          },
          {
            longform: 'Singapore Dollar',
            shortSymbol: 'S$',
            shortform: 'SGD',
          },
          {
            longform: 'Thailand Baht',
            shortSymbol: '฿',
            shortform: 'THB',
          },
          {
            longform: 'US Dollar',
            shortSymbol: '$',
            shortform: 'USD',
          },
          {
            longform: 'Bangladesh Taka',
            shortSymbol: '৳',
            shortform: 'BDT',
          },
          {
            longform: 'Brunei Dollar',
            shortSymbol: '',
            shortform: 'BND',
          },
          {
            longform: 'Indian Rupee',
            shortSymbol: '₹',
            shortform: 'INR',
          },
          {
            longform: 'Indonesia Rupiah',
            shortSymbol: 'Rp',
            shortform: 'IDR',
          },
          {
            longform: 'South Korean Won',
            shortSymbol: '₩',
            shortform: 'KRW',
          },
          {
            longform: 'Macau Pataca',
            shortSymbol: '',
            shortform: 'MOP',
          },
          {
            longform: 'Taiwanese NT Dollar',
            shortSymbol: 'NT$',
            shortform: 'TWD',
          },
          {
            longform: 'Vietnamese Dong',
            shortSymbol: '₫',
            shortform: 'VND',
          },
        ],
      },
    ],
    defaultCurrency: [
      {
        data: [
          {
            icon: 'MonetizationOnIcon',
            longform: 'US Dollar',
            shortSymbol: '$',
            shortform: 'USD',
          },
        ],
      },
    ],
    defaultLocale: [
      {
        data: [
          {
            default: 'en-gb',
            icon: 'LanguageIcon',
            longform: 'English',
            shortform: 'En',
          },
        ],
      },
    ],
    localeList: [
      {
        data: [
          {
            default: 'en-gb',
            longform: 'English',
            shortform: 'En',
          },
          {
            default: 'th-th',
            longform: 'ภาษาไทย',
            shortform: 'TH',
          },
          {
            default: 'id-id',
            longform: 'Bahasa Indonesia',
            shortform: 'ID',
          },
          {
            default: 'zh-cn',
            longform: '简体中文',
            shortform: 'ZH',
          },
          {
            default: 'zh-tw',
            longform: '繁體中文',
            shortform: 'ZH',
          },
          {
            default: 'zh-hk',
            longform: '繁體中文 (香港)',
            shortform: 'ZH',
          },
          {
            default: 'ja-jp',
            longform: '日本語',
            shortform: 'JA',
          },
          {
            default: 'ko-kr',
            longform: '한국어',
            shortform: 'KO',
          },
          {
            default: 'ms-my',
            longform: 'Bahasa Malaysia',
            shortform: 'MS',
          },
          {
            default: 'vi-vn',
            longform: 'Tiếng Việt',
            shortform: 'VI',
          },
        ],
      },
    ],
    loginMenu: [
      {
        memberData: [
          {
            icon: '',
            id: 'bigMemberId',
            label: 'BIG Member ID',
            newTab: 'FALSE',
            redirectUrl: '',
          },
          {
            icon: '',
            id: 'bigMemberPoints',
            label: 'BIG Points',
            newTab: 'FALSE',
            redirectUrl: '',
          },
          {
            icon: '',
            id: 'status',
            label: 'Status',
            newTab: 'FALSE',
            redirectUrl: '',
          },
        ],
      },
      {
        navigations: [
          {
            icon: 'account_box',
            id: 'myaccount',
            label: 'My account',
            newTab: 'TRUE',
            redirectUrl:
              'https://www.airasia.com/member/myaccount?culture=en-GB',
          },
          {
            icon: 'featured_play_list',
            id: 'mybookings',
            label: 'My bookings',
            newTab: 'TRUE',
            redirectUrl:
              'https://www.airasia.com/member/mybookings?culture=en-GB',
          },
          {
            icon: 'library_books',
            id: 'mysubscription',
            label: 'My subscription',
            newTab: 'TRUE',
            redirectUrl:
              'https://www.airasia.com/member/mysubscription?culture=en-GB',
          },
          {
            icon: 'credit_card',
            id: 'mybigpaycheckout',
            label: 'My BigPay Checkout',
            newTab: 'TRUE',
            redirectUrl:
              'https://www.airasia.com/member/myaccount#bigpaycheckout',
          },
          {
            icon: 'assignment_turned_in',
            id: 'mycases',
            label: 'My cases',
            newTab: 'TRUE',
            redirectUrl: 'https://www.airasia.com/member/mycases?culture=en-GB',
          },
          {
            icon: 'money',
            id: 'mybigpoints',
            label: 'My BIG Points',
            newTab: 'TRUE',
            redirectUrl: 'https://www.airasiabig.com/my/en/profile',
          },
          {
            icon: 'attach_money',
            id: 'mycreditaccount',
            label: 'My credit account',
            newTab: 'TRUE',
            redirectUrl:
              'https://booking2.airasia.com/CreditStatusLogin.aspx?culture=en-GB',
          },
        ],
      },
      {
        logoutButton: [
          {
            icon: '',
            id: 'logout',
            label: 'Log out',
            newTab: 'FALSE',
            redirectionUrl: '',
          },
        ],
      },
    ],
    loginTooltip: [
      {
        data: [
          {
            description:
              'Log into get BIG Member discounts and also redeem your unlimited pass',
            loginButtonText: 'Log in/Sign up',
            signupButtonText: '',
            title: 'Log in now for BIG Member discounts',
          },
        ],
      },
    ],
    recommendedCurrencyList: [
      {
        data: '',
      },
    ],
    recommendedLocaleList: [
      {
        data: '',
      },
    ],
    translations: [
      {
        data: [
          {
            currency: 'Choose a currency',
            locale: 'Choose a language',
            mobileCurrencyLabel: 'Currency',
            mobileLocaleLabel: 'Language',
            otherCurrency: 'Other supported currency',
            otherLocale: 'Other supported languages',
            popularCurrency: 'Suggested currencies',
            popularLocale: 'Popular languages',
            settings: 'Settings',
          },
        ],
      },
    ],
  };

  return (
    <div>
      <UniversalHeader
        currency={currency}
        data={headerData}
        environment={Config.APP_ENV}
        locale={locale}
        loginConfig={{
          HideLoginIconForMobile: false,
          reloadOnLogin: true,
          shouldSetCookie: true,
        }}
        showCurrency
        showLocale
        viewport={webStore.deviceType}
      />
    </div>
  );
}

export default Header;
