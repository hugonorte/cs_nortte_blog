describe('Theme Selector', () => {
  it('changes the site theme correctly when the theme selector is clicked', () => {
    cy.clearLocalStorage()
    cy.window().then((win) => {
      win.localStorage.setItem('nuxt-color-mode', 'light')
    })
    cy.visit('/')

    cy.wait(2000)

    // Initial state check - must be light mode
    cy.get('html').should('not.have.class', 'dark')
    
    // Store the initial background color
    cy.get('body').invoke('css', 'background-color').as('initialBg')

    // Ensure Nuxt hydration is fully complete
    cy.get('button[aria-label="Theme"]', { timeout: 10000 }).should('be.visible')
    cy.wait(1000) // Small wait after visibility to ensure event listeners are bound
    
    // Click the theme toggle button
    cy.get('button[aria-label="Theme"]').click({ force: true })
    
    cy.wait(500)

    // Wait for CSS transitions to finish
    cy.wait(500)

    // The html tag should now have the 'dark' class
    cy.get('html').should('have.class', 'dark')

    // The body background color should explicitly be the dark color (rgb(18, 18, 18) for #121212)
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)')
    
    // Also verify the layout wrapper changed to the dark gradient
    cy.get('.layout-wrapper').should('have.css', 'background-image').and('include', 'rgb(10, 16, 26)')
  })
})
