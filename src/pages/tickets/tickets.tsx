import React from 'react';
import {Search} from '../../components/Search/Search';
import {Header} from '../../components/header/header';
import '../tickets/style.css';

/*
type Props = {

};
*/

//CAROUSEL

/*

var x:number;
var y: string;

x = 1;

var carousel = document.getElementById("container")!;




setInterval(function (){

	y = x.toString();
	if (x > 9) {
		y = x.toString();
	}

	carousel.style.backgroundImage = `url(bg${y}.png)`;
	
	
	console.log("entrou");
	x++;
	console.log("entrou");
}, 4000);
*/


export const Tickets = ()=> {



	return(
		<div id="container">
			<Header />
			<Search />
		</div>
	);	
};