// ===== KPI PAGE CHARTS =====

// Gap to target chart
new Chart(document.getElementById('kpiGapChart'), {
  type: 'bar',
  data: {
    labels: ['Emhare Ease', 'WiFi Reliability', 'Clearance Process', 'Google Classroom'],
    datasets: [
      {
        label: 'Students (Overall)',
        data: [0.72, 1.73, 0.92, 0.78],
        backgroundColor: 'rgba(52,152,219,0.8)',
        borderRadius: 5, borderSkipped: false
      },
      {
        label: 'Librarians',
        data: [1.00, 1.00, 1.00, 1.00],
        backgroundColor: 'rgba(46,204,113,0.8)',
        borderRadius: 5, borderSkipped: false
      },
      {
        label: 'ICT Staff',
        data: [1.00, 1.00, 2.00, 1.00],
        backgroundColor: 'rgba(243,156,18,0.8)',
        borderRadius: 5, borderSkipped: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: 'Gap to KPI Target (4.0) — Points Below Target per Dimension',
        font: { size: 14, weight: 'bold' }
      },
      tooltip: {
        callbacks: {
          label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toFixed(2)} points below target`
        }
      }
    },
    scales: {
      y: {
        min: 0, max: 2.5,
        title: { display: true, text: 'Gap (points below 4.0)' }
      }
    }
  }
});

// Animate progress bars on scroll
const progressBars = document.querySelectorAll('.progress-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.style.width; // trigger reflow
    }
  });
}, { threshold: 0.3 });
progressBars.forEach(b => barObserver.observe(b));
