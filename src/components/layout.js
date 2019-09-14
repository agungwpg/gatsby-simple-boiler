import React from "react"
import { Link } from "gatsby"
import '../styles/index.scss'
class Layout extends React.Component {
  state = {
    navIsOpen:false
  }
  toggleNav = () => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    })
  }
  render() {
    const {location, title, children} = this.props
    return (
      <div className="app">
        <div className="header">
          <div className="header__brand" onClick={this.toggleNav}>
              <img src="assets/logo.svg" alt="brand"/>
          </div>
          <h1 className="header__title" onClick={this.toggleNav}>{title}</h1>
        </div>
        <div className="wrapper">
          <nav className="navigation">
            <span className="navigation__toggler" onClick={this.toggleNav}></span>
            <ul className={`navigation__list ${this.state.navIsOpen? 'open': ' '}`}>
                <Link className="navigation__item" to="/landing-page" activeClassName="active">
                <svg xmlns="http://www.w3.org/2000/svg" width="51.074" height="43.874" viewBox="0 0 51.074 43.874">
                    <defs>
                    <linearGradient id="myGradient" x1="-4.5" x2="821" y1="14.9" y2="492.6" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stop-color="#00877a"/>
                      <stop offset="4%" stop-color="#00bdaa"/>
                    </linearGradient>
                    </defs>
                    <g transform="translate(-1 -2.102)"><path d="M26.537,2.1,1,25.081H7.965V45.975H24.216V32.046h4.643V45.975H45.11V25.081h6.965Zm0,6.239L40.466,20.883v20.45H33.5V27.4H19.572V41.332H12.608V20.883Z"/></g></svg>
                </Link>
                <Link to="/dashboard-page" activeClassName="active" className="navigation__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="37.728" height="37.728" viewBox="0 0 37.728 37.728"><defs></defs><g transform="translate(-3 -3)"><path  d="M7.192,3A4.221,4.221,0,0,0,3,7.192V36.536a4.221,4.221,0,0,0,4.192,4.192H36.536a4.221,4.221,0,0,0,4.192-4.192V7.192A4.221,4.221,0,0,0,36.536,3Zm0,4.192H36.536V36.536H7.192Z"/></g></svg>
                </Link>
                <Link to="/code-page" activeClassName="active" className="navigation__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="44.074" height="44.074" viewBox="0 0 44.074 44.074"><defs></defs><g transform="translate(-3 -3)"><path d="M7.9,3A4.931,4.931,0,0,0,3,7.9v34.28a4.931,4.931,0,0,0,4.9,4.9h34.28a4.931,4.931,0,0,0,4.9-4.9V7.9a4.931,4.931,0,0,0-4.9-4.9Zm0,4.9h34.28v34.28H7.9ZM20.14,17.232l-7.853,7.843,7.853,7.853,2.449-2.449-5.4-5.4,5.4-5.394Zm9.794,0-2.449,2.449,5.4,5.394-5.4,5.4,2.449,2.449,7.853-7.853Z" transform="translate(0 0)"/></g></svg>
                </Link>
                <Link to="/design-page" activeClassName="active" className="navigation__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="44.074" height="44.072" viewBox="0 0 44.074 44.072"><defs></defs><g transform="translate(-1.999 -2)"><path d="M24.037,2A22.046,22.046,0,0,0,2.053,25.611c.809,11.646,10.975,20.461,22.664,20.461h1.524a4.4,4.4,0,0,0,4.407-4.407V35.054a4.4,4.4,0,0,1,4.407-4.407h6.611a4.4,4.4,0,0,0,4.407-4.407V24.716c0-11.689-8.806-21.855-20.461-22.664C25.087,2.017,24.554,2,24.037,2Zm0,4.407c.422,0,.844.017,1.265.043,9.176.637,16.364,8.659,16.364,18.266V26.24H35.055a8.82,8.82,0,0,0-8.814,8.814v6.611H24.717c-9.606,0-17.629-7.187-18.266-16.364A17.639,17.639,0,0,1,24.037,6.407Zm1.1,2.2a3.305,3.305,0,1,0,3.305,3.305A3.306,3.306,0,0,0,25.139,8.611Zm-8.814,2.2A3.305,3.305,0,1,0,19.63,14.12,3.306,3.306,0,0,0,16.325,10.814Zm17.629,2.2a3.305,3.305,0,1,0,3.305,3.305A3.306,3.306,0,0,0,33.953,13.018ZM11.917,19.629a3.305,3.305,0,1,0,3.305,3.305A3.306,3.306,0,0,0,11.917,19.629Zm7.713,8.814a4.407,4.407,0,1,0,4.407,4.407A4.4,4.4,0,0,0,19.63,28.443Z" transform="translate(0 0)"/></g></svg>
                </Link>
                <Link to="/about-page" activeClassName="active" className="navigation__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="40.728" height="40.728" viewBox="0 0 40.728 40.728"><defs></defs><g transform="translate(-2 -2)"><path d="M22.364,2A20.364,20.364,0,1,0,42.728,22.364,20.362,20.362,0,0,0,22.364,2Zm0,4.073a16.268,16.268,0,0,1,13.682,25.1l-1.567-1.209c-3.158-2.434-8.989-3.532-12.115-3.532s-8.957,1.1-12.115,3.532L8.682,31.186A16.274,16.274,0,0,1,22.364,6.073Zm0,3.564a6.618,6.618,0,1,0,6.618,6.618A6.623,6.623,0,0,0,22.364,9.636Zm0,4.073a2.545,2.545,0,1,1-2.545,2.545A2.553,2.553,0,0,1,22.364,13.709Zm0,16.8a17.531,17.531,0,0,1,11.3,3.572,16.235,16.235,0,0,1-22.591,0A17.531,17.531,0,0,1,22.364,30.509ZM10.257,33.238c.247.271.493.541.756.8C10.75,33.779,10.5,33.508,10.257,33.238Zm24.142.072c-.223.247-.446.493-.676.724C33.954,33.8,34.177,33.556,34.4,33.309Z"/></g></svg>
                </Link>
            </ul>
          </nav>
          <main className="content">
              {children}
          </main>
        </div>
      </div>
    )
  }
}

export default Layout
// import React from "react"
// import { Link } from "gatsby"

// import { rhythm, scale } from "../utils/typography"

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props
//     const rootPath = `${__PATH_PREFIX__}/`
//     let header

//     if (location.pathname === rootPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       )
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       )
//     }
//     return (
//       <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         <header>{header}</header>
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     )
//   }
// }

// export default Layout
