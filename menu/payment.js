paypal.Buttons({
    // Sets up the transaction when -a payment button is clicked
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value:70/* <?php /*  echo $amount;  ?>*/  // Call reference variables or functions. Example: value: document.getElementById('amount').value
          }
        }]
      });
    },
    // Finalize the transaction after payer approval
    onApproves: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        // Successful capture!
        console.log('Capture succeeded:', orderData);
        // You can also redirect the user to a thank you page here.
        alert('Payment captured!');
        window.location.href="complet_payment.php?order_id="+"<?php echo 5 /* $_SESSION['order_id'] */; ?>";
      }).catch(function(error) {
        // Capture failed!
        console.error('Capture failed:', error);
      });
    }
  }).render('#paypal-container'); // Render buttons to the 'paypal-container' div