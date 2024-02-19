
it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 10000,
      years: 10,
      rate: 3.1
    };
    expect(calculateMonthlyPayment(values)).toEqual('94.27');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10096,
      years: 8,
      rate: 4.2
    };
    expect(calculateMonthlyPayment(values)).toEqual('124.00');
  });
  
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 1000,
      years: 33,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  });