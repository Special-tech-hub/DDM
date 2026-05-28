// ===== FINDINGS PAGE CHARTS =====

// 1. Cluster Pie
new Chart(document.getElementById('clusterPie'), {
  type: 'doughnut',
  data: {
    labels: ['Established (74)', 'Emerging (30)'],
    datasets: [{
      data: [74, 30],
      backgroundColor: ['#3498db', '#e74c3c'],
      borderWidth: 3,
      borderColor: '#fff',
      hoverOffset: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom', labels: { padding: 20, font: { size: 13 } } },
      title: { display: true, text: 'Student Maturity Distribution (k=2)', font: { size: 14, weight: 'bold' } }
    },
    cutout: '60%'
  }
});

// 2. Silhouette Bar
new Chart(document.getElementById('silhouetteBar'), {
  type: 'bar',
  data: {
    labels: ['k=2', 'k=3', 'k=4', 'k=5'],
    datasets: [{
      label: 'Silhouette Score',
      data: [0.365, 0.284, 0.278, 0.293],
      backgroundColor: ['#e94560', '#3498db', '#3498db', '#3498db'],
      borderRadius: 6,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Silhouette Score by Number of Clusters', font: { size: 14, weight: 'bold' } }
    },
    scales: {
      y: { min: 0, max: 0.5, title: { display: true, text: 'Silhouette Score' } },
      x: { title: { display: true, text: 'Number of Clusters (k)' } }
    }
  }
});

// 3. Dimension Bar
new Chart(document.getElementById('dimensionBar'), {
  type: 'bar',
  data: {
    labels: ['Emhare Ease', 'WiFi Reliability', 'Clearance Process', 'Google Classroom'],
    datasets: [
      {
        label: 'Emerging',
        data: [3.41, 4.97, 3.10, 3.07],
        backgroundColor: 'rgba(231,76,60,0.8)',
        borderRadius: 5,
        borderSkipped: false
      },
      {
        label: 'Established',
        data: [3.21, 2.24, 3.07, 3.27],
        backgroundColor: 'rgba(52,152,219,0.8)',
        borderRadius: 5,
        borderSkipped: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Average Scores by Maturity Level', font: { size: 14, weight: 'bold' } }
    },
    scales: {
      y: { min: 0, max: 5.5, title: { display: true, text: 'Average Score (1-5)' } }
    }
  }
});

// 4. Cross-Group Bar
new Chart(document.getElementById('crossGroupBar'), {
  type: 'bar',
  data: {
    labels: ['Emhare Ease', 'WiFi Reliability', 'Clearance Process', 'Google Classroom'],
    datasets: [
      {
        label: 'Students (Overall)',
        data: [3.28, 3.27, 3.08, 3.22],
        backgroundColor: 'rgba(52,152,219,0.8)',
        borderRadius: 5, borderSkipped: false
      },
      {
        label: 'Librarians',
        data: [3.00, 3.00, 3.00, 3.00],
        backgroundColor: 'rgba(46,204,113,0.8)',
        borderRadius: 5, borderSkipped: false
      },
      {
        label: 'ICT Staff',
        data: [3.00, 3.00, 2.00, 3.00],
        backgroundColor: 'rgba(243,156,18,0.8)',
        borderRadius: 5, borderSkipped: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Cross-Group Average Scores', font: { size: 14, weight: 'bold' } }
    },
    scales: {
      y: { min: 0, max: 5.5, title: { display: true, text: 'Average Score (1-5)' } }
    }
  }
});
