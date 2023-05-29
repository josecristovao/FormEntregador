
import { el } from './elements'
class FormPage {

    validarPageForm(mensagem){
        cy.contains(el.validarMensagemForm)
        .should('have.text',mensagem)
    }
    setNome(name){
        cy.get(el.nome)
            .clear()
            .type(name)
    }
    setCpf(cpf){
        cy.get(el.cpf)
            .clear()
            .type(cpf)
    }
    setEmail(email){
        cy.get(el.email)
            .clear()
            .type(email)
    }
    setWhatsapp(whatsapp){
        cy.get(el.whatsapp)
            .clear()
            .type(whatsapp)
    }
    setCep(cep){
        cy.get(el.cep)
            .clear()
            .type(cep)
    }
    clickButtonCep(){
        cy.get(el.buttonBuscarCep)
            .click()
    }
    setNumero(numero){
        cy.get(el.numero)
        .clear()
        .type(numero)
    }
    setComplemento(complemento){
        cy.get(el.complemento)
            .clear()
            .type(complemento)
    }
    clickMetodoEntrega(){
        cy.contains(el.metodoEntrega)
        .click()
    }
    uploadFoto(caminhoFoto){
        cy.get(el.fotoCNH).selectFile(caminhoFoto,{force: true})
    }
    submit(){
        cy.get(el.buttonSubmit).click()
    }
    validarMensagem(mensagemUm,mensagemDois){
        cy.contains(el.popMensagemUm).should('have.text',mensagemUm)
        cy.contains(el.popMensagemDois).should('have.text',mensagemDois)
    }
    validarAusenciaCnh(mensagem){
        cy.contains(el.CnhAusente).should('have.text',mensagem)
    }
}
export default new FormPage()
