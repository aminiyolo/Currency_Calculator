import { ChangeEvent, useCallback, useState } from 'react';
import { CurrencyContainer, Select, Input } from '../style';
import { RiArrowDropDownFill } from 'react-icons/ri';
import cn from 'classnames';

function Currency() {
  const [open, setOpen] = useState(false);
  const [baseCurrency, setBaseCurrency] = useState(0);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setBaseCurrency(Number(e.target.value.replace(/[^0-9]/g, '')));
  }, []);

  return (
    <CurrencyContainer>
      <Select onClick={handleClick}>
        <div className='code_name'>Select</div>
        <div>
          <RiArrowDropDownFill
            size={18}
            className={cn('arrow', { open })}
            onClick={(prev) => setOpen(!prev)}
          />
        </div>
      </Select>
      <Input min={0} value={baseCurrency} onChange={handleChange} />
    </CurrencyContainer>
  );
}

export default Currency;
