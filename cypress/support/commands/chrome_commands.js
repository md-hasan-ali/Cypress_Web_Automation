import utils from '../utilities';
import chrome_element from '../elements/c_home_element'

// my commands 
Cypress.Commands.add('DownloadChrome', ()=> {
    utils.getById(chrome_element.Download).click()
    utils.getById(chrome_element.Start_download).click()
})