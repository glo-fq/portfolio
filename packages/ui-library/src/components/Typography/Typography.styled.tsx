import styled from 'styled-components';

const baseTypographyStyles = styled.div<{
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: string;
  margin?: string;
  padding?: string;
  lineHeight?: string;
  letterSpacing?: string;
  decoration?: string;
}>`
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'inherit'};
  font-weight: ${({ weight }) => weight || 'inherit'};
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '0'};
  line-height: ${({ lineHeight }) => lineHeight || 'inherit'};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 'inherit'};
  text-decoration: ${({ decoration }) => decoration || 'none'};
`;

export const TypographyH1Styled = styled(baseTypographyStyles).attrs({
  as: 'h1',
})`
  scroll-margin-top: 20px;
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.025em;
  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const TypographyH2Styled = styled(baseTypographyStyles).attrs({
  as: 'h2',
})`
  scroll-margin-top: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 0.5rem;
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.1;
  margin-top: 0;
`;

export const TypographyH3Styled = styled(baseTypographyStyles).attrs({
  as: 'h3',
})`
  scroll-margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.1;
`;

export const TypographyH4Styled = styled(baseTypographyStyles).attrs({
  as: 'h4',
})`
  scroll-margin-top: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.1;
`;

export const TypographyH5Styled = styled(baseTypographyStyles).attrs({
  as: 'h5',
})`
  scroll-margin-top: 20px;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.1;
`;

export const TypographyH6Styled = styled(baseTypographyStyles).attrs({
  as: 'h6',
})`
  scroll-margin-top: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.1;
`;

export const TypographyPStyled = styled(baseTypographyStyles).attrs({
  as: 'p',
})`
  line-height: 1.75;
  &:not(:first-child) {
    margin-top: 1.5rem;
  }
`;

export const TypographyBlockquoteStyled = styled(baseTypographyStyles).attrs({
  as: 'blockquote',
})`
  margin-top: 1.5rem;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  padding-left: 1.5rem;
  font-style: italic;
`;

export const TypographyTableStyled = styled(baseTypographyStyles).attrs({
  as: 'div',
})`
  margin-top: 1.5rem;
  width: 100%;
  overflow-y: auto;
  table {
    width: 100%;
    thead {
      tr {
        margin: 0;
        border-top: 1px solid ${({ theme }) => theme.colors.border};
        padding: 0;
        &:nth-child(even) {
          background-color: ${({ theme }) => theme.colors.muted};
        }
        th {
          border: 1px solid ${({ theme }) => theme.colors.border};
          padding: 0.5rem 1rem;
          text-align: left;
          font-weight: bold;
          &[align='center'] {
            text-align: center;
          }
          &[align='right'] {
            text-align: right;
          }
        }
      }
    }
    tbody {
      tr {
        margin: 0;
        border-top: 1px solid ${({ theme }) => theme.colors.border};
        padding: 0;
        &:nth-child(even) {
          background-color: ${({ theme }) => theme.colors.muted};
        }
        td {
          border: 1px solid ${({ theme }) => theme.colors.border};
          padding: 0.5rem 1rem;
          text-align: left;
          &[align='center'] {
            text-align: center;
          }
          &[align='right'] {
            text-align: right;
          }
        }
      }
    }
  }
`;

export const TypographyListStyled = styled(baseTypographyStyles).attrs({
  as: 'ul',
})`
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  list-style-type: disc;
  li {
    margin-top: 0.5rem;
  }
`;

export const TypographyInlineCodeStyled = styled(baseTypographyStyles).attrs({
  as: 'code',
})`
  position: relative;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.muted};
  padding: 0.3rem 0.2rem;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.875rem;
  font-weight: 600;
`;

export const TypographyLeadStyled = styled(baseTypographyStyles).attrs({
  as: 'p',
})`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const TypographyLargeStyled = styled(baseTypographyStyles).attrs({
  as: 'div',
})`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const TypographySmallStyled = styled(baseTypographyStyles).attrs({
  as: 'small',
})`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

export const TypographyMutedStyled = styled(baseTypographyStyles).attrs({
  as: 'p',
})`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const TypographyBody1Styled = styled(baseTypographyStyles).attrs({
  as: 'p',
})`
  font-size: 1rem;
  line-height: 1.5;
`;

export const TypographyBody2Styled = styled(baseTypographyStyles).attrs({
  as: 'p',
})`
  font-size: 0.875rem;
  line-height: 1.5;
`;
