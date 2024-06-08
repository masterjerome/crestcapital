const loading = () => {
    return (
      <main className="h-screen">
        <div className="spinnerContainer">
          <div className="loader">
            <p>Loading</p>
            <div className="words">
              <span className="word">Support</span>
              <span className="word">Users</span>
              <span className="word">Transactions</span>
              <span className="word">Suspensions</span>
              <span className="word">History</span>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default loading;
  