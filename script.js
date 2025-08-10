// Create floating particles
function createParticles() {
    const particleContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        particleContainer.appendChild(particle);
    }
}

// Update status counters
function updateCounters() {
    const dreamersOnline = document.getElementById('dreamers-online');
    const dreamsSold = document.getElementById('dreams-sold');
    const nightmaresBlocked = document.getElementById('nightmares-blocked');
    const neuralLoad = document.getElementById('neural-load');
    
    setInterval(() => {
        dreamersOnline.textContent = Math.floor(Math.random() * 200) + 1200;
        dreamsSold.textContent = Math.floor(Math.random() * 100) + 89300;
        nightmaresBlocked.textContent = Math.floor(Math.random() * 50) + 150;
        neuralLoad.textContent = Math.floor(Math.random() * 30) + 65 + '%';
    }, 2000);
}

// Show category content
function showCategory(category) {
    document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const dreamGrid = document.querySelector('.dream-grid');
    
    if (category === 'featured') {
        // Show featured dreams (default content)
        dreamGrid.innerHTML = `
            <div class="dream-card" onclick="showPurchase('Neural Network Dreams')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Neural Network Dreams</div>
                        <div class="dream-seller">by NeuralCore_AI</div>
                    </div>
                    <div class="dream-price">₹299.99</div>
                </div>
                <div class="dream-description">
                    Experience the digital consciousness as you navigate through infinite neural pathways. Feel the electric pulse of artificial intelligence merging with your own thoughts.
                </div>
                <div class="dream-tags">
                    <span class="tag">AI</span>
                    <span class="tag">Consciousness</span>
                    <span class="tag">Digital</span>
                    <span class="tag">Premium</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (3,421 reviews)</span>
                    <span>🔄 89% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Quantum Memory Palace')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Quantum Memory Palace</div>
                        <div class="dream-seller">by QuantumMind_87</div>
                    </div>
                    <div class="dream-price">₹199.99</div>
                </div>
                <div class="dream-description">
                    Navigate infinite memory corridors where every thought exists simultaneously. Access memories from parallel universes and alternate timelines.
                </div>
                <div class="dream-tags">
                    <span class="tag">Quantum</span>
                    <span class="tag">Memory</span>
                    <span class="tag">Multiverse</span>
                    <span class="tag">HD Neural</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.8/5 (2,156 reviews)</span>
                    <span>🔄 76% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Subconscious Symphony')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Subconscious Symphony</div>
                        <div class="dream-seller">by DreamMaestro_42</div>
                    </div>
                    <div class="dream-price">₹149.99</div>
                </div>
                <div class="dream-description">
                    Hear the music of your mind as your deepest thoughts become melodies. Experience emotions as harmonies and memories as rhythms in this symphonic journey.
                </div>
                <div class="dream-tags">
                    <span class="tag">Music</span>
                    <span class="tag">Emotional</span>
                    <span class="tag">Artistic</span>
                    <span class="tag">Therapeutic</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.7/5 (1,893 reviews)</span>
                    <span>🔄 82% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Digital Afterlife')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Digital Afterlife</div>
                        <div class="dream-seller">by EternalCode_99</div>
                    </div>
                    <div class="dream-price">₹999.99</div>
                </div>
                <div class="dream-description">
                    Eternal existence in code. Upload your consciousness to a digital realm where time has no meaning and reality is programmable.
                </div>
                <div class="dream-tags">
                    <span class="tag">Immortality</span>
                    <span class="tag">Digital</span>
                    <span class="tag">Eternal</span>
                    <span class="tag">Ultimate</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (5,234 reviews)</span>
                    <span>⚠️ Life-changing</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
        `;
    } else if (category === 'memories') {
        // Show memory-based dreams
        dreamGrid.innerHTML = `
            <div class="dream-card" onclick="showPurchase('Childhood Memories')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Childhood Memories</div>
                        <div class="dream-seller">by MemoryLane_23</div>
                    </div>
                    <div class="dream-price">₹89.99</div>
                </div>
                <div class="dream-description">
                    Relive your earliest moments with perfect clarity. Experience the wonder of childhood again, from first steps to magical discoveries.
                </div>
                <div class="dream-tags">
                    <span class="tag">Childhood</span>
                    <span class="tag">Nostalgic</span>
                    <span class="tag">Innocent</span>
                    <span class="tag">Pure</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.6/5 (2,847 reviews)</span>
                    <span>🔄 91% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('First Love Experience')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">First Love Experience</div>
                        <div class="dream-seller">by LoveArchitect_77</div>
                    </div>
                    <div class="dream-price">₹129.99</div>
                </div>
                <div class="dream-description">
                    Feel that magical connection again. Experience the butterflies, the excitement, and the pure joy of first love in all its intensity.
                </div>
                <div class="dream-tags">
                    <span class="tag">Romance</span>
                    <span class="tag">First Love</span>
                    <span class="tag">Emotional</span>
                    <span class="tag">Magical</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.8/5 (3,156 reviews)</span>
                    <span>💕 Heart-warming</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Family Reunion')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Family Reunion</div>
                        <div class="dream-seller">by FamilyBonds_55</div>
                    </div>
                    <div class="dream-price">₹179.99</div>
                </div>
                <div class="dream-description">
                    Gather with lost loved ones in a perfect family reunion. Share stories, laughter, and create new memories with those you miss most.
                </div>
                <div class="dream-tags">
                    <span class="tag">Family</span>
                    <span class="tag">Reunion</span>
                    <span class="tag">Emotional</span>
                    <span class="tag">Healing</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (4,123 reviews)</span>
                    <span>🔄 95% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Academic Achievement')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Academic Achievement</div>
                        <div class="dream-seller">by ScholarDream_88</div>
                    </div>
                    <div class="dream-price">₹79.99</div>
                </div>
                <div class="dream-description">
                    Celebrate your learning milestones and academic successes. Feel the pride of achievement and the joy of knowledge gained.
                </div>
                <div class="dream-tags">
                    <span class="tag">Academic</span>
                    <span class="tag">Achievement</span>
                    <span class="tag">Success</span>
                    <span class="tag">Educational</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.5/5 (1,987 reviews)</span>
                    <span>🎓 Motivational</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
        `;
    } else if (category === 'nightmares') {
        // Show nightmare content
        dreamGrid.innerHTML = `
            <div class="dream-card" onclick="showPurchase('Conquered Fears')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Conquered Fears</div>
                        <div class="dream-seller">by FearSlayer_66</div>
                    </div>
                    <div class="dream-price">₹159.99</div>
                </div>
                <div class="dream-description">
                    Face and overcome your deepest fears in a controlled environment. Transform terror into triumph and emerge stronger than ever.
                </div>
                <div class="dream-tags">
                    <span class="tag">Fear</span>
                    <span class="tag">Conquest</span>
                    <span class="tag">Courage</span>
                    <span class="tag">Therapeutic</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.7/5 (2,445 reviews)</span>
                    <span>⚠️ Intense</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Shadow Integration')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Shadow Integration</div>
                        <div class="dream-seller">by ShadowWalker_33</div>
                    </div>
                    <div class="dream-price">₹199.99</div>
                </div>
                <div class="dream-description">
                    Embrace your dark side and integrate your shadow self. Find balance between light and dark aspects of your personality.
                </div>
                <div class="dream-tags">
                    <span class="tag">Shadow</span>
                    <span class="tag">Integration</span>
                    <span class="tag">Balance</span>
                    <span class="tag">Deep</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.8/5 (3,012 reviews)</span>
                    <span>🔄 78% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Nightmare Resolution')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Nightmare Resolution</div>
                        <div class="dream-seller">by DreamHealer_44</div>
                    </div>
                    <div class="dream-price">₹139.99</div>
                </div>
                <div class="dream-description">
                    Transform fear into power. Learn to navigate nightmares and turn them into sources of strength and wisdom.
                </div>
                <div class="dream-tags">
                    <span class="tag">Nightmare</span>
                    <span class="tag">Resolution</span>
                    <span class="tag">Transformation</span>
                    <span class="tag">Healing</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.6/5 (2,789 reviews)</span>
                    <span>💪 Empowering</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Inner Demons')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Inner Demons</div>
                        <div class="dream-seller">by DemonHunter_99</div>
                    </div>
                    <div class="dream-price">₹249.99</div>
                </div>
                <div class="dream-description">
                    Confront and integrate your inner demons. Face the darkest parts of yourself and emerge with newfound understanding and peace.
                </div>
                <div class="dream-tags">
                    <span class="tag">Demons</span>
                    <span class="tag">Confrontation</span>
                    <span class="tag">Integration</span>
                    <span class="tag">Ultimate</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (4,567 reviews)</span>
                    <span>⚠️ Life-changing</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
        `;
    } else if (category === 'lucid') {
        // Show lucid dreaming content
        dreamGrid.innerHTML = `
            <div class="dream-card" onclick="showPurchase('Reality Shifting')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Reality Shifting</div>
                        <div class="dream-seller">by RealityBender_11</div>
                    </div>
                    <div class="dream-price">₹399.99</div>
                </div>
                <div class="dream-description">
                    Bend the fabric of reality itself. Experience the power of conscious creation and manifest your desires instantly.
                </div>
                <div class="dream-tags">
                    <span class="tag">Reality</span>
                    <span class="tag">Shifting</span>
                    <span class="tag">Power</span>
                    <span class="tag">Ultimate</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (6,234 reviews)</span>
                    <span>⚠️ Reality-altering</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Conscious Creation')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Conscious Creation</div>
                        <div class="dream-seller">by CreatorMind_22</div>
                    </div>
                    <div class="dream-price">₹299.99</div>
                </div>
                <div class="dream-description">
                    Manifest your desires instantly through the power of conscious thought. Create worlds, objects, and experiences with pure intention.
                </div>
                <div class="dream-tags">
                    <span class="tag">Creation</span>
                    <span class="tag">Manifestation</span>
                    <span class="tag">Power</span>
                    <span class="tag">Lucid</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.8/5 (4,891 reviews)</span>
                    <span>🔄 87% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Dream Architect')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Dream Architect</div>
                        <div class="dream-seller">by DreamBuilder_33</div>
                    </div>
                    <div class="dream-price">₹349.99</div>
                </div>
                <div class="dream-description">
                    Design your perfect dream world from the ground up. Every detail, every sensation, every moment crafted to perfection.
                </div>
                <div class="dream-tags">
                    <span class="tag">Architect</span>
                    <span class="tag">Design</span>
                    <span class="tag">Creation</span>
                    <span class="tag">Perfect</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (5,123 reviews)</span>
                    <span>🔄 92% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Astral Projection')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Astral Projection</div>
                        <div class="dream-seller">by AstralTraveler_44</div>
                    </div>
                    <div class="dream-price">₹499.99</div>
                </div>
                <div class="dream-description">
                    Explore beyond physical limitations. Travel through dimensions, visit other worlds, and experience existence beyond the body.
                </div>
                <div class="dream-tags">
                    <span class="tag">Astral</span>
                    <span class="tag">Projection</span>
                    <span class="tag">Travel</span>
                    <span class="tag">Ultimate</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (7,456 reviews)</span>
                    <span>⚠️ Dimension-altering</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
        `;
    } else if (category === 'custom') {
        // Show custom dream creation content
        dreamGrid.innerHTML = `
            <div class="dream-card" onclick="showPurchase('Personal Dream Designer')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Personal Dream Designer</div>
                        <div class="dream-seller">by DreamCraft_Studio</div>
                    </div>
                    <div class="dream-price">₹599.99</div>
                </div>
                <div class="dream-description">
                    Work with our expert dream architects to create a completely personalized dream experience tailored to your deepest desires and fantasies.
                </div>
                <div class="dream-tags">
                    <span class="tag">Custom</span>
                    <span class="tag">Personalized</span>
                    <span class="tag">Exclusive</span>
                    <span class="tag">Premium</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 5.0/5 (1,234 reviews)</span>
                    <span>🎨 One-of-a-kind</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Dream Consultation')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Dream Consultation</div>
                        <div class="dream-seller">by DreamTherapist_Pro</div>
                    </div>
                    <div class="dream-price">₹299.99</div>
                </div>
                <div class="dream-description">
                    One-on-one consultation with a certified dream therapist to analyze your subconscious and create healing dream experiences.
                </div>
                <div class="dream-tags">
                    <span class="tag">Consultation</span>
                    <span class="tag">Therapy</span>
                    <span class="tag">Healing</span>
                    <span class="tag">Professional</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.9/5 (2,567 reviews)</span>
                    <span>🔄 94% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Group Dream Experience')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Group Dream Experience</div>
                        <div class="dream-seller">by CollectiveDreams_Inc</div>
                    </div>
                    <div class="dream-price">₹399.99</div>
                </div>
                <div class="dream-description">
                    Share a dream experience with friends, family, or strangers. Connect on a deep subconscious level in a shared dream space.
                </div>
                <div class="dream-tags">
                    <span class="tag">Group</span>
                    <span class="tag">Shared</span>
                    <span class="tag">Connection</span>
                    <span class="tag">Social</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.7/5 (3,891 reviews)</span>
                    <span>👥 Multi-player</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
            <div class="dream-card" onclick="showPurchase('Dream Recording Kit')">
                <div class="dream-header">
                    <div>
                        <div class="dream-title">Dream Recording Kit</div>
                        <div class="dream-seller">by DreamTech_Labs</div>
                    </div>
                    <div class="dream-price">₹199.99</div>
                </div>
                <div class="dream-description">
                    Capture and record your own dreams to share with others or relive later. Includes neural recording equipment and dream editing software.
                </div>
                <div class="dream-tags">
                    <span class="tag">Recording</span>
                    <span class="tag">Equipment</span>
                    <span class="tag">Software</span>
                    <span class="tag">DIY</span>
                </div>
                <div class="dream-stats">
                    <span>⭐ 4.6/5 (4,123 reviews)</span>
                    <span>🔄 81% repeat buyers</span>
                </div>
                <button class="buy-button">DOWNLOAD DREAM</button>
            </div>
        `;
    }
    
    // Add glitch effects to new content
    addGlitchEffects();
}

// Show purchase modal
function showPurchase(dreamName) {
    document.getElementById('dream-name').textContent = dreamName;
    document.getElementById('purchaseModal').style.display = 'block';
    startDownload();
}

// Close purchase modal
function closePurchase() {
    document.getElementById('purchaseModal').style.display = 'none';
    document.getElementById('progress-bar').style.width = '0%';
}

// Simulate dream download
function startDownload() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const messages = [
        'Establishing neural connection...',
        'Mapping synaptic pathways...',
        'Injecting dream data...',
        'Synchronizing REM patterns...',
        'Calibrating subconscious receptors...',
        'Initializing dream sequence...',
        'Download complete! Sweet dreams...'
    ];
    
    let progress = 0;
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        
        if (messageIndex < messages.length - 1 && progress > (messageIndex + 1) * 15) {
            messageIndex++;
            progressText.textContent = messages[messageIndex];
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            progressText.textContent = messages[messages.length - 1];
            progressText.style.color = '#00ff00';
            setTimeout(() => {
                closePurchase();
            }, 2000);
        }
    }, 200);
}

// Random glitch effects
function addGlitchEffects() {
    setInterval(() => {
        const cards = document.querySelectorAll('.dream-card');
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        randomCard.style.filter = 'hue-rotate(180deg) saturate(2)';
        setTimeout(() => {
            randomCard.style.filter = '';
        }, 200);
    }, 5000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    updateCounters();
    addGlitchEffects();
    
    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('purchaseModal');
        if (event.target === modal) {
            closePurchase();
        }
    }
});

// Creepy easter egg
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 13) {
        document.body.style.filter = 'invert(1) hue-rotate(180deg)';
        alert('You have been selected for premium nightmare testing. Resistance is futile.');
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        clickCount = 0;
    }
});
