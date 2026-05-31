describe('Testes de SEO e Acessibilidade (Páginas Principais)', () => {

  it('Página principal (/) deve conter tags SEO corretas', () => {
    cy.visit('/');
    
    // Verifica título da página
    cy.get('head title').should('not.be.empty');
    cy.title().should('include', 'Abertamente');

    // Verifica meta tags cruciais de SEO
    cy.get('head meta[name="description"]').should('exist');
    cy.get('head meta[property="og:title"]').should('exist');
    cy.get('head meta[property="og:image"]').should('exist');
    cy.get('head link[rel="canonical"]').should('exist');

    // Verifica a presença de Headings obrigatórios para acessibilidade/SEO
    cy.get('h1').should('exist');
    cy.get('h2').should('exist'); // Garante que a tag de postagens (sr-only) está lá
  });

  it('Página de índice de posts (/posts) deve conter estrutura de SEO', () => {
    cy.visit('/posts');
    
    cy.get('head title').should('not.be.empty');
    cy.get('h1').should('exist');
  });

  it('Página de um post individual (/posts/:slug) deve ter meta tags dinâmicas preenchidas', () => {
    // Acessa a listagem e entra no primeiro post disponível para não depender de slug hardcoded
    cy.visit('/');
    cy.get('.post a.read-more-btn').first().click();

    // Garante que a URL mudou
    cy.url().should('include', '/posts/');

    // Verifica tags dinâmicas
    cy.get('head title').should('not.be.empty');
    cy.get('head meta[name="description"]').should('exist');
    cy.get('head meta[property="og:title"]').should('exist');
    cy.get('head meta[property="og:image"]').should('exist');
    
    // Verifica marcação semântica de artigo
    cy.get('article').should('exist');
    cy.get('article h1').should('exist');
  });

});
