import Head from "next/head";
import BeautyPortrait from "../components/beautyPortrait/BeautyPortrait";
import { Complex } from "../components/complex/Complex";
import { Creativity } from "../components/creativity/Creativity";
import { Layout } from "../components/Layout";
import { LeadingBrand } from "../components/leadingBrand/LeadingBrand";
import { OurCases } from "../components/ourCases/OurCases";
import { OurParnest } from "../components/ourPartnes/OurParnest";
import TrustProfessional from "../components/trustProfessional/TrustProfessional";
import { WhatWeDoCopy } from "../components/whatWeDoCopy/WhatWeDoCopy";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Reto Web-Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <BeautyPortrait />
        <div style={{ height: "350px" }}></div>
        <TrustProfessional />
        <div style={{ height: "450px" }}></div>
        <WhatWeDoCopy />
        <div style={{ height: "150px" }}></div>
        <LeadingBrand />
        <Creativity />
        <div style={{ height: "200px" }}></div>
        <OurCases />
        <div style={{ height: "150px" }}></div>
        <OurParnest />
        <div style={{ height: "150px" }}></div>

        <Complex />
        <div style={{ height: "650px" }}></div>
      </Layout>
    </div>
  );
}
