import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";

function Header({ title }) {
	return (
		<h1>
			<Link href="/posts/first-post">this page!</Link>
		</h1>
	);
}

// Use it to get uninteractable data
export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

/*
// Use it for getting data on request / when the user does something
export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
*/

export default function HomePage({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>Destroyer App</title>
			</Head>
			<Header />

			<section className={utilStyles.headingMd}>
				<p>Gorilla stronk</p>
				<p>Sample of blalba Tutorial</p>
			</section>

			<section
				className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
			>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
