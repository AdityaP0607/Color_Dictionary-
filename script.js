
const glossaryData = [
    { icon: '➕', term: 'Additive Color', category: 'Digital', definition: 'The process of overlapping light beams to create lighter hues, eventually reaching white.' },
    { icon: '🏔️', term: 'Advancing Color', category: 'Theory', definition: 'Vibrant, warm tones that seem to jump forward and demand immediate attention.' },
    { icon: '🌲', term: 'Analogous Color', category: 'Harmony', definition: 'A harmonious group of three or more hues that live side-by-side on the wheel.' },
    { icon: '🔗', term: 'Associations', category: 'Psychology', definition: 'The mental shortcuts that connect specific colors to specific objects or experiences.' },
    { icon: '📏', term: 'Calibration', category: 'Technical', definition: 'Tuning hardware so that "Red" on your screen matches "Red" on your neighbor\'s screen.' },
    { icon: '✒️', term: 'CMYK', category: 'Print', definition: 'The ink-based system where Cyan, Magenta, Yellow, and Black are layered to build images.' },
    { icon: '👁️', term: 'Color Legibility', category: 'UX/UI', definition: 'The measure of how clearly a color stands out, ensuring information is easy to digest.' },
    { icon: '🕸️', term: 'Color Wheel', category: 'Theory', definition: 'A structured map used to visualize how different hues interact and balance.' },
    { icon: '🕯️', term: 'Connotations', category: 'Psychology', definition: 'The subjective moods or cultural vibes that a color radiates (e.g., Purple = Luxury).' },
    { icon: '☯️', term: 'Contrast', category: 'Theory', definition: 'The degree of separation between elements, used to create depth and emphasis.' },
    { icon: '🏷️', term: 'Denotations', category: 'Theory', definition: 'The clinical identification of a color based on its physical properties alone.' },
    { icon: '⛺', term: 'Gamut', category: 'Technical', definition: 'The "color playground" or boundary of possible hues a device is capable of rendering.' },
    { icon: '📽️', term: 'Grayscale', category: 'Digital', definition: 'An image stripped of all hue, relying entirely on light and dark values to show form.' },
    { icon: '🧩', term: 'Harmony', category: 'Theory', definition: 'The intentional selection of colors to create a "just right" feeling of visual unity.' },
    { icon: '🏷️', term: 'Hue', category: 'Theory', definition: 'The specific wavelength of a color that distinguishes it as Red, Blue, or Green.' },
    { icon: '🎢', term: 'Movement', category: 'Design', definition: 'Using color shifts and placement to dictate the path the viewer\'s eye takes.' },
    { icon: '🎨', term: 'Palette', category: 'Design', definition: 'The curated library of colors selected to define the look of a piece of work.' },
    { icon: '🏛️', term: 'Pantone', category: 'Print', definition: 'The global "language" of color that ensures a specific shade is identical everywhere.' },
    { icon: '🧱', term: 'Primary Color', category: 'Theory', definition: 'The irreducible building blocks from which all other colors are derived.' },
    { icon: '🧊', term: 'Receding Color', category: 'Theory', definition: 'Desaturated or cool colors that tend to fade into the background of a scene.' },
    { icon: '📺', term: 'RGB', category: 'Digital', definition: 'The light-based system (Red, Green, Blue) used to power every digital display.' },
    { icon: '🔋', term: 'Saturation', category: 'Theory', definition: 'The level of "charge" or colorfulness in a hue, from gray to full brilliance.' },
    { icon: '🧪', term: 'Secondary Color', category: 'Theory', definition: 'The immediate offspring created when two primary hues are combined.' },
    { icon: '💥', term: 'Simultaneous Contrast', category: 'Theory', definition: 'The phenomenon where a color\'s appearance shifts based on its surrounding neighbor.' },
    { icon: '📍', term: 'Spot Color', category: 'Print', definition: 'A single, solid ink used for precision instead of mixing CMYK dots.' },
    { icon: '➖', term: 'Subtractive Color', category: 'Print', definition: 'Color formed by pigments that absorb light, getting darker as you add more.' },
    { icon: '🧬', term: 'Tertiary Color', category: 'Theory', definition: 'The hybrid hues produced by mixing a primary parent with a secondary neighbor.' },
    { icon: '🌗', term: 'Tone (or Value)', category: 'Theory', definition: 'The amount of light or dark present, indicating how close a color is to black or white.' },
    { icon: '⚡', term: 'Vibration', category: 'Theory', definition: 'The jarring visual "jiggle" that occurs when two saturated, clashing colors touch.' },
    { icon: '🏋️', term: 'Visual Weight', category: 'Design', definition: 'How much "force" or presence a color exerts within a composition.' }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');

// --- Render Logic ---
function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <span class="category-tag">${data.category}</span>
        <div class="icon">${data.icon}</div>
        <h3 class="term">${data.term}</h3>
        <div class="definition">${data.definition}</div>
    `;

    card.addEventListener('click', () => {
        const wasExpanded = card.classList.contains('expanded');
        document.querySelectorAll('.card').forEach(c => c.classList.remove('expanded'));
        if (!wasExpanded) card.classList.add('expanded');
    });

    return card;
}

function render(filterText = '') {
    grid.innerHTML = '';
    const filtered = glossaryData.filter(item =>
        item.term.toLowerCase().includes(filterText.toLowerCase()) ||
        item.category.toLowerCase().includes(filterText.toLowerCase())
    );
    filtered.forEach(item => grid.appendChild(createCard(item)));
}

// --- 3D Motion Logic ---
document.addEventListener('mousemove', (e) => {
    // Background and Grid Tilt
    const x = e.clientX;
    const y = e.clientY;

    const xPct = (x / window.innerWidth) * 100;
    const yPct = (y / window.innerHeight) * 100;

    document.documentElement.style.setProperty('--mouse-x', `${xPct}%`);
    document.documentElement.style.setProperty('--mouse-y', `${yPct}%`);

    const tiltX = ((x - window.innerWidth / 2) / window.innerWidth) * 15;
    const tiltY = ((y - window.innerHeight / 2) / window.innerHeight) * -15;

    document.documentElement.style.setProperty('--tilt-x', `${tiltX}deg`);
    document.documentElement.style.setProperty('--tilt-y', `${tiltY}deg`);
});

// Subtle icon parallax inside cards
grid.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const icon = card.querySelector('.icon');
    const ix = (e.clientX - rect.left - rect.width / 2) / 5;
    const iy = (e.clientY - rect.top - rect.height / 2) / 5;
    icon.style.transform = `translate3d(${ix}px, ${iy}px, 50px)`;
});

searchInput.addEventListener('input', (e) => render(e.target.value));

// Init
render();