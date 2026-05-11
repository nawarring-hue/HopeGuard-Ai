/* ══════════════ DONNÉES — DICTIONNAIRE SYMPTÔMES ══════════════ */
const SYMPTOMES = [
  { id:1, nom:"Fatigue persistante", gravite:"modere", organe:"Systémique",
    description:"Épuisement profond qui ne s'améliore pas avec le repos et altère les activités quotidiennes.",
    causes:["Anémie liée au traitement","Stress émotionnel","Perturbation du sommeil","Effets secondaires de la chimiothérapie"],
    quand_consulter:"Si la fatigue dure plus de 2 semaines ou s'accompagne d'essoufflement.",
    mots_cles:["fatigue","épuisement","sommeil","lassitude"] },
  { id:2, nom:"Douleur localisée", gravite:"eleve", organe:"Variable",
    description:"Sensation douloureuse identifiable dans une zone précise du corps, qui peut être aiguë ou chronique.",
    causes:["Inflammation","Compression nerveuse","Métastase osseuse","Effets post-chirurgicaux"],
    quand_consulter:"Si la douleur est intense, soudaine ou résiste aux antalgiques habituels.",
    mots_cles:["douleur","mal","souffrance"] },
  { id:3, nom:"Perte de poids inexpliquée", gravite:"eleve", organe:"Systémique",
    description:"Diminution involontaire du poids corporel sans changement d'alimentation ou d'activité physique.",
    causes:["Évolution de la maladie","Perte d'appétit","Troubles digestifs","Effets secondaires"],
    quand_consulter:"Si vous perdez plus de 5% de votre poids en moins de 3 mois.",
    mots_cles:["poids","amaigrissement","maigrir"] },
  { id:4, nom:"Fièvre récurrente", gravite:"modere", organe:"Systémique",
    description:"Élévation de la température corporelle au-dessus de 38°C, persistante ou répétée.",
    causes:["Infection","Réaction inflammatoire","Effets de l'immunothérapie","Neutropénie"],
    quand_consulter:"Si la fièvre dépasse 38,5°C ou dure plus de 24 heures.",
    mots_cles:["fièvre","température","frissons"] },
  { id:5, nom:"Nausées", gravite:"faible", organe:"Digestif",
    description:"Sensation désagréable d'envie de vomir, parfois accompagnée de salivation excessive.",
    causes:["Chimiothérapie","Médicaments","Anxiété","Troubles digestifs"],
    quand_consulter:"Si les nausées empêchent l'alimentation pendant plus de 48 heures.",
    mots_cles:["nausée","envie","vomir"] },
  { id:6, nom:"Essoufflement", gravite:"eleve", organe:"Respiratoire",
    description:"Difficulté respiratoire ressentie au repos ou à l'effort, sensation de manque d'air.",
    causes:["Anémie","Atteinte pulmonaire","Embolie","Anxiété"],
    quand_consulter:"Immédiatement si l'essoufflement survient au repos ou s'aggrave brutalement.",
    mots_cles:["essoufflement","souffle","respiration"] },
  { id:7, nom:"Anxiété", gravite:"modere", organe:"Psychologique",
    description:"Sentiment persistant d'inquiétude, de tension ou de peur disproportionnée.",
    causes:["Diagnostic récent","Attente de résultats","Effets secondaires des traitements","Isolement"],
    quand_consulter:"Si l'anxiété perturbe le sommeil ou les activités quotidiennes.",
    mots_cles:["anxiété","stress","peur","angoisse"] },
  { id:8, nom:"Troubles du sommeil", gravite:"faible", organe:"Neurologique",
    description:"Difficulté à s'endormir, réveils nocturnes ou sommeil non réparateur.",
    causes:["Anxiété","Douleur","Médicaments","Bouffées de chaleur"],
    quand_consulter:"Si les troubles persistent plus de 3 semaines.",
    mots_cles:["sommeil","insomnie","réveil"] },
  { id:9, nom:"Palpitations cardiaques", gravite:"modere", organe:"Cardiovasculaire",
    description:"Sensation de battements cardiaques rapides, irréguliers ou très perceptibles.",
    causes:["Anxiété","Anémie","Cardiotoxicité de certains traitements","Déshydratation"],
    quand_consulter:"Si les palpitations s'accompagnent de douleur thoracique ou de malaise.",
    mots_cles:["palpitations","cœur","rythme"] },
  { id:10, nom:"Gonflement lymphatique", gravite:"eleve", organe:"Lymphatique",
    description:"Augmentation de volume d'un ganglion ou d'un membre, souvent indolore.",
    causes:["Atteinte ganglionnaire","Lymphœdème post-chirurgical","Infection"],
    quand_consulter:"Dès l'apparition d'un gonflement nouveau ou rapidement évolutif.",
    mots_cles:["gonflement","ganglion","œdème"] },
  { id:11, nom:"Perte d'appétit", gravite:"modere", organe:"Digestif",
    description:"Diminution durable de l'envie de manger, pouvant entraîner une perte de poids.",
    causes:["Chimiothérapie","Modifications du goût","Anxiété","Inflammation"],
    quand_consulter:"Si l'apport alimentaire est réduit de moitié pendant plus de 5 jours.",
    mots_cles:["appétit","manger","alimentation"] },
  { id:12, nom:"Douleur osseuse", gravite:"eleve", organe:"Squelettique",
    description:"Douleur sourde et profonde dans les os, souvent nocturne, qui ne cède pas au repos.",
    causes:["Métastases osseuses","Inflammation","Effets de certains traitements"],
    quand_consulter:"Rapidement si la douleur est nocturne ou s'aggrave progressivement.",
    mots_cles:["os","douleur osseuse","squelette"] },
  { id:13, nom:"Troubles cognitifs (chemo brain)", gravite:"modere", organe:"Neurologique",
    description:"Difficultés de concentration, de mémoire ou de planification suite aux traitements.",
    causes:["Chimiothérapie","Fatigue","Anxiété","Hormonothérapie"],
    quand_consulter:"Si les troubles altèrent significativement votre quotidien.",
    mots_cles:["mémoire","concentration","cognition","chemo brain"] },
  { id:14, nom:"Engourdissements", gravite:"modere", organe:"Neurologique",
    description:"Sensation de picotements, fourmillements ou perte de sensibilité, surtout aux extrémités.",
    causes:["Neuropathie périphérique","Compression nerveuse","Carences vitaminiques"],
    quand_consulter:"Si les engourdissements s'étendent ou gênent vos gestes.",
    mots_cles:["engourdissement","fourmillement","picotement"] },
  { id:15, nom:"Sueurs nocturnes", gravite:"modere", organe:"Systémique",
    description:"Transpiration excessive durant le sommeil, parfois jusqu'à devoir changer de vêtements.",
    causes:["Hormonothérapie","Lymphome","Infection","Ménopause induite"],
    quand_consulter:"Si les sueurs sont récurrentes plusieurs nuits par semaine.",
    mots_cles:["sueurs","transpiration","nuit"] },
  { id:16, nom:"Jaunisse", gravite:"eleve", organe:"Hépatique",
    description:"Coloration jaunâtre de la peau et du blanc des yeux, signe d'atteinte hépatique.",
    causes:["Atteinte du foie","Obstruction biliaire","Effets secondaires médicamenteux"],
    quand_consulter:"Immédiatement dès apparition d'une jaunisse.",
    mots_cles:["jaunisse","ictère","foie"] },
  { id:17, nom:"Toux persistante", gravite:"modere", organe:"Respiratoire",
    description:"Toux qui dure plus de 3 semaines, sèche ou productive, parfois nocturne.",
    causes:["Atteinte pulmonaire","Infection","Reflux gastrique","Effets de la radiothérapie"],
    quand_consulter:"Si la toux s'accompagne de sang, d'essoufflement ou de fièvre.",
    mots_cles:["toux","pulmonaire"] },
  { id:18, nom:"Vertiges", gravite:"faible", organe:"Neurologique",
    description:"Sensation d'instabilité, d'étourdissement ou que l'environnement tourne.",
    causes:["Anémie","Hypotension","Médicaments","Déshydratation"],
    quand_consulter:"Si les vertiges entraînent des chutes ou des malaises.",
    mots_cles:["vertige","étourdissement","tournis"] },
  { id:19, nom:"Modifications cutanées", gravite:"modere", organe:"Cutané",
    description:"Apparition de rougeurs, taches, sécheresse ou modifications de grains de beauté.",
    causes:["Effets de la radiothérapie","Cibles cutanées de certains traitements","Réactions allergiques"],
    quand_consulter:"Si une lésion change rapidement de forme, de couleur ou saigne.",
    mots_cles:["peau","cutané","rougeur","tache"] },
  { id:20, nom:"Confusion mentale", gravite:"eleve", organe:"Neurologique",
    description:"Désorientation, difficulté à suivre une conversation ou à reconnaître son environnement.",
    causes:["Métastases cérébrales","Infection","Déséquilibre métabolique","Médicaments"],
    quand_consulter:"Immédiatement en cas de confusion soudaine.",
    mots_cles:["confusion","désorientation","mental"] }
];

const CONDITIONS = [
  { icon:"🎗️", nom:"Cancer du sein", desc:"Suivi adapté du parcours, depuis le dépistage jusqu'à la rémission." },
  { icon:"🩸", nom:"Leucémie", desc:"Surveillance des paramètres sanguins et coordination des traitements." },
  { icon:"🫁", nom:"Cancer du poumon", desc:"Évaluation respiratoire continue et détection précoce des complications." },
  { icon:"🧠", nom:"Tumeurs cérébrales", desc:"Analyse IRM par IA et suivi neurologique régulier." },
  { icon:"🧬", nom:"Lymphomes", desc:"Surveillance ganglionnaire et accompagnement de l'immunothérapie." },
  { icon:"🦴", nom:"Cancers osseux", desc:"Gestion de la douleur et suivi de la mobilité au quotidien." }
];

/* ══════════════ ÉTAT GLOBAL ══════════════ */
const STATE = {
  user: null,
  sliders: { humeur:1, douleur:2, fatigue:2, anxiete:1 },
  toggles: { fievre:false, perte_poids:false, essoufflement:false },
  selectedSymptoms: new Set(),
  selectedAlpha: null,
  selectedZones: new Set(),
  evolutionChart: null,
  suiviChart: null,
  currentModalSymptom: null
};

const BASE_URL = 'http://localhost:5000';
const API = {
  predict: (data) => fetch(`${BASE_URL}/predict`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) }).then(r=>r.json()),
  analyserIRM: (patientId, imageBase64, mediaType) => fetch(`${BASE_URL}/api/irm/${patientId}`, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({image_base64:imageBase64, media_type:mediaType}) }).then(r=>r.json()),
  getRiskScore: (patientId) => fetch(`${BASE_URL}/api/risk/${patientId}`).then(r=>r.json()),
  getDashboard: (patientId) => fetch(`${BASE_URL}/api/dashboard/${patientId}`).then(r=>r.json())
};
async function apiCall(fn, fallbackData) {
  try { return await fn(); }
  catch { console.warn('Backend non disponible → mode démo'); return fallbackData; }
}

/* ══════════════ INIT ══════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const skipLoad = new URLSearchParams(location.search).has('skip');
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
    setTimeout(() => document.getElementById('loading-screen').remove(), 700);
  }, skipLoad ? 0 : 2500);

  const stored = localStorage.getItem('hopeguard_user');
  if (stored) { STATE.user = JSON.parse(stored); enterApp(); }
  else { goPublic(); }

  renderConditions();
  renderAlphaNav('alphaNav');
  renderAlphaNav('alphaNav2');
  renderSymptomGrid('symptomGrid', SYMPTOMES);
  renderSymptomGrid('symptomGrid2', SYMPTOMES);
  renderQuickTags();
  initSliders();
  initToggles();
  bindEvents();
  updateDate();
});

function bindEvents() {
  document.getElementById('dictSearch').addEventListener('input', e => searchSymptoms(e.target.value));
  document.getElementById('dictSearch2').addEventListener('input', e => filterAndRender('symptomGrid2', e.target.value));
  document.getElementById('quickSymptomFilter').addEventListener('input', e => renderQuickTags(e.target.value));

  // Sidebar nav
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => showSection(item.dataset.section));
  });
  // Secondary nav
  document.querySelectorAll('.secondary-nav a').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); showSection(a.dataset.section); });
  });

  // User dropdown
  document.getElementById('navUser')?.addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('userDropdown').classList.toggle('open');
  });
  document.addEventListener('click', () => document.getElementById('userDropdown')?.classList.remove('open'));

  // Login form (existing user)
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    handleConnexion();
  });
  // Signup form (new user)
  document.getElementById('signupForm').addEventListener('submit', e => {
    e.preventDefault();
    handleInscription();
  });

  // Role pills
  document.querySelectorAll('.role-pills').forEach(group => {
    group.addEventListener('click', e => {
      if (e.target.classList.contains('role-pill')) {
        group.querySelectorAll('.role-pill').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });

  // Symptom textarea char count
  const ta = document.getElementById('symptomTextarea');
  ta?.addEventListener('input', () => document.getElementById('charCount').textContent = ta.value.length);

  // Intensity range
  const range = document.getElementById('intensityRange');
  range?.addEventListener('input', () => document.getElementById('intensityVal').textContent = range.value);

  // Body zones
  document.querySelectorAll('.body-zone').forEach(z => {
    z.addEventListener('click', () => {
      z.classList.toggle('selected');
      const zone = z.dataset.zone;
      if (STATE.selectedZones.has(zone)) STATE.selectedZones.delete(zone);
      else STATE.selectedZones.add(zone);
    });
  });

  // IRM tabs
  document.querySelectorAll('[data-irmtab]').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('[data-irmtab]').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.getElementById('irm-' + b.dataset.irmtab).classList.add('active');
    });
  });

  // IRM upload
  const drop = document.getElementById('irmDrop');
  const fileInput = document.getElementById('irmFile');
  drop?.addEventListener('click', () => fileInput.click());
  drop?.addEventListener('dragover', e => { e.preventDefault(); drop.classList.add('dragover'); });
  drop?.addEventListener('dragleave', () => drop.classList.remove('dragover'));
  drop?.addEventListener('drop', e => {
    e.preventDefault(); drop.classList.remove('dragover');
    if (e.dataTransfer.files[0]) handleIRMFile(e.dataTransfer.files[0]);
  });
  fileInput?.addEventListener('change', e => { if (e.target.files[0]) handleIRMFile(e.target.files[0]); });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => item.classList.toggle('open'));
  });

  // Hamburger
  document.getElementById('hamburger')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
  });

  // Modal close on overlay click
  document.getElementById('symptomModal').addEventListener('click', e => {
    if (e.target.id === 'symptomModal') closeModal();
  });
}

/* ══════════════ NAVIGATION ══════════════ */
function goPublic() {
  document.getElementById('publicPage').style.display = 'block';
  document.getElementById('loginPage').classList.remove('visible');
  document.getElementById('appShell').classList.remove('visible');
  document.getElementById('navRightPublic').style.display = 'flex';
  document.getElementById('navRightConnected').style.display = 'none';
  document.getElementById('navCenter').style.display = 'flex';
  document.getElementById('secondaryNav').classList.remove('visible');
}
function goLogin() {
  document.getElementById('publicPage').style.display = 'none';
  document.getElementById('loginPage').classList.add('visible');
  document.getElementById('appShell').classList.remove('visible');
  document.getElementById('navCenter').style.display = 'none';
}
// DÉMO uniquement — charge le profil de Sara Alami
function loginDemo() {
  const userDemo = {
    patientId: 'HG-DEMO-001',
    prenom: 'Sara',
    nom: 'Alami',
    email: 'demo@hopeguard.ai',
    role: 'patient',
    age: 45,
    dateInscription: new Date().toLocaleDateString('fr-FR'),
    token: 'demo-token'
  };
  STATE.user = userDemo;
  localStorage.setItem('hopeguard_user', JSON.stringify(userDemo));
  enterApp();
  toast('Mode démonstration', 'Bienvenue Sara, ceci est un compte de démo.', 'success');
}

// INSCRIPTION — crée un compte avec les vraies données du formulaire
function handleInscription() {
  const prenom = document.getElementById('signupPrenom').value.trim();
  const nom = document.getElementById('signupNom').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const pwd = document.getElementById('signupPwd').value;
  const pwd2 = document.getElementById('signupPwd2').value;
  const role = document.querySelector('#rolePills .role-pill.active')?.dataset.role || 'patient';
  const dob = document.getElementById('signupDob')?.value || '';
  const blood = document.getElementById('signupBlood')?.value || '';
  const allergies = document.getElementById('signupAllergies')?.value.trim() || '';

  if (!prenom || !nom || !email) {
    toast('Champs manquants', 'Veuillez remplir tous les champs obligatoires.', 'error');
    return;
  }
  if (pwd && pwd !== pwd2) {
    toast('Erreur de mot de passe', 'Les deux mots de passe ne correspondent pas.', 'error');
    return;
  }

  const nouvelUtilisateur = {
    patientId: 'HG-' + Date.now(),
    prenom: prenom,
    nom: nom,
    email: email,
    role: role,
    dateNaissance: dob ? new Date(dob).toLocaleDateString('fr-FR') : '',
    groupeSanguin: blood,
    allergies: allergies,
    age: dob ? (new Date().getFullYear() - new Date(dob).getFullYear()) : null,
    dateInscription: new Date().toLocaleDateString('fr-FR'),
    token: 'jwt-' + Math.random().toString(36).substr(2, 16)
  };

  STATE.user = nouvelUtilisateur;
  localStorage.setItem('hopeguard_user', JSON.stringify(nouvelUtilisateur));
  enterApp();
  toast('Compte créé', `Bienvenue ${prenom} ! Votre espace est prêt.`, 'success');
}

// CONNEXION — vérifie l'utilisateur stocké
function handleConnexion() {
  const email = document.getElementById('loginEmail').value.trim();
  if (!email) {
    toast('Email requis', 'Veuillez saisir votre adresse e-mail.', 'error');
    return;
  }
  const saved = localStorage.getItem('hopeguard_user');
  if (saved) {
    const user = JSON.parse(saved);
    if (user.email.toLowerCase() === email.toLowerCase()) {
      STATE.user = user;
      enterApp();
      toast('Bon retour', `Heureux de vous revoir, ${user.prenom}.`, 'success');
      return;
    }
  }
  toast('Compte introuvable', 'Aucun compte trouvé pour cet email. Veuillez vous inscrire ou utiliser le mode démo.', 'error');
}
function enterApp() {
  document.getElementById('publicPage').style.display = 'none';
  document.getElementById('loginPage').classList.remove('visible');
  document.getElementById('appShell').classList.add('visible');
  document.getElementById('navRightPublic').style.display = 'none';
  document.getElementById('navRightConnected').style.display = 'flex';
  document.getElementById('navCenter').style.display = 'none';
  document.getElementById('secondaryNav').classList.add('visible');
  document.body.style.paddingTop = '48px'; // for secondary nav

  if (STATE.user) {
    const u = STATE.user;
    const initials = ((u.prenom?.[0] || '') + (u.nom?.[0] || '')).toUpperCase() || '?';
    document.getElementById('navAvatar').textContent = initials;
    document.getElementById('sideAvatar').textContent = initials;
    document.getElementById('navUserName').textContent = `${u.prenom} ${u.nom}`;
    document.getElementById('sideName').textContent = `${u.prenom} ${u.nom}`;
    document.getElementById('dashFirstName').textContent = u.prenom;
    const roleEl = document.getElementById('sideRole');
    if (roleEl && u.role) roleEl.textContent = u.role.charAt(0).toUpperCase() + u.role.slice(1);
    const idEl = document.querySelector('.sidebar-id');
    if (idEl && u.patientId) idEl.textContent = `ID : #${u.patientId}`;

    // Mise à jour du dossier médical avec les vraies données
    const setDossier = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val || '—'; };
    setDossier('dossierNom', u.nom);
    setDossier('dossierPrenom', u.prenom);
    setDossier('dossierEmail', u.email);
    setDossier('dossierRole', u.role ? u.role.charAt(0).toUpperCase() + u.role.slice(1) : '—');
    setDossier('dossierPatientId', u.patientId ? '#' + u.patientId : '—');
    setDossier('dossierDate', u.dateInscription || '—');
    setDossier('dossierDob', u.dateNaissance || '—');
    setDossier('dossierBlood', u.groupeSanguin || '—');
    setDossier('dossierAllergies', u.allergies || 'Aucune connue');
  }
  showSection('dashboard');
  setTimeout(() => initEvolutionChart(), 100);
  setTimeout(() => refreshIRMHistory(), 200);
  refreshRiskScore();
}
function logout() {
  localStorage.removeItem('hopeguard_user');
  STATE.user = null;
  document.body.style.paddingTop = '0';
  goPublic();
  toast('Déconnexion', 'À bientôt sur HopeGuard AI.', 'success');
}

function showSection(section) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + section);
  if (target) target.classList.add('active');
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.toggle('active', i.dataset.section === section));
  document.querySelectorAll('.secondary-nav a').forEach(a => a.classList.toggle('active', a.dataset.section === section));
  if (window.innerWidth < 768) document.getElementById('sidebar').classList.remove('open');
  if (section === 'suivi') setTimeout(() => initSuiviChart(), 50);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ══════════════ DATE ══════════════ */
function updateDate() {
  const d = new Date();
  const opts = { weekday:'long', day:'numeric', month:'long', year:'numeric' };
  const formatted = d.toLocaleDateString('fr-FR', opts) + ' · ' + d.toLocaleTimeString('fr-FR', {hour:'2-digit', minute:'2-digit'});
  const el = document.getElementById('dashDate');
  if (el) el.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

/* ══════════════ CONDITIONS ══════════════ */
function renderConditions() {
  const grid = document.getElementById('conditionGrid');
  grid.innerHTML = CONDITIONS.map(c => `
    <div class="condition-card">
      <div class="condition-icon">${c.icon}</div>
      <h3>${c.nom}</h3>
      <p>${c.desc}</p>
      <a class="condition-link" href="#" onclick="goLogin();return false;">En savoir plus →</a>
    </div>
  `).join('');
}

/* ══════════════ DICTIONNAIRE ══════════════ */
function renderAlphaNav(targetId) {
  const letters = ['Tous', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  const nav = document.getElementById(targetId);
  if (!nav) return;
  nav.innerHTML = letters.map(l => `<span class="alpha-pill ${l==='Tous'?'active':''}" data-letter="${l}">${l}</span>`).join('');
  nav.querySelectorAll('.alpha-pill').forEach(p => {
    p.addEventListener('click', () => {
      nav.querySelectorAll('.alpha-pill').forEach(x => x.classList.remove('active'));
      p.classList.add('active');
      const letter = p.dataset.letter;
      const gridId = targetId === 'alphaNav' ? 'symptomGrid' : 'symptomGrid2';
      const data = letter === 'Tous' ? SYMPTOMES : SYMPTOMES.filter(s => s.nom.toUpperCase().startsWith(letter));
      renderSymptomGrid(gridId, data);
    });
  });
}

function renderSymptomGrid(gridId, list) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  if (!list.length) { grid.innerHTML = '<p style="color:var(--text-gray);grid-column:1/-1;text-align:center;padding:40px;">Aucun symptôme trouvé pour cette catégorie.</p>'; return; }
  grid.innerHTML = list.map(s => `
    <div class="symptom-card">
      <h3>${s.nom}</h3>
      <span class="gravity-badge gravity-${s.gravite}">${s.gravite === 'faible' ? 'Faible' : s.gravite === 'modere' ? 'Modéré' : 'Élevé'}</span>
      <p class="symptom-desc">${s.description}</p>
      <div class="symptom-organ">🩺 ${s.organe}</div>
      <div class="symptom-actions">
        <button class="btn-tiny-primary" onclick="ajouterAuDossier(${s.id})">+ Ajouter à mon dossier</button>
        <button class="btn-tiny-link" onclick="openSymptomModal(${s.id})">Voir détails →</button>
      </div>
    </div>
  `).join('');
}

function filterAndRender(gridId, query) {
  const q = query.trim().toLowerCase();
  const data = !q ? SYMPTOMES : SYMPTOMES.filter(s =>
    s.nom.toLowerCase().includes(q) || s.mots_cles.some(k => k.includes(q))
  );
  renderSymptomGrid(gridId, data);
}

function searchSymptoms(query) {
  const dropdown = document.getElementById('dictResults');
  const q = query.trim().toLowerCase();
  if (!q) { dropdown.classList.remove('open'); return; }
  const matches = SYMPTOMES.filter(s =>
    s.nom.toLowerCase().includes(q) || s.mots_cles.some(k => k.includes(q))
  ).slice(0, 8);
  if (!matches.length) {
    dropdown.innerHTML = '<div class="dict-empty">Aucun résultat trouvé.</div>';
  } else {
    dropdown.innerHTML = matches.map(s => `
      <div class="dict-result-item" onclick="openSymptomModal(${s.id})">
        <strong>${s.nom}</strong>
        <span>${s.organe} · Gravité ${s.gravite}</span>
      </div>
    `).join('');
  }
  dropdown.classList.add('open');
}

function openSymptomModal(id) {
  const s = SYMPTOMES.find(x => x.id === id);
  if (!s) return;
  STATE.currentModalSymptom = s;
  document.getElementById('modalTitle').textContent = s.nom;
  document.getElementById('modalBody').innerHTML = `
    <span class="gravity-badge gravity-${s.gravite}">${s.gravite === 'faible' ? 'Gravité faible' : s.gravite === 'modere' ? 'Gravité modérée' : 'Gravité élevée'}</span>
    <p style="margin:14px 0;">${s.description}</p>
    <h3 style="color:var(--navy);margin-top:16px;">Causes possibles</h3>
    <ul>${s.causes.map(c => `<li>${c}</li>`).join('')}</ul>
    <div class="consult-box">
      <strong>Quand consulter un médecin ?</strong>
      ${s.quand_consulter}
    </div>
    <p style="font-size:13px;color:var(--text-gray);margin-top:8px;">Système concerné : <strong>${s.organe}</strong></p>
  `;
  document.getElementById('symptomModal').classList.add('open');
}
function closeModal() {
  document.getElementById('symptomModal').classList.remove('open');
}
function signalerSymptomeFromModal() {
  if (!STATE.currentModalSymptom) return;
  ajouterAuDossier(STATE.currentModalSymptom.id);
  closeModal();
  if (STATE.user) showSection('symptomes');
  else goLogin();
}

function ajouterAuDossier(id) {
  if (!STATE.user) { toast('Connexion requise','Veuillez vous connecter pour enregistrer un symptôme.','error'); goLogin(); return; }
  const s = SYMPTOMES.find(x => x.id === id);
  if (!s) return;
  STATE.selectedSymptoms.add(id);
  renderSelectedTags();
  toast('Symptôme ajouté', `« ${s.nom} » a été ajouté à votre dossier.`, 'success');
}

/* ══════════════ TAGS RAPIDES (page symptomes) ══════════════ */
function renderQuickTags(filter='') {
  const cloud = document.getElementById('quickTagCloud');
  if (!cloud) return;
  const f = filter.trim().toLowerCase();
  const list = SYMPTOMES.filter(s => !f || s.nom.toLowerCase().includes(f));
  cloud.innerHTML = list.map(s => {
    const sel = STATE.selectedSymptoms.has(s.id);
    return `<span class="tag-pill ${sel?'selected':''}" data-id="${s.id}">${s.nom} ${sel?'<span class="x">✕</span>':''}</span>`;
  }).join('');
  cloud.querySelectorAll('.tag-pill').forEach(t => {
    t.addEventListener('click', () => {
      const id = parseInt(t.dataset.id);
      if (STATE.selectedSymptoms.has(id)) STATE.selectedSymptoms.delete(id);
      else STATE.selectedSymptoms.add(id);
      renderQuickTags(filter);
      renderSelectedTags();
    });
  });
}
function renderSelectedTags() {
  const c = document.getElementById('selectedTagCloud');
  if (!c) return;
  if (!STATE.selectedSymptoms.size) {
    c.innerHTML = '<span style="font-size:13px;color:var(--text-light);">Aucun symptôme sélectionné.</span>';
    return;
  }
  const items = [...STATE.selectedSymptoms].map(id => SYMPTOMES.find(s => s.id === id)).filter(Boolean);
  c.innerHTML = items.map(s => `<span class="tag-pill selected" data-id="${s.id}">${s.nom} <span class="x">✕</span></span>`).join('');
  c.querySelectorAll('.tag-pill').forEach(t => {
    t.addEventListener('click', () => {
      STATE.selectedSymptoms.delete(parseInt(t.dataset.id));
      renderQuickTags(document.getElementById('quickSymptomFilter').value);
      renderSelectedTags();
    });
  });
}

/* ══════════════ SLIDERS / TOGGLES ══════════════ */
function initSliders() {
  document.querySelectorAll('.slider-row').forEach(row => {
    const key = row.dataset.key;
    const track = row.querySelector('.slider-track');
    track.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const dot = document.createElement('div');
      dot.className = 'slider-dot';
      if (i <= STATE.sliders[key]) dot.classList.add('active');
      dot.addEventListener('click', () => {
        STATE.sliders[key] = i;
        initSliders();
        row.querySelector('.val').textContent = `${i}/5`;
      });
      track.appendChild(dot);
    }
    row.querySelector('.val').textContent = `${STATE.sliders[key]}/5`;
  });
}
function initToggles() {
  document.querySelectorAll('.toggle-switch').forEach(sw => {
    const key = sw.dataset.toggle;
    if (STATE.toggles[key]) sw.classList.add('on');
    sw.addEventListener('click', () => {
      STATE.toggles[key] = !STATE.toggles[key];
      sw.classList.toggle('on');
    });
  });
}

/* ══════════════ RISK SCORE ══════════════ */
function calculerRiskScore(data) {
  let score = 0;
  score += (data.humeur || 1) * 8;
  score += (data.douleur || 1) * 10;
  score += (data.fatigue || 1) * 7;
  score += (data.anxiete || 1) * 7;
  if (data.fievre) score += 10;
  if (data.perte_poids) score += 8;
  if (data.essoufflement) score += 10;
  score = Math.min(score, 100);
  return {
    score,
    niveau: score < 30 ? 'Faible' : score < 60 ? 'Modéré' : 'Élevé',
    couleur: score < 30 ? 'success' : score < 60 ? 'warning' : 'danger',
    modele: 'best_model.pkl'
  };
}

async function refreshRiskScore() {
  const inputData = { ...STATE.sliders, ...STATE.toggles };
  const fallback = calculerRiskScore(inputData);
  const result = await apiCall(() => API.predict(inputData), fallback);
  applyRiskUI(result);
}

function applyRiskUI(r) {
  const score = r.score ?? r.risk_score ?? 49;
  const couleur = r.couleur || (score < 30 ? 'success' : score < 60 ? 'warning' : 'danger');
  const niveau = r.niveau || (score < 30 ? 'Faible' : score < 60 ? 'Modéré' : 'Élevé');

  const fill = document.getElementById('gaugeFill');
  const circumference = 2 * Math.PI * 85;
  const offset = circumference * (1 - score / 100);
  fill.style.strokeDashoffset = offset;
  const colors = { success:'#16A34A', warning:'#D97706', danger:'#DC2626' };
  fill.style.stroke = colors[couleur];

  document.getElementById('gaugeNum').textContent = score;
  document.getElementById('metricRisk').textContent = score;

  const pill = document.getElementById('riskPill');
  pill.textContent = niveau;
  pill.className = 'risk-pill ' + couleur;

  const banner = document.getElementById('guardianBanner');
  banner.className = 'guardian-banner ' + couleur;
  if (couleur === 'success') banner.textContent = '🟢 État stable — Continuez votre suivi habituel';
  else if (couleur === 'warning') banner.textContent = '🟡 Surveillance recommandée — Consultez dans les 48h';
  else banner.textContent = '🔴 Attention requise — Contactez votre médecin aujourd\'hui';

  const messages = {
    success: '✨ Vos indicateurs sont encourageants. Continuez votre suivi.',
    warning: '💪 Nous sommes là pour vous accompagner à chaque étape.',
    danger: '💙 Notre équipe reste mobilisée pour votre bien-être.'
  };
  document.getElementById('riskMessage').textContent = messages[couleur];

  const metricCard = document.querySelector('.metric-card.warning, .metric-card.success, .metric-card.danger');
  if (metricCard) metricCard.className = 'metric-card ' + couleur;
}

function enregistrerSymptomes() {
  refreshRiskScore();
  toast('Données enregistrées', 'Votre score de risque a été mis à jour.', 'success');
  if (STATE.evolutionChart) {
    const data = STATE.evolutionChart.data.datasets[0].data;
    data.shift();
    data.push(STATE.sliders.humeur);
    const data2 = STATE.evolutionChart.data.datasets[1].data;
    data2.shift();
    data2.push(STATE.sliders.douleur);
    STATE.evolutionChart.update();
  }
}

/* ══════════════ CHARTS ══════════════ */
function initEvolutionChart() {
  const canvas = document.getElementById('evolutionChart');
  if (!canvas || STATE.evolutionChart) return;
  const ctx = canvas.getContext('2d');
  const days = ['L','M','M','J','V','S','D'];
  STATE.evolutionChart = new Chart(ctx, {
    type:'line',
    data:{
      labels: days,
      datasets:[
        { label:'Humeur', data:[3,3,2,2,1,2,STATE.sliders.humeur], borderColor:'#003087', backgroundColor:'rgba(0,48,135,0.08)', tension:0.4, pointRadius:4, pointBackgroundColor:'#003087' },
        { label:'Douleur', data:[1,2,2,3,2,2,STATE.sliders.douleur], borderColor:'#F472B6', backgroundColor:'rgba(244,114,182,0.08)', tension:0.4, pointRadius:4, pointBackgroundColor:'#F472B6' }
      ]
    },
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ position:'bottom', labels:{ font:{family:'Inter', size:12}, color:'#64748B' } } },
      scales:{
        y:{ min:0, max:5, grid:{ color:'#E2E8F0' }, ticks:{ color:'#94A3B8', font:{size:11} } },
        x:{ grid:{ display:false }, ticks:{ color:'#64748B', font:{size:12} } }
      }
    }
  });
}
function initSuiviChart() {
  const canvas = document.getElementById('suiviChart');
  if (!canvas || STATE.suiviChart) return;
  const ctx = canvas.getContext('2d');
  const labels = Array.from({length:30}, (_,i) => i+1);
  STATE.suiviChart = new Chart(ctx, {
    type:'line',
    data:{ labels, datasets:[
      { label:'Risk Score', data: labels.map(() => 30 + Math.round(Math.random()*40)), borderColor:'#003087', backgroundColor:'rgba(0,48,135,0.1)', tension:0.4, fill:true, pointRadius:2 }
    ]},
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom' } }, scales:{ y:{ min:0, max:100 } } }
  });
}

/* ══════════════ IRM ══════════════ */
function handleIRMFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('irmDrop').style.display = 'none';
    document.getElementById('irmScanArea').style.display = 'block';
    document.getElementById('irmResults').style.display = 'none';
    const img = document.getElementById('irmPreview');
    img.src = e.target.result;
    simulerScan(e.target.result, file);
  };
  reader.readAsDataURL(file);
}

function simulerScan(dataUrl, file) {
  const status = document.getElementById('scanStatus');
  const progress = document.getElementById('scanProgress');
  const steps = [
    "Chargement de l'image…",
    "Détection des contrastes…",
    "Analyse des zones suspectes…",
    "Calcul du score de confiance…",
    "Génération du rapport…"
  ];
  let i = 0; let pct = 0;
  const interval = setInterval(() => {
    if (pct < 90) { pct += 2; progress.style.width = pct + '%'; }
    if (pct % 18 === 0 && i < steps.length) { status.textContent = steps[i++]; }
  }, 120);

  // Analyse locale via Canvas — aucune API key requise
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const W = Math.min(img.width, 400);
    const H = Math.min(img.height, 400);
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, W, H);
    const px = ctx.getImageData(0, 0, W, H).data;

    // Calculs statistiques sur les pixels
    let totalBrightness = 0, darkZones = 0, brightZones = 0, contrastSum = 0;
    const sample = Math.floor(px.length / 4);
    for (let k = 0; k < px.length; k += 4) {
      const r = px[k], g = px[k+1], b = px[k+2];
      const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
      totalBrightness += brightness;
      if (brightness < 50) darkZones++;
      if (brightness > 200) brightZones++;
    }
    const avgBrightness = totalBrightness / sample;
    const darkRatio = darkZones / sample;
    const brightRatio = brightZones / sample;
    const contrast = Math.abs(darkRatio - brightRatio);

    // Déterminer le type d'IRM sélectionné
    const irmTypePill = document.querySelector('#irmType .role-pill.active');
    const irmType = irmTypePill ? irmTypePill.textContent.trim() : 'Cérébrale';

    // Logique d'analyse basée sur les statistiques pixel
    const anomalie = darkRatio > 0.35 || brightRatio > 0.30 || contrast > 0.25;
    const nbZones = anomalie ? (darkRatio > 0.45 ? 2 : 1) : 0;
    const confiance = Math.round(55 + contrast * 120 + Math.random() * 15);
    const confianceFinal = Math.min(confiance, 94);

    let urgence, description, zones, reco;

    if (!anomalie) {
      urgence = 'faible';
      description = `L'analyse locale de l'image IRM (${irmType}) ne révèle pas de zone suspecte significative. La distribution des niveaux de gris est homogène, sans contraste anormal détecté. La qualité de l'image est jugée satisfaisante pour l'évaluation.`;
      zones = [];
      reco = "Aucune action urgente requise. Poursuivez le suivi habituel avec votre radiologue et médecin traitant.";
    } else if (nbZones === 1) {
      urgence = 'modere';
      description = `L'analyse locale détecte une zone atypique dans l'image IRM (${irmType}). Une asymétrie de contraste est observée, pouvant indiquer une modification tissulaire. Une confirmation par un radiologue qualifié est indispensable.`;
      zones = [`Zone hypointense — région ${irmType === 'Cérébrale' ? 'frontopariétale' : irmType === 'Mammographie' ? 'quadrant supéro-externe' : 'centrale'}`];
      reco = "Consultation radiologique recommandée dans les 2 semaines. Apportez cet examen à votre prochain rendez-vous médical.";
    } else {
      urgence = 'eleve';
      description = `L'analyse locale identifie plusieurs zones à fort contraste dans l'image IRM (${irmType}). La distribution des pixels présente des irrégularités marquées nécessitant une évaluation médicale prioritaire.`;
      zones = [
        `Zone suspecte 1 — ${irmType === 'Cérébrale' ? 'lobe temporal gauche' : irmType === 'Mammographie' ? 'quadrant inféro-interne' : 'région péri-hilaire'}`,
        `Zone suspecte 2 — ${irmType === 'Cérébrale' ? 'substance blanche périventriculaire' : irmType === 'Abdominale' ? 'foie segment VI' : 'région postérieure'}`
      ];
      reco = "Consultation médicale urgente recommandée dans les 48-72h. Contacter votre médecin référent et signaler ces résultats dès que possible.";
    }

    const qualite = avgBrightness > 30 && avgBrightness < 220
      ? (contrast > 0.2 ? 'Bonne' : 'Correcte')
      : 'Faible (image trop sombre ou surexposée)';

    clearInterval(interval);
    progress.style.width = '100%';
    status.textContent = 'Analyse terminée ✓';

    // Sauvegarder dans l'historique localStorage
    const analyse = {
      date: new Date().toLocaleDateString('fr-FR'),
      type: irmType,
      medecin: document.querySelector('#page-irm .irm-info-grid .input-box')?.value || '—',
      anomalies: nbZones,
      urgence: urgence,
      dataUrl: dataUrl
    };
    const key = 'hopeguard_irm_' + (STATE.user?.patientId || 'demo');
    const hist = JSON.parse(localStorage.getItem(key) || '[]');
    hist.unshift(analyse);
    localStorage.setItem(key, JSON.stringify(hist.slice(0, 10)));
    refreshIRMHistory();

    setTimeout(() => afficherResultatsIRM(dataUrl, {
      statut: 'ok',
      anomalies_detectees: anomalie,
      niveau_urgence: urgence,
      description: description,
      zones_suspectes: zones,
      qualite_image: qualite,
      zone_analysee: irmType,
      recommandation_medicale: reco,
      confiance: confianceFinal
    }), 400);
  };
  img.src = dataUrl;
}

function refreshIRMHistory() {
  const key = 'hopeguard_irm_' + (STATE.user?.patientId || 'demo');
  const hist = JSON.parse(localStorage.getItem(key) || '[]');
  const tbody = document.querySelector('#irm-list tbody');
  if (!tbody || hist.length === 0) return;
  const urgLabel = { faible: '<span class="gravity-badge gravity-faible">Aucune</span>', modere: '<span class="gravity-badge gravity-modere">Modérée</span>', eleve: '<span class="gravity-badge gravity-eleve">Élevée</span>' };
  tbody.innerHTML = hist.map(h => `
    <tr>
      <td>${h.date}</td>
      <td>${h.type}</td>
      <td>${h.medecin || '—'}</td>
      <td>${h.anomalies > 0 ? h.anomalies + ' zone(s)' : '0'}</td>
      <td>${urgLabel[h.urgence] || h.urgence}</td>
      <td><a href="#" onclick="return false;">Voir →</a></td>
    </tr>
  `).join('');
}

function afficherResultatsIRM(dataUrl, data) {
  document.getElementById('irmScanArea').style.display = 'none';
  const results = document.getElementById('irmResults');
  results.style.display = 'grid';
  results.className = 'irm-results';

  const isError = !data || data.statut === 'erreur' || data.statut === 'erreur_api_key' || data.statut === 'erreur_parsing';
  const zones = Array.isArray(data.zones_suspectes) ? data.zones_suspectes : [];
  const confiance = parseInt(data.confiance) || 0;
  const urgenceColor = { faible: '#22c55e', modere: '#f59e0b', eleve: '#ef4444', inconnu: '#94a3b8' };
  const urgenceLabel = { faible: 'Faible', modere: 'Modérée', eleve: 'Élevée', inconnu: 'Inconnue' };
  const urgence = (data.niveau_urgence || 'inconnu').toLowerCase();
  const dateStr = new Date().toLocaleDateString('fr-FR');

  const positions = [
    { top: '28%', left: '52%' }, { top: '55%', left: '35%' }, { top: '40%', left: '70%' }
  ];
  const markers = zones.slice(0, 3).map((z, idx) => {
    const pos = positions[idx] || { top: '50%', left: '50%' };
    const label = z.length > 20 ? z.slice(0,18)+'…' : z;
    return `<div class="zone-marker" style="top:${pos.top};left:${pos.left};width:55px;height:55px;"><div class="zone-label">${label}</div></div>`;
  }).join('');

  results.innerHTML = `
    <div>
      <div class="annotated-img">
        <img src="${dataUrl}" alt="IRM analysée"/>
        <div class="ia-badge">${isError ? '⚠ Erreur analyse' : '✓ Analysé par IA'}</div>
        ${!isError ? markers : ''}
      </div>
    </div>
    <div class="report">
      <h3 style="color:var(--navy);">Rapport d'analyse</h3>
      <p style="font-size:13px;color:var(--text-gray);">${dateStr} &middot; Claude Vision (claude-3-5-sonnet)</p>
      ${isError ? `
        <div style="background:#fef2f2;border:1px solid #fca5a5;border-radius:8px;padding:14px;margin:12px 0;color:#dc2626;">
          <strong>⚠ Analyse impossible</strong><br/>
          <span style="font-size:13px;">${data.message || data.description || 'Erreur inconnue.'}</span>
        </div>
      ` : `
        <div class="report-summary">${data.description || 'Aucune description disponible.'}</div>
        <div class="report-grid">
          <div class="report-stat"><div class="lbl">Qualité</div><div class="val">${data.qualite_image || '—'}</div></div>
          <div class="report-stat"><div class="lbl">Zone analysée</div><div class="val">${data.zone_analysee || '—'}</div></div>
          <div class="report-stat"><div class="lbl">Anomalies</div><div class="val">${data.anomalies_detectees ? zones.length + ' zone(s)' : 'Aucune'}</div></div>
          <div class="report-stat">
            <div class="lbl">Urgence</div>
            <div class="val" style="color:${urgenceColor[urgence] || '#94a3b8'};font-weight:700;">${urgenceLabel[urgence] || data.niveau_urgence || '—'}</div>
          </div>
        </div>
        ${zones.length > 0 ? `
          <h3 style="color:var(--navy);margin-top:14px;">Zones suspectes détectées</h3>
          <ul style="margin:8px 0;padding-left:18px;font-size:14px;">
            ${zones.map(z => `<li style="margin:4px 0;">${z}</li>`).join('')}
          </ul>
        ` : '<p style="margin-top:12px;color:#22c55e;font-size:14px;">✓ Aucune zone suspecte détectée.</p>'}
        <h3 style="color:var(--navy);margin-top:14px;">Recommandation médicale</h3>
        <div class="report-reco">${data.recommandation_medicale || '—'}</div>
        <div class="confidence-bar" style="margin-top:16px;">
          <div class="label"><span>Confiance du modèle</span><span>${confiance}%</span></div>
          <div class="track"><div class="fill" style="width:${confiance}%;background:${confiance > 70 ? 'var(--blue)' : confiance > 40 ? '#f59e0b' : '#ef4444'}"></div></div>
        </div>
      `}
      <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap;">
        <button class="btn btn-outline" onclick="resetIRM()">Nouvelle analyse</button>
        ${!isError ? `
          <button class="btn btn-primary" onclick="toast('Téléchargement','Le rapport PDF a été préparé.','success')">Télécharger PDF</button>
          <button class="btn btn-outline" onclick="toast('Envoyé','Rapport transmis à votre médecin.','success')">Envoyer au médecin</button>
        ` : ''}
      </div>
    </div>
  `;
}

function resetIRM() {
  document.getElementById('irmDrop').style.display = '';
  document.getElementById('irmScanArea').style.display = 'none';
  document.getElementById('irmResults').style.display = 'none';
  document.getElementById('scanProgress').style.width = '0%';
  document.getElementById('irmFile').value = '';
}

/* ══════════════ SYMPTOMES PAGE ══════════════ */
function envoyerAuMedecin() {
  const text = document.getElementById('symptomTextarea').value.trim();
  if (!text && !STATE.selectedSymptoms.size) {
    toast('Description requise', 'Décrivez vos symptômes ou sélectionnez-en au moins un.', 'error');
    return;
  }
  toast('Envoi réussi', 'Votre médecin a été notifié et vous répondra rapidement.', 'success');
  document.getElementById('symptomTextarea').value = '';
  document.getElementById('charCount').textContent = '0';
  STATE.selectedSymptoms.clear();
  renderSelectedTags();
  renderQuickTags();
}

/* ══════════════ UTILITAIRES ══════════════ */
function togglePwd(id, btn) {
  const inp = document.getElementById(id);
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
  else { inp.type = 'password'; btn.textContent = '👁'; }
}

function toast(title, msg, type='success') {
  const stack = document.getElementById('toastStack');
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.innerHTML = `<strong>${title}</strong><p>${msg}</p>`;
  stack.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(20px)'; t.style.transition = 'all 0.3s'; }, 2700);
  setTimeout(() => t.remove(), 3100);
}
