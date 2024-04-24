/* eslint-disable @next/next/no-img-element */
import { css, cx } from 'styled-system/css';
import GiftIcon from '@assets/images/gift-images.svg';
import StatusTag from '@components/common/StatusTag';
import ProgressBar from '@components/common/ProgressBar';
import { FundingInfo } from '@typings/funding';
import * as style from './styles';

interface CardProps {
  data: FundingInfo;
  onClick: () => void;
}

const Card = ({ data, onClick }: CardProps) => {
  const PROGRESS_BAR_BASE_WIDTH = 140;

  return (
    <div className={style.container} onClick={onClick}>
      <div
        className={cx(
          style.image_box,
          css({ backgroundColor: data.imageUrl.length <= 6 ? 'blue.10' : 'white' }),
        )}
      >
        <div className={style.status}>
          <StatusTag daysLeft={Number(data.status)} isCompleted={data.status === '완료'} />
        </div>
        {data.status === '완료' && <div className={style.blur} />}
        <p>
          {data.imageUrl === 'https:' || !data.imageUrl ? (
            <GiftIcon />
          ) : (
            <img
              src={data.imageUrl}
              alt="펀딩 이미지"
              style={{ width: '15.6rem', height: '12rem', objectFit: 'cover' }}
            />
          )}
        </p>
      </div>
      <div className={style.info_box}>
        <ProgressBar
          noMargin
          progressBarWidth={css({ width: PROGRESS_BAR_BASE_WIDTH * 0.1 + 'rem' })}
          width={
            data.percent >= 100
              ? '14.1rem'
              : (PROGRESS_BAR_BASE_WIDTH * data.percent) / 1000 + 'rem'
          }
        />
        <div className={style.title}>{data.title}</div>
        <div className={style.percent}>{data.percent}% 달성</div>
      </div>
    </div>
  );
};

export default Card;
