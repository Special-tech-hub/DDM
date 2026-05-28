// ===== MODEL PAGE CHARTS =====

// 1. Feature Importance
new Chart(document.getElementById('featureImportance'), {
  type: 'bar',
  data: {
    labels: ['WiFi Reliability', 'Emhare Ease', 'Clearance Process', 'Google Classroom'],
    datasets: [{
      label: 'Importance Score',
      data: [0.90, 0.05, 0.03, 0.02],
      backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12'],
      borderRadius: 6,
      borderSkipped: false
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Random Forest Feature Importance', font: { size: 14, weight: 'bold' } }
    },
    scales: {
      x: { min: 0, max: 1, title: { display: true, text: 'Importance Score' } }
    }
  }
});

// 2. Silhouette Model
new Chart(document.getElementById('silhouetteModel'), {
  type: 'line',
  data: {
    labels: ['k=2', 'k=3', 'k=4', 'k=5'],
    datasets: [{
      label: 'Silhouette Score',
      data: [0.365, 0.284, 0.278, 0.293],
      borderColor: '#e94560',
      backgroundColor: 'rgba(233,69,96,0.1)',
      borderWidth: 3,
      pointBackgroundColor: ['#e94560', '#3498db', '#3498db', '#3498db'],
      pointRadius: 7,
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Silhouette Score vs Number of Clusters', font: { size: 14, weight: 'bold' } },
      annotation: {}
    },
    scales: {
      y: { min: 0.2, max: 0.45, title: { display: true, text: 'Silhouette Score' } },
      x: { title: { display: true, text: 'Number of Clusters (k)' } }
    }
  }
});

// 3. Composite Score Bar
new Chart(document.getElementById('compositeScore'), {
  type: 'bar',
  data: {
    labels: ['Students (Emerging)', 'Students (Established)', 'Librarians', 'ICT Staff'],
    datasets: [{
      label: 'Composite Maturity Score',
      data: [3.90, 2.80, 3.00, 2.80],
      backgroundColor: ['#e74c3c', '#3498db', '#2ecc71', '#f39c12'],
      borderRadius: 6,
      borderSkipped: false
    }, {
      label: 'Target (4.0)',
      data: [4.0, 4.0, 4.0, 4.0],
      type: 'line',
      borderColor: '#1a1a2e',
      borderDash: [6, 4],
      borderWidth: 2,
      pointRadius: 0,
      fill: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Composite Maturity Score by Group (Weighted Index)', font: { size: 14, weight: 'bold' } }
    },
    scales: {
      y: { min: 0, max: 5, title: { display: true, text: 'Score (1-5)' } }
    }
  }
});
