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

// Criar um objeto com os estilos
const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  responsive : ( large?: number, medium?: number, small?: number, xlarge?: number, xsmall?: number) => ({
    gridColumn:{
      '@media (max-width: 480px)': `span ${xsmall}`,
      '@media (max-width: 576px)': `span ${small}`,
      '@media (max-width: 768px)': `span ${medium}`,
      '@media (max-width: 992px)': `span ${large}`,
      '@media (min-width: 1200px)': `span ${xlarge}`,
    }
    }),
  
  // xsmall: (xsmall: number) => ({
  //   '@media (max-width: 480px)':{
  //     gridColumn: `span ${xsmall}`
  //   }
  // }),
  // small: (small: number) => ({
  //   '@media (max-width: 576px)':{
  //     gridColumn: `span ${small}`
  //   }
  // }),
  
  // medium: (medium: number) => ({
  //   '@media (max-width: 768px)':{
  //     gridColumn: `span ${medium}`
  //   }
  // }),
  // large: (large: number) => ({
  //   '@media (max-width: 992px)':{
  //     gridColumn: `span ${large}`
  //   }
  // }),
  // xlarge: (xlarge: number) => ({
  //   '@media (max-width: 1200px)':{
  //     gridColumn: `span ${xlarge}`
  //   }
  // }),
  // gap: (gap: string) => ({ gap: gap }) 
})

export const Grid = ({ children, container, gap, large, medium, small, xlarge, xsmall }: GridProps) => {
  // Aplicar os estilos usando stylex.props()
  const containerStyle = container ? styles.container : {};
  // const gridColumnStyle = columns ? styles.gridColumn(columns) : {};
  // const gapStyle = gap ? styles.gap(gap) : {};

  return (
    <div {...stylex.props(
      containerStyle,
      !container ? styles.responsive(large, medium, small, xlarge, xsmall) : {},
      // gapStyle,
      // xlarge ? styles.xlarge(xlarge) : {},
      // large ? styles.large(large) : {},
      // medium ? styles.medium(medium) : {},
      // small ? styles.small(small) : {},
      // xsmall ? styles.xsmall(xsmall) : {},
       )}>
      {children}
    </div>
  );
};
