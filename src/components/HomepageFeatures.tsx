/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Automatic GraphQL API',
    image: '/img/takeoff.svg',
    description: (
      <>
        Creating a schema/model with CouchSet is as easy as creating one JS variable,
        Then automatic GraphQL definitions are generated for you, get your backend up and running quickly.
      </>
    ),
  },
  {
    title: 'Worlds fastest database',
    image: '/img/database.svg',
    description: (
      <>
        CouchSet is Couchbase - The worlds fastest NoSQL database with SQL support.
      </>
    ),
  },
  {
    title: 'React/Vue/Angular',
    image: '/img/all_frontend.svg',
    description: (
      <>
        CouchSet supports React out of the box, but you're free to use any client that implements Apollo GraphQL.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
