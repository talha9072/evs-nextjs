import { useState } from 'react';

export default function TestPage() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('✅ Success! Aapka message send ho gaya.');
        form.reset();
      } else {
        setStatus('❌ Kuch error aaya. Please try again.');
      }
    } catch (err) {
      setStatus('❌ Network error. Check your connection.');
    }
    setLoading(false);
  };

  return (
    <>
      <head>
        <title>Test Form - Netlify</title>
      </head>

      <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px' }}>
        <h1>Contact Form (Netlify)</h1>

        <form
          name="contact"                    // Yeh name hidden HTML file mein bhi same hona chahiye
          onSubmit={handleSubmit}
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Yeh hidden field Netlify ko batata hai ki kaunsa form hai */}
          <input type="hidden" name="form-name" value="contact" />

          {/* Honeypot field - spam bots fill karte hain, humans nahi dekhte */}
          <div hidden>
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Name <span style={{ color: 'red' }}>*</span>
              <input
                type="text"
                name="name"
                required
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                placeholder="Aapka naam"
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Email <span style={{ color: 'red' }}>*</span>
              <input
                type="email"
                name="email"
                required
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                placeholder="you@example.com"
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Message <span style={{ color: 'red' }}>*</span>
              <textarea
                name="message"
                required
                rows="6"
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                placeholder="Aapka message yahan likhein"
              ></textarea>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 30px',
              background: loading ? '#ccc' : '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
            }}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p
              style={{
                marginTop: '20px',
                padding: '15px',
                background: status.includes('Success') ? '#d4edda' : '#f8d7da',
                borderRadius: '5px',
                color: status.includes('Success') ? '#155724' : '#721c24',
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      noHeader: false,
      noFooter: false, // optional
      useScrollContainer: false,
      
    },
    
  };
}