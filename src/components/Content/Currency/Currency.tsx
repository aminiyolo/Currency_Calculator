import { CurrencyContainer, Select, Input } from '../style';
import { RiArrowDropDownFill } from 'react-icons/ri';

function Currency() {
  return (
    <CurrencyContainer>
      <Select>
        <div>Select</div>
        <div>
          <RiArrowDropDownFill />
        </div>
      </Select>
      <Input type='number' min={0} />
    </CurrencyContainer>
  );
}

export default Currency;
