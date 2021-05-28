import React from 'react';
import '../Search/style.css';
import { makeStyles,MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//CONFIG Accordion

const useAccordion = makeStyles((theme) => ({
  root: {
    width: '15%',
    marginLeft: theme.spacing(5),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

//CONFIG Button

const useButton = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(5),
      width: 200,
    },
  },
}));


//CRIANDO O TEMA
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


const textField = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
   	  marginRight: theme.spacing(2),
      width: '25ch',
    },
  },
}));



const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifycontent: 'center',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    width: 200,
    

  },
}));

/*

type Props = {

};

*/

export const Search = ()=> {



	const [state, setState] = React.useState({
	    checkedA: true,
	    checkedB: true,
  	});

  	  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	    setState({ ...state, [event.target.name]: event.target.checked });
	  };

	const classes = useStyles();

	const textCamp = textField();

	const Buttons = useButton();

	const accordion = useAccordion();

	var dateDefault: string = "2021-05-08";

	var estado:boolean;

	if(state.checkedB == true){
		estado = false;
	}
	else{
		estado = true;
	}
	

	return(

		<MuiThemeProvider theme={theme}>


		<div className="container-search">
			<div className="box-search">

				<div className="info-travel">

					<Switch
				        checked={state.checkedB}
				        onChange={handleChange}
				        color="primary"
				        name="checkedB"
				        inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
					<h3>Ida e volta</h3>

					<div className={accordion.root}>
						<Accordion>
					        <AccordionSummary
					          expandIcon={<ExpandMoreIcon />}
					          aria-controls="panel1a-content"
					          id="panel1a-header"
					        >
					          <Typography className={accordion.heading}> 1 Passageiro</Typography>
					        </AccordionSummary>
					        <AccordionDetails>
					          <Typography>
					            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
					            sit amet blandit leo lobortis eget.
					          </Typography>
					        </AccordionDetails>
					    </Accordion>
				    </div>

				</div>

				<div className="datepicker">

					<div className="div-info-places">
						<form className={textCamp.root} noValidate autoComplete="off">
				     		<TextField id="outlined-basic" label="Origem" variant="outlined" color="primary" />
				     		<TextField id="outlined-basic" label="Destino" variant="outlined" />
				    	</form>
					</div>

					
					
					<form className={classes.container} noValidate>
				      	<TextField
				      	color='primary'
				        id="dateIda"
				        label="Ida"
				        type="date"
				        variant="outlined"
				        defaultValue={dateDefault}
				        className={classes.textField}
				        InputLabelProps={{
				          shrink: true,
				        }}
				      />
				    </form>

				    <form className={classes.container} noValidate >
				      	<TextField
				      	disabled = {estado}
				      	color='primary'
				        id="dateVolta"
				        label="Volta"
				        type="date"
				        variant="outlined"
				        defaultValue="2017-05-24"
				        className={classes.textField}
				        InputLabelProps={{
				          shrink: true,
				        }}
				      />
				    </form>

				    <Button variant="outlined" color="secondary" className="botao">
				        Buscar voos
				    </Button>

				</div>


			</div>
		</div>

	</MuiThemeProvider>
	);
};

