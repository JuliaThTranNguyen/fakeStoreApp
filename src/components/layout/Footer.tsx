import { Box, Container, Grid, Link, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../../commons/constants';

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <Box sx={{ py: 2 }} className="padding-container">
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" gap={2}>
                <Link href="/" underline="none">
                <StoreIcon fontSize="small" />
                </Link>
                <Grid container spacing={4}>
                  {FOOTER_LINKS.map((columns) => (
                    <Grid item xs={6} key={columns.title}>
                      <FooterColumn title={columns.title}>
                        {columns.links.map((link) => (
                          <Link href="/" key={link} color="inherit">
                            {link}
                          </Link>
                        ))}
                      </FooterColumn>
                    </Grid>
                  ))}
                  <Grid item xs={12} md={6}>
                    <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                      {FOOTER_CONTACT_INFO.links.map((link) => (
                        <Link href="/" key={link.label} color="inherit">
                          {link.label}: {link.value}
                        </Link>
                      ))}
                    </FooterColumn>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FooterColumn title={SOCIALS.title}>
                      {SOCIALS.links.map((link) => (
                        <Link href="/" key={link} color="inherit">
                          <img src={link} alt="logo" width={24} height={24} />
                        </Link>
                      ))}
                    </FooterColumn>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ borderTop: '1px solid #ccc', py: 2 }}>
            <Typography variant="body2" color="textSecondary" align="center">
              2023 Shobie Online Shopping App | All rights reserved | Made by{' '}
              <Link href="https://github.com/JuliaThTranNguyen/e-library" color="primary" underline="hover">
                @TH.Julia - HienTran
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default Footer;
