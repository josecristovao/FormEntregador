import { el } from './elements'
class HomePage {

    validarPaginaHome(mensagem) {
        cy.contains(el.validarMensagemHome)
            .should('have.text', mensagem)
    }

    clicarCadastrar() {
        cy.contains(el.buttonCadastrar).click()
    }
}
export default new HomePage()
