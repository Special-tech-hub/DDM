// ===== DASHBOARD PAGE CHARTS =====

const COLORS = {
  red: '#e74c3c', blue: '#3498db', green: '#2ecc71',
  orange: '#f39c12', purple: '#9b59b6', accent: '#e94560'
};

// 1. Pie — maturity split
new Chart(document.getElementById('db-pie'), {
  type: 'doughnut',
  data: {
    labels: ['Established (74)', 'Emerging (30)'],
    datasets: [{ data: [74, 30], backgroundColor: [COLORS.blue, COLORS.red], borderWidth: 3, borderColor: '#fff', hoverOffset: 6 }]
  },
  options: {
    responsive: true, cutout: '60%',
    plugins: { legend: { position: 'bottom', labels: { font: { size: 11 } } } }
  }
});

// 2. Feature importance
new Chart(document.getElementById('db-importance'), {
  type: 'bar',
  data: {
    labels: ['WiFi', 'Emhare', 'Clearance', 'GClassroom'],
    datasets: [{
      data: [0.90, 0.05, 0.03, 0.02],
      backgroundColor: [COLORS.red, COLORS.blue, COLORS.green, COLORS.orange],
      borderRadius: 5, borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { min: 0, max: 1 } }
  }
});

// 3. Silhouette
new Chart(document.getElementById('db-silhouette'), {
  type: 'line',
  data: {
    labels: ['k=2', 'k=3', 'k=4', 'k=5'],
    datasets: [{
      data: [0.365, 0.284, 0.278, 0.293],
      borderColor: COLORS.accent, backgroundColor: 'rgba(233,69,96,0.1)',
      borderWidth: 2.5, pointRadius: 5, fill: true, tension: 0.3,
      pointBackgroundColor: [COLORS.accent, COLORS.blue, COLORS.blue, COLORS.blue]
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { min: 0.2, max: 0.42 } }
  }
});

// 4. Dimension grouped bar
new Chart(document.getElementById('db-dimension'), {
  type: 'bar',
  data: {
    labels: ['Emhare Ease', 'WiFi Reliability', 'Clearance Process', 'Google Classroom'],
    datasets: [
      { label: 'Emerging', data: [3.41, 4.97, 3.10, 3.07], backgroundColor: 'rgba(231,76,60,0.8)', borderRadius: 5, borderSkipped: false },
      { label: 'Established', data: [3.21, 2.24, 3.07, 3.27], backgroundColor: 'rgba(52,152,219,0.8)', borderRadius: 5, borderSkipped: false }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top' } },
    scales: { y: { min: 0, max: 5.5, title: { display: true, text: 'Score (1-5)' } } }
  }
});

// 5. Composite score
new Chart(document.getElementById('db-composite'), {
  type: 'bar',
  data: {
    labels: ['Stud. Emerging', 'Stud. Established', 'Librarians', 'ICT Staff'],
    datasets: [{
      label: 'Composite Score',
      data: [3.90, 2.80, 3.00, 2.80],
      backgroundColor: [COLORS.red, COLORS.blue, COLORS.green, COLORS.orange],
      borderRadius: 5, borderSkipped: false
    }, {
      label: 'Target',
      data: [4, 4, 4, 4],
      type: 'line',
      borderColor: '#1a1a2e', borderDash: [6, 4], borderWidth: 2, pointRadius: 0, fill: false
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
    scales: { y: { min: 0, max: 5 } }
  }
});

// 6. Quarterly projection
new Chart(document.getElementById('db-projection'), {
  type: 'line',
  data: {
    labels: ['Baseline', 'Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      { label: 'Emerging', data: [2.80, 3.00, 3.30, 3.60, 4.00], borderColor: COLORS.red, backgroundColor: 'rgba(231,76,60,0.06)', borderWidth: 2, pointRadius: 4, fill: true, tension: 0.3 },
      { label: 'Established', data: [3.10, 3.25, 3.50, 3.75, 4.00], borderColor: COLORS.blue, backgroundColor: 'rgba(52,152,219,0.06)', borderWidth: 2, pointRadius: 4, fill: true, tension: 0.3 },
      { label: 'Librarians', data: [3.00, 3.20, 3.45, 3.70, 4.00], borderColor: COLORS.green, backgroundColor: 'rgba(46,204,113,0.06)', borderWidth: 2, pointRadius: 4, fill: true, tension: 0.3 },
      { label: 'ICT Staff', data: [2.95, 3.15, 3.40, 3.70, 4.00], borderColor: COLORS.purple, backgroundColor: 'rgba(155,89,182,0.06)', borderWidth: 2, pointRadius: 4, fill: true, tension: 0.3 },
      { label: 'Target', data: [4, 4, 4, 4, 4], borderColor: '#1a1a2e', borderDash: [6, 4], borderWidth: 1.5, pointRadius: 0, fill: false }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
    scales: { y: { min: 2.5, max: 4.5, title: { display: true, text: 'Score' } } }
  }
});

// 7. Gap analysis
new Chart(document.getElementById('db-gap'), {
  type: 'bar',
  data: {
    labels: ['Emhare', 'WiFi', 'Clearance', 'GClassroom'],
    datasets: [
      { label: 'Students', data: [0.72, 1.73, 0.92, 0.75], backgroundColor: 'rgba(52,152,219,0.8)', borderRadius: 4, borderSkipped: false },
      { label: 'Librarians', data: [1.00, 1.00, 1.00, 1.00], backgroundColor: 'rgba(46,204,113,0.8)', borderRadius: 4, borderSkipped: false },
      { label: 'ICT Staff', data: [1.00, 1.00, 2.00, 1.00], backgroundColor: 'rgba(243,156,18,0.8)', borderRadius: 4, borderSkipped: false }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'top', labels: { font: { size: 11 } } } },
    scales: { y: { min: 0, max: 2.5, title: { display: true, text: 'Gap to 4.0' } } }
  }
});

// 8. Radar
new Chart(document.getElementById('db-radar'), {
  type: 'radar',
  data: {
    labels: ['Emhare Ease', 'WiFi Reliability', 'Clearance Process', 'Google Classroom'],
    datasets: [
      { label: 'Students', data: [3.28, 3.27, 3.08, 3.22], borderColor: COLORS.blue, backgroundColor: 'rgba(52,152,219,0.15)', borderWidth: 2, pointRadius: 4 },
      { label: 'Librarians', data: [3.00, 3.00, 3.00, 3.00], borderColor: COLORS.green, backgroundColor: 'rgba(46,204,113,0.15)', borderWidth: 2, pointRadius: 4 },
      { label: 'ICT Staff', data: [3.00, 3.00, 2.00, 3.00], borderColor: COLORS.orange, backgroundColor: 'rgba(243,156,18,0.15)', borderWidth: 2, pointRadius: 4 }
    ]
  },
  options: {
    responsive: true,
    plugins: { legend: { position: 'bottom' } },
    scales: {
      r: {
        min: 0, max: 5,
        ticks: { stepSize: 1 },
        pointLabels: { font: { size: 12 } }
      }
    }
  }
});
