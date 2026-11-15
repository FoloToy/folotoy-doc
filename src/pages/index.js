import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

// A real, indexable landing page (was a client-side redirect with no content).
const sections = [
  { to: "/docs/manual/folotoy-manual", title: translate({ id: "home.manuals", message: "AI toy manuals" }), body: translate({ id: "home.manuals.body", message: "Set up your FoloToy AI toy, connect Wi-Fi and start talking." }) },
  { to: "/docs/manual/magicBox-manual", title: translate({ id: "home.diy", message: "DIY AI toy kits" }), body: translate({ id: "home.diy.body", message: "MagicBox and the dev suit: give any toy an AI voice." }) },
  { to: "/docs/toy-pcb-replacement/alilo-g6", title: translate({ id: "home.pcb", message: "Toy PCB replacement" }), body: translate({ id: "home.pcb.body", message: "Turn Alilo G6, F6 and Mi Bunny toys into AI toys." }) },
  { to: "/docs/installation/start", title: translate({ id: "home.server", message: "Self-hosted server" }), body: translate({ id: "home.server.body", message: "Run your own AI toy server and choose STT, LLM and TTS providers." }) },
  { to: "/docs/integrations/openclaw", title: translate({ id: "home.integrations", message: "Integrations" }), body: translate({ id: "home.integrations.body", message: "MQTT, OpenClaw and your own APIs." }) },
  { to: "/docs/faq", title: translate({ id: "home.faq", message: "FAQ & troubleshooting" }), body: translate({ id: "home.faq.body", message: "Answers to common questions about FoloToy AI toys." }) },
];

export default function Home() {
  return (
    <Layout
      title={translate({ id: "home.title", message: "AI toy manuals, DIY kits and self-hosting" })}
      description={translate({ id: "home.description", message: "Official documentation for FoloToy AI toys: product manuals, DIY AI toy kits such as MagicBox, toy PCB replacement and the self-hosted AI toy server." })}
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1><Translate id="home.h1">FoloToy Docs</Translate></h1>
          <p className="hero__subtitle"><Translate id="home.subtitle">Manuals and guides for FoloToy AI toys, DIY AI toy kits and the self-hosted server.</Translate></p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/installation/start"><Translate id="home.cta">Get started</Translate></Link>
          </div>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row">
          {sections.map((s) => (
            <div key={s.to} className="col col--4 margin-bottom--lg">
              <Link to={s.to} className="card padding--lg" style={{ height: "100%", color: "inherit" }}>
                <h2>{s.title}</h2>
                <p>{s.body}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
