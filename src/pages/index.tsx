import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styled from "@emotion/styled";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Main>
        <div>
          <Header>Git-FileSystem</Header>
          <p>A shared abstraction for cloud Git providers exposing a file-system-like API.</p>
          <p>Read & write to GitHub/GitLab/Bitbucket repositories like they're file systems.</p>
          <p>
            Current implementations are written in{" "}
            <Link href="./docs/typescript">TypeScript/JavaScript</Link> and{" "}
            <Link href="./docs/dotnet">C#/.NET</Link>
          </p>
        </div>
      </Main>
    </Layout>
  );
}

const Main = styled.main`
  min-height: 42em;

  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 3em;
  margin-bottom: 2em;
`;
