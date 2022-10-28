export default {
  darkMode: true
  , titleSuffix: ' – Utkarsh Chourasia'
  , head: ({ meta }) => {
    return (
      <>
        <meta name="title" content={meta.title} />
        <meta property="description" content={meta.description} />
        <meta name="author" content="Utkarsh Chourasia" />
        <meta property="og:type" content="Blog" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content="https://blog.utkarshchourasia.in/" />
        <meta property="og:image" content="/images/metaTag.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://blog.utkarshchourasia.in/" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content="/images/metaTag.png" />
      </>
    )
  },
  footer: (
    <>
      <hr />
      <div style={{ display: "block", float: "left" }}>
        <a href="https://twitter.com/JammUtkarsh" target="_blank">
          Twitter
        </a>{" "}
        ·{" "}
        <a href="https://github.com/JammUtkarsh" target="_blank">
          GitHub
        </a>{" "}
        ·{" "}
        <a href="https://www.linkedin.com/in/jammutkarsh/" target="_blank">
          LinkedIn
        </a>{" "}
        ·{" "}
        <a href="mailto:5.utkarshc@gmail.com" target="_blank">
          5.utkarshc@gmail.com
        </a>{" "}
        ·{" "}
        <a href="/feed.xml" target="_blank">
          RSS
        </a>{" "}
      </div>
      <div style={{ display: "block", float: "right" }}>
        <a href="/">
          Home
        </a>{" "}
      </div>
    </>
  ),
}
