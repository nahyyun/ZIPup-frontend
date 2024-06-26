import { button } from '@components/common/Button/styles';
import { css, cx } from 'styled-system/css';
import { float, vstack } from 'styled-system/patterns';

const container = vstack({
  m: '0 auto',
  h: '100%',
  alignItems: 'center',
  p: '1.6rem',
  mt: '6rem',
  height: 'calc(100vh - 6rem)',
});

const headTitle = css({
  textStyle: 'title1',
  color: 'text.100',
  textAlign: 'center',
  mb: '1rem',
  '& span': {
    color: 'main.blue',
  },
});

const subTitle = css({
  color: 'text.200',
  textAlign: 'center',
  mb: '1.5rem',
});

const positionedParent = css({ pos: 'relative' });

const positionedWrapper = float({
  offsetX: '50%',
  offsetY: '80%',
  fontSize: '85%',
});

const buttonLink = cx(
  button({ size: 'full', color: 'secondary', isBottomFixed: true, position: 'last' }),
  css({ mt: '3rem' }),
);

export { container, headTitle, subTitle, buttonLink, positionedParent, positionedWrapper };
