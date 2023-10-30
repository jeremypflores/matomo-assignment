import basePage from "../page-objects/basePage"
import homePage from "../page-objects/homePage"
import navigationMenu from "../page-objects/navigationMenu"


describe("Verify Matomo homepage",()=>{
    it("Verify navigating to Why Matomo > 100% Data Ownership",()=>{
        cy.visit("https://matomo.org/")
        basePage.setDesktopViewPort()
        navigationMenu.clickWhyMatomoSubMenu("100% Data Ownership")
    })

    it("Verify navigating to Why Matomo > Privacy Protection",()=>{
        cy.visit("https://matomo.org/")
        basePage.setDesktopViewPort()
        navigationMenu.clickWhyMatomoSubMenu("Privacy Protection")
    })

    it("Verify navigating to Why Matomo > Product Features",()=>{
        cy.visit("https://matomo.org/")
        basePage.setDesktopViewPort()
        navigationMenu.clickWhyMatomoSubMenu("Product Features")
    })

    it("Verify links in homepage",()=>{
        basePage.visitHomePage()
        basePage.setDesktopViewPort()
        homePage.verifyLinks()
    })

    it("Verify the images in homepage",()=>{
        basePage.visitHomePage()
        basePage.setDesktopViewPort()
        homePage.verifyImages()
    })
})