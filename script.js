const terms = [
    { icon: '➕', term: 'Additive Color', definition: 'The process of overlapping light beams to create lighter hues, eventually reaching white.' },
    { icon: '🏔️', term: 'Advancing Color', definition: 'Vibrant, warm tones that seem to jump forward and demand immediate attention.' },
    { icon: '🌲', term: 'Analogous Color', definition: 'A harmonious group of three or more hues that live side-by-side on the wheel.' },
    { icon: '🔗', term: 'Associations', definition: 'The mental shortcuts that connect specific colors to specific objects or experiences.' },
    { icon: '📏', term: 'Calibration', definition: 'Tuning hardware so that "Red" on your screen matches "Red" on your neighbor\'s screen.' },
    { icon: '✒️', term: 'CMYK', definition: 'The ink-based system where Cyan, Magenta, Yellow, and Black are layered to build images.' },
    { icon: '👁️', term: 'Color Legibility', definition: 'The measure of how clearly a color stands out, ensuring information is easy to digest.' },
    { icon: '🕸️', term: 'Color Wheel', definition: 'A structured map used to visualize how different hues interact and balance.' },
    { icon: '🕯️', term: 'Connotations', definition: 'The subjective moods or cultural vibes that a color radiates (e.g., Purple = Luxury).' },
    { icon: '☯️', term: 'Contrast', definition: 'The degree of separation between elements, used to create depth and emphasis.' },
    { icon: '🏷️', term: 'Denotations', definition: 'The clinical identification of a color based on its physical properties alone.' },
    { icon: '⛺', term: 'Gamut', definition: 'The "color playground" or boundary of possible hues a device is capable of rendering.' },
    { icon: '📽️', term: 'Grayscale', definition: 'An image stripped of all hue, relying entirely on light and dark values to show form.' },
    { icon: '🧩', term: 'Harmony', definition: 'The intentional selection of colors to create a "just right" feeling of visual unity.' },
    { icon: '🏷️', term: 'Hue', definition: 'The specific wavelength of a color that distinguishes it as Red, Blue, or Green.' },
    { icon: '🎢', term: 'Movement', definition: 'Using color shifts and placement to dictate the path the viewer\'s eye takes.' },
    { icon: '🎨', term: 'Palette', definition: 'The curated library of colors selected to define the look of a piece of work.' },
    { icon: '🏛️', term: 'Pantone', definition: 'The global "language" of color that ensures a specific shade is identical everywhere.' },
    { icon: '🧱', term: 'Primary Color', definition: 'The irreducible building blocks from which all other colors are derived.' },
    { icon: '🧊', term: 'Receding Color', definition: 'Desaturated or cool colors that tend to fade into the background of a scene.' },
    { icon: '📺', term: 'RGB', definition: 'The light-based system (Red, Green, Blue) used to power every digital display.' },
    { icon: '🔋', term: 'Saturation', definition: 'The level of "charge" or colorfulness in a hue, from gray to full brilliance.' },
    { icon: '🧪', term: 'Secondary Color', definition: 'The immediate offspring created when two primary hues are combined.' },
    { icon: '💥', term: 'Simultaneous Contrast', definition: 'The phenomenon where a color\'s appearance shifts based on its surrounding neighbor.' },
    { icon: '📍', term: 'Spot Color', definition: 'A single, solid ink used for precision instead of mixing CMYK dots.' },
    { icon: '➖', term: 'Subtractive Color', definition: 'Color formed by pigments that absorb light, getting darker as you add more.' },
    { icon: '🧬', term: 'Tertiary Color', definition: 'The hybrid hues produced by mixing a primary parent with a secondary neighbor.' },
    { icon: '🌗', term: 'Tone (or Value)', definition: 'The amount of light or dark present, indicating how close a color is to black or white.' },
    { icon: '⚡', term: 'Vibration', definition: 'The jarring visual "jiggle" that occurs when two saturated, clashing colors touch.' },
    { icon: '🏋️', term: 'Visual Weight', definition: 'How much "force" or presence a color exerts within a composition.' }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');

function createCard(termData) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="icon">${termData.icon}</div>
        <div class="term">${termData.term}</div>
        <div class="definition">${termData.definition}</div>
    `;
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
    return card;
}

function renderCards(filteredTerms = terms) {
    grid.innerHTML = '';
    filteredTerms.forEach(term => {
        grid.appendChild(createCard(term));
    });
}

function filterCards() {
    const query = searchInput.value.toLowerCase();
    const filtered = terms.filter(term => term.term.toLowerCase().includes(query));
    renderCards(filtered);
}

searchInput.addEventListener('input', filterCards);

renderCards();