import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; // Ensure Link is imported
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from "@/styles/Gallery.module.css";

export default function Gallery() {
    return (
        <>
            <Head>
                <title>Gallery</title>
                <meta name="description" content="Gallery of my work" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="mt-4 text-center">
                <h1 className="mb-4">Gallery of My Work</h1>
                <Row className="gy-4">
                    <Col md={4}>
                        <Image src="/primary.png" alt="Project 1" width={300} height={200} className="img-fluid" />
                    </Col>
                    <Col md={4}>
                        <Image src="/cartoontrivia.png" alt="Project 2" width={300} height={200} className="img-fluid" />
                    </Col>
                    <Col md={4}>
                        <Image src="/gametrivia.png" alt="Project 3" width={300} height={200} className="img-fluid" />
                    </Col>
                </Row>
                <Row className="gy-4 mt-4">
                    <Col md={4}>
                        <Image src="/musicaltrivia.png" alt="Project 1" width={300} height={200} className="img-fluid" />
                    </Col>
                    <Col md={4}>
                        <Image src="/sportstrivia.png" alt="Project 2" width={300} height={200} className="img-fluid" />
                    </Col>
                    <Col md={4}>
                        <Image src="/tvtrivia.png" alt="Project 3" width={300} height={200} className="img-fluid" />
                    </Col>
                </Row>
                <Link href="/" passHref>
                    <Button variant="primary" className="mt-4">Back to Main Page</Button>
                </Link>
            </Container>
        </>
    );
}
