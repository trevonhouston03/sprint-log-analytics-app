const apiBase = 'http://localhost:5000/api/workouts';

document.getElementById('logForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    date: document.getElementById('date').value,
    distance: parseFloat(document.getElementById('distance').value),
    time: parseFloat(document.getElementById('time').value),
    notes: document.getElementById('notes').value
  };
  try {
    const res = await fetch(apiBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (res.ok) {
      alert('Workout logged!');
      loadList();
    } else {
      alert('Error: ' + (data.error || 'Unknown'));
    }
  } catch (err) {
    console.error(err);
    alert('Network error');
  }
});

async function loadList() {
  try {
    const res = await fetch(apiBase);
    const items = await res.json();
    const div = document.getElementById('list');
    if (!Array.isArray(items)) { div.innerText = 'No data'; return; }
    div.innerHTML = items.map(i => `<div>${i.date} — ${i.distance}m — ${i.time}s — ${i.notes || ''}</div>`).join('');
  } catch (err) {
    console.error(err);
    document.getElementById('list').innerText = 'Failed to load';
  }
}

loadList();