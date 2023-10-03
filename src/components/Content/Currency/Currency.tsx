import { ChangeEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import cn from 'classnames';
import { CurrencyContainer, Select, Input } from '../style';
import { Theme, Interpolation } from '@emotion/react';

import { CurrencyType } from '../Content';
import { ulStyle, Li } from './style';
import Portal from '@/components/Portal';
import useOutsideClick from '@/hook/useOutsideClick';

interface Props {
  type: CurrencyType;
  notAllowed: string | null;
  list: string[];
  selected: string | null;
  amount: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>, type: CurrencyType) => void;
  handleSelect: (e: MouseEvent<HTMLUListElement>, type: CurrencyType) => void;
}

function Currency({
  type,
  notAllowed,
  list,
  selected,
  amount,
  handleChange,
  handleSelect,
}: Props) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Interpolation<Theme>>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  // 통화 목록 오픈
  const handleOpen = useCallback(() => {
    if (!selectRef.current) return;
    const { top, left, width } = selectRef.current?.getBoundingClientRect();
    setPosition({ top: top + 7.5, left: left - 5, width: width });
    setOpen((prev) => !prev);
  }, []);

  // 선택 가능한 통화 목록 필터
  const makeAvailableList = useCallback(
    (name: string) => ![selected, notAllowed].includes(name),
    [notAllowed, selected],
  );

  // 통화 목록 Element 만들기
  const makeList = useCallback(
    (name: string) => <Li key={name}>{name}</Li>,
    [],
  );

  useOutsideClick(ulRef, () => setOpen(false));

  return (
    <CurrencyContainer>
      <Select ref={selectRef} onClick={handleOpen}>
        <div className='code_name'>
          <div>{selected ?? '-'}</div>
          {open && (
            <Portal>
              <ul
                ref={ulRef}
                css={[position, ulStyle]}
                onClick={(e) => handleSelect(e, type)}
              >
                {list.filter(makeAvailableList).map(makeList)}
              </ul>
            </Portal>
          )}
        </div>
        <div>
          <RiArrowDropDownFill size={18} className={cn('arrow', { open })} />
        </div>
      </Select>
      <Input min={0} value={amount} onChange={(e) => handleChange(e, type)} />
    </CurrencyContainer>
  );
}

export default Currency;
