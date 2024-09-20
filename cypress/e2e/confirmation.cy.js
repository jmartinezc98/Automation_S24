describe('Confirmación de Compra', () => {
  
  beforeEach(() => {
    // Simula completar una compra para llegar a la página de confirmación
    cy.visit('/checkout/confirmation');
  });

  it('Verificar que el usuario es redirigido a la página de confirmación tras la compra', () => {
    cy.url().should('include', '/confirmation');
  });

  it('Verificar que la página de confirmación muestra un resumen completo del pedido', () => {
    // Código para verificar el resumen de la compra
  });

  it('Verificar que se genera y muestra un número de pedido único', () => {
    // Código para verificar el número de pedido
  });

  it('Verificar que se envía un correo electrónico de confirmación de compra', () => {
    // Código para verificar el envío del correo electrónico
  });

  it('Verificar que el correo incluye todos los detalles correctos', () => {
    // Código para verificar los detalles del correo electrónico
  });

  it('Verificar que el estado del pedido se actualiza en el perfil del usuario', () => {
    // Código para verificar la actualización del estado del pedido
  });

});
