import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/pages/container'
import IframeResizer from 'iframe-resizer-react'

interface Props {
  path: string
}

const GetAQuote: React.FC<Props> = ({ path }: Props) => {
  const data = useStaticQuery ( graphql`
    query GetAQuoteFormQuery {
      site {
        siteMetadata {
          backendUrl
        }
      }
    }
  `
  )
  const backendUrl = data.site.siteMetadata.backendUrl
  const quoteFormUrl = backendUrl + "/quotes/index.php?agentno=1000000"

  return (
      <Container>
        <IframeResizer
          log
          src={quoteFormUrl}
          style={{ width: '1px', minWidth: '100%', border: 'none'}}
          heightCalculationMethod= "lowestElement"
        />
      </Container>
  )
}

export default GetAQuote
