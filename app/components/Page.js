import React, { useEffect } from "react"
import Container from "./Container"

function Page(props) {
  useEffect(() => {
    document.title = `${props.title} | Blogger`
    window.scrollTo(0, 0)
  }, [props.title]) //how you tell React to only run something the first time it's rendered

  return <Container wide={props.wide}>{props.children}</Container>
}

export default Page
