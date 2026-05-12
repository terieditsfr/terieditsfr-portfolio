export default function PortfolioWebsite() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      overflowX: 'hidden'
    }}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background:
            'radial-gradient(circle at top left, rgba(139,92,246,0.25), transparent 30%), radial-gradient(circle at bottom right, rgba(59,130,246,0.25), transparent 30%), #050505',
          zIndex: -1,
        }}
      />

      <header
        style={{
          position: 'sticky',
          top: 0,
          backdropFilter: 'blur(10px)',
          background: 'rgba(0,0,0,0.6)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 40px',
          zIndex: 100,
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>terieditsfr</h1>

          <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
            <a href="#about" style={linkStyle}>About</a>
            <a href="#portfolio" style={linkStyle}>Portfolio</a>
            <a href="#services" style={linkStyle}>Services</a>
            <a href="#contact" style={linkStyle}>Contact</a>
          </div>
        </nav>
      </header>

      <section style={{ textAlign: 'center', padding: '140px 20px' }}>
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '4px',
            color: '#9ca3af',
            marginBottom: '20px',
          }}
        >
          Creative Visual Designer
        </p>

        <h2
          style={{
            fontSize: 'clamp(2.7rem, 8vw, 4.5rem)',
            lineHeight: 1.1,
            maxWidth: '900px',
            margin: '0 auto',
            fontWeight: 900,
          }}
        >
          Graphic Design,{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #a855f7, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Video Editing,
          </span>{' '}
          and Creative Content.
        </h2>

        <p
          style={{
            maxWidth: '700px',
            margin: '30px auto',
            color: '#d1d5db',
            fontSize: '1.1rem',
            padding: '0 10px',
          }}
        >
          Building eye-catching visuals, modern branding, social media content,
          and edits that stand out online.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            marginTop: '40px',
          }}
        >
          <a href="#portfolio" style={primaryButton}>
            View Portfolio
          </a>

          <a href="#contact" style={secondaryButton}>
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>About Me</h2>

          <p style={paragraphStyle}>
            I’m terieditsfr — a creative designer focused on graphic design,
            branding, social media visuals, and video edits.
          </p>

          <p style={paragraphStyle}>
            My goal is to create modern content that grabs attention and gives
            brands a clean and professional look online.
          </p>
        </div>
      </section>

      <section id="portfolio" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>Portfolio</h2>

          <div style={gridStyle}>
            {[
              'Logo Designs',
              'Social Media Graphics',
              'Video Editing',
              'Branding Projects',
              'YouTube Thumbnails',
              'Creative Motion Content',
            ].map((item) => (
              <div key={item} style={portfolioCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>Services</h2>

          <div style={gridStyle}>
            {[
              {
                title: 'Graphic Design',
                desc: 'Modern designs for brands, creators, and businesses.',
              },
              {
                title: 'Video Editing',
                desc: 'Clean edits for TikTok, Instagram, YouTube, and more.',
              },
              {
                title: 'Brand Identity',
                desc: 'Visual branding that gives your content a professional look.',
              },
            ].map((service) => (
              <div key={service.title} style={cardStyle}>
                <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: '#d1d5db' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <div style={containerStyle}>
          <div style={contactBox}>
            <h2 style={sectionTitle}>Ready to build something creative?</h2>

            <p style={paragraphStyle}>
              Reach out through social media or email and let’s create visuals
              that stand out.
            </p>

            <a
              href="mailto:terieditsfr@gmail.com"
              style={{
                color: 'white',
                fontSize: '1.2rem',
                textDecoration: 'none',
                display: 'inline-block',
                margin: '20px 0 40px',
              }}
            >
              terieditsfr@gmail.com
            </a>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://instagram.com/terieditsfr"
                target="_blank"
                rel="noreferrer"
                style={primaryButton}
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com/@terieditsfr"
                target="_blank"
                rel="noreferrer"
                style={secondaryButton}
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const sectionStyle = {
  padding: '100px 0',
};

const sectionTitle = {
  fontSize: '3rem',
  marginBottom: '30px',
};

const paragraphStyle = {
  color: '#d1d5db',
  fontSize: '1.1rem',
  marginBottom: '20px',
  lineHeight: 1.7,
};

const linkStyle = {
  color: '#ccc',
  textDecoration: 'none',
};

const primaryButton = {
  padding: '16px 30px',
  borderRadius: '18px',
  background: 'white',
  color: 'black',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const secondaryButton = {
  padding: '16px 30px',
  borderRadius: '18px',
  border: '1px solid rgba(255,255,255,0.2)',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: '30px',
};

const portfolioCard = {
  minHeight: '260px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center' as const,
  background:
    'linear-gradient(to bottom right, rgba(168,85,247,0.2), rgba(59,130,246,0.2))',
  borderRadius: '30px',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  padding: '20px',
};

const cardStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '30px',
  padding: '30px',
};

const contactBox = {
  textAlign: 'center' as const,
  background:
    'linear-gradient(to bottom right, rgba(168,85,247,0.12), rgba(59,130,246,0.12))',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '40px',
  padding: '60px 30px',
};
