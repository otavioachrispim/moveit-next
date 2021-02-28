import Head from "next/head";

import { CompletedChallenges } from "../componentes/CompletedChallenges";
import { Countdown } from "../componentes/Countdown";
import { ExperienceBar } from "../componentes/ExperienceBar";
import { Profile } from "../componentes/Profile";
import { ChallengeBox } from "../componentes/ChallangeBox";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          < ChallengeBox />
        </div>
      </section>
    </div>
  );
}
