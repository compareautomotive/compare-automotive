import { useState } from “react”;

const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');`;

const CSS = `

- { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
  –bg: #0a0a0a;
  –surface: #141414;
  –surface2: #1e1e1e;
  –border: #2a2a2a;
  –orange: #e8570a;
  –orange2: #ff6b1a;
  –orange-dim: rgba(232,87,10,0.12);
  –text: #ffffff;
  –muted: #888;
  –muted2: #555;
  –green: #22c55e;
  –blue: #3b82f6;
  –red: #ef4444;
  –display: ‘Barlow Condensed’, sans-serif;
  –body: ‘Barlow’, sans-serif;
  –mono: ‘JetBrains Mono’, monospace;
  }
  body { background: var(–bg); color: var(–text); font-family: var(–body); min-height: 100vh; }

/* ── LOGIN SCREEN ── */
.login-screen {
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background: radial-gradient(ellipse at 30% 50%, rgba(232,87,10,0.18) 0%, transparent 60%), var(–bg);
padding: 20px;
}
.login-card {
background: var(–surface);
border: 1px solid var(–border);
border-top: 3px solid var(–orange);
border-radius: 8px;
padding: 44px 40px;
width: 100%;
max-width: 420px;
}
.login-logo {
text-align: center;
margin-bottom: 32px;
}
.login-logo .brand {
font-family: var(–display);
font-size: 32px;
font-weight: 900;
letter-spacing: 2px;
color: var(–text);
text-transform: uppercase;
line-height: 1;
}
.login-logo .brand span { color: var(–orange); }
.login-logo .sub {
font-family: var(–mono);
font-size: 10px;
letter-spacing: 4px;
color: var(–muted);
text-transform: uppercase;
margin-top: 4px;
}
.login-tabs {
display: grid;
grid-template-columns: 1fr 1fr;
gap: 4px;
background: var(–bg);
border-radius: 6px;
padding: 4px;
margin-bottom: 28px;
}
.login-tab {
padding: 9px;
border-radius: 4px;
border: none;
background: transparent;
color: var(–muted);
font-family: var(–body);
font-size: 13px;
font-weight: 600;
cursor: pointer;
transition: all 0.15s;
text-transform: uppercase;
letter-spacing: 1px;
}
.login-tab.active { background: var(–orange); color: white; }
.login-form { display: flex; flex-direction: column; gap: 14px; }
.field-lbl {
font-family: var(–mono);
font-size: 10px;
letter-spacing: 2px;
color: var(–muted);
text-transform: uppercase;
margin-bottom: 5px;
}
input, select, textarea {
background: var(–bg);
border: 1px solid var(–border);
border-radius: 5px;
padding: 11px 14px;
color: var(–text);
font-family: var(–body);
font-size: 14px;
width: 100%;
outline: none;
transition: border 0.15s;
}
input:focus, select:focus, textarea:focus { border-color: var(–orange); }
input::placeholder { color: var(–muted2); }
textarea { resize: vertical; min-height: 80px; }
select option { background: var(–surface2); }
.btn {
padding: 12px 20px;
border-radius: 5px;
border: none;
cursor: pointer;
font-family: var(–body);
font-size: 14px;
font-weight: 700;
letter-spacing: 1px;
text-transform: uppercase;
transition: all 0.15s;
}
.btn-orange { background: var(–orange); color: white; }
.btn-orange:hover { background: var(–orange2); transform: translateY(-1px); }
.btn-ghost { background: transparent; color: var(–muted); border: 1px solid var(–border); }
.btn-ghost:hover { border-color: var(–orange); color: var(–orange); }
.btn-danger { background: var(–red); color: white; }
.btn-danger:hover { opacity: 0.85; }
.btn-green { background: var(–green); color: #000; font-weight: 700; }
.btn-sm { padding: 6px 12px; font-size: 12px; }
.btn-full { width: 100%; }
.login-hint { text-align: center; margin-top: 14px; font-size: 12px; color: var(–muted); font-family: var(–mono); }
.login-hint b { color: var(–orange); }

/* ── SHELL ── */
.app { display: flex; min-height: 100vh; }
.sidebar {
width: 230px;
background: var(–surface);
border-right: 1px solid var(–border);
display: flex;
flex-direction: column;
position: fixed;
top:0;left:0;bottom:0;
z-index: 10;
}
.sidebar-logo {
padding: 22px 20px 18px;
border-bottom: 1px solid var(–border);
}
.sidebar-logo .brand {
font-family: var(–display);
font-weight: 900;
font-size: 20px;
letter-spacing: 2px;
text-transform: uppercase;
line-height: 1.1;
}
.sidebar-logo .brand span { color: var(–orange); }
.sidebar-logo .role-badge {
display: inline-block;
margin-top: 6px;
font-family: var(–mono);
font-size: 9px;
letter-spacing: 3px;
text-transform: uppercase;
padding: 2px 8px;
border-radius: 3px;
background: var(–orange-dim);
color: var(–orange);
}
.sidebar-nav { flex: 1; padding: 12px 0; overflow-y: auto; }
.nav-section {
font-family: var(–mono);
font-size: 9px;
letter-spacing: 3px;
color: var(–muted2);
padding: 12px 20px 5px;
text-transform: uppercase;
}
.nav-item {
display: flex;
align-items: center;
gap: 10px;
padding: 10px 20px;
cursor: pointer;
font-size: 14px;
font-weight: 600;
color: var(–muted);
border-left: 3px solid transparent;
transition: all 0.12s;
text-transform: uppercase;
letter-spacing: 0.5px;
}
.nav-item:hover { color: var(–text); background: var(–surface2); }
.nav-item.active { color: var(–orange); border-left-color: var(–orange); background: var(–orange-dim); }
.nav-icon { font-size: 16px; width: 20px; text-align: center; }
.sidebar-footer {
padding: 14px 20px;
border-top: 1px solid var(–border);
display: flex;
align-items: center;
justify-content: space-between;
}
.sidebar-footer .user-info { font-size: 12px; }
.sidebar-footer .user-name { font-weight: 700; color: var(–text); }
.sidebar-footer .user-role { font-family: var(–mono); font-size: 10px; color: var(–muted); }
.signout-btn {
background: none;
border: 1px solid var(–border);
color: var(–muted);
padding: 5px 8px;
border-radius: 4px;
cursor: pointer;
font-size: 11px;
font-family: var(–body);
transition: all 0.12s;
}
.signout-btn:hover { border-color: var(–orange); color: var(–orange); }

.main { margin-left: 230px; flex: 1; display: flex; flex-direction: column; }
.topbar {
padding: 14px 28px;
border-bottom: 1px solid var(–border);
display: flex;
align-items: center;
justify-content: space-between;
background: var(–surface);
position: sticky;
top: 0;
z-index: 5;
}
.topbar-title {
font-family: var(–display);
font-size: 24px;
font-weight: 800;
letter-spacing: 3px;
text-transform: uppercase;
}
.topbar-right { display: flex; align-items: center; gap: 12px; }
.content { padding: 24px 28px; flex: 1; }

/* ── STATS ── */
.stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 14px; margin-bottom: 24px; }
.stat-card {
background: var(–surface);
border: 1px solid var(–border);
border-radius: 6px;
padding: 18px;
position: relative;
overflow: hidden;
}
.stat-card::after {
content: ‘’;
position: absolute;
top: 0; left: 0; right: 0;
height: 3px;
background: var(–orange);
}
.stat-card.green::after { background: var(–green); }
.stat-card.blue::after { background: var(–blue); }
.stat-card.red::after { background: var(–red); }
.stat-label { font-family: var(–mono); font-size: 9px; letter-spacing: 3px; color: var(–muted); text-transform: uppercase; margin-bottom: 10px; }
.stat-value { font-family: var(–display); font-size: 40px; font-weight: 800; line-height: 1; color: var(–orange); }
.stat-card.green .stat-value { color: var(–green); }
.stat-card.blue .stat-value { color: var(–blue); }
.stat-card.red .stat-value { color: var(–red); }
.stat-sub { font-size: 12px; color: var(–muted); margin-top: 5px; }

/* ── TABLE ── */
.table-wrap { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; overflow: hidden; }
.table-head {
padding: 14px 18px;
border-bottom: 1px solid var(–border);
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 10px;
}
.table-head-title { font-family: var(–display); font-size: 18px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
.search { background: var(–bg); border: 1px solid var(–border); border-radius: 4px; padding: 8px 12px; color: var(–text); font-family: var(–mono); font-size: 12px; width: 200px; outline: none; transition: border .15s; }
.search:focus { border-color: var(–orange); }
.search::placeholder { color: var(–muted2); }
table { width: 100%; border-collapse: collapse; }
thead tr { border-bottom: 1px solid var(–border); }
th { text-align: left; padding: 10px 14px; font-family: var(–mono); font-size: 9px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; font-weight: 500; white-space: nowrap; }
td { padding: 12px 14px; font-size: 13px; border-bottom: 1px solid #1a1a1a; }
tbody tr { transition: background 0.1s; }
tbody tr:hover { background: rgba(255,255,255,0.02); }
tbody tr:last-child td { border-bottom: none; }

/* ── BADGES ── */
.badge {
display: inline-flex; align-items: center;
padding: 3px 8px; border-radius: 3px;
font-family: var(–mono); font-size: 10px;
letter-spacing: 1px; font-weight: 500; text-transform: uppercase;
}
.badge-waiting { background: rgba(232,87,10,0.15); color: var(–orange); }
.badge-progress { background: rgba(59,130,246,0.15); color: var(–blue); }
.badge-done { background: rgba(34,197,94,0.15); color: var(–green); }
.badge-cancelled { background: rgba(239,68,68,0.15); color: var(–red); }
.badge-paid { background: rgba(34,197,94,0.15); color: var(–green); }
.badge-unpaid { background: rgba(239,68,68,0.15); color: var(–red); }

/* ── PLATE ── */
.plate {
font-family: var(–display);
font-size: 16px;
font-weight: 800;
letter-spacing: 3px;
color: var(–orange);
}

/* ── MODAL ── */
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal { background: var(–surface); border: 1px solid var(–border); border-top: 3px solid var(–orange); border-radius: 8px; width: 100%; max-width: 500px; max-height: 90vh; overflow-y: auto; }
.modal-hd { padding: 18px 22px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; }
.modal-hd h2 { font-family: var(–display); font-size: 20px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
.modal-x { background: none; border: none; color: var(–muted); cursor: pointer; font-size: 22px; line-height: 1; }
.modal-x:hover { color: var(–text); }
.modal-bd { padding: 18px 22px; display: flex; flex-direction: column; gap: 13px; }
.modal-ft { padding: 14px 22px; border-top: 1px solid var(–border); display: flex; justify-content: flex-end; gap: 8px; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

/* ── TWO COL ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.panel { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; overflow: hidden; }
.panel-hd { padding: 13px 16px; border-bottom: 1px solid var(–border); font-family: var(–display); font-size: 16px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; display: flex; align-items: center; gap: 8px; }
.panel-hd span { color: var(–orange); }
.panel-bd { padding: 8px 12px; }
.act-item { display: flex; gap: 10px; padding: 9px 4px; border-bottom: 1px solid #1a1a1a; align-items: flex-start; }
.act-item:last-child { border-bottom: none; }
.act-dot { width: 7px; height: 7px; border-radius: 50%; background: var(–orange); margin-top: 5px; flex-shrink: 0; }
.act-text { font-size: 12px; line-height: 1.5; }
.act-time { font-family: var(–mono); font-size: 10px; color: var(–muted); }

/* ── VEHICLES GRID ── */
.v-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); gap: 14px; }
.v-card { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; padding: 18px; position: relative; transition: border-color .15s; }
.v-card:hover { border-color: #444; }
.v-card-actions { position: absolute; top: 14px; right: 14px; display: flex; gap: 6px; }
.v-plate { font-family: var(–display); font-size: 22px; font-weight: 800; letter-spacing: 4px; color: var(–orange); margin-bottom: 4px; }
.v-make { font-size: 13px; font-weight: 600; margin-bottom: 2px; }
.v-owner { font-family: var(–mono); font-size: 11px; color: var(–muted); margin-bottom: 12px; }
.v-meta { display: flex; gap: 18px; }
.v-meta-item label { font-family: var(–mono); font-size: 9px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; display: block; margin-bottom: 2px; }
.v-meta-item span { font-size: 12px; font-weight: 500; }

/* ── CUSTOMER PORTAL ── */
.portal-hero {
background: radial-gradient(ellipse at right, rgba(232,87,10,0.15), transparent 60%);
border: 1px solid var(–border);
border-radius: 8px;
padding: 24px 28px;
margin-bottom: 20px;
display: flex;
align-items: center;
justify-content: space-between;
}
.portal-hero-text h2 { font-family: var(–display); font-size: 28px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
.portal-hero-text p { color: var(–muted); font-size: 14px; margin-top: 4px; }
.portal-hero-badge { font-family: var(–mono); font-size: 11px; color: var(–orange); background: var(–orange-dim); padding: 6px 14px; border-radius: 4px; border: 1px solid rgba(232,87,10,0.3); }
.job-tracker { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; overflow: hidden; margin-bottom: 16px; }
.job-tracker-hd { padding: 16px 20px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; }
.job-tracker-title { font-family: var(–display); font-size: 18px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
.job-detail { padding: 18px 20px; }
.job-detail-plate { font-family: var(–display); font-size: 28px; font-weight: 800; letter-spacing: 5px; color: var(–orange); margin-bottom: 4px; }
.job-detail-vehicle { font-size: 15px; font-weight: 600; margin-bottom: 14px; }
.progress-bar { background: var(–bg); border-radius: 4px; height: 6px; margin: 10px 0 16px; overflow: hidden; }
.progress-fill { height: 100%; border-radius: 4px; background: linear-gradient(90deg, var(–orange), var(–orange2)); transition: width 0.5s; }
.status-steps { display: flex; gap: 0; margin-bottom: 16px; }
.step { flex: 1; text-align: center; font-family: var(–mono); font-size: 9px; letter-spacing: 1px; color: var(–muted); text-transform: uppercase; padding: 6px 4px; border-bottom: 2px solid var(–border); }
.step.done { color: var(–green); border-bottom-color: var(–green); }
.step.active { color: var(–orange); border-bottom-color: var(–orange); }
.detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.detail-item label { font-family: var(–mono); font-size: 9px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; display: block; margin-bottom: 3px; }
.detail-item span { font-size: 13px; font-weight: 500; }

/* ── BOOKING ── */
.booking-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.service-option { background: var(–surface); border: 2px solid var(–border); border-radius: 6px; padding: 16px; cursor: pointer; transition: all 0.15s; }
.service-option:hover { border-color: #444; }
.service-option.selected { border-color: var(–orange); background: var(–orange-dim); }
.service-icon { font-size: 24px; margin-bottom: 8px; }
.service-name { font-weight: 700; font-size: 14px; margin-bottom: 3px; }
.service-price { font-family: var(–mono); font-size: 12px; color: var(–orange); }

/* ── INVOICE ── */
.invoice-card { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; padding: 20px; margin-bottom: 12px; }
.invoice-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
.invoice-id { font-family: var(–mono); font-size: 12px; color: var(–muted); }
.invoice-total { font-family: var(–display); font-size: 28px; font-weight: 800; color: var(–orange); }
.invoice-rows { border-top: 1px solid var(–border); padding-top: 12px; }
.invoice-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 13px; border-bottom: 1px solid #1a1a1a; }
.invoice-row:last-child { border-bottom: none; }
.invoice-pay { background: var(–orange-dim); border: 1px solid rgba(232,87,10,0.3); border-radius: 6px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; margin-top: 14px; }

/* ── EMPTY ── */
.empty { text-align: center; padding: 44px; color: var(–muted); }
.empty-icon { font-size: 36px; margin-bottom: 10px; opacity: 0.3; }
.empty p { font-size: 14px; }

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(–bg); }
::-webkit-scrollbar-thumb { background: var(–border); border-radius: 3px; }
`;

// ─── DATA ───────────────────────────────────────────────────────────
const JOBS = [
{ id: 1, plate:“CA21 AUT”, customer:“James Harlow”, email:“james@email.com”, vehicle:“Ford Focus 2018”, service:“Full Service + MOT”, tech:“Mike R.”, status:“In Progress”, date:“2026-04-10”, notes:“Check brake pads”, amount:320 },
{ id: 2, plate:“XY67 FGH”, customer:“Sarah Bloom”, email:“sarah@email.com”, vehicle:“VW Golf 2020”, service:“Oil Change”, tech:“Dave S.”, status:“Waiting”, date:“2026-04-11”, notes:””, amount:95 },
{ id: 3, plate:“PQ33 JKL”, customer:“Tom Green”, email:“tom@email.com”, vehicle:“BMW 3 Series 2019”, service:“Tyre Replacement”, tech:“Mike R.”, status:“Done”, date:“2026-04-09”, notes:“All 4 tyres”, amount:480 },
{ id: 4, plate:“MN55 OPQ”, customer:“Nina Patel”, email:“nina@email.com”, vehicle:“Toyota Yaris 2021”, service:“Brake Inspection”, tech:“Lee W.”, status:“Done”, date:“2026-04-08”, notes:””, amount:95 },
{ id: 5, plate:“RS89 TUV”, customer:“Carl Banks”, email:“carl@email.com”, vehicle:“Honda Civic 2017”, service:“Clutch Replacement”, tech:“Dave S.”, status:“Waiting”, date:“2026-04-11”, notes:“Parts ordered”, amount:650 },
];
const VEHICLES = [
{ id:1, plate:“CA21 AUT”, make:“Ford”, model:“Focus”, year:2018, owner:“James Harlow”, phone:“07700 900123”, email:“james@email.com”, mileage:“64,200” },
{ id:2, plate:“XY67 FGH”, make:“Volkswagen”, model:“Golf”, year:2020, owner:“Sarah Bloom”, phone:“07700 900456”, email:“sarah@email.com”, mileage:“28,100” },
{ id:3, plate:“PQ33 JKL”, make:“BMW”, model:“3 Series”, year:2019, owner:“Tom Green”, phone:“07700 900789”, email:“tom@email.com”, mileage:“51,600” },
{ id:4, plate:“MN55 OPQ”, make:“Toyota”, model:“Yaris”, year:2021, owner:“Nina Patel”, phone:“07700 900321”, email:“nina@email.com”, mileage:“19,400” },
{ id:5, plate:“RS89 TUV”, make:“Honda”, model:“Civic”, year:2017, owner:“Carl Banks”, phone:“07700 900654”, email:“carl@email.com”, mileage:“82,900” },
];
const INVOICES = [
{ id:1, customer:“Tom Green”, plate:“PQ33 JKL”, email:“tom@email.com”, service:“Tyre Replacement”, labour:180, parts:300, amount:480, paid:true, date:“2026-04-09” },
{ id:2, customer:“Nina Patel”, plate:“MN55 OPQ”, email:“nina@email.com”, service:“Brake Inspection”, labour:95, parts:0, amount:95, paid:true, date:“2026-04-08” },
{ id:3, customer:“James Harlow”, plate:“CA21 AUT”, email:“james@email.com”, service:“Full Service + MOT”, labour:120, parts:200, amount:320, paid:false, date:“2026-04-10” },
];
const SERVICES = [
{ id:1, icon:“🔧”, name:“Full Service”, price:“From £149” },
{ id:2, icon:“🔍”, name:“MOT Test”, price:“From £54.85” },
{ id:3, icon:“🛞”, name:“Tyre Replacement”, price:“From £80/tyre” },
{ id:4, icon:“🛑”, name:“Brake Service”, price:“From £95” },
{ id:5, icon:“💧”, name:“Oil Change”, price:“From £59” },
{ id:6, icon:“🔋”, name:“Battery Check”, price:“From £25” },
];
const TECHS = [“Mike R.”,“Dave S.”,“Lee W.”,“Anna T.”];
const STATUSES = [“Waiting”,“In Progress”,“Done”,“Cancelled”];
const USERS = {
admin: { name:“Admin”, role:“admin”, email:“admin@compareautomotive.co.uk” },
“james@email.com”: { name:“James Harlow”, role:“customer”, email:“james@email.com” },
“tom@email.com”: { name:“Tom Green”, role:“customer”, email:“tom@email.com” },
“nina@email.com”: { name:“Nina Patel”, role:“customer”, email:“nina@email.com” },
“sarah@email.com”: { name:“Sarah Bloom”, role:“customer”, email:“sarah@email.com” },
“carl@email.com”: { name:“Carl Banks”, role:“customer”, email:“carl@email.com” },
};

function StatusBadge({ s }) {
const m = { “Waiting”:“badge-waiting”,“In Progress”:“badge-progress”,“Done”:“badge-done”,“Cancelled”:“badge-cancelled” };
return <span className={`badge ${m[s]||"badge-waiting"}`}>{s}</span>;
}

function nextId(arr) { return arr.length ? Math.max(…arr.map(x=>x.id))+1 : 1; }

// ─── LOGIN ───────────────────────────────────────────────────────────
function LoginScreen({ onLogin }) {
const [tab, setTab] = useState(“admin”);
const [email, setEmail] = useState(””);
const [pass, setPass] = useState(””);
const [err, setErr] = useState(””);

const login = () => {
if (tab === “admin”) {
if (email === “admin” && pass === “admin”) onLogin(USERS.admin);
else setErr(“Use: admin / admin”);
} else {
const u = USERS[email.toLowerCase()];
if (u && u.role === “customer” && pass === “password”) onLogin(u);
else setErr(“Try: james@email.com / password”);
}
};

return (
<div className="login-screen">
<div className="login-card">
<div className="login-logo">
<div className="brand">COMPARE<br /><span>AUTOMOTIVE</span></div>
<div className="sub">Management Portal</div>
</div>
<div className="login-tabs">
<button className={`login-tab${tab==="admin"?" active":""}`} onClick={()=>{setTab(“admin”);setErr(””);}}>Staff Login</button>
<button className={`login-tab${tab==="customer"?" active":""}`} onClick={()=>{setTab(“customer”);setErr(””);}}>Customer Login</button>
</div>
<div className="login-form">
<div>
<div className="field-lbl">{tab===“admin”?“Username”:“Email Address”}</div>
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder={tab===“admin”?“admin”:“your@email.com”} onKeyDown={e=>e.key===“Enter”&&login()} />
</div>
<div>
<div className="field-lbl">Password</div>
<input type=“password” value={pass} onChange={e=>setPass(e.target.value)} placeholder=”••••••••” onKeyDown={e=>e.key===“Enter”&&login()} />
</div>
{err && <div style={{color:“var(–red)”,fontFamily:“var(–mono)”,fontSize:12}}>{err}</div>}
<button className="btn btn-orange btn-full" onClick={login}>Sign In →</button>
</div>
<div className="login-hint">
{tab===“admin” ? <><b>admin</b> / <b>admin</b></> : <><b>james@email.com</b> / <b>password</b></>}
</div>
</div>
</div>
);
}

// ─── JOB MODAL ───────────────────────────────────────────────────────
function JobModal({ job, onClose, onSave }) {
const e = { plate:””,customer:””,email:””,vehicle:””,service:””,tech:TECHS[0],status:“Waiting”,date:new Date().toISOString().slice(0,10),notes:””,amount:”” };
const [f, setF] = useState(job||e);
const s = (k,v)=>setF(x=>({…x,[k]:v}));
return (
<div className=“overlay” onClick={e=>e.target===e.currentTarget&&onClose()}>
<div className="modal">
<div className="modal-hd">
<h2>{job?“Edit Job”:“New Job”}</h2>
<button className="modal-x" onClick={onClose}>×</button>
</div>
<div className="modal-bd">
<div className="field-row">
<div><div className="field-lbl">Reg Plate</div><input value={f.plate} onChange={e=>s(“plate”,e.target.value.toUpperCase())} placeholder=“AB12 CDE” /></div>
<div><div className="field-lbl">Date</div><input type=“date” value={f.date} onChange={e=>s(“date”,e.target.value)} /></div>
</div>
<div><div className="field-lbl">Customer Name</div><input value={f.customer} onChange={e=>s(“customer”,e.target.value)} /></div>
<div><div className="field-lbl">Customer Email</div><input value={f.email} onChange={e=>s(“email”,e.target.value)} placeholder=“customer@email.com” /></div>
<div><div className="field-lbl">Vehicle</div><input value={f.vehicle} onChange={e=>s(“vehicle”,e.target.value)} placeholder=“Make Model Year” /></div>
<div><div className="field-lbl">Service</div><input value={f.service} onChange={e=>s(“service”,e.target.value)} /></div>
<div className="field-row">
<div><div className="field-lbl">Technician</div><select value={f.tech} onChange={e=>s(“tech”,e.target.value)}>{TECHS.map(t=><option key={t}>{t}</option>)}</select></div>
<div><div className="field-lbl">Status</div><select value={f.status} onChange={e=>s(“status”,e.target.value)}>{STATUSES.map(st=><option key={st}>{st}</option>)}</select></div>
</div>
<div className="field-row">
<div><div className="field-lbl">Amount (£)</div><input type=“number” value={f.amount} onChange={e=>s(“amount”,e.target.value)} /></div>
<div><div className="field-lbl">Notes</div><input value={f.notes} onChange={e=>s(“notes”,e.target.value)} /></div>
</div>
</div>
<div className="modal-ft">
<button className="btn btn-ghost" onClick={onClose}>Cancel</button>
<button className=“btn btn-orange” onClick={()=>onSave({…f,amount:parseFloat(f.amount)||0})}>Save Job</button>
</div>
</div>
</div>
);
}

function VehicleModal({ vehicle, onClose, onSave }) {
const e = { plate:””,make:””,model:””,year:2024,owner:””,phone:””,email:””,mileage:”” };
const [f, setF] = useState(vehicle||e);
const s=(k,v)=>setF(x=>({…x,[k]:v}));
return (
<div className=“overlay” onClick={e=>e.target===e.currentTarget&&onClose()}>
<div className="modal">
<div className="modal-hd"><h2>{vehicle?“Edit Vehicle”:“Add Vehicle”}</h2><button className="modal-x" onClick={onClose}>×</button></div>
<div className="modal-bd">
<div><div className="field-lbl">Registration</div><input value={f.plate} onChange={e=>s(“plate”,e.target.value.toUpperCase())} /></div>
<div className="field-row">
<div><div className="field-lbl">Make</div><input value={f.make} onChange={e=>s(“make”,e.target.value)} /></div>
<div><div className="field-lbl">Model</div><input value={f.model} onChange={e=>s(“model”,e.target.value)} /></div>
</div>
<div className="field-row">
<div><div className="field-lbl">Year</div><input type=“number” value={f.year} onChange={e=>s(“year”,e.target.value)} /></div>
<div><div className="field-lbl">Mileage</div><input value={f.mileage} onChange={e=>s(“mileage”,e.target.value)} /></div>
</div>
<div><div className="field-lbl">Owner Name</div><input value={f.owner} onChange={e=>s(“owner”,e.target.value)} /></div>
<div className="field-row">
<div><div className="field-lbl">Phone</div><input value={f.phone} onChange={e=>s(“phone”,e.target.value)} /></div>
<div><div className="field-lbl">Email</div><input value={f.email} onChange={e=>s(“email”,e.target.value)} /></div>
</div>
</div>
<div className="modal-ft">
<button className="btn btn-ghost" onClick={onClose}>Cancel</button>
<button className=“btn btn-orange” onClick={()=>onSave(f)}>Save</button>
</div>
</div>
</div>
);
}

function InvoiceModal({ invoice, onClose, onSave }) {
const e = { customer:””,plate:””,email:””,service:””,labour:””,parts:””,amount:””,paid:false,date:new Date().toISOString().slice(0,10) };
const [f, setF] = useState(invoice||e);
const s=(k,v)=>setF(x=>({…x,[k]:v}));
const total = (parseFloat(f.labour)||0)+(parseFloat(f.parts)||0);
return (
<div className=“overlay” onClick={e=>e.target===e.currentTarget&&onClose()}>
<div className="modal">
<div className="modal-hd"><h2>{invoice?“Edit Invoice”:“New Invoice”}</h2><button className="modal-x" onClick={onClose}>×</button></div>
<div className="modal-bd">
<div className="field-row">
<div><div className="field-lbl">Customer</div><input value={f.customer} onChange={e=>s(“customer”,e.target.value)} /></div>
<div><div className="field-lbl">Plate</div><input value={f.plate} onChange={e=>s(“plate”,e.target.value.toUpperCase())} /></div>
</div>
<div><div className="field-lbl">Customer Email</div><input value={f.email} onChange={e=>s(“email”,e.target.value)} /></div>
<div><div className="field-lbl">Service</div><input value={f.service} onChange={e=>s(“service”,e.target.value)} /></div>
<div className="field-row">
<div><div className="field-lbl">Labour (£)</div><input type=“number” value={f.labour} onChange={e=>s(“labour”,e.target.value)} /></div>
<div><div className="field-lbl">Parts (£)</div><input type=“number” value={f.parts} onChange={e=>s(“parts”,e.target.value)} /></div>
</div>
<div style={{fontFamily:“var(–mono)”,fontSize:12,color:“var(–orange)”}}>Total: £{total.toFixed(2)}</div>
<div className="field-row">
<div><div className="field-lbl">Date</div><input type=“date” value={f.date} onChange={e=>s(“date”,e.target.value)} /></div>
<div><div className="field-lbl">Status</div><select value={f.paid?“paid”:“unpaid”} onChange={e=>s(“paid”,e.target.value===“paid”)}><option value="unpaid">Unpaid</option><option value="paid">Paid</option></select></div>
</div>
</div>
<div className="modal-ft">
<button className="btn btn-ghost" onClick={onClose}>Cancel</button>
<button className=“btn btn-orange” onClick={()=>onSave({…f,amount:total,labour:parseFloat(f.labour)||0,parts:parseFloat(f.parts)||0})}>Save Invoice</button>
</div>
</div>
</div>
);
}

// ─── ADMIN PAGES ─────────────────────────────────────────────────────
function Dashboard({ jobs, vehicles, invoices }) {
const active=jobs.filter(j=>j.status===“In Progress”).length;
const waiting=jobs.filter(j=>j.status===“Waiting”).length;
const rev=invoices.filter(i=>i.paid).reduce((s,i)=>s+i.amount,0);
const out=invoices.filter(i=>!i.paid).reduce((s,i)=>s+i.amount,0);
const recent=[…jobs].sort((a,b)=>b.id-a.id).slice(0,6);
return (
<div>
<div className="stats-grid">
<div className="stat-card blue"><div className="stat-label">Active Jobs</div><div className="stat-value">{active}</div><div className="stat-sub">In workshop now</div></div>
<div className="stat-card"><div className="stat-label">Awaiting</div><div className="stat-value">{waiting}</div><div className="stat-sub">Jobs queued</div></div>
<div className="stat-card green"><div className="stat-label">Revenue</div><div className="stat-value">£{rev.toLocaleString()}</div><div className="stat-sub">Collected</div></div>
<div className="stat-card red"><div className="stat-label">Outstanding</div><div className="stat-value">£{out.toLocaleString()}</div><div className="stat-sub">Awaiting payment</div></div>
</div>
<div className="two-col">
<div className="panel">
<div className="panel-hd">🔧 <span>Recent Jobs</span></div>
<div className="panel-bd">
{recent.map(j=>(
<div className="act-item" key={j.id}>
<div className=“act-dot” style={{background:j.status===“Done”?“var(–green)”:j.status===“In Progress”?“var(–blue)”:“var(–orange)”}} />
<div>
<div className="act-text"><strong>{j.plate}</strong> — {j.service}</div>
<div className="act-time">{j.customer} · {j.date}</div>
</div>
</div>
))}
</div>
</div>
<div className="panel">
<div className="panel-hd">🚗 <span>Fleet ({vehicles.length})</span></div>
<div className="panel-bd">
{vehicles.map(v=>(
<div className="act-item" key={v.id}>
<div className=“act-dot” style={{background:“var(–muted2)”}} />
<div>
<div className="act-text"><strong>{v.plate}</strong> — {v.year} {v.make} {v.model}</div>
<div className="act-time">{v.owner} · {v.mileage} mi</div>
</div>
</div>
))}
</div>
</div>
</div>
</div>
);
}

function JobsPage({ jobs, setJobs }) {
const [search,setSearch]=useState(””);
const [modal,setModal]=useState(null);
const filtered=jobs.filter(j=>j.plate.toLowerCase().includes(search.toLowerCase())||j.customer.toLowerCase().includes(search.toLowerCase())||j.service.toLowerCase().includes(search.toLowerCase()));
const save=f=>{
if(modal===“new”) setJobs(j=>[…j,{…f,id:nextId(j)}]);
else setJobs(j=>j.map(x=>x.id===modal.id?{…f,id:modal.id}:x));
setModal(null);
};
return (
<div>
{(modal===“new”||(modal&&modal!==null))&&<JobModal job={modal===“new”?null:modal} onClose={()=>setModal(null)} onSave={save} />}
<div className="table-wrap">
<div className="table-head">
<span className="table-head-title">Job Cards</span>
<div style={{display:“flex”,gap:10}}>
<input className=“search” placeholder=“Search jobs…” value={search} onChange={e=>setSearch(e.target.value)} />
<button className=“btn btn-orange” onClick={()=>setModal(“new”)}>+ New Job</button>
</div>
</div>
<table>
<thead><tr><th>Plate</th><th>Customer</th><th>Vehicle</th><th>Service</th><th>Tech</th><th>Status</th><th>Date</th><th>Amount</th><th></th></tr></thead>
<tbody>
{filtered.length===0?<tr><td colSpan={9}><div className="empty"><div className="empty-icon">🔧</div><p>No jobs found.</p></div></td></tr>
:filtered.map(j=>(
<tr key={j.id}>
<td><span className="plate">{j.plate}</span></td>
<td>{j.customer}</td>
<td style={{color:“var(–muted)”,fontSize:12}}>{j.vehicle}</td>
<td>{j.service}</td>
<td style={{fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”}}>{j.tech}</td>
<td><StatusBadge s={j.status} /></td>
<td style={{fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”}}>{j.date}</td>
<td style={{fontFamily:“var(–mono)”,fontWeight:600,color:“var(–orange)”}}>£{j.amount}</td>
<td><div style={{display:“flex”,gap:6}}>
<button className=“btn btn-ghost btn-sm” onClick={()=>setModal(j)}>Edit</button>
<button className=“btn btn-danger btn-sm” onClick={()=>setJobs(j=>j.filter(x=>x.id!==j.id))}>✕</button>
</div></td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}

function VehiclesPage({ vehicles, setVehicles }) {
const [search,setSearch]=useState(””);
const [modal,setModal]=useState(null);
const filtered=vehicles.filter(v=>v.plate.toLowerCase().includes(search.toLowerCase())||v.owner.toLowerCase().includes(search.toLowerCase())||v.make.toLowerCase().includes(search.toLowerCase()));
const save=f=>{
if(modal===“new”) setVehicles(v=>[…v,{…f,id:nextId(v)}]);
else setVehicles(v=>v.map(x=>x.id===modal.id?{…f,id:modal.id}:x));
setModal(null);
};
return (
<div>
{(modal===“new”||(modal&&modal!==null))&&<VehicleModal vehicle={modal===“new”?null:modal} onClose={()=>setModal(null)} onSave={save} />}
<div style={{display:“flex”,justifyContent:“space-between”,alignItems:“center”,marginBottom:16}}>
<input className=“search” placeholder=“Search vehicles…” value={search} onChange={e=>setSearch(e.target.value)} style={{width:240}} />
<button className=“btn btn-orange” onClick={()=>setModal(“new”)}>+ Add Vehicle</button>
</div>
{filtered.length===0?<div className="empty"><div className="empty-icon">🚗</div><p>No vehicles found.</p></div>
:<div className="v-grid">
{filtered.map(v=>(
<div className="v-card" key={v.id}>
<div className="v-card-actions">
<button className=“btn btn-ghost btn-sm” onClick={()=>setModal(v)}>Edit</button>
<button className=“btn btn-danger btn-sm” onClick={()=>setVehicles(x=>x.filter(y=>y.id!==v.id))}>✕</button>
</div>
<div className="v-plate">{v.plate}</div>
<div className="v-make">{v.year} {v.make} {v.model}</div>
<div className="v-owner">{v.owner}</div>
<div className="v-meta">
<div className="v-meta-item"><label>Phone</label><span>{v.phone}</span></div>
<div className="v-meta-item"><label>Mileage</label><span>{v.mileage}</span></div>
</div>
</div>
))}
</div>}
</div>
);
}

function InvoicesPage({ invoices, setInvoices }) {
const [search,setSearch]=useState(””);
const [modal,setModal]=useState(null);
const filtered=invoices.filter(i=>i.customer.toLowerCase().includes(search.toLowerCase())||i.plate.toLowerCase().includes(search.toLowerCase()));
const save=f=>{
if(modal===“new”) setInvoices(v=>[…v,{…f,id:nextId(v)}]);
else setInvoices(v=>v.map(x=>x.id===modal.id?{…f,id:modal.id}:x));
setModal(null);
};
const total=filtered.reduce((s,i)=>s+i.amount,0);
const collected=filtered.filter(i=>i.paid).reduce((s,i)=>s+i.amount,0);
return (
<div>
{(modal===“new”||(modal&&modal!==null))&&<InvoiceModal invoice={modal===“new”?null:modal} onClose={()=>setModal(null)} onSave={save} />}
<div className=“stats-grid” style={{gridTemplateColumns:“repeat(3,1fr)”,marginBottom:16}}>
<div className="stat-card green"><div className="stat-label">Collected</div><div className="stat-value">£{collected.toLocaleString()}</div></div>
<div className="stat-card red"><div className="stat-label">Outstanding</div><div className="stat-value">£{(total-collected).toLocaleString()}</div></div>
<div className="stat-card blue"><div className="stat-label">Total Billed</div><div className="stat-value">£{total.toLocaleString()}</div></div>
</div>
<div className="table-wrap">
<div className="table-head">
<span className="table-head-title">Invoices</span>
<div style={{display:“flex”,gap:10}}>
<input className=“search” placeholder=“Search…” value={search} onChange={e=>setSearch(e.target.value)} />
<button className=“btn btn-orange” onClick={()=>setModal(“new”)}>+ New Invoice</button>
</div>
</div>
<table>
<thead><tr><th>#</th><th>Customer</th><th>Plate</th><th>Service</th><th>Labour</th><th>Parts</th><th>Total</th><th>Date</th><th>Status</th><th></th></tr></thead>
<tbody>
{filtered.length===0?<tr><td colSpan={10}><div className="empty"><div className="empty-icon">🧾</div><p>No invoices.</p></div></td></tr>
:filtered.map(i=>(
<tr key={i.id}>
<td style={{fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”}}>#{String(i.id).padStart(4,“0”)}</td>
<td>{i.customer}</td>
<td><span className="plate">{i.plate}</span></td>
<td style={{fontSize:12,color:“var(–muted)”}}>{i.service}</td>
<td style={{fontFamily:“var(–mono)”,fontSize:12}}>£{i.labour||0}</td>
<td style={{fontFamily:“var(–mono)”,fontSize:12}}>£{i.parts||0}</td>
<td style={{fontFamily:“var(–mono)”,fontWeight:700,color:“var(–orange)”}}>£{i.amount}</td>
<td style={{fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”}}>{i.date}</td>
<td><span className={`badge ${i.paid?"badge-paid":"badge-unpaid"}`} style={{cursor:“pointer”}} onClick={()=>setInvoices(v=>v.map(x=>x.id===i.id?{…x,paid:!x.paid}:x))}>{i.paid?“Paid”:“Unpaid”}</span></td>
<td><div style={{display:“flex”,gap:6}}>
<button className=“btn btn-ghost btn-sm” onClick={()=>setModal(i)}>Edit</button>
<button className=“btn btn-danger btn-sm” onClick={()=>setInvoices(v=>v.filter(x=>x.id!==i.id))}>✕</button>
</div></td>
</tr>
))}
</tbody>
</table>
</div>
</div>
);
}

// ─── CUSTOMER PORTAL PAGES ───────────────────────────────────────────
function CustomerDashboard({ user, jobs, invoices }) {
const myJobs = jobs.filter(j=>j.email===user.email);
const myInvoices = invoices.filter(i=>i.email===user.email);
const unpaid = myInvoices.filter(i=>!i.paid).reduce((s,i)=>s+i.amount,0);
return (
<div>
<div className="portal-hero">
<div className="portal-hero-text">
<h2>Welcome Back, {user.name.split(” “)[0]}</h2>
<p>Track your vehicles, view invoices and book services all in one place.</p>
</div>
<div className="portal-hero-badge">COMPARE AUTOMOTIVE PORTAL</div>
</div>
<div className=“stats-grid” style={{gridTemplateColumns:“repeat(3,1fr)”}}>
<div className="stat-card"><div className="stat-label">My Jobs</div><div className="stat-value">{myJobs.length}</div><div className="stat-sub">Total jobs</div></div>
<div className="stat-card blue"><div className="stat-label">Active</div><div className="stat-value">{myJobs.filter(j=>j.status===“In Progress”||j.status===“Waiting”).length}</div><div className="stat-sub">In progress</div></div>
<div className="stat-card red"><div className="stat-label">Outstanding</div><div className="stat-value">£{unpaid}</div><div className="stat-sub">To pay</div></div>
</div>
</div>
);
}

function CustomerJobTracker({ user, jobs }) {
const myJobs = jobs.filter(j=>j.email===user.email);
const steps = [“Waiting”,“In Progress”,“Done”];
const progress = { “Waiting”:25,“In Progress”:65,“Done”:100,“Cancelled”:100 };
return (
<div>
<div style={{marginBottom:16,fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”,letterSpacing:2,textTransform:“uppercase”}}>Your Active Jobs</div>
{myJobs.length===0?<div className="empty"><div className="empty-icon">🔧</div><p>No jobs found for your account.</p></div>
:myJobs.map(j=>(
<div className="job-tracker" key={j.id}>
<div className="job-tracker-hd">
<div className="job-tracker-title">{j.service}</div>
<StatusBadge s={j.status} />
</div>
<div className="job-detail">
<div className="job-detail-plate">{j.plate}</div>
<div className="job-detail-vehicle">{j.vehicle}</div>
<div className="status-steps">
{steps.map(st=><div key={st} className={`step${j.status===st?" active":steps.indexOf(st)<steps.indexOf(j.status)||j.status==="Done"?" done":""}`}>{st}</div>)}
</div>
<div className="progress-bar"><div className=“progress-fill” style={{width:`${progress[j.status]||0}%`}} /></div>
<div className="detail-grid">
<div className="detail-item"><label>Technician</label><span>{j.tech}</span></div>
<div className="detail-item"><label>Booked Date</label><span>{j.date}</span></div>
<div className="detail-item"><label>Estimate</label><span style={{color:“var(–orange)”,fontWeight:700}}>£{j.amount}</span></div>
{j.notes&&<div className="detail-item"><label>Notes</label><span style={{color:“var(–muted)”}}>{j.notes}</span></div>}
</div>
</div>
</div>
))}
</div>
);
}

function CustomerInvoices({ user, invoices, setInvoices }) {
const myInvoices = invoices.filter(i=>i.email===user.email);
const pay = id => setInvoices(v=>v.map(x=>x.id===id?{…x,paid:true}:x));
return (
<div>
<div style={{marginBottom:16,fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”,letterSpacing:2,textTransform:“uppercase”}}>Your Invoices</div>
{myInvoices.length===0?<div className="empty"><div className="empty-icon">🧾</div><p>No invoices yet.</p></div>
:myInvoices.map(i=>(
<div className="invoice-card" key={i.id}>
<div className="invoice-top">
<div>
<div className="invoice-id">Invoice #{String(i.id).padStart(4,“0”)} · {i.date}</div>
<div style={{marginTop:4,fontWeight:700}}>{i.service}</div>
<span className="plate" style={{fontSize:14}}>{i.plate}</span>
</div>
<div className="invoice-total">£{i.amount}</div>
</div>
<div className="invoice-rows">
{i.labour>0&&<div className="invoice-row"><span>Labour</span><span style={{fontFamily:“var(–mono)”}}>£{i.labour}</span></div>}
{i.parts>0&&<div className="invoice-row"><span>Parts</span><span style={{fontFamily:“var(–mono)”}}>£{i.parts}</span></div>}
</div>
{!i.paid?(
<div className="invoice-pay">
<div>
<div style={{fontWeight:700}}>Payment Due</div>
<div style={{fontFamily:“var(–mono)”,fontSize:12,color:“var(–muted)”}}>Click to mark as paid (demo)</div>
</div>
<button className=“btn btn-green” onClick={()=>pay(i.id)}>Pay Now £{i.amount}</button>
</div>
):(
<div style={{marginTop:12,display:“flex”,alignItems:“center”,gap:8,color:“var(–green)”,fontFamily:“var(–mono)”,fontSize:12}}>
<span>✓</span> PAID — Thank you!
</div>
)}
</div>
))}
</div>
);
}

function CustomerBooking() {
const [selected,setSelected]=useState(null);
const [step,setStep]=useState(1);
const [plate,setPlate]=useState(””);
const [date,setDate]=useState(””);
const [notes,setNotes]=useState(””);
const [done,setDone]=useState(false);

if(done) return (
<div style={{textAlign:“center”,padding:“48px 20px”}}>
<div style={{fontSize:48,marginBottom:16}}>✅</div>
<div style={{fontFamily:“var(–display)”,fontSize:28,fontWeight:800,letterSpacing:2,marginBottom:8}}>BOOKING CONFIRMED</div>
<div style={{color:“var(–muted)”,marginBottom:20}}>{SERVICES.find(s=>s.id===selected)?.name} · {plate} · {date}</div>
<button className=“btn btn-orange” onClick={()=>{setDone(false);setStep(1);setSelected(null);setPlate(””);setDate(””);setNotes(””);}}>Book Another</button>
</div>
);

return (
<div>
<div style={{marginBottom:16,fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”,letterSpacing:2,textTransform:“uppercase”}}>Book a Service</div>
{step===1&&(
<>
<div style={{marginBottom:14,fontSize:14,color:“var(–muted)”}}>Select the service you need:</div>
<div className="booking-grid">
{SERVICES.map(s=>(
<div key={s.id} className={`service-option${selected===s.id?" selected":""}`} onClick={()=>setSelected(s.id)}>
<div className="service-icon">{s.icon}</div>
<div className="service-name">{s.name}</div>
<div className="service-price">{s.price}</div>
</div>
))}
</div>
<div style={{marginTop:20,textAlign:“right”}}>
<button className=“btn btn-orange” disabled={!selected} onClick={()=>setStep(2)} style={{opacity:selected?1:0.4}}>Next: Your Details →</button>
</div>
</>
)}
{step===2&&(
<div style={{maxWidth:440}}>
<div style={{marginBottom:16,fontWeight:700,fontSize:16}}>📋 {SERVICES.find(s=>s.id===selected)?.name}</div>
<div style={{display:“flex”,flexDirection:“column”,gap:13}}>
<div><div className="field-lbl">Registration Plate</div><input value={plate} onChange={e=>setPlate(e.target.value.toUpperCase())} placeholder=“AB12 CDE” /></div>
<div><div className="field-lbl">Preferred Date</div><input type=“date” value={date} onChange={e=>setDate(e.target.value)} /></div>
<div><div className="field-lbl">Additional Notes</div><textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder=“Any specific concerns…” /></div>
</div>
<div style={{display:“flex”,gap:10,marginTop:18}}>
<button className=“btn btn-ghost” onClick={()=>setStep(1)}>← Back</button>
<button className=“btn btn-orange” disabled={!plate||!date} onClick={()=>setDone(true)} style={{opacity:plate&&date?1:0.4}}>Confirm Booking ✓</button>
</div>
</div>
)}
</div>
);
}

// ─── APP ─────────────────────────────────────────────────────────────
const ADMIN_NAV = [
{ id:“dashboard”, label:“Dashboard”, icon:“◈”, section:“Overview” },
{ id:“jobs”, label:“Job Cards”, icon:“🔧”, section:“Workshop” },
{ id:“vehicles”, label:“Vehicles”, icon:“🚗”, section:“Workshop” },
{ id:“invoices”, label:“Invoices”, icon:“🧾”, section:“Finance” },
];
const CUSTOMER_NAV = [
{ id:“home”, label:“My Overview”, icon:“◈”, section:“Portal” },
{ id:“tracker”, label:“Job Tracker”, icon:“🔧”, section:“Portal” },
{ id:“invoices”, label:“My Invoices”, icon:“🧾”, section:“Portal” },
{ id:“booking”, label:“Book a Service”, icon:“📅”, section:“Portal” },
];

export default function App() {
const [user, setUser] = useState(null);
const [tab, setTab] = useState(“dashboard”);
const [jobs, setJobs] = useState(JOBS);
const [vehicles, setVehicles] = useState(VEHICLES);
const [invoices, setInvoices] = useState(INVOICES);

const logout = () => { setUser(null); setTab(“dashboard”); };

if (!user) return (
<>
<style>{FONTS}{CSS}</style>
<LoginScreen onLogin={u=>{setUser(u);setTab(u.role===“admin”?“dashboard”:“home”);}} />
</>
);

const isAdmin = user.role === “admin”;
const nav = isAdmin ? ADMIN_NAV : CUSTOMER_NAV;
const sections = […new Set(nav.map(n=>n.section))];
const TITLES = { dashboard:“Dashboard”, jobs:“Job Cards”, vehicles:“Vehicles”, invoices:isAdmin?“Invoices”:“My Invoices”, home:“My Overview”, tracker:“Job Tracker”, booking:“Book a Service” };

return (
<>
<style>{FONTS}{CSS}</style>
<div className="app">
<aside className="sidebar">
<div className="sidebar-logo">
<div className="brand">COMPARE<br /><span>AUTOMOTIVE</span></div>
<div className="role-badge">{isAdmin?“STAFF PORTAL”:“CUSTOMER PORTAL”}</div>
</div>
<nav className="sidebar-nav">
{sections.map(sec=>(
<div key={sec}>
<div className="nav-section">{sec}</div>
{nav.filter(n=>n.section===sec).map(n=>(
<div key={n.id} className={`nav-item${tab===n.id?" active":""}`} onClick={()=>setTab(n.id)}>
<span className="nav-icon">{n.icon}</span>{n.label}
</div>
))}
</div>
))}
</nav>
<div className="sidebar-footer">
<div className="user-info">
<div className="user-name">{user.name}</div>
<div className="user-role">{isAdmin?“Administrator”:“Customer”}</div>
</div>
<button className="signout-btn" onClick={logout}>Sign out</button>
</div>
</aside>
<main className="main">
<div className="topbar">
<div className="topbar-title">{TITLES[tab]||tab}</div>
<div className="topbar-right">
<span style={{fontFamily:“var(–mono)”,fontSize:11,color:“var(–muted)”}}>
{isAdmin?`${jobs.length} jobs · ${vehicles.length} vehicles`:user.email}
</span>
</div>
</div>
<div className="content">
{isAdmin&&tab===“dashboard”&&<Dashboard jobs={jobs} vehicles={vehicles} invoices={invoices} />}
{isAdmin&&tab===“jobs”&&<JobsPage jobs={jobs} setJobs={setJobs} />}
{isAdmin&&tab===“vehicles”&&<VehiclesPage vehicles={vehicles} setVehicles={setVehicles} />}
{isAdmin&&tab===“invoices”&&<InvoicesPage invoices={invoices} setInvoices={setInvoices} />}
{!isAdmin&&tab===“home”&&<CustomerDashboard user={user} jobs={jobs} invoices={invoices} />}
{!isAdmin&&tab===“tracker”&&<CustomerJobTracker user={user} jobs={jobs} />}
{!isAdmin&&tab===“invoices”&&<CustomerInvoices user={user} invoices={invoices} setInvoices={setInvoices} />}
{!isAdmin&&tab===“booking”&&<CustomerBooking />}
</div>
</main>
</div>
</>
);
}
