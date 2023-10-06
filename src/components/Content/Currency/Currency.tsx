import { ChangeEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import { RiArrowDropDownFill } from 'react-icons/ri';
import cn from 'classnames';
import { CurrencyContainer, Select, Input } from '../style';
import { Theme, Interpolation } from '@emotion/react';

import { CurrencyType } from '../Content';
import { ulStyle, Li } from './style';
import Portal from '@/components/Portal';
import useOutsideClick from '@/hook/useOutsideClick';
import Spinner from '@/components/Spinner';

interface Props {
  type: CurrencyType;
  notAllowed: string | null;
  list: string[];
  selected: string | null;
  amount: number;
  loading?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>, type: CurrencyType) => void;
  handleSelect: (e: MouseEvent<HTMLUListElement>, type: CurrencyType) => void;
}

function Currency({
  type,
  notAllowed,
  list,
  selected,
  amount,
  loading = false,
  handleChange,
  handleSelect,
}: Props) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<Interpolation<Theme>>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  // 통화 목록 리스트 외부를 누를 경우 목록 창 닫기
  useOutsideClick(ulRef, () => setOpen(false));

  // 통화 목록 오픈
  const handleOpen = useCallback(() => {
    if (!selectRef.current || open) return;
    const { top, left, width } = selectRef.current?.getBoundingClientRect();
    // 통화 리스트를 포탈로 띄우기 위해 Select 박스의 top, left, width를 구해서 위치 저장
    setPosition({ top: top + 7.5, left: left - 5, width });
    setOpen((prev) => !prev);
  }, [open]);

  // 통화 목록 선택
  const handleChoose = useCallback(
    (e: MouseEvent<HTMLUListElement>) => {
      setOpen(false);
      // 통화 목록 리스트 Portal을 닫고 handleSelect 함수가 실행되게 하기 위하여
      // setTimeout 함수를 사용하여 동기적 실행
      setTimeout(() => {
        handleSelect(e, type);
      }, 0);
    },
    [handleSelect, type],
  );

  // 선택 가능한 통화 목록 필터
  const makeAvailableList = useCallback(
    (name: string) => ![selected, notAllowed].includes(name),
    [notAllowed, selected],
  );

  // 통화 목록 li Element 만들기
  const makeList = useCallback(
    (name: string) => <Li key={name}>{name}</Li>,
    [],
  );

  const isTarget = type === 'target';
  const disabled = loading || (!selected && isTarget && amount === 0);
  const isLoading = loading && selected && isTarget;

  return (
    <CurrencyContainer>
      <Select ref={selectRef} onClick={handleOpen}>
        <div className='code_name'>
          {loading && !selected ? <Spinner /> : <div>{selected ?? '-'}</div>}
          {open && (
            <Portal>
              <ul ref={ulRef} css={[position, ulStyle]} onClick={handleChoose}>
                {list.filter(makeAvailableList).map(makeList)}
              </ul>
            </Portal>
          )}
        </div>
        <RiArrowDropDownFill size={18} className={cn('arrow', { open })} />
      </Select>
      {isLoading ? (
        <div className='spinner_wrapper'>
          <Spinner />
        </div>
      ) : (
        <Input
          min={0}
          disabled={disabled}
          value={amount.toLocaleString()}
          onChange={(e) => handleChange(e, type)}
        />
      )}
    </CurrencyContainer>
  );
}

export default Currency;
