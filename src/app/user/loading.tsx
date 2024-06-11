const loading = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="spinnerContainer">
        <div className="loader">
          <p>Loading</p>
          <div className="words">
            <span className="word">Offers</span>
            <span className="word">Savings</span>
            <span className="word">Deposits</span>
            <span className="word">Withdrawals</span>
            <span className="word">Balance</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default loading;
