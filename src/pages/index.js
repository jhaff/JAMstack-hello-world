import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <p>I&#39;m Jacob Haff, a software engineer in training at Make School.</p>
    <p>My interests outside of tech include but are not limited to:</p>
    <ul>
        <li>Singing (anything from pop to italian opera)</li>
        <li>Playing the piano (Movie soundtracks, classical, and pop)</li>
        <li>Trading stocks(ask me about my day trading phase)</li>
        <li>Being positive and bringing energy to those around me!</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
