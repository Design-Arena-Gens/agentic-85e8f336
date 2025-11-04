'use client';

import { useState } from 'react';

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    {
      id: 'FUtvcAKna7Q',
      title: 'Albert Einstein: His Life and Universe',
      description: 'A comprehensive look at Einstein\'s life, from his early years to his groundbreaking theories.'
    },
    {
      id: 'CbqTngdWqCM',
      title: 'Einstein\'s Theory of Relativity',
      description: 'Understanding the revolutionary theory that changed our view of space and time.'
    },
    {
      id: 'ajhFNcUTJI0',
      title: 'E=mc²: Einstein\'s Most Famous Equation',
      description: 'Exploring the meaning and implications of the most famous equation in physics.'
    }
  ];

  const facts = [
    { icon: '🧠', title: 'Genius Mind', text: 'Developed the theory of relativity, one of the two pillars of modern physics' },
    { icon: '🏆', title: 'Nobel Prize', text: 'Won the Nobel Prize in Physics in 1921 for the photoelectric effect' },
    { icon: '📝', title: 'Prolific Writer', text: 'Published more than 300 scientific papers and 150+ non-scientific works' },
    { icon: '🎻', title: 'Music Lover', text: 'Passionate violinist who said "Life without playing music is inconceivable"' },
    { icon: '✌️', title: 'Peace Activist', text: 'Advocated for civil rights, nuclear disarmament, and world peace' },
    { icon: '🌟', title: 'Cultural Icon', text: 'Time Person of the Century, his name became synonymous with genius' }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '60px', color: 'white' }}>
          <h1 style={{ fontSize: '4rem', margin: '0 0 20px 0', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            Albert Einstein
          </h1>
          <p style={{ fontSize: '1.5rem', opacity: 0.95, margin: 0 }}>
            1879 - 1955 | Theoretical Physicist | Revolutionary Thinker
          </p>
        </header>

        <section style={{ marginBottom: '60px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <h2 style={{ fontSize: '2rem', marginTop: 0, color: '#667eea' }}>Featured Videos</h2>

            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {videos.map((video, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    style={{
                      padding: '12px 24px',
                      background: currentVideo === index ? '#667eea' : '#f0f0f0',
                      color: currentVideo === index ? 'white' : '#333',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: currentVideo === index ? 'bold' : 'normal',
                      transition: 'all 0.3s',
                      flex: '1',
                      minWidth: '200px'
                    }}
                  >
                    {video.title}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px', marginBottom: '20px' }}>
              <iframe
                src={`https://www.youtube.com/embed/${videos[currentVideo].id}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              {videos[currentVideo].description}
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', textAlign: 'center', marginBottom: '40px' }}>
            Key Facts About Einstein
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
            {facts.map((fact, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{fact.icon}</div>
                <h3 style={{ fontSize: '1.4rem', margin: '0 0 10px 0', color: '#667eea' }}>{fact.title}</h3>
                <p style={{ fontSize: '1rem', margin: 0, color: '#666', lineHeight: '1.6' }}>{fact.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '20px', backdropFilter: 'blur(10px)' }}>
          <h2 style={{ fontSize: '2rem', color: 'white', marginTop: 0 }}>Famous Quote</h2>
          <blockquote style={{
            fontSize: '1.5rem',
            color: 'white',
            fontStyle: 'italic',
            margin: '20px 0',
            padding: '0 0 0 30px',
            borderLeft: '4px solid white',
            lineHeight: '1.8'
          }}>
            "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
          </blockquote>
          <p style={{ fontSize: '1.2rem', color: 'white', opacity: 0.9, margin: 0 }}>— Albert Einstein</p>
        </section>

        <footer style={{ marginTop: '60px', textAlign: 'center', color: 'white', opacity: 0.8 }}>
          <p style={{ fontSize: '1rem' }}>
            Celebrating the life and legacy of one of history's greatest minds
          </p>
        </footer>
      </div>
    </div>
  );
}
