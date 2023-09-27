import { ChangeEvent, useCallback, useState } from 'react';
import { CurrencyContainer, Select, Input } from '../style';
import { RiArrowDropDownFill } from 'react-icons/ri';
import cn from 'classnames';
import { CurrencyType } from '../Content';

interface Props {
  type: CurrencyType;
  list: string[];
  selected: string | null;
  amount: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>, type: CurrencyType) => void;
}

function Currency({ type, list, amount, handleChange }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <CurrencyContainer>
      <Select onClick={handleOpen}>
        <div className='code_name'>Select</div>
        <div>
          <RiArrowDropDownFill size={18} className={cn('arrow', { open })} />
        </div>
      </Select>
      <Input min={0} value={amount} onChange={(e) => handleChange(e, type)} />
    </CurrencyContainer>
  );
}

export default Currency;
