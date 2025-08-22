import React from 'react';
import VisualizerContainer from '../shared/VisualizerContainer';
import ExplanationSection from '../shared/ExplanationSection';

const styles = {
  placeholder: {
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252525',
    borderRadius: '12px',
    border: '2px dashed #444',
    color: '#777',
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '2rem',
  },
};

const explanationContent = [
  {
    title: "What & Why?",
    content: <p>Explanation for this pattern is coming soon.</p>,
  },
  {
    title: "How to Use",
    content: <p>Implementation details and code examples are coming soon.</p>,
  },
  {
    title: "Pros & Cons",
    content: (
        <>
            <h4>Advantages ✅</h4>
            <p>List of advantages coming soon.</p>
            <h4>Disadvantages ❌</h4>
            <p>List of disadvantages coming soon.</p>
        </>
    )
  },
];


const PatternTemplate = ({ title, subtitle }) => {
  return (
    <VisualizerContainer title={title} subtitle={subtitle}>
      <div style={styles.placeholder}>
        Interactive Visualization & Code Example Coming Soon!
      </div>
      <ExplanationSection content={explanationContent} />
    </VisualizerContainer>
  );
};

export default PatternTemplate;