import React from 'react'
import gatstrap from 'scss/gatstrap.css'

interface Props {
  headComponents: React.ReactNode[]
  body: string
  postBodyComponents: React.ReactNode[]
}

const HTML: React.FC<Props> = ({
  headComponents,
  body,
  postBodyComponents,
}: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {headComponents}
        <link
          href="/img/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link href="/img/favicon.png" rel="icon" type="image/x-icon" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
              __html: `
                var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"621630a312c1616c4c221b965450db9f059d1a0881c2900a6eab15ec39c6d6fa3a2e8a018c8b645687a676be4908bd72", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");
              `}}
        />
      </head>
      <body>
        <script
          type="text/javascript"
          id="zsiqchat"
          dangerouslySetInnerHTML={{
              __html: `
              $zoho.salesiq.ready = function(embedinfo)
              {
                $zoho.salesiq.customfield.add({
                  "name":"Visitor Arrival Date",
                  "hint":"Visitor Arrival Date",
                  "required":"true",
                  "visibility":"both",
                });
              }
              `}}
        />
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}

export default HTML
