import img from '@/assets/exchange_img.png';
import { Img, Container } from './style';

function Header() {
  return (
    <Container className='header'>
      <Img src={img} />
      <h2>Exchange Rate Calculator</h2>
      <p>박민용의 환율 계산기</p>
    </Container>
  );
}

export default Header;
