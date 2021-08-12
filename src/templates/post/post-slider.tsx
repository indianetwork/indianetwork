import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

import Adsense from '../../components/adsense/adsense'
import Button from '../../components/button/button'
import Badge from '../../components/badge/badge'
import { PostByPathQuery } from '../../../types/graphql-types'
import CurveBG from '../../../content/images/curveeffect.png'

import './style.scss'

const getDescription = (content: string): string => {
  const body = content.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  )
  if (body.match('<!--more-->')) {
    const [description] = body.split('<!--more-->')
    return description
  }
  return body
}

interface Props {
  data: PostByPathQuery
  options: {
    isIndex: boolean
    adsense?: string | null
  }
}

const PostSlider: React.FC<Props> = ({ data, options }: Props) => {
  const frontmatter = data.post?.frontmatter
  const path = frontmatter?.path || ''
  const image = frontmatter?.image || null
  const { isIndex, adsense } = options
  const html = data.post?.html || ''
  const isMore = isIndex && !!html.match('<!--more-->')

  return (
    <div className="article" key={path}>
      <Link style={{ boxShadow: 'none' }} to={path}>
        <div className="content">
          {image?.childImageSharp?.fluid && (
            <Img
              fluid={image.childImageSharp.fluid as FluidObject}
              style={{ display: 'block', margin: '0 auto' }}
            />
          )}
          <div className="curvebg">
            <p>{frontmatter?.description}</p>
            <span>by {frontmatter?.author}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostSlider
