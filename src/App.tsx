import { useCallback } from 'react';

function App() {
  const openCheckout = useCallback(() => {
    // @ts-ignore
    let checkout = new PagarMeCheckout.Checkout({
      encryption_key: 'ENCRYPTION_KEY',
      success: (data: any) => {
        alert(JSON.stringify(data));
      },
      error: (err: any) => {
        alert(JSON.stringify(err));
      },
      close: () => {
        alert('The modal has been closed.');
      },
    });

    checkout.open({
      amount: 8000, // cents
      buttonText: 'Pagar',
      customerData: 'true',
      createToken: 'false',
      paymentMethods: 'credit_card, boleto',
    });
  }, []);

  return <button onClick={openCheckout}>Abrir o Checkout</button>;
}

export default App;
