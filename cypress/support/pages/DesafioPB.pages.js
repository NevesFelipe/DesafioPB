/// <reference types='cypress'/>
import { DesafioPBElements } from "../elements/DesafioPB.elements";

export const DesafioPBPages = {
    clicarNoBotaoAzul(){
        DesafioPBElements.botaoAzul().should('be.visible').click();
    },
    clicarNoBotaoVermelho(){
        DesafioPBElements.botaoVermelho().should('be.visible').click();
    },
    clicarNoBotaoVerde(){
        DesafioPBElements.botaoVerde().should('be.visible').click();
    },
    clicarEmCadaBotaoEdit(){
        DesafioPBElements.botaoEdit().each((botaoEditar) => {
            cy.wrap(botaoEditar).click();
        })
    },
    clicarEmCadaBotaoDelete(){
        DesafioPBElements.botaoDelete().each((botaoDeletar) => {
            cy.wrap(botaoDeletar).click();
        })
    }
}