import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card glass">
      <h3 className="job-title">{job.title}</h3>
      <p className="job-company">{job.company}</p>
      <div className="job-tags">
        <span className="job-tag">{job.location}</span>
        <span className="job-tag">{job.type}</span>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '16px', flexGrow: 1 }}>
        {job.description}
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <span style={{ fontWeight: '600' }}>{job.salary}</span>
        <button className="btn">Apply Now</button>
      </div>
    </div>
  );
};

export default JobCard;
