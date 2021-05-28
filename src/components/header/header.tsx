import React from 'react';
import logo from '../header/logo.svg';
import logo3 from '../header/logo3.svg';
import '../header/style.css';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#FFF',
      contrastText: '#fff',
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#000',
    }
  },
});

type Props = {

};



export const Header = ()=> {



	return(
		<ThemeProvider theme={theme}>
			<div className="container-header">
				<div className="header-logo">
					<div className="logo" >
						<img src={logo}></img>
						<h2>FreeTravel</h2>		
					</div>

					<div className="help">
						<HelpOutlineIcon color="primary"/>
						<a>Precisa  de ajuda? </a>
					</div>
					
					
				</div>

				<div className="line"></div>

				<div className="header-itens">
					<a href="#">VOOS</a>
					<a href="#">HOTÉIS</a>
					<a href="#">DICAS</a>
					<a href="#">PROMOÇÕES</a>
					<a href="#">CONTATOS</a>
				</div>

			</div>
		</ThemeProvider>
	);
};

