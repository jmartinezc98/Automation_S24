describe('Flujos de Checkout', () => {
  
  beforeEach(() => {
    cy.visit('/cart');
    cy.get('button').contains('Checkout').click();
  });

  it('Verificar que el botón "Checkout" redirige a la página de checkout', () => {
    cy.url().should('include', '/checkout');
  });

  it('Verificar que los campos de dirección de envío aceptan y validan la información correctamente', () => {
    // Código para probar campos de dirección de envío
  });

  it('Verificar que los métodos de envío se muestran correctamente según la dirección de envío', () => {
    // Código para probar métodos de envío
  });

  it('Verificar que la selección de métodos de pago permite elegir entre las opciones disponibles', () => {
    // Código para probar métodos de pago
  });

  it('Verificar que el resumen del pedido muestra los detalles correctos', () => {
    // Código para verificar el resumen del pedido
  });

  it('Verificar que el usuario puede confirmar los detalles antes de finalizar la compra', () => {
    // Código para la confirmación del pedido
  });

  it('Verificar que la opción de aplicar cupones o códigos de descuento está disponible', () => {
    // Código para verificar la opción de aplicar cupones
  });

});
