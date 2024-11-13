import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; // Import Link for navigation
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Button } from 'react-bootstrap';

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Trincell's Time Warp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <div className="splash-container">
          <Image
            src="/timewarp.png" // Ensure this path is correct
            alt="Time Warp"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="overlay">
            <h1>Welcome to My Time Warp & Picture Book</h1>
            <Link href="/about" passHref>
              <Button variant="light" className="splash-button">Click Me To Get Started!</Button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .splash-container { 
          position: relative; 
          width: 100vw; 
          height: 100vh; 
          overflow: hidden; 
        } 
        .overlay { 
          position: absolute; 
          top: 50%; 
          left: 50%; 
          transform: translate(-50%, -50%); 
          color: white; 
          text-align: center;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); 
          font-size: 3rem; 
        }
        .splash-button {
          margin-top: 20px;
        }
      `}</style>
    </>
  );
}
