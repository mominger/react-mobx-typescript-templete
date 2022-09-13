import { useStore } from '@/hooks';
import './index.scss';

function Header() {
  const { webStore } = useStore();

  return <div>this is header component from layout </div>;
}

export default Header;
