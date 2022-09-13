import { useStore } from '@/hooks';
import './index.scss';

function Header() {
  const { webStore } = useStore();

  return <div>test header component</div>;
}

export default Header;
