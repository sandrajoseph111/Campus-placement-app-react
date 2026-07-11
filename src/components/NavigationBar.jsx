import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "linear-gradient(to right, #1E3A8A, #2563EB, #38BDF8)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      >
        <div className="container-fluid">

          <a
            className="navbar-brand fw-bold fs-3"
            href="/"
            style={{ color: "#FFD700" }}
          >
            🎓 Campus Placement
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <a className="nav-link text-white fw-semibold px-3" href="/">
                📝 Register
              </a>

              <a className="nav-link text-white fw-semibold px-3" href="/se">
                🔍 Search
              </a>

              <a className="nav-link text-white fw-semibold px-3" href="/de">
                🗑️ Delete
              </a>

              <a className="nav-link text-white fw-semibold px-3" href="/vi">
                👨‍🎓 View
              </a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar