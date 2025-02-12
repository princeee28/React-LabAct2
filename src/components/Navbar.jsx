function Navbar() {
    return (
      <div>
        <header className="header">
          <div className="header-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pinterest-logo.png/600px-Pinterest-logo.png"
              alt="Pinterest Logo"
              className="logo"
            />
            <button className="explore-button">Explore</button>
            <input
              type="text"
              placeholder="Search for easy dinners, fashion, etc."
              className="search-input"
            />
          </div>
          <div className="header-right">
            <button className="login-button">Log in</button>
            <button className="signup-button">Sign up</button>
          </div>
        </header>
      </div>
    )
  }

  export default Navbar;