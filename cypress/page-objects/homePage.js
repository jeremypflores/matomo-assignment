export default class homePage {
    /**
     * Get all links with href and verify the status code after visiting the link
     */
    static verifyLinks(){
        cy.get("a[href]").each(page => {
            const link = page.prop('href')
            cy.request({
              url: link,
              failOnStatusCode: false
            }).then(response => {
                expect(response.status).to.not.eql(404)
            })
        })
    }

    /**
     * Get all images and verify if the image is not broken by checking the image's naturalWidth property
     */
    static verifyImages(){
        cy.get('img[src]').each((image)=>{
            expect(image[0].naturalWidth).to.be.gt(0)
        })
    }
}