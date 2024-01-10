import * as React from 'react';
import * as stylex from '@stylexjs/stylex';

interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  columns?: number;
  gap?: "0.25rem" | "0.5rem" | "0.75rem" | "1rem";
}

// Criar um objeto com os estilos
const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  grid: (columns: number) => ({ gridColumn: `span ${columns}` }),
  gridColumn: (columns: number) => ({ gridColumn: `span ${columns}` }),
  gap: (gap: string) => ({ gap: gap }) 
})

export const Grid = ({ children, container, columns, gap }: GridProps) => {
  // Aplicar os estilos usando stylex.props()
  const containerStyle = container ? styles.container : {};
  const gridColumnStyle = columns ? styles.gridColumn(columns) : {};
  const gapStyle = gap ? styles.gap(gap) : {};

  return (
    <div {...stylex.props(containerStyle, gridColumnStyle, gapStyle)}>
      {children}
    </div>
  );
};
