const outcomes = [
  {
    number: "01",
    title: "Cleaner handoffs",
    copy: "Keep work moving between people, teams, and tools without the usual follow-up loop.",
  },
  {
    number: "02",
    title: "Less manual work",
    copy: "Remove repetitive coordination, data entry, and reporting from your team’s day.",
  },
  {
    number: "03",
    title: "Faster decisions",
    copy: "Bring the right context forward so decisions happen with less searching and fewer meetings.",
  },
  {
    number: "04",
    title: "More capacity",
    copy: "Give your best people room for customer work, judgment calls, and the work that grows the business.",
  },
  {
    number: "05",
    title: "Connected systems",
    copy: "Make the software you already use behave like one coherent operating system.",
  },
  {
    number: "06",
    title: "Visible performance",
    copy: "Build measurement into the workflow so gains are clear, durable, and easy to improve.",
  },
];

const process = [
  {
    number: "01",
    title: "Map the operation",
    copy: "We listen to the people closest to the work, trace how information moves, and identify where time, context, and momentum get lost.",
  },
  {
    number: "02",
    title: "Design the system",
    copy: "We prioritize the highest-leverage opportunity and shape a practical system around your tools, constraints, and team—not the other way around.",
  },
  {
    number: "03",
    title: "Prove the value",
    copy: "We launch against a defined operational measure, support adoption, and refine until the new way of working holds up in the real world.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`brand${footer ? " brand-footer" : ""}`}
      href="#top"
      aria-label={footer ? "Applied Tech Labs, back to top" : "Applied Tech Labs, home"}
    >
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>Applied Tech Labs</span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header shell">
        <Brand />

        <nav aria-label="Primary navigation">
          <a href="#approach">Approach</a>
          <a href="#process">Process</a>
          <a href="#outcomes">Outcomes</a>
        </nav>

        <a className="button button-small button-outline" href="#contact">
          Start here
        </a>
      </header>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-map" aria-hidden="true">
          <span className="map-label label-one">Observe</span>
          <span className="map-label label-two">Connect</span>
          <span className="map-label label-three">Simplify</span>
          <span className="map-label label-four">Scale</span>
          <div className="map-card card-one"><b>01</b><i /></div>
          <div className="map-card card-two"><b>02</b><i /><i /></div>
          <div className="map-card card-three"><b>03</b><i /></div>
          <div className="map-card card-four"><b>04</b><i /><i /></div>
          <span className="map-line line-one" />
          <span className="map-line line-two" />
          <span className="map-line line-three" />
        </div>

        <div className="eyebrow hero-eyebrow">
          <span>Operational systems</span>
          <span>Phoenix / Everywhere</span>
        </div>

        <h1 id="hero-title">
          Streamlining complex
          <br />
          business operations.
        </h1>

        <div className="hero-footer">
          <p>
            We eliminate operational waste and increase your team’s capacity
            with custom AI and automation systems.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              Book an operations review <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#process">
              See how we work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Focus areas">
        <div>
          <span>Less rework</span><b>·</b>
          <span>Faster handoffs</span><b>·</b>
          <span>Clearer decisions</span><b>·</b>
          <span>More team capacity</span><b>·</b>
          <span>Systems that fit the work</span>
        </div>
      </div>

      <section className="section section-light" id="approach" aria-labelledby="approach-title">
        <div className="shell">
          <div className="section-kicker">
            <span>Our approach</span>
            <span className="kicker-line" />
          </div>
          <h2 id="approach-title">Start with the work.</h2>

          <div className="editorial-grid">
            <p className="lead-copy">
              Complexity is rarely one big problem. It is a hundred small
              frictions quietly consuming your team’s time.
            </p>
            <div className="body-copy">
              <p>
                A report rebuilt every Monday. Customer context split across
                four tools. Approvals that stall because nobody knows what
                happens next. Each issue looks minor on its own; together they
                constrain the whole business.
              </p>
              <p>
                We study the operation as a connected system—people, process,
                data, and software—then redesign the parts creating the most
                waste.
              </p>
              <p>
                Sometimes the answer is automation. Sometimes it is a better
                workflow, a focused AI capability, or a simpler decision path.
                The goal is always the same: make the work move with less
                effort and more control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted" id="process" aria-labelledby="process-title">
        <div className="shell">
          <div className="section-heading-row">
            <div className="section-kicker">
              <span>How we work</span>
              <span className="kicker-line" />
            </div>
            <p>One operating problem. One measurable outcome. One clear path forward.</p>
          </div>
          <h2 id="process-title" className="visually-hidden">Our process</h2>

          <div className="process-list">
            {process.map((item) => (
              <article className="process-row" key={item.number}>
                <span className="process-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="outcomes" aria-labelledby="outcomes-title">
        <div className="shell">
          <div className="section-kicker">
            <span>What changes</span>
            <span className="kicker-line" />
          </div>
          <div className="outcomes-intro">
            <h2 id="outcomes-title">Capacity you can feel.</h2>
            <p>
              Better operations should show up in the pace of the work, the
              quality of decisions, and the energy your team has left for what
              matters.
            </p>
          </div>

          <div className="outcome-grid">
            {outcomes.map((item) => (
              <article className="outcome-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fit-section">
        <div className="shell fit-grid">
          <div>
            <div className="section-kicker section-kicker-light">
              <span>Built to fit</span>
              <span className="kicker-line" />
            </div>
            <h2>Your operation stays yours.</h2>
          </div>
          <div className="fit-copy">
            <p>
              We build around the systems, standards, and judgment your
              business already depends on. Your team stays in control, and
              every system is designed to be understood, governed, and improved
              over time.
            </p>
            <div className="fit-tags" aria-label="System principles">
              <span>Human-led</span>
              <span>Tool-agnostic</span>
              <span>Secure by design</span>
              <span>Measurable</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="shell contact-inner">
          <div className="section-kicker section-kicker-light">
            <span>Start here</span>
            <span className="kicker-line" />
          </div>
          <h2 id="contact-title">
            Find the friction.
            <br />
            Create the capacity.
          </h2>
          <p>
            Start with a focused conversation about where work slows down,
            where your team gets stretched, and what a better operation could
            make possible.
          </p>
          <a
            className="button button-light"
            href="mailto:hello@appliedtechlabs.com?subject=Operations%20review"
          >
            Book an operations review <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <Brand footer />
          <p>Operational clarity, designed and built.</p>
          <nav aria-label="Footer navigation">
            <a href="#approach">Approach</a>
            <a href="#process">Process</a>
            <a href="#outcomes">Outcomes</a>
          </nav>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
