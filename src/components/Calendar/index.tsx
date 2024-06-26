import { forwardRef, useEffect, useState } from 'react';
import AfterIcon from '@assets/icons/after.svg';
import BeforeIcon from '@assets/icons/before.svg';
import CalendarIcon from '@assets/icons/calendar_month.svg';
import OpenIcon from '@assets/icons/open.svg';
import * as fundStyle from '@pages/funding/create/styles';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import ReactDatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import * as style from './styles';

interface CalendarProps {
  date: string;
  onSetDate: (date: string) => void;
  onSetIsOpen: (isOpen: boolean) => void;
  checkIsOpen: boolean;
}

export default function Calendar({ date, onSetDate, onSetIsOpen, checkIsOpen }: CalendarProps) {
  registerLocale('ko', ko);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onSetIsOpen(isOpen);
  }, [onSetIsOpen, isOpen]);

  const convertDate = (date: Date) => {
    return date.toISOString().split('T')[0].replaceAll('-', '.');
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd');
      onSetDate(formattedDate);
    }
  };

  const CustomInput = forwardRef<HTMLButtonElement>(function CustomImput({}, ref) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={() => (checkIsOpen ? null : setIsOpen(!isOpen))}
        className={fundStyle.dateBox}
      >
        {date ? date.split('T')[0].replaceAll('-', '.') : '날짜를 선택해주세요'}
        {!isOpen ? <CalendarIcon /> : <OpenIcon />}
      </button>
    );
  });

  return (
    <div>
      <ReactDatePicker
        open={isOpen}
        autoComplete="off"
        minDate={new Date()}
        selected={undefined}
        dateFormat="yyyy-MM-dd"
        onChange={handleDateChange}
        customInput={<CustomInput />}
        onSelect={date => {
          handleDateChange(date);
          setIsOpen(false);
        }}
        popperPlacement="bottom"
        locale={'ko'}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className={style.header}>
            <div className={style.headerContent}>
              <button type="button" className={fundStyle.pointer} onClick={decreaseMonth}>
                <BeforeIcon />
              </button>
              <span className={style.monthText}>{convertDate(date).slice(0, 7)}</span>
              <button type="button" className={fundStyle.pointer} onClick={increaseMonth}>
                <AfterIcon />
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}
