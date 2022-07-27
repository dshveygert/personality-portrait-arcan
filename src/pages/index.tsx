import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/layout"
import '../styles/main.sass'
import DateForm from "../components/date-form/date-form";

const IndexPage = () => {
    return (
      <Layout>
        <Helmet>
          <title>Расчет психологического портрета личности по дате рождения</title>
          <meta name="description" content="Расчет психологического портрета личности на основе арканов по дате рождения" />
          <meta name="theme-color" content="#00796B" />
        </Helmet>
          <div className="main">
              <DateForm />
          </div>
      </Layout>
    )
}

export default IndexPage
