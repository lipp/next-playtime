import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Article from '../components/article'

// const API_KEY = 'c050e7fde5544d56814dc6277cd0c4aa'
const newsUrl = ({ country = 'us' }) =>
  `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=40&apiKey=c050e7fde5544d56814dc6277cd0c4aa&pageSize=50`

class Index extends React.Component {
  static async getInitialProps({ query }) {
    const response = await fetch(newsUrl(query))
    const data = await response.json()
    return {
      data
    }
  }

  render() {
    return (
      <div>
        <nav>
          <Link href="/?country=us">
            <a>US</a>
          </Link>
          <Link href="/?country=de">
            <a>Deutschland</a>
          </Link>
        </nav>
        <ul>
          {this.props.data.articles.map(article => (
            <li key={article.url}>
              <Article {...article} x={1} />
            </li>
          ))}
        </ul>
        <style jsx global>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
        `}</style>
        <style jsx>{`
          ul {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 20px;
            list-style: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Index
