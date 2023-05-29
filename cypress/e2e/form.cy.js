
import formPage from '../support/pages/form'
import homePage from '../support/pages/home'
import { form } from '../support/factories/form'

describe('Cadastrar', function () {
    beforeEach(function () {
        cy.visit('/')
    })
    context('Entregador', ()=> {

        it('Com Sucesso', ()=> {
            homePage.validarPaginaHome(form.mensagemHome)
            homePage.clicarCadastrar()
            formPage.validarPageForm(form.mensagemForm)
            formPage.setNome(form.nomeCompleto)
            formPage.setCpf(form.cpf)
            formPage.setEmail(form.email)
            formPage.setWhatsapp(form.whatsapp) 
            formPage.setCep(form.cep)
            formPage.clickButtonCep()
            formPage.setNumero(form.numero)
            formPage.setComplemento(form.complemento)
            formPage.clickMetodoEntrega()
            formPage.uploadFoto(form.imageFile)
            formPage.submit()
            formPage.validarMensagem(form.mensagemValidacaoFinalUm,form.mensagemValidacaoFinalDois)
        })
        it('Sem sucesso', ()=> {
            homePage.validarPaginaHome(form.mensagemHome)
            homePage.clicarCadastrar()
            formPage.validarPageForm(form.mensagemForm)
            formPage.setNome(form.nomeCompleto)
            formPage.setCpf(form.cpf)
            formPage.setEmail(form.email)
            formPage.setWhatsapp(form.whatsapp) 
            formPage.setCep(form.cep)
            formPage.clickButtonCep()
            formPage.setNumero(form.numero)
            formPage.setComplemento(form.complemento)
            formPage.clickMetodoEntrega()
            formPage.submit()
            formPage.validarAusenciaCnh(form.ausenciaCNH)
        })
    })
})
