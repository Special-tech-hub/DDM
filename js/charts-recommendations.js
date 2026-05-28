// ===== RECOMMENDATIONS PAGE CHARTS =====

new Chart(document.getElementById('projectionChart'), {
  type: 'line',
  data: {
    labels: ['Baseline (Now)', 'Q1', 'Q2', 'Q3', 'Q4 (Target)'],
    datasets: [
      {
        label: 'Students (Emerging)',
        data: [2.80, 3.00, 3.30, 3.60, 4.00],
        borderColor: '#e74c3c',
        backgroundColor: 'rgba(231,76,60,0.08)',
        borderWidth: 2.5,
        pointRadius: 5,
        fill: true,
        tension: 0.3
      },
      {
        label: 'Students (Established)',
        data: [3.10, 3.25, 3.50, 3.75, 4.00],
        borderColor: '#3498db',
        backgroundColor: 'rgba(52,152,219,0.08)',
        borderWidth: 2.5,
        pointRadius: 5,
        fill: true,
        tension: 0.3
      },
      {
        label: 'Librarians',
        data: [3.00, 3.20, 3.45, 3.70, 4.00],
        borderColor: '#2ecc71',
        backgroundColor: 'rgba(46,204,113,0.08)',
        borderWidth: 2.5,
        pointRadius: 5,
        fill: true,
        tension: 0.3
      },
      {
        label: 'ICT Staff',
        data: [2.95, 3.15, 3.40, 3.70, 4.00],
        borderColor: '#9b59b6',
        backgroundColor: 'rgba(155,89,182,0.08)',
        borderWidth: 2.5,
        pointRadius: 5,
        fill: true,
        tension: 0.3
      },
      {
        label: 'Target (4.0)',
        data: [4.0, 4.0, 4.0, 4.0, 4.0],
        borderColor: '#1a1a2e',
        borderDash: [8, 4],
        borderWidth: 2,
        pointRadius: 0,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Projected Maturity Score Improvement — Quarterly Roadmap', font: { size: 14, weight: 'bold' } }
    },
    scales: {
      y: {
        min: 2.5, max: 4.5,
        title: { display: true, text: 'Average Maturity Score' }
      }
    }
  }
});
