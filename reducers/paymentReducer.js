const initialState = {
    processingPayment: false,
  };
  
  function paymentReducer(state = initialState, action) {
    switch (action.type) {
      case 'PROCESS_PAYMENT':
        return { ...state, processingPayment: true };
      case 'PAYMENT_SUCCESS':
        return { ...state, processingPayment: false, success: true };
      case 'PAYMENT_FAILURE':
        return { ...state, processingPayment: false, error: action.payload };
      default:
        return state;
    }
  }
  
  export default paymentReducer;
  