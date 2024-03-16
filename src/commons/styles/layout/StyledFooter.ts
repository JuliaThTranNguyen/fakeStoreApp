import { Box, styled } from '@mui/material';
import defaultBackgroundColor from './defaultBackgroundColor';

export const StyledLogoBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => defaultBackgroundColor(theme)};
box-shadow: ${({ theme }) => theme.shadows[1]};
margin-bottom: 4px
`;

export const StyledFooterItem = styled(Box)`
border: 1px solid;
border-radius: 4px;
border-color: ${({ theme }) => defaultBackgroundColor(theme)};
background-color: ${({ theme }) => defaultBackgroundColor(theme)};
box-shadow: ${({ theme }) => theme.shadows[1]};

`;

export const StyledFooterCategoryBox = styled(Box)`
font-size: 12px;
text-transform: uppercase;
`;

export const StyledFooterListItems = styled(Box)`
  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 5px; 
  }
`;

export const StyledBottomFooterContainer = styled(Box)`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

@media (min-width: 600px) {
  flex-direction: row;
}

font-size: 12px;
`;