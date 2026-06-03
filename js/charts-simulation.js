// ===== SIMULATION PAGE CHARTS =====

const CLUSTERS = ['Emerging', 'Developing', 'Established', 'Leading'];
const SIM_COLORS = ['#e74c3c', '#f39c12', '#3498db', '#2ecc71'];

// Baseline data (from notebook output)
const baselineData = { Emerging: 10, Developing: 4, Established: 7, Leading: 11 };
// Scenario data (WiFi boosted to 4.9)
const scenarioData  = { Emerging: 26, Developing: 2, Established: 3, Leading: 1 };

// 1. Feature Importance — 4-cluster model
new Chart(document.getElementById('sim-importance'), {
  type: 'bar',
  data: {
    labels: ['WiFi Reliability', 'Google Classroom', 'Clearance Process', 'Emhare Ease'],
    datasets: [{
      label: 'Importance Score',
      data: [0.492, 0.290, 0.133, 0.085],
      backgroundColor: ['#e74c3c', '#f39c12', '#2ecc71', '#3498db'],
      borderRadius: 6, borderSkipped: false
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Feature Importance — 4-Cluster Random Forest', font: { size: 13, weight: 'bold' } }
    },
    scales: { x: { min: 0, max: 0.6, title: { display: true, text: 'Importance Score' } } }
  }
});

// 2. Baseline bar
const baselineChart = new Chart(document.getElementById('sim-baseline-bar'), {
  type: 'bar',
  data: {
    labels: CLUSTERS,
    datasets: [{
      label: 'Baseline (Current)',
      data: CLUSTERS.map(c => baselineData[c]),
      backgroundColor: SIM_COLORS.map(c => c + 'cc'),
      borderRadius: 6, borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Baseline Distribution', font: { size: 13, weight: 'bold' } }
    },
    scales: { y: { min: 0, max: 35, title: { display: true, text: 'Number of Students' } } }
  }
});

// 3. Scenario bar (dynamic — updated by slider)
const scenarioChart = new Chart(document.getElementById('sim-scenario-bar'), {
  type: 'bar',
  data: {
    labels: CLUSTERS,
    datasets: [{
      label: 'After WiFi Improvement',
      data: CLUSTERS.map(c => scenarioData[c]),
      backgroundColor: SIM_COLORS.map(c => c + 'cc'),
      borderRadius: 6, borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'After WiFi Improvement (4.9/5)', font: { size: 13, weight: 'bold' } }
    },
    scales: { y: { min: 0, max: 35, title: { display: true, text: 'Number of Students' } } }
  }
});

// 4. Pie — before
new Chart(document.getElementById('sim-pie-before'), {
  type: 'doughnut',
  data: {
    labels: CLUSTERS,
    datasets: [{
      data: CLUSTERS.map(c => baselineData[c]),
      backgroundColor: SIM_COLORS,
      borderWidth: 3, borderColor: '#fff', hoverOffset: 6
    }]
  },
  options: {
    responsive: true, cutout: '55%',
    plugins: {
      legend: { position: 'bottom', labels: { font: { size: 12 } } },
      title: { display: true, text: 'Baseline Distribution', font: { size: 13, weight: 'bold' } }
    }
  }
});

// 5. Pie — after
new Chart(document.getElementById('sim-pie-after'), {
  type: 'doughnut',
  data: {
    labels: CLUSTERS,
    datasets: [{
      data: CLUSTERS.map(c => scenarioData[c]),
      backgroundColor: SIM_COLORS,
      borderWidth: 3, borderColor: '#fff', hoverOffset: 6
    }]
  },
  options: {
    responsive: true, cutout: '55%',
    plugins: {
      legend: { position: 'bottom', labels: { font: { size: 12 } } },
      title: { display: true, text: 'After WiFi Boost (4.9/5)', font: { size: 13, weight: 'bold' } }
    }
  }
});

// 6. Cluster centres grouped bar
new Chart(document.getElementById('sim-centres'), {
  type: 'bar',
  data: {
    labels: ['Emhare Ease', 'WiFi Reliability', 'Clearance Process', 'Google Classroom'],
    datasets: [
      { label: 'Emerging',    data: [3.41, 4.97, 3.10, 3.07], backgroundColor: 'rgba(231,76,60,0.8)',  borderRadius: 4, borderSkipped: false },
      { label: 'Developing',  data: [2.94, 2.36, 3.14, 2.21], backgroundColor: 'rgba(243,156,18,0.8)', borderRadius: 4, borderSkipped: false },
      { label: 'Established', data: [3.68, 2.53, 3.53, 4.42], backgroundColor: 'rgba(52,152,219,0.8)', borderRadius: 4, borderSkipped: false },
      { label: 'Leading',     data: [3.17, 1.93, 2.67, 3.56], backgroundColor: 'rgba(46,204,113,0.8)', borderRadius: 4, borderSkipped: false }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Cluster Centres — Average Score per Dimension', font: { size: 13, weight: 'bold' } }
    },
    scales: { y: { min: 0, max: 5.5, title: { display: true, text: 'Average Score (1-5)' } } }
  }
});

// ===== INTERACTIVE SLIDER =====
// Simple linear interpolation model: as WiFi increases, Emerging grows, others shrink
const slider = document.getElementById('wifiSlider');
const sliderVal = document.getElementById('sliderVal');

function interpolateScenario(wifiLevel) {
  // At wifi=3.0: close to baseline. At wifi=4.9: full scenario
  const t = (wifiLevel - 3.0) / (4.9 - 3.0); // 0 to 1
  return {
    Emerging:    Math.round(baselineData.Emerging    + t * (scenarioData.Emerging    - baselineData.Emerging)),
    Developing:  Math.round(baselineData.Developing  + t * (scenarioData.Developing  - baselineData.Developing)),
    Established: Math.round(baselineData.Established + t * (scenarioData.Established - baselineData.Established)),
    Leading:     Math.round(baselineData.Leading     + t * (scenarioData.Leading     - baselineData.Leading))
  };
}

if (slider) {
  slider.addEventListener('input', () => {
    const val = parseFloat(slider.value);
    sliderVal.textContent = val.toFixed(1) + ' / 5';
    const interp = interpolateScenario(val);
    scenarioChart.data.datasets[0].data = CLUSTERS.map(c => interp[c]);
    scenarioChart.options.plugins.title.text = `After WiFi Improvement (${val.toFixed(1)}/5)`;
    scenarioChart.update();
  });
}
