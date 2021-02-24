import React from 'react';
import Link from 'next/link'
import Layout from './Layout'


const Signin = () => {
  return (
    <Layout>
      <h1>
        this in signinpage
      </h1>
      <Link href='/'>
        <a>
          <h2>back to home</h2>
        </a>
      </Link>
    </Layout>
  );
};


export default Signin;