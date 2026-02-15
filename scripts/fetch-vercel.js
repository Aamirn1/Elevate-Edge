import fs from 'fs';
import path from 'path';
import https from 'https';

// Vercel Configuration
// Get Token from environment variable or provided directly
const VERCEL_TOKEN = process.env.VERCEL_TOKEN;

if (!VERCEL_TOKEN) {
    console.warn('⚠️ No VERCEL_TOKEN found. Skipping project fetch.');
    console.warn('To fix this, set the VERCEL_TOKEN environment variable or add it to a .env file.');
    process.exit(0);
}

const API_URL = 'https://api.vercel.com/v9/projects';

const MANUAL_OVERRIDES = {
    'Fitness Equipment': 'https://fitness-equipment-ten.vercel.app/',
    // Add other overrides here if needed
};

// Exact Vercel project names (slugs) in desired order
const PROJECT_ORDER = [
    'batch-trade',
    'khurram-tent-studio',
    'chohan-s-style-hub',
    'fitness-equipment',
    'royaldairylife',
    'chohan-s-saloon'
];

const IGNORED_PROJECTS = ['lasani', 'bidhub', 'batchtrade'];

const TITLE_RENAMES = {
    'chohan-s-style-hub': "Chohan's Style Hub",
    'chohan-s-saloon': "Chohan's Saloon",
    'royaldairylife': 'Royal Dairy Life',
    'fitness-equipment': 'Fitness Equipment'
};

function fetchProjects() {
    console.log('🔄 Fetching projects from Vercel...');

    const options = {
        headers: {
            Authorization: `Bearer ${VERCEL_TOKEN}`,
        },
    };

    https.get(API_URL, options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                if (json.error) {
                    console.error('❌ Vercel API Error:', json.error.message);
                    return;
                }

                let projects = json.projects
                    .filter(p => !IGNORED_PROJECTS.includes(p.name))
                    .map(p => {
                        // Use renamed title if available, otherwise format the slug
                        const title = TITLE_RENAMES[p.name] || p.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

                        // Check if a local image exists for this project
                        const slug = p.name;
                        const localImagePath = path.join(process.cwd(), 'public', 'projects', `${slug}.png`);
                        const hasLocalImage = fs.existsSync(localImagePath);

                        return {
                            name: p.name, // Keep slug for sorting
                            title: title,
                            description: p.framework ? `A ${p.framework} project built with care.` : 'A professional project from my Vercel portfolio.',
                            tags: [p.framework || 'Web', 'Vercel'],
                            image: hasLocalImage ? `/projects/${slug}.png` : 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
                            // Use title for manual override lookup (legacy) or just use the new override logic if needed
                            url: MANUAL_OVERRIDES[title] || MANUAL_OVERRIDES[p.name] || `https://${p.alias?.[0] || p.name + '.vercel.app'}`
                        };
                    });

                // Sort projects
                projects.sort((a, b) => {
                    const indexA = PROJECT_ORDER.indexOf(a.name);
                    const indexB = PROJECT_ORDER.indexOf(b.name);

                    // If both are in the list, sort by index
                    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
                    // If only A is in list, it comes first
                    if (indexA !== -1) return -1;
                    // If only B is in list, it comes first
                    if (indexB !== -1) return 1;
                    // If neither, keep original order (or alphabetical)
                    return 0;
                });

                const dataDir = path.join(process.cwd(), 'src/data');
                if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

                fs.writeFileSync(
                    path.join(dataDir, 'projects.json'),
                    JSON.stringify(projects, null, 2)
                );

                console.log(`✅ Successfully fetched and sorted ${projects.length} projects!`);
            } catch (err) {
                console.error('❌ Failed to parse Vercel API response:', err.message);
            }
        });
    }).on('error', (err) => {
        console.error('❌ Network error while fetching Vercel projects:', err.message);
    });
}

fetchProjects();
