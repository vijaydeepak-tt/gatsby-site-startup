import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}>
            <Link 
              to='/'
              style={{ color: 'white', textDecoration: 'none', fontSize: 'x-large' }}
            >Home</Link>
          </li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}>
            <Link
              to='/page-2'
              style={{ color: 'white', textDecoration: 'none', fontSize: 'x-large' }}
            >Page 2</Link>
          </li>
          <li style={{ display: 'inline-block', marginRight: '1rem' }}>
            <Link
              to='/page-3'
              style={{ color: 'white', textDecoration: 'none', fontSize: 'x-large' }}
            >Page 3</Link>
          </li>
        </ul>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
