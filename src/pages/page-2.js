import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>You&#39;ve reached the second page</h1>
    <p>There&#39;s not much to see here... yet</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
