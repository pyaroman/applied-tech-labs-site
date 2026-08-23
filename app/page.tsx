const differences = [
  {
    number: "01",
    title: "More than automation",
    copy: "We study how information, decisions, and work travel across the company—not only the task in front of us. The result is faster knowledge-sharing, fewer repeated questions, and one stronger operation instead of isolated automations.",
  },
  {
    number: "02",
    title: "Built around your people",
    copy: "Systems are shaped with the people who will use them, not designed in isolation and handed over at the end.",
  },
  {
    number: "03",
    title: "The right solution for each problem",
    copy: "We separate work that benefits from AI, simpler automation, process repair, or human judgment so every problem gets the right response.",
  },
  {
    number: "04",
    title: "Works inside your existing workflow",
    copy: "Whenever possible, the capability lives inside the tools and workflows your team already uses. Fewer new dashboards and a smaller adoption burden.",
  },
  {
    number: "05",
    title: "You own it. Built to evolve.",
    copy: "Your data, workflows, operating knowledge, and system foundation stay with your company. A vendor-agnostic design lets the system evolve as better technology appears without rebuilding from zero.",
  },
  {
    number: "06",
    title: "Governed from day one",
    copy: "Security, permissions, auditability, human review, evaluation, and cost controls are designed into every implementation from the start.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand the business",
    copy: "Before anything is built, we speak with key stakeholders and the people closest to the work. We map responsibilities, tools, workflows, and bottlenecks so the effort stays focused on measurable business impact.",
  },
  {
    number: "02",
    title: "Design & build the system",
    copy: "We identify the highest-impact opportunities and decide whether the right response is AI, automation, process improvement, better software, or a combination. The people who will use the system help design and test it inside the real operation.",
  },
  {
    number: "03",
    title: "Prove & improve",
    copy: "We measure adoption and operational impact, refine the system in use, and establish the safeguards and governance required for dependable long-term performance.",
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
          <a href="#approach">Our philosophy</a>
          <a href="#process">How we work</a>
          <a href="#difference">Why ATL</a>
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
              Book a free discovery call <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#process">
              See how we work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-light" id="approach" aria-labelledby="approach-title">
        <div className="shell">
          <div className="section-kicker">
            <span>Our philosophy</span>
            <span className="kicker-line" />
          </div>
          <h2 id="approach-title">Build around people.</h2>

          <div className="editorial-grid">
            <p className="lead-copy">
              Your team sees the operation, the customer, and the judgment
              calls with a clarity no outside system can match. That is why
              every engagement begins with the people doing the work—and the
              outcomes they need to improve.
            </p>
            <div className="body-copy">
              <p>
                Many technology projects begin with a tool and go looking for a
                reason to use it. That is how low-value tasks get polished while
                the constraint that actually holds the business back remains
                untouched.
              </p>
              <p>
                The result is more software, more steps, and less capacity. We
                begin with the operation itself.
              </p>
              <p>
                We trace how people, data, software, equipment, and processes
                work together. With your team, we find the points creating the
                most friction and determine whether the answer is AI,
                automation, a better process, or a combination.
              </p>
              <p>
                When technology belongs, we fit it around the operation. That
                may mean connecting tools already in use, simplifying an
                existing workflow, or building something focused and new.
              </p>
              <p>
                The standard is simple: less complexity, greater capacity, and
                as little disruption as possible.
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

      <section className="section section-light" id="difference" aria-labelledby="difference-title">
        <div className="shell">
          <div className="section-kicker">
            <span>Why companies choose Applied Tech Labs</span>
            <span className="kicker-line" />
          </div>
          <h2 id="difference-title" className="visually-hidden">
            Why companies choose Applied Tech Labs
          </h2>

          <div className="outcome-grid">
            {differences.map((item) => (
              <article className="outcome-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
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
            Stop forcing AI where it doesn’t belong.
            <br />
            Find out where it actually does.
          </h2>
          <p>
            We begin with a 30-minute conversation about your business, its
            constraints, and where AI can make a practical difference. No
            pressure and no sales pitch—just an honest first look at the
            operation.
          </p>
          <a
            className="button button-light"
            href="mailto:hello@appliedtechlabs.com?subject=Free%20discovery%20call"
          >
            Book a free discovery call <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <Brand footer />
          <p>Built for stronger company operations.</p>
          <nav aria-label="Footer navigation">
            <a href="#approach">Our philosophy</a>
            <a href="#process">How we work</a>
            <a href="#difference">Why ATL</a>
          </nav>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
