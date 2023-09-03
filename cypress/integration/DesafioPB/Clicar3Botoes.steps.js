import { DesafioPBPages } from "../../support/pages/DesafioPB.pages";


Given(/^que eu acesso o site$/, () => {
	cy.visit('https://the-internet.herokuapp.com/challenging_dom');
});

When(/^desejo clicar nos 3 botoes coloridos$/, () => {
	return true;
});

When(/^clico no botao azul$/, () => {
	DesafioPBPages.clicarNoBotaoAzul();
});

When(/^clico no botao vermelho$/, () => {
	DesafioPBPages.clicarNoBotaoVermelho();
});

Then(/^clico no botao verde$/, () => {
	DesafioPBPages.clicarNoBotaoVerde();
});
