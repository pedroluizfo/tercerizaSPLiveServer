import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/images/REDUZIDA_LARANJA 1.png";

import "../../styles/font.css";

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Sobre Nós', url: '/sobre' },
  { name: 'Soluções', url: '/' },
  { name: 'FAQ', url: '/' },
  { name: 'Seja Um Parceiro', url: '/contato' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentPath,setCurrentPath] = React.useState('');
  React.useEffect(() => {

    const currentPath = window.location.pathname;
    setCurrentPath(currentPath);
  
    // Faça algo com o caminho atual, como destacar o item correspondente na barra de navegação
  }, []);

  const scroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = (url,scrol) => {
    if(currentPath != url){
                   
      window.location.href = url
     
    }else{ 

      scroll(scrol);
    }
   
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#293335' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={(() => {
                  switch (page.name) {

                    case "Home":
                      window.location.href = page.url
                      break;
                    case "Sobre Nós":
                      window.location.href = page.url
                      break;
                    case "Soluções":
                      if(currentPath != page.url){
                   
                        window.location.href = page.url
                       
                      }else{ 

                        scroll(page.name);
                      }
                     
                      
                      break;
                    case "FAQ":
                      if(currentPath != page.url){
                        window.location.href = page.url
                    
                      }else{ 

                        scroll(page.name);
                      }
                      break;

                    case "Seja Um Parceiro":
                      window.location.href = page.url
                      break;
                  }


                })}>
                  <Typography
                    textAlign="center"
                    sx={{ fontFamily: 'arboria', fontSize: 'inherit' }} // Apply the custom font
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page.name}
                onClick={() => handleButtonClick(page.url,page.name)}
                sx={{
                  my: 2,
                  color: '#00F7ED',
                  display: 'block',
                  fontFamily: 'arboria', // Apply the custom font
                  ...(index === pages.length - 1 && {
                    // Apply the custom CSS to the last button
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '8px 16px',
                    gap: '8px',
                    width: '184px',
                    height: '40px',
                    border: '2px solid #00F7ED',
                    borderRadius: '50px',
                    flex: 'none',
                    order: 5,
                    flexGrow: 0,
                  }),
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
