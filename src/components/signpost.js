import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from './signpost.module.scss';

export const directions = [
  {
    emoji: "👈",
    label: "Library",
    url: "#here",
    description: "Explore the Wiki",
  },
  {
    emoji: "🗞",
    label: "Newsletter",
    url: "https://inite.io/blog",
    description: "Inite News.",
  },
  {
    emoji: "💬",
    label: "Discord",
    url: "https://dsc.gg/inite",
    description: "Discord Inite.",
  },
  {
    emoji: "🐤",
    label: "Twitter",
    url: "https://twitter.com/initeio",
    description: "Follow Inite on Twitter.",
  },
];

export function SignpostItem(props, key) {
  const [menuActive, setMenuActive] = useState(false);
  const { emoji, label, url, description } = props;

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const display = window.innerWidth;
        if (display >= 1280) {
          const sidebar = document.querySelector('[class^="sidebar"]');

          const menu = document.querySelector('[class^="sidebar"] .menu');
          if (sidebar !== 'undefined' && sidebar !== null) {
            menuActive
            ? sidebar?.classList.add('highlight')
            : sidebar?.classList.remove('highlight');
          // menuActive
          //   ? menu?.classList.add('menu--show')
          //   : menu?.classList.remove('menu--show');
        }

      }
    }
    setTimeout(() => {
      menuActive && toggleMenu();
    }, 5000);
    return () => {};
  }, [menuActive]);

  return (
    <ListItem key={`item-${key}`}>
      <Link
        className={url && url === '#here' ? 'trigger' : null}
        key={`link-${key}`}
        to={useBaseUrl(url)}
        title={description}
        onClick={url && url === '#here' ? toggleMenu : null}
      >
        <span>{emoji}</span>
        <span>{label}</span>
      </Link>
    </ListItem>
  );
}

export const ListItem = (props) => {
  const { children } = props;
  return <li className={styles.signpostItem}>{children}</li>;
};

export function Signpost() {
  return (
    <div className={styles.wrapper}>
      <img
        alt="Inite Wiki Logo"
        width="300"
        src="/img/inite-logo-purple.png"
      />
      <ul className={styles.signpost}>
        {directions &&
          directions.length > 0 &&
          directions.map((direction, idx) => (
            <SignpostItem {...direction} key={`sp-${idx}`} />
          ))}
        </ul>
    </div>
  );
}
