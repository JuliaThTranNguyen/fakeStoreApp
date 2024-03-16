import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import {  StyledBottomFooterContainer, StyledFooterCategoryBox, StyledFooterItem, StyledFooterListItems, StyledLogoBox } from '../../commons/styles/layout/StyledFooter';
import { Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FOOTER_COMMUNITY, FOOTER_DETAILS } from '../../commons/constants';
const Item = styled('div')(({ theme }) => ({
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  borderRadius: '4px',
}));

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1, px: 4, pt: 20 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
                  <StyledLogoBox>
          <StoreIcon color="primary" fontSize="small"/>
         <Typography variant="h6">Fake Store App</Typography>
           </StyledLogoBox>
           <StyledFooterItem>Email us: <AttachEmailIcon color="primary" fontSize="small" /></StyledFooterItem>
           <StyledFooterItem>Call us: <PhoneInTalkIcon color="primary" fontSize="small" /></StyledFooterItem>
        </Grid>

        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <StyledFooterItem>
            {
              FOOTER_DETAILS.map((section,index) => (
                <>
                <StyledFooterCategoryBox
                key={index}
                >
                  {section.title}
                </StyledFooterCategoryBox>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{link}</li>
                  ))}
                </ul>
              </>
              ))
            }
            </StyledFooterItem>
          </Grid>
          <Grid xs={6} lg={3}>
           
            <StyledFooterItem>
            {
              FOOTER_COMMUNITY.map((section,index) => (
                <>
                <StyledFooterCategoryBox
                key={index}
                >
                  {section.title}
                </StyledFooterCategoryBox>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{link}</li>
                  ))}
                </ul>
              </>
              ))
            }
            </StyledFooterItem>
         
          </Grid>
          <Grid xs={6} lg={3}>

          <StyledFooterItem>

              <StyledFooterCategoryBox
              >
                Category D
              </StyledFooterCategoryBox>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </StyledFooterItem>
         
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <StyledFooterCategoryBox
              >
                Category D
              </StyledFooterCategoryBox>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid>

     
<StyledBottomFooterContainer>
<Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>Copyright © 2024 Demo Store App  </Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item><GitHubIcon color="primary" fontSize="small" /></Item>
            </Grid>
            <Grid>
              <Item><FacebookIcon color="primary" fontSize="small" /></Item>
            </Grid>
            <Grid>
              <Item><TwitterIcon color="primary" fontSize="small" /></Item>
            </Grid>
            <Grid>
              <Item><YouTubeIcon color="primary" fontSize="small" /></Item>
            </Grid>
          </Grid>
</StyledBottomFooterContainer>

    
        
       
      </Grid>
    </Box>
  );
}