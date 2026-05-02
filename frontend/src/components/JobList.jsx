import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const dummyJobs = [
  {
    _id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'Remote',
    description: 'We are looking for an experienced Frontend Developer with expertise in React, Redux, and modern CSS.',
    type: 'Full-time',
    salary: '$120k - $150k'
  },
  {
    _id: '2',
    title: 'Backend Node.js Engineer',
    company: 'Innovate Solutions',
    location: 'New York, NY',
    description: 'Join our team to build scalable microservices using Node.js, Express, and MongoDB.',
    type: 'Full-time',
    salary: '$130k - $160k'
  },
  {
    _id: '3',
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    location: 'San Francisco, CA',
    description: 'Looking for a creative UI/UX designer with a passion for building beautiful, user-centric interfaces.',
    type: 'Contract',
    salary: '$80/hr'
  }
];

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get('/api/jobs');
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs, using dummy data', error);
        setJobs(dummyJobs);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px' }}>Loading jobs...</div>;
  }

  return (
    <div className="job-grid container">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
