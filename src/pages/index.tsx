import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Footer from '../components/footer/Footer';
import SEO from '../components/seo';
import Sponsors from '../components/sponsors/Sponsors';
import './styles.css';

export const initials = (firstName: string, lastName: string) =>
  `${firstName.slice(0, 1)}${lastName.slice(0, 1)}`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allCongressJson {
        nodes {
          id
          firstName
          lastName
          state
          chamber
          party
          sponsor
          cosponsor
          twitterURL
          websiteURL
        }
      }
    }
  `);

  const congressData = data.allCongressJson.nodes;

  return (
    <>
      <SEO />
      <header className="mt-12">
        <h2>Medicare for All Tracker</h2>
        <p>Visualizing which members of the House support Medicare for All</p>
      </header>
      <Sponsors congressData={congressData} />
      <Footer />
    </>
  );
};

export default IndexPage;
