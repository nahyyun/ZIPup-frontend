import { PropsWithChildren } from 'react';
import Image from 'next/image';

import Button from '..';

interface KakaoButtonProps {
  isBottomFixed?: boolean;
  position?: 'first' | 'last';
  onClick?: () => void;
}

export default function KakaoButton({
  isBottomFixed = false,
  position = 'first',
  children,
  onClick,
}: PropsWithChildren<KakaoButtonProps>) {
  return (
    <Button isBottomFixed={isBottomFixed} position={position} color="kakao" onClick={onClick}>
      <Image src={'/kakao.svg'} alt="카카오톡 아이콘" width={20} height={16} />
      {children}
    </Button>
  );
}
