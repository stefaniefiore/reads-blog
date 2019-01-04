import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article, Wrapper, Button, SectionTitle } from 'components';
import { media } from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 3rem 6rem;
  @media ${media.tablet} {
    padding: 3rem 2rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
  overflow: hidden;
`;

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 6rem 2rem;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};
`;

const Intro = styled.p`
  font-size: 1.68rem;
  margin-top: -1rem;
  @media ${media.phone} {
    font-size: 1.25rem;
  }
  @media ${media.tablet} {
    font-size: 1.45rem;
  }
`;

const Name = styled.span`
  font-weight: bold;
`;

const Favourites = styled.p`
  color: blue;
`;

const StyledLink = styled(Link)`
  color: red;
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: postEdges },
  },
}) => (
  <Layout>
    <Wrapper>
      <Hero>
        <Intro>
          <Name>Stefanie Fiore</Name> is a Toronto-based digital project manager and strategist with a passion for
          leading cross-functional teams in the delivery of delightful, impactful digital experiences for humans across
          the globe. She is currently working at TWG.
        </Intro>

        <Favourites>
          Favourites: <StyledLink to="/blog">reading</StyledLink>, cats, karaoke, etc
        </Favourites>

        <p>Contact: email, linkedin</p>
      </Hero>
    </Wrapper>
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
