import { DesafioPBPages } from "../../support/pages/DesafioPB.pages";

Given(/^que eu acesso o site$/, () => {
	cy.visit('https://the-internet.herokuapp.com/challenging_dom');
});

When(/^desejo clicar em todos os botoes edit da tabela$/, () => {
	return true;
});

Then(/^clico em todos os botoes edit da tabela$/, () => {
	DesafioPBPages.clicarEmCadaBotaoEdit();
});
