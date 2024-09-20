describe('Gestión del Carrito de Compras', () => {
  
  before(() => {
    cy.visit('/')
    cy.selectUserProfile()
    cy.loginUser()
  });

  it('Verificar que los productos se agregan al carrito y se reflejan correctamente', () => {
    // Código para agregar un producto al carrito y verificarlo
    cy.homePage()
    cy.scrollTo(0, 500)
    cy.get('button[title="Aumentar la cantidad"]').first()

  });

  it('Verificar que los productos se eliminan del carrito y que el total se actualiza correctamente', () => {
    // Código para eliminar un producto del carrito y verificarlo
  });

  it('Verificar que las cantidades de los productos en el carrito se pueden actualizar y que el total se ajusta en consecuencia', () => {
    // Código para actualizar la cantidad de un producto en el carrito
  });

});
