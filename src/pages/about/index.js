// src/pages/about/index.js

import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; // Ensure Link is imported
import styles from "@/styles/About.module.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function About() {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Learn more about me" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className={`${styles.page} mt-4`}>
                <h1>About Me</h1>
                <Row className="align-items-center">
                    <Col md={4}>
                        <Image
                            src="/aboutme.png" // Ensure this path is correct
                            alt="About Me"
                            width={300}
                            height={300}
                            className="img-fluid rounded-circle"
                        />
                    </Col>
                    <Col md={8}>
                        <p>
                            Hello! I'm Trincell, a passionate developer and lifelong learner. I have a strong background in web development and love creating interactive and dynamic web applications. When I'm not coding, you can find me exploring new technologies, reading books, or cooking something delicious.
                        </p>
                        <h2>Achievements</h2>
                        <ul className={styles.list}>
                            <li>Created a responsive e-commerce website with React and Node.js</li>
                            <li>Developed a real-time chat application using AI</li>
                            <li>Created sites for nonprofits.</li>
                            <li>Completed a Full-Stack Web Development Bootcamp</li>
                            <li>Mentored junior developers in coding and problem-solving</li>
                        </ul>
                        <Link href="/gallery" passHref>
                            <Button variant="primary" className="mt-3">View My Work</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
