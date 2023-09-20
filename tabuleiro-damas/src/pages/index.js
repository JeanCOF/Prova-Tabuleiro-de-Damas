import Head from 'next/head';
import DamasBoard from '../pages/damasboard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tabuleiro de Damas</title>
      </Head>

      <main>
        <h1>Tabuleiro de Damas</h1>
        <DamasBoard />
      </main>
    </div>
  );
}