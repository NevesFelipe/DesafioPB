export const DesafioPBElements = {
    botaoAzul: () => cy.get('[class="button"]'),

    botaoVermelho: () => cy.get('[class="button alert"]'),

    botaoVerde: () => cy.get('[class="button success"]'),

    botaoEdit: () => cy.get('[href="#edit"]'),
    
    botaoDelete: () => cy.get('[href="#delete"]')
}