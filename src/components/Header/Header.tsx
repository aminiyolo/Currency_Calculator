import img from '@/assets/exchange_img.png';
import { Img, Container } from './style';

function Header() {
  return (
    <Container>
      <Img src={img} />
      <h2>Exchange Rate Calculator</h2>
    </Container>
  );
}

export default Header;
