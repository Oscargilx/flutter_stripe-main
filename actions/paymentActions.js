import paymentService from '../services/paymentService';

const processPayment = (amount) => async (dispatch) => {
  dispatch({ type: 'PROCESS_PAYMENT' });
  try {
    await paymentService.processPayment(amount);
    dispatch({ type: 'PAYMENT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'PAYMENT_FAILURE', payload: error });
  }
};
f