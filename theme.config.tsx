import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><big><b>PINN</b></big>acle</span>,
  project: {
    link: 'https://github.com/i207M/PINNacle',
  },
  docsRepositoryBase: 'https://github.com/i207M/PINNacle-docs',
  footer: {
    text: 'Docs for PINNacle',
  },
  head: (
    <>
      <link rel="icon" href="/pinn.ico" type="image/x-icon"></link>
    </>
  )
}

export default config
