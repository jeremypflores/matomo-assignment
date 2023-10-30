export default class navigationMenu{
    static clickNavMenuWhyMatomo(){
        cy.contains("Why Matomo").click()
    }

    /**
     * Click any sub menu under "Why Matomo" and verify the url based on the value specified in /fixtures/navigationWhyMatomo.json
     * @param {string} menu title of the menu
     */
    static clickWhyMatomoSubMenu(menu){
        this.clickNavMenuWhyMatomo()
        cy.contains(menu).click()
        const filePath = 'navigationWhyMatomo.json'
        cy.fixture(filePath).then((data) => {
            cy.url().should('include',data[menu])
        })
    }
}