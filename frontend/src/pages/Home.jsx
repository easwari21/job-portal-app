import React from 'react';
import JobList from '../components/JobList';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Find Your Dream Job Today</h1>
          <p>
            Connect with top companies and discover opportunities that match your skills,
            experience, and career goals in our robust job portal.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <input 
              type="text" 
              placeholder="Job title, keywords, or company" 
              style={{
                padding: '12px 20px',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text)',
                width: '100%',
                maxWidth: '400px',
                outline: 'none'
              }}
            />
            <button className="btn">Search Jobs</button>
          </div>
        </div>
      </section>
      
      <section style={{ backgroundColor: 'var(--surface)', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Featured Opportunities</h2>
          <p style={{ color: 'var(--text-muted)' }}>Explore the latest job openings from top employers</p>
        </div>
        <JobList />
      </section>
    </>
  );
};

export default Home;
