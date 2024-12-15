import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { ButtonProps } from '../Button';
import {
  PaginationWrapper,
  PaginationContentStyled,
  PaginationItemStyled,
  PaginationLinkStyled,
  PaginationPreviousStyled,
  PaginationNextStyled,
  PaginationEllipsisStyled,
} from './Pagination.styled';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import { ButtonSize } from '../Button/Button.styled';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <LibraryThemeProvider>
    <PaginationWrapper className={className} {...props} />
  </LibraryThemeProvider>
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <PaginationContentStyled ref={ref} className={className} {...props} />
));
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <PaginationItemStyled ref={ref} className={className} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = ButtonSize.Icon,
  ...props
}: PaginationLinkProps) => (
  <PaginationLinkStyled
    aria-current={isActive ? 'page' : undefined}
    $isActive={isActive}
    size={size}
    className={className}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({
  className,
  size = ButtonSize.Default,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationPreviousStyled className={className} size={size} {...props}>
    <ChevronLeft />
    <span>Previous</span>
  </PaginationPreviousStyled>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationNext = ({
  className,
  size = ButtonSize.Default,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationNextStyled className={className} size={size} {...props}>
    <span>Next</span>
    <ChevronRight />
  </PaginationNextStyled>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <PaginationEllipsisStyled className={className} {...props}>
    <MoreHorizontal />
    <span className="sr-only">More pages</span>
  </PaginationEllipsisStyled>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
