import * as React from 'react';
import * as stylex from '@stylexjs/stylex';

interface GridSizes{
  xlarge?: number;
  large?: number;
  medium?: number;
  small?: number;
  xsmall?: number;
}

interface GridProps extends GridSizes{
  children: React.ReactNode;
  container?: boolean;
  xlarge?: number;
  large?: number;
  medium?: number;
  small?: number;
  xsmall?: number;
  gap?: "0.25rem" | "0.5rem" | "0.75rem" | "1rem";
}

const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  responsive : ( xlarge?: number, large?: number, medium?: number, small?: number, xsmall?: number) => ({
    gridColumn:{
      '@layer': {
        '@media (max-width: 1536px)': `span ${xlarge}`,
        '@media (max-width: 1200px)': `span ${large}`,
        '@media (max-width: 900px)': `span ${medium}`,
        '@media (max-width: 480px)': `span ${xsmall}`,
        '@media (max-width: 600px)': `span ${small}`,
      },
    }
    }),
    gap: (gap: string) => ({ gap: gap }) 
})

export const Grid = ({ children, container, gap, large, medium, small, xlarge, xsmall }: GridProps) => {
  const containerStyle = container ? styles.container : {};
  const gapStyle = gap ? styles.gap(gap) : {};

  return (
    <div {...stylex.props(
      containerStyle,
      !container ? styles.responsive(xlarge, large, medium, small, xsmall) : {},
      gapStyle,
       )}>
      {children}
    </div>
  );
};
