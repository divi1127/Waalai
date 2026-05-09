import React from 'react';
import brandCardImg from '../assets/banners/Waalaicard.png';
import WaalaiText from './WaalaiText';

const BrandCardBanner = () => {
  return (
    <section style={{
      width: '100%',
      backgroundColor: 'white',
      padding: '80px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Left Side: Content */}
          <div style={{ flex: '1 1 500px', color: 'var(--color-dark-green)' }}>
            <div style={{ marginBottom: '24px' }}>
               <WaalaiText scale={1.8} />
            </div>
            
            <h2 style={{ 
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', 
              fontWeight: 800, 
              lineHeight: 1.1,
              marginBottom: '24px',
              color: 'var(--color-primary-green)'
            }}>
              In Pursuit of Taste, Health & Happiness
            </h2>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', 
              lineHeight: 1.7, 
              color: 'var(--color-earth-brown)',
              marginBottom: '40px',
              maxWidth: '650px'
            }}>
              Experience the authentic essence of Tamil culinary heritage. Every dish at <WaalaiText /> is a tribute to natural ingredients and traditional slow-cooking methods. We bring the pure taste of home to your table.
            </p>
            
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gold-accent)' }}>100%</span>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Homemade Purity</span>
               </div>
               <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(0,0,0,0.1)', alignSelf: 'center' }} />
               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-gold-accent)' }}>1931</span>
                  <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-light)' }}>Legacy of Taste</span>
               </div>
            </div>
          </div>

          {/* Right Side: Card Image */}
          <div style={{ 
            flex: '1 1 400px', 
            display: 'flex', 
            justifyContent: 'center',
            position: 'relative'
          }}>
            {/* Decorative background glow - lighter for white theme */}
            <div style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(118,184,42,0.08) 0%, rgba(118,184,42,0) 70%)',
              zIndex: 0
            }} />
            
            <img
              src={brandCardImg}
              alt="Waalai Brand Card"
              style={{
                width: '100%',
                maxWidth: '550px',
                height: 'auto',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCardBanner;
