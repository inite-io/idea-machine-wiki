import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const wrapperStyle = {
  width: '680px',
  maxWidth: '680px',
  margin: '5rem auto',
  // overflow: 'hidden',
};
const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.08)',
  // borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'row nowrap',
  flex: '0 0 100%',
  marginBottom: '30px',
  padding: '30px',
  textAlign: 'left',
  width: '100%',
};
const lastPanelStyle = {
  ...panelStyle,
  marginBottom: '50px',
};
const lamerPanelStyle = {
  ...panelStyle,
  marginBottom: '30px',
};
const imgWrap = {
  flex: '0 0 33%',
  width: '33%',
  marginRight: '15px',
};
const mainWrap = {
  flexGrow: 1,
  paddingLeft: '10px',
  paddingRight: '20px',
};
const aspectBox = {
  position: 'relative',
  height: '205px',
  width: '203px',
  // overflow: 'hidden',
  textAlign: 'center',
};
const imgStyle = {
  width: '100%',
  height: '100%',
};
const lamerImgStyle = {
  ...imgStyle,
  // width: '185px',
  // height: '182px',
};

const sectionHeading = {
  fontFamily: '"IBM Plex Mono"',
  fontSize: '24px',
  color: '#a5b9f6',
};
const panelTitleStyle = {
  ...sectionHeading,
  color: 'white',
  marginBottom: '3px',
  flex: '0 0 100%',
  width: '100%',
  textAlign: 'left',
};
const textStyle = {
  fontSize: '14px',
};

function Panel({
  imageUrl,
  title,
  description,
  linkText,
  linkTo,
  lastPlayerPanel,
  lamerPanel,
}) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div
      className={classnames(
        'col',
        styles.feature,
        styles.panel,
        lastPlayerPanel && styles.lastItem
      )}
      style={lastPlayerPanel ? lastPanelStyle : panelStyle}
    >
      {imgUrl && (
        <div style={imgWrap} className={styles.imageWrapper}>
          <div style={aspectBox}>
            <img
              style={lamerPanel ? lamerImgStyle : imgStyle}
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
      )}
      <div style={mainWrap}>
        {title && <h3 style={panelTitleStyle}>{title}</h3>}
        {description && (
          <div
            style={textStyle}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  let wikipath = 'home';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      wikipath = window.location.pathname === '/' ? 'home' : 'docs';
    }
  });

  useEffect(() => {
    ReactGA.initialize(siteConfig.customFields.GA_TAG);
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <div className={classnames('wrapper', wikipath)}>
        <div
          className={classnames('inner-wrapper', styles.innerWrapper)}
          style={wrapperStyle}
        >
          <header className={classnames(styles.heroBanner)}>
            <div className='container'>
              <img
                alt='Inite Wiki Logo'
                className={styles.wikiLogo}
                width='555'
                src={
                  '/img/inite-logo-purple.png'
                }
              />
              <p className={styles.heroSubtitle}>
                <em>Became an idea machine</em>
              </p>
            </div>
          </header>
          <main className={styles.mainContent}>
            <div
              className='row'
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div className={'col'}>
                <h2 id='abstract'>Abstract</h2>
                <blockquote>
                  <p>
                    <em>
                      “Become an idea machine
                      A game application that improves cognitive skills and user productivity.
                      Everything begins with an idea.
                      A game that gathers people around an idea. We binds growth in life and growth in the game. Based on generating 10 new ideas every day.”
                    </em>{' '}
                  </p>
                </blockquote>
                <p>
                  Inite is a blockchain game based on a new type of economical and gaming activity. It combines GameFi and Play to Earn on one hand, and the world of ideas backed by NFTs and DAOs on the other. United on the Inite platform, these concepts form a new type of economy based on virtual assets and ideas - ideanomics.
                </p>
                <p>
                  The main task for every Inite player is the daily creation of 10 ideas and tracking their implementation. Inite players form an active community and discuss gaming activity. The best ideas get support from gaming clans and are tokenized in the form of NFTs.
                </p>
                <p>
                  Every user has their own player character and can upgrade it by creating ideas. Сompetition between characters and joint raids on bosses is a part of the gaming process. The Inite game combines innovative gamification of the idea creation process and old-school gaming mechanics familiar from the times of Might & Magic Heroes.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div className={styles.buttons}>
                <Link
                  className={classnames(
                    'button button--primary button--lg button--explore explore_src-pages-',
                    styles.button
                  )}
                  to={useBaseUrl('docs/enter-metaverse/the-inite-game')}
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
