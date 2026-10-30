const ICONS = {
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>',
  info:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/></svg>',
  activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 8 4-16 2 8h6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.4 2.4L16 10"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 3l-1.2 4.1a8.4 8.4 0 0 1 1.2 4.4Z"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  chev:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  play:'<svg viewBox="0 0 24 24" fill="#1a0d08" stroke="none"><path d="M8 5v14l11-7-11-7z"/></svg>',
  music:'<svg viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4M21 3v6h-6"/></svg>',
  folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/></svg>'
};

const STAGES = ['Maqueta recibida','Instrumentación en proceso','Mezcla','Mastering','Entrega final'];
const STAGE_SHORT = ['Maqueta','Instrum.','Mezcla','Master','Entrega'];
const WA_NUMBER = '5492644000000';

/* ============================================================
   Datos (en memoria). Cada proyecto tiene clientEmail: el cliente
   solo ve los proyectos cuyo email coincide con el de su cuenta.
   ============================================================ */
let clients = [
  {id:1, name:'Sofía Ramírez', clientEmail:'sofia@demo.com', project:'Bajo Cero', type:'Instrumentación + Mezcla', start:'01/03/26', end:'22/03/26', stage:2, notes:'Referencia: sonido urbano oscuro, base ya grabada.'},
  {id:2, name:'Kevin Torres', clientEmail:'kevin@demo.com', project:'Luces de Neón', type:'Mastering', start:'05/03/26', end:'18/03/26', stage:4, notes:'Master final para distribución digital.'},
  {id:3, name:'Valentina Cruz', clientEmail:'valentina@demo.com', project:'Horizonte', type:'Producción completa', start:'10/03/26', end:'30/03/26', stage:1, notes:'Espera maqueta definitiva del segundo verso.'}
];
let finished = [
  {id:101, artist:'Mauro Díaz', project:'Renacer', date:'15/01/26'},
  {id:102, artist:'Lucía Fernández', project:'Marea Alta', date:'02/02/26'},
  {id:103, artist:'DJ Nato', project:'Pulso', date:'20/02/26'}
];
let nextClientId = 4;

/* ============================================================
   Estado general
   user === undefined -> cargando sesión
   user === null      -> sin sesión (login / registro)
   user = {uid,email,name,role:'client'|'producer'}
   ============================================================ */
let user = undefined;
let state = { screen:'login', authMode:'login', clientView:null, editId:null, formStage:0 };

const DEMO = !(typeof FIREBASE_CONFIG !== 'undefined' && FIREBASE_CONFIG.apiKey);
let fbAuth = null;

const esc = s => String(s ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
function icon(name, color){ return `<span style="display:flex; color:${color||'currentColor'}">${ICONS[name]}</span>`; }

function toast(msg){
  const t = document.getElementById('toast');
  t.innerHTML = icon('check','var(--amber)') + '<span>'+esc(msg)+'</span>';
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> t.classList.remove('show'), 1800);
}

function roleFor(email){
  const admins = (typeof ADMIN_EMAILS !== 'undefined' ? ADMIN_EMAILS : []).map(e=>e.toLowerCase());
  return admins.includes(String(email||'').toLowerCase()) ? 'producer' : 'client';
}

function nav(screen, extra){
  state.screen = screen;
  if(extra) Object.assign(state, extra);
  render();
  const c = document.getElementById('content');
  if(c) c.scrollTop = 0;
}

/* Navegación desde la barra inferior */
function goTab(key){
  if(user && user.role==='producer'){
    if(key==='form'){ openForm(null); return; }
    if(key==='estado'){
      const first = clients[0];
      nav('estado', {clientView: first ? first.id : null, formStage: first ? first.stage : 0});
      return;
    }
  }
  nav(key);
}

/* ============================================================
   Autenticación
   ============================================================ */
function setUserFrom(raw){
  if(!raw){
    user = null;
    state.screen = 'login';
    state.authMode = 'login';
  } else {
    const email = raw.email || '';
    user = {
      uid: raw.uid || email,
      email,
      name: raw.displayName || email.split('@')[0] || 'Usuario',
      role: roleFor(email)
    };
    state.screen = user.role==='producer' ? 'dashboard' : 'home';
    state.clientView = null;
  }
  render();
}

function initAuth(){
  if(DEMO){
    let saved = null;
    try{ saved = JSON.parse(localStorage.getItem('pml_demo_user')); }catch(e){}
    setUserFrom(saved);
  } else {
    firebase.initializeApp(FIREBASE_CONFIG);
    fbAuth = firebase.auth();
    fbAuth.onAuthStateChanged(u => setUserFrom(u));
  }
}

function authMsg(code){
  const m = {
    'auth/invalid-email':'El email no es válido.',
    'auth/user-not-found':'No existe una cuenta con ese email.',
    'auth/wrong-password':'Contraseña incorrecta.',
    'auth/invalid-credential':'Email o contraseña incorrectos.',
    'auth/email-already-in-use':'Ese email ya está registrado. Iniciá sesión.',
    'auth/weak-password':'La contraseña debe tener al menos 6 caracteres.',
    'auth/too-many-requests':'Demasiados intentos. Probá de nuevo en unos minutos.',
    'auth/network-request-failed':'Sin conexión. Revisá tu internet.',
    'auth/missing-password':'Ingresá tu contraseña.'
  };
  return m[code] || 'No se pudo completar la operación. Intentá de nuevo.';
}

function setAuthError(msg){
  const el = document.getElementById('auth-error');
  if(el) el.textContent = msg || '';
}

async function submitAuth(){
  const mode = state.authMode;
  const val = id => (document.getElementById(id)||{}).value || '';
  const email = val('a-email').trim();
  const pass = val('a-pass');
  const name = val('a-name').trim();
  const pass2 = val('a-pass2');
  setAuthError('');

  if(!email || !pass){ setAuthError('Completá tu email y contraseña.'); return; }
  if(mode==='register'){
    if(!name){ setAuthError('Ingresá tu nombre.'); return; }
    if(pass.length < 6){ setAuthError('La contraseña debe tener al menos 6 caracteres.'); return; }
    if(pass !== pass2){ setAuthError('Las contraseñas no coinciden.'); return; }
  }

  const btn = document.getElementById('auth-btn');
  if(btn) btn.disabled = true;
  try{
    if(DEMO){
      if(!/^\S+@\S+\.\S+$/.test(email)){ setAuthError('El email no es válido.'); return; }
      const demoUser = {uid:email.toLowerCase(), email:email.toLowerCase(), displayName: name || email.split('@')[0]};
      try{ localStorage.setItem('pml_demo_user', JSON.stringify(demoUser)); }catch(e){}
      setUserFrom(demoUser);
    } else if(mode==='login'){
      await fbAuth.signInWithEmailAndPassword(email, pass);
    } else {
      const cred = await fbAuth.createUserWithEmailAndPassword(email, pass);
      await cred.user.updateProfile({displayName:name});
      if(user){ user.name = name; render(); }
    }
  }catch(e){
    setAuthError(authMsg(e.code));
  }finally{
    const b = document.getElementById('auth-btn');
    if(b) b.disabled = false;
  }
}

async function resetPassword(){
  const email = (document.getElementById('a-email')||{}).value?.trim();
  if(!email){ setAuthError('Escribí tu email arriba y volvé a tocar “Olvidé mi contraseña”.'); return; }
  if(DEMO){ toast('Modo demo: no se envían emails'); return; }
  try{
    await fbAuth.sendPasswordResetEmail(email);
    setAuthError('');
    toast('Te enviamos un email para restablecerla');
  }catch(e){ setAuthError(authMsg(e.code)); }
}

function logout(){
  if(DEMO){
    try{ localStorage.removeItem('pml_demo_user'); }catch(e){}
    setUserFrom(null);
  } else {
    fbAuth.signOut();
  }
}

function setAuthMode(mode){
  state.authMode = mode;
  render();
}

function screenAuth(){
  const reg = state.authMode==='register';
  return `
  <div class="auth-wrap">
    <div class="logo-mark">${icon('music')}</div>
    <div class="brand-title">Pastrana Music Lab</div>
    <div class="brand-sub">Producciones Pastrana · Estudio</div>

    <div class="auth-tabs">
      <button class="${!reg?'active':''}" onclick="setAuthMode('login')">Iniciar sesión</button>
      <button class="${reg?'active':''}" onclick="setAuthMode('register')">Registrarme</button>
    </div>

    <form onsubmit="event.preventDefault(); submitAuth();" novalidate>
      ${reg ? `<div class="field"><label for="a-name">Nombre</label><input id="a-name" type="text" autocomplete="name" placeholder="Nombre y apellido"></div>` : ''}
      <div class="field"><label for="a-email">Email</label><input id="a-email" type="email" autocomplete="email" inputmode="email" autocapitalize="none" placeholder="tu@email.com"></div>
      <div class="field"><label for="a-pass">Contraseña</label><input id="a-pass" type="password" autocomplete="${reg?'new-password':'current-password'}" placeholder="••••••••"></div>
      ${reg ? `<div class="field"><label for="a-pass2">Repetir contraseña</label><input id="a-pass2" type="password" autocomplete="new-password" placeholder="••••••••"></div>` : ''}
      <div class="auth-error" id="auth-error" role="alert"></div>
      <button class="btn-primary" id="auth-btn" type="submit">${reg ? 'Crear cuenta' : 'Entrar'}</button>
    </form>
    ${!reg ? `<button class="link-btn" type="button" onclick="resetPassword()">Olvidé mi contraseña</button>` : ''}
    ${DEMO ? `<div class="demo-note"><b>Modo demo</b> (sin Firebase). Entrá con <b>admin@demo.com</b> y cualquier clave para ver el panel del productor, o con <b>sofia@demo.com</b> para ver un cliente con proyecto.</div>` : ''}
  </div>`;
}

/* ============================================================
   Componentes
   ============================================================ */
function levelMeter(stageIdx, clientName){
  const color = stageIdx>=4 ? 'var(--amber)' : 'var(--orange)';
  let segs = '';
  for(let i=0;i<5;i++){
    segs += `<div class="seg ${i<=stageIdx?'on':''}" style="${i<=stageIdx?`background:${color}; color:${color};`:''}"></div>`;
  }
  return `
  <div class="meter-card">
    <div class="meter-head">
      <span class="name">${esc(clientName)}</span>
      <span class="rec"><span class="rec-dot"></span>EN VIVO</span>
    </div>
    <div class="segments">${segs}</div>
    <div class="meter-labels">${STAGE_SHORT.map(s=>`<span>${s}</span>`).join('')}</div>
    <div class="current-state">
      <span class="lbl">Estado actual</span>
      <span class="val">${STAGES[stageIdx]}</span>
    </div>
  </div>`;
}

function emptyState(title, text){
  return `<div class="empty-state"><b>${esc(title)}</b>${esc(text)}</div>`;
}

function header(){
  const h = document.getElementById('app-header');
  if(!user){ h.innerHTML = ''; return; }
  const clientTitles = {home:'Pastrana Music Lab', info:'Info y valores', estados:'Estado de producción', finalizados:'Trabajos finalizados', contacto:'Solicitar trabajo'};
  const prodTitles = {dashboard:'Panel del productor', clientes:'Gestionar clientes', estado:'Actualizar estado', finalizadosAdmin:'Trabajos finalizados', form:(state.editId?'Editar proyecto':'Nuevo proyecto'), detail:'Detalle del proyecto'};
  const titles = user.role==='producer' ? prodTitles : clientTitles;

  // Flecha de volver: solo en las pantallas secundarias del productor
  let left = '<div class="slot"></div>';
  if(user.role==='producer' && (state.screen==='detail' || state.screen==='form')){
    left = `<button class="icon-btn" aria-label="Volver" onclick="nav('clientes')">${ICONS.back}</button>`;
  }
  h.innerHTML = `<div class="app-header">
    ${left}
    <span class="header-title">${esc(titles[state.screen]||'')}</span>
    <button class="icon-btn" aria-label="Cerrar sesión" onclick="logout()">${ICONS.logout}</button>
  </div>`;
}

function bottomNav(){
  const slot = document.getElementById('bottom-nav-slot');
  if(!user){ slot.innerHTML=''; return; }
  let items, active;
  if(user.role==='producer'){
    items = [
      {key:'dashboard', icon:'home', label:'Panel'},
      {key:'clientes', icon:'users', label:'Clientes'},
      {key:'estado', icon:'refresh', label:'Estado'},
      {key:'finalizadosAdmin', icon:'folder', label:'Listos'},
      {key:'form', icon:'plus', label:'Nuevo'}
    ];
    active = state.screen==='detail' ? 'clientes' : (state.screen==='form' ? (state.editId ? 'clientes' : 'form') : state.screen);
  } else {
    items = [
      {key:'home', icon:'home', label:'Inicio'},
      {key:'info', icon:'info', label:'Info'},
      {key:'estados', icon:'activity', label:'Estados'},
      {key:'finalizados', icon:'check', label:'Listo'},
      {key:'contacto', icon:'chat', label:'Contacto'}
    ];
    active = state.screen;
  }
  slot.innerHTML = `<nav class="bottom-nav">
    ${items.map(it=>`
      <button class="nav-item ${active===it.key?'active':''}" onclick="goTab('${it.key}')">
        ${icon(it.icon)}
        <span>${it.label}</span>
      </button>`).join('')}
  </nav>`;
}

/* ============================================================
   Pantallas del cliente
   ============================================================ */
function screenClientHome(){
  return `
  <div class="logo-photo"><img src="foto-productor.jpg" alt="Productor"></div>
  <div class="brand-title">Pastrana Music Lab</div>
  <div class="brand-sub">Producciones Pastrana · Estudio</div>
  <div class="waveform">${Array.from({length:26}).map((_,i)=>`<span style="height:${8+Math.round(Math.abs(Math.sin(i*0.7))*24)}px"></span>`).join('')}</div>
  <p class="greeting">Hola, <b>${esc(user.name)}</b></p>

  <div class="nav-card" onclick="nav('info')">
    <div class="ic" style="background:rgba(255,182,72,0.14);">${icon('info','var(--amber)')}</div>
    <div class="txt"><div class="t1">Info y valores</div><div class="t2">Conocé al productor y su trabajo</div></div>
    <span class="chev">${icon('chev')}</span>
  </div>
  <div class="nav-card" onclick="nav('estados')">
    <div class="ic" style="background:rgba(255,122,48,0.14);">${icon('activity','var(--orange)')}</div>
    <div class="txt"><div class="t1">Estados de producción</div><div class="t2">Seguí el avance de tu proyecto</div></div>
    <span class="chev">${icon('chev')}</span>
  </div>
  <div class="nav-card" onclick="nav('finalizados')">
    <div class="ic" style="background:rgba(232,65,42,0.14);">${icon('check','var(--red)')}</div>
    <div class="txt"><div class="t1">Trabajos finalizados</div><div class="t2">Producciones ya entregadas</div></div>
    <span class="chev">${icon('chev')}</span>
  </div>
  <div class="nav-card" onclick="nav('contacto')">
    <div class="ic" style="background:rgba(255,182,72,0.14);">${icon('chat','var(--amber)')}</div>
    <div class="txt"><div class="t1">Solicitar trabajo</div><div class="t2">Contactar por WhatsApp</div></div>
    <span class="chev">${icon('chev')}</span>
  </div>`;
}

function screenInfo(){
  return `
  <div class="photo-box"><img src="foto-estudio.jpg" alt="Productor en el estudio"></div>
  <p class="section-eyebrow">Sobre el estudio</p>
  <p class="body-text"><b>Producciones Pastrana</b> es un estudio dedicado a la instrumentación, mezcla y mastering de proyectos musicales, acompañando a cada artista desde la maqueta inicial hasta la entrega final.</p>
  <p class="body-text">Cada trabajo se realiza a medida, cuidando el sonido propio de cada artista y manteniendo una comunicación clara durante todo el proceso.</p>
  <div class="value-pill-row">
    <span class="value-pill">Instrumentación</span>
    <span class="value-pill">Mezcla</span>
    <span class="value-pill">Mastering</span>
    <span class="value-pill">Acompañamiento</span>
  </div>`;
}

function screenEstados(){
  const mine = clients.filter(c => (c.clientEmail||'').toLowerCase() === user.email.toLowerCase());
  if(!mine.length){
    return emptyState('Todavía no tenés proyectos', 'Cuando el productor cargue un proyecto con tu email (' + user.email + ') vas a poder seguir su avance acá.');
  }
  const c = mine.find(x=>x.id===Number(state.clientView)) || mine[0];
  const picker = mine.length>1 ? `
    <p class="section-eyebrow">Elegí tu proyecto</p>
    <select class="selector" onchange="nav('estados',{clientView:Number(this.value)})">${mine.map(cc=>`<option value="${cc.id}" ${cc.id===c.id?'selected':''}>${esc(cc.project)}</option>`).join('')}</select>` : `<p class="section-eyebrow">Tu proyecto</p>`;
  return `
  ${picker}
  ${levelMeter(c.stage, c.project)}
  <p class="body-text" style="margin-top:14px;">Fecha de inicio: <b>${esc(c.start)}</b> · Entrega estimada: <b>${esc(c.end)}</b></p>`;
}

function screenFinalizados(){
  if(!finished.length) return emptyState('Sin trabajos finalizados', 'Cuando se entreguen producciones van a aparecer acá.');
  return finished.map(f=>`
  <div class="card finished-card">
    <div class="finished-ic">${icon('music')}</div>
    <div class="finished-info"><div class="artist">${esc(f.artist)}</div><div class="proj">${esc(f.project)}</div></div>
    <span class="badge-done">Completado</span>
  </div>`).join('');
}

function screenContacto(){
  return `
  <div class="wa-box">
    <div class="wa-icon-wrap">${icon('chat','#1a0d08')}</div>
    <div class="wa-title">Solicitar trabajo de instrumentación</div>
    <div class="wa-sub">Contanos tu idea y el productor te responde a la brevedad por WhatsApp.</div>
    <button class="btn-primary" onclick="openWa()">${icon('chat')} Escribir por WhatsApp</button>
  </div>`;
}

function openWa(){
  const msg = encodeURIComponent('Hola! Quiero consultar por un trabajo de instrumentación.');
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

/* ============================================================
   Pantallas del productor
   ============================================================ */
function screenDashboard(){
  const pendientes = clients.filter(c=>c.stage<4).length;
  return `
  <p class="section-eyebrow">Producciones Pastrana · ${esc(user.name)}</p>
  <div class="stat-grid">
    <div class="stat-card"><div class="num">${clients.length}</div><div class="lbl">Clientes registrados</div></div>
    <div class="stat-card"><div class="num">${pendientes}</div><div class="lbl">Producciones en proceso</div></div>
    <div class="stat-card"><div class="num">${finished.length}</div><div class="lbl">Trabajos finalizados</div></div>
    <div class="stat-card"><div class="num">${pendientes}</div><div class="lbl">Proyectos pendientes</div></div>
  </div>
  <p class="section-eyebrow">Accesos rápidos</p>
  <div class="quick-grid">
    <div class="quick-card" onclick="goTab('clientes')"><div class="ic">${icon('users')}</div><div class="t">Gestionar clientes</div></div>
    <div class="quick-card" onclick="goTab('estado')"><div class="ic">${icon('refresh')}</div><div class="t">Actualizar estado</div></div>
    <div class="quick-card" onclick="goTab('finalizadosAdmin')"><div class="ic">${icon('folder')}</div><div class="t">Trabajos finalizados</div></div>
    <div class="quick-card" onclick="goTab('form')"><div class="ic">${icon('plus')}</div><div class="t">Nuevo proyecto</div></div>
  </div>`;
}

function screenClientesAdmin(){
  const rows = clients.map(c=>`
  <div class="card">
    <div class="card-row" style="margin-bottom:8px;">
      <div style="min-width:0;">
        <div style="font-weight:700; font-size:13.5px;">${esc(c.name)}</div>
        <div style="font-size:12px; color:var(--text-muted);">${esc(c.project)}</div>
      </div>
      <span class="badge-done" style="background:rgba(255,122,48,0.14); color:var(--orange);">${STAGE_SHORT[c.stage]}</span>
    </div>
    <div class="btn-ghost-row">
      <button class="btn-ghost" onclick="nav('detail',{editId:${c.id}})">${icon('eye')} Ver</button>
      <button class="btn-ghost" onclick="openForm(${c.id})">${icon('edit')} Editar</button>
      <button class="btn-ghost danger" onclick="deleteClient(${c.id})">${icon('trash')} Eliminar</button>
    </div>
  </div>`).join('');
  return (rows || emptyState('Sin clientes', 'Agregá tu primer proyecto para empezar.')) + `<div class="empty-add" onclick="openForm(null)">${icon('plus')} Agregar cliente</div>`;
}

function screenDetail(){
  const c = clients.find(x=>x.id===state.editId);
  if(!c) return `<p class="body-text">Proyecto no encontrado.</p>`;
  return `
  ${levelMeter(c.stage, c.project)}
  <div class="card">
    <div class="body-text" style="margin-bottom:6px;"><b>Cliente:</b> ${esc(c.name)}</div>
    <div class="body-text" style="margin-bottom:6px;"><b>Email:</b> ${esc(c.clientEmail||'—')}</div>
    <div class="body-text" style="margin-bottom:6px;"><b>Tipo de trabajo:</b> ${esc(c.type)}</div>
    <div class="body-text" style="margin-bottom:6px;"><b>Inicio:</b> ${esc(c.start)} &nbsp;·&nbsp; <b>Entrega:</b> ${esc(c.end)}</div>
    <div class="body-text" style="margin-bottom:0;"><b>Observaciones:</b> ${esc(c.notes)||'Sin observaciones.'}</div>
  </div>
  <div class="btn-ghost-row">
    <button class="btn-ghost" onclick="openForm(${c.id})">${icon('edit')} Editar</button>
    <button class="btn-ghost danger" onclick="deleteClient(${c.id})">${icon('trash')} Eliminar</button>
  </div>`;
}

function screenEstadoAdmin(){
  if(!clients.length) return emptyState('Sin proyectos', 'Creá un proyecto para poder actualizar su estado.');
  const c = clients.find(x=>x.id===Number(state.clientView)) || clients[0];
  const fStage = state.formStage!==undefined && state.formStage!==null ? state.formStage : c.stage;
  return `
  <p class="section-eyebrow">Seleccioná el cliente</p>
  <select class="selector" onchange="nav('estado',{clientView:Number(this.value), formStage:clients.find(x=>x.id===Number(this.value)).stage})">
    ${clients.map(cc=>`<option value="${cc.id}" ${cc.id===c.id?'selected':''}>${esc(cc.name)} — ${esc(cc.project)}</option>`).join('')}
  </select>
  ${levelMeter(fStage, c.project)}
  <p class="section-eyebrow">Marcar opción</p>
  <div class="stage-pills">
    ${STAGES.map((s,i)=>`
      <div class="stage-pill ${fStage===i?'sel':''}" onclick="nav('estado',{clientView:${c.id}, formStage:${i}})">
        <span class="dot"></span>${s}
      </div>`).join('')}
  </div>
  <button class="btn-primary" style="margin-top:16px;" onclick="updateStage(${c.id})">${icon('check')} Actualizar estado</button>`;
}

function updateStage(id){
  const c = clients.find(x=>x.id===id);
  c.stage = state.formStage;
  toast('Estado actualizado');
  render();
}

function deleteClient(id){
  if(!confirm('¿Eliminar este proyecto?')) return;
  clients = clients.filter(c=>c.id!==id);
  toast('Proyecto eliminado');
  nav('clientes');
}

function openForm(id){
  nav('form', {editId:id});
}

function screenForm(){
  const c = state.editId ? clients.find(x=>x.id===state.editId) : {name:'',clientEmail:'',project:'',type:'',start:'',end:'',stage:0,notes:''};
  return `
  <div class="field"><label>Nombre del cliente</label><input id="f-name" value="${esc(c.name)}" placeholder="Nombre y apellido"></div>
  <div class="field"><label>Email del cliente (el de su cuenta)</label><input id="f-email" type="email" inputmode="email" autocapitalize="none" value="${esc(c.clientEmail)}" placeholder="cliente@email.com"></div>
  <div class="field"><label>Nombre del proyecto</label><input id="f-project" value="${esc(c.project)}" placeholder="Título del proyecto"></div>
  <div class="field"><label>Tipo de trabajo</label><input id="f-type" value="${esc(c.type)}" placeholder="Instrumentación, mezcla, mastering..."></div>
  <div class="field"><label>Fecha inicio</label><input id="f-start" value="${esc(c.start)}" placeholder="DD/MM/AA"></div>
  <div class="field"><label>Fecha entrega</label><input id="f-end" value="${esc(c.end)}" placeholder="DD/MM/AA"></div>
  <div class="field"><label>Estado actual</label>
    <select id="f-stage">${STAGES.map((s,i)=>`<option value="${i}" ${c.stage===i?'selected':''}>${s}</option>`).join('')}</select>
  </div>
  <div class="field"><label>Observaciones</label><textarea id="f-notes" placeholder="Notas del proyecto">${esc(c.notes)}</textarea></div>
  <button class="btn-primary" onclick="saveForm()">${icon('check')} Guardar</button>`;
}

function saveForm(){
  const v = id => document.getElementById(id).value.trim();
  const name = v('f-name') || 'Sin nombre';
  const clientEmail = v('f-email').toLowerCase();
  const project = v('f-project') || 'Sin título';
  const type = v('f-type');
  const start = v('f-start');
  const end = v('f-end');
  const stage = Number(document.getElementById('f-stage').value);
  const notes = v('f-notes');
  if(state.editId){
    const c = clients.find(x=>x.id===state.editId);
    Object.assign(c, {name,clientEmail,project,type,start,end,stage,notes});
  } else {
    clients.push({id:nextClientId++, name,clientEmail,project,type,start,end,stage,notes});
  }
  toast('Proyecto guardado');
  nav('clientes', {editId:null});
}

function screenFinalizadosAdmin(){
  if(!finished.length) return emptyState('Sin trabajos finalizados', 'Todavía no hay registros.');
  return finished.map(f=>`
  <div class="card">
    <div class="card-row" style="margin-bottom:8px;">
      <div style="min-width:0;">
        <div style="font-weight:700; font-size:13.5px;">${esc(f.artist)}</div>
        <div style="font-size:12px; color:var(--text-muted);">${esc(f.project)} · Entrega ${esc(f.date)}</div>
      </div>
      <span class="badge-done">Listo</span>
    </div>
    <div class="btn-ghost-row">
      <button class="btn-ghost" onclick="viewFinished(${f.id})">${icon('eye')} Ver</button>
      <button class="btn-ghost" onclick="renameFinished(${f.id})">${icon('edit')} Editar</button>
      <button class="btn-ghost danger" onclick="deleteFinished(${f.id})">${icon('trash')} Eliminar</button>
    </div>
  </div>`).join('');
}

function viewFinished(id){
  const f = finished.find(x=>x.id===id);
  toast(`${f.artist} · ${f.project} · ${f.date}`);
}
function renameFinished(id){
  const f = finished.find(x=>x.id===id);
  const val = prompt('Nombre del artista', f.artist);
  if(val){ f.artist = val; render(); toast('Proyecto actualizado'); }
}
function deleteFinished(id){
  if(!confirm('¿Eliminar este registro?')) return;
  finished = finished.filter(f=>f.id!==id);
  toast('Registro eliminado');
  render();
}

/* ============================================================
   Render principal
   ============================================================ */
function render(){
  header();
  bottomNav();
  const c = document.getElementById('content');
  let html = '';
  if(user === undefined){
    html = `<div class="splash">Cargando…</div>`;
  } else if(user === null){
    html = screenAuth();
  } else if(user.role === 'client'){
    if(state.screen==='home') html = screenClientHome();
    else if(state.screen==='info') html = screenInfo();
    else if(state.screen==='estados') html = screenEstados();
    else if(state.screen==='finalizados') html = screenFinalizados();
    else if(state.screen==='contacto') html = screenContacto();
  } else {
    if(state.screen==='dashboard') html = screenDashboard();
    else if(state.screen==='clientes') html = screenClientesAdmin();
    else if(state.screen==='detail') html = screenDetail();
    else if(state.screen==='estado') html = screenEstadoAdmin();
    else if(state.screen==='form') html = screenForm();
    else if(state.screen==='finalizadosAdmin') html = screenFinalizadosAdmin();
  }
  c.innerHTML = `<div class="fade-in">${html}</div>`;
}

render();
initAuth();
