import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionContainer({ 
  children, 
  className, 
  containerClassName, 
  ...props 
}: SectionContainerProps) {
  return (
    <section 
      className={cn("py-14 md:py-20 relative overflow-x-hidden", className)} 
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
