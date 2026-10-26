/* The poster gives dates only. Count down to the first day's midnight in IST. */
(() => {
  'use strict';
  const start = Date.parse('2027-02-03T00:00:00+05:30');
  const end = Date.parse('2027-02-08T00:00:00+05:30');
  const heading = document.getElementById('countdown-heading');
  const units = ['days', 'hours', 'minutes', 'seconds'];
  const fields = units.map(unit => document.querySelector(`[data-unit="${unit}"]`));
  if (!heading || fields.some(field => !field)) return;
  const initialHeading = heading.textContent;

  function updateCountdown() {
    const now = Date.now();
    const remaining = Math.max(0, Math.floor((start - now) / 1000));
    const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
    fields.forEach((field, index) => {
      const value = String(values[index]).padStart(2, '0');
      if (field.textContent !== value) field.textContent = value;
    });
    heading.textContent = now >= end ? heading.dataset.ended : now >= start ? heading.dataset.live : initialHeading;
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) updateCountdown();
  });
})();
