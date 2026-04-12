import { useState } from ‘react’;

var FONTS = ‘@import url(https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap);’;

var CSS = [
‘* { box-sizing: border-box; margin: 0; padding: 0; }’,
‘:root {’,
’  –bg: #0a0a0a; –surface: #141414; –surface2: #1e1e1e; –border: #2a2a2a;’,
’  –orange: #e8570a; –orange2: #ff6b1a; –orange-dim: rgba(232,87,10,0.12);’,
’  –text: #ffffff; –muted: #888; –muted2: #555;’,
’  –green: #22c55e; –blue: #3b82f6; –red: #ef4444;’,
‘}’,
‘body { background: var(–bg); color: var(–text); font-family: Barlow, sans-serif; min-height: 100vh; }’,
‘.login-screen { min-height:100vh; display:flex; align-items:center; justify-content:center; background: radial-gradient(ellipse at 30% 50%, rgba(232,87,10,0.18) 0%, transparent 60%), var(–bg); padding:20px; }’,
‘.login-card { background:var(–surface); border:1px solid var(–border); border-top:3px solid var(–orange); border-radius:8px; padding:44px 40px; width:100%; max-width:420px; }’,
‘.login-logo { text-align:center; margin-bottom:32px; }’,
‘.brand { font-family: Barlow Condensed, sans-serif; font-size:32px; font-weight:900; letter-spacing:2px; color:var(–text); text-transform:uppercase; line-height:1; }’,
‘.brand span { color:var(–orange); }’,
‘.sub { font-family: JetBrains Mono, monospace; font-size:10px; letter-spacing:4px; color:var(–muted); text-transform:uppercase; margin-top:4px; }’,
‘.login-tabs { display:grid; grid-template-columns:1fr 1fr; gap:4px; background:var(–bg); border-radius:6px; padding:4px; margin-bottom:28px; }’,
‘.login-tab { padding:9px; border-radius:4px; border:none; background:transparent; color:var(–muted); font-size:13px; font-weight:600; cursor:pointer; text-transform:uppercase; letter-spacing:1px; }’,
‘.login-tab.active { background:var(–orange); color:white; }’,
‘.login-form { display:flex; flex-direction:column; gap:14px; }’,
‘.field-lbl { font-family: JetBrains Mono, monospace; font-size:10px; letter-spacing:2px; color:var(–muted); text-transform:uppercase; margin-bottom:5px; }’,
‘input, select, textarea { background:var(–bg); border:1px solid var(–border); border-radius:5px; padding:11px 14px; color:var(–text); font-size:14px; width:100%; outline:none; transition:border 0.15s; }’,
‘input:focus, select:focus, textarea:focus { border-color:var(–orange); }’,
‘textarea { resize:vertical; min-height:80px; }’,
‘select option { background:var(–surface2); }’,
‘.btn { padding:12px 20px; border-radius:5px; border:none; cursor:pointer; font-size:14px; font-weight:700; letter-spacing:1px; text-transform:uppercase; transition:all 0.15s; }’,
‘.btn-orange { background:var(–orange); color:white; }’,
‘.btn-orange:hover { background:var(–orange2); }’,
‘.btn-ghost { background:transparent; color:var(–muted); border:1px solid var(–border); }’,
‘.btn-ghost:hover { border-color:var(–orange); color:var(–orange); }’,
‘.btn-danger { background:var(–red); color:white; }’,
‘.btn-green { background:var(–green); color:#000; font-weight:700; }’,
‘.btn-sm { padding:6px 12px; font-size:12px; }’,
‘.btn-full { width:100%; }’,
‘.login-hint { text-align:center; margin-top:14px; font-size:12px; color:var(–muted); }’,
‘.login-hint b { color:var(–orange); }’,
‘.app { display:flex; min-height:100vh; }’,
‘.sidebar { width:230px; background:var(–surface); border-right:1px solid var(–border); display:flex; flex-direction:column; position:fixed; top:0; left:0; bottom:0; z-index:10; }’,
‘.sidebar-logo { padding:22px 20px 18px; border-bottom:1px solid var(–border); }’,
‘.sidebar-brand { font-family: Barlow Condensed, sans-serif; font-weight:900; font-size:20px; letter-spacing:2px; text-transform:uppercase; line-height:1.1; }’,
‘.sidebar-brand span { color:var(–orange); }’,
‘.role-badge { display:inline-block; margin-top:6px; font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:3px; text-transform:uppercase; padding:2px 8px; border-radius:3px; background:var(–orange-dim); color:var(–orange); }’,
‘.sidebar-nav { flex:1; padding:12px 0; overflow-y:auto; }’,
‘.nav-section { font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:3px; color:var(–muted2); padding:12px 20px 5px; text-transform:uppercase; }’,
‘.nav-item { display:flex; align-items:center; gap:10px; padding:10px 20px; cursor:pointer; font-size:14px; font-weight:600; color:var(–muted); border-left:3px solid transparent; transition:all 0.12s; text-transform:uppercase; }’,
‘.nav-item:hover { color:var(–text); background:var(–surface2); }’,
‘.nav-item.active { color:var(–orange); border-left-color:var(–orange); background:var(–orange-dim); }’,
‘.sidebar-footer { padding:14px 20px; border-top:1px solid var(–border); display:flex; align-items:center; justify-content:space-between; }’,
‘.user-name { font-weight:700; color:var(–text); font-size:13px; }’,
‘.user-role { font-family: JetBrains Mono, monospace; font-size:10px; color:var(–muted); }’,
‘.signout-btn { background:none; border:1px solid var(–border); color:var(–muted); padding:5px 8px; border-radius:4px; cursor:pointer; font-size:11px; }’,
‘.signout-btn:hover { border-color:var(–orange); color:var(–orange); }’,
‘.main { margin-left:230px; flex:1; display:flex; flex-direction:column; }’,
‘.topbar { padding:14px 28px; border-bottom:1px solid var(–border); display:flex; align-items:center; justify-content:space-between; background:var(–surface); position:sticky; top:0; z-index:5; }’,
‘.topbar-title { font-family: Barlow Condensed, sans-serif; font-size:24px; font-weight:800; letter-spacing:3px; text-transform:uppercase; }’,
‘.content { padding:24px 28px; flex:1; }’,
‘.stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:24px; }’,
‘.stat-card { background:var(–surface); border:1px solid var(–border); border-radius:6px; padding:18px; position:relative; overflow:hidden; }’,
‘.stat-card::after { content:“x”; color:transparent; position:absolute; top:0; left:0; right:0; height:3px; background:var(–orange); }’,
‘.stat-card.green::after { background:var(–green); }’,
‘.stat-card.blue::after { background:var(–blue); }’,
‘.stat-card.red::after { background:var(–red); }’,
‘.stat-label { font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:3px; color:var(–muted); text-transform:uppercase; margin-bottom:10px; }’,
‘.stat-value { font-family: Barlow Condensed, sans-serif; font-size:40px; font-weight:800; line-height:1; color:var(–orange); }’,
‘.stat-card.green .stat-value { color:var(–green); }’,
‘.stat-card.blue .stat-value { color:var(–blue); }’,
‘.stat-card.red .stat-value { color:var(–red); }’,
‘.stat-sub { font-size:12px; color:var(–muted); margin-top:5px; }’,
‘.table-wrap { background:var(–surface); border:1px solid var(–border); border-radius:6px; overflow:hidden; }’,
‘.table-head { padding:14px 18px; border-bottom:1px solid var(–border); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; }’,
‘.table-head-title { font-family: Barlow Condensed, sans-serif; font-size:18px; font-weight:800; letter-spacing:2px; text-transform:uppercase; }’,
‘.search { background:var(–bg); border:1px solid var(–border); border-radius:4px; padding:8px 12px; color:var(–text); font-size:12px; width:200px; outline:none; }’,
‘.search:focus { border-color:var(–orange); }’,
‘table { width:100%; border-collapse:collapse; }’,
‘thead tr { border-bottom:1px solid var(–border); }’,
‘th { text-align:left; padding:10px 14px; font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:2px; color:var(–muted); text-transform:uppercase; font-weight:500; white-space:nowrap; }’,
‘td { padding:12px 14px; font-size:13px; border-bottom:1px solid #1a1a1a; }’,
‘tbody tr:hover { background:rgba(255,255,255,0.02); }’,
‘tbody tr:last-child td { border-bottom:none; }’,
‘.badge { display:inline-flex; align-items:center; padding:3px 8px; border-radius:3px; font-family: JetBrains Mono, monospace; font-size:10px; letter-spacing:1px; font-weight:500; text-transform:uppercase; }’,
‘.badge-waiting { background:rgba(232,87,10,0.15); color:var(–orange); }’,
‘.badge-progress { background:rgba(59,130,246,0.15); color:var(–blue); }’,
‘.badge-done { background:rgba(34,197,94,0.15); color:var(–green); }’,
‘.badge-cancelled { background:rgba(239,68,68,0.15); color:var(–red); }’,
‘.badge-paid { background:rgba(34,197,94,0.15); color:var(–green); }’,
‘.badge-unpaid { background:rgba(239,68,68,0.15); color:var(–red); }’,
‘.plate { font-family: Barlow Condensed, sans-serif; font-size:16px; font-weight:800; letter-spacing:3px; color:var(–orange); }’,
‘.overlay { position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:100; display:flex; align-items:center; justify-content:center; padding:20px; }’,
‘.modal { background:var(–surface); border:1px solid var(–border); border-top:3px solid var(–orange); border-radius:8px; width:100%; max-width:500px; max-height:90vh; overflow-y:auto; }’,
‘.modal-hd { padding:18px 22px; border-bottom:1px solid var(–border); display:flex; align-items:center; justify-content:space-between; }’,
‘.modal-hd h2 { font-family: Barlow Condensed, sans-serif; font-size:20px; font-weight:800; letter-spacing:2px; text-transform:uppercase; }’,
‘.modal-x { background:none; border:none; color:var(–muted); cursor:pointer; font-size:22px; line-height:1; }’,
‘.modal-bd { padding:18px 22px; display:flex; flex-direction:column; gap:13px; }’,
‘.modal-ft { padding:14px 22px; border-top:1px solid var(–border); display:flex; justify-content:flex-end; gap:8px; }’,
‘.field-row { display:grid; grid-template-columns:1fr 1fr; gap:12px; }’,
‘.two-col { display:grid; grid-template-columns:1fr 1fr; gap:14px; }’,
‘.panel { background:var(–surface); border:1px solid var(–border); border-radius:6px; overflow:hidden; }’,
‘.panel-hd { padding:13px 16px; border-bottom:1px solid var(–border); font-family: Barlow Condensed, sans-serif; font-size:16px; font-weight:800; letter-spacing:2px; text-transform:uppercase; display:flex; align-items:center; gap:8px; }’,
‘.panel-hd span { color:var(–orange); }’,
‘.panel-bd { padding:8px 12px; }’,
‘.act-item { display:flex; gap:10px; padding:9px 4px; border-bottom:1px solid #1a1a1a; align-items:flex-start; }’,
‘.act-item:last-child { border-bottom:none; }’,
‘.act-dot { width:7px; height:7px; border-radius:50%; margin-top:5px; flex-shrink:0; }’,
‘.act-text { font-size:12px; line-height:1.5; }’,
‘.act-time { font-family: JetBrains Mono, monospace; font-size:10px; color:var(–muted); }’,
‘.v-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px; }’,
‘.v-card { background:var(–surface); border:1px solid var(–border); border-radius:6px; padding:18px; position:relative; }’,
‘.v-card:hover { border-color:#444; }’,
‘.v-card-actions { position:absolute; top:14px; right:14px; display:flex; gap:6px; }’,
‘.v-plate { font-family: Barlow Condensed, sans-serif; font-size:22px; font-weight:800; letter-spacing:4px; color:var(–orange); margin-bottom:4px; }’,
‘.v-make { font-size:13px; font-weight:600; margin-bottom:2px; }’,
‘.v-owner { font-family: JetBrains Mono, monospace; font-size:11px; color:var(–muted); margin-bottom:12px; }’,
‘.v-meta { display:flex; gap:18px; }’,
‘.v-meta-item label { font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:2px; color:var(–muted); text-transform:uppercase; display:block; margin-bottom:2px; }’,
‘.portal-hero { background:radial-gradient(ellipse at right, rgba(232,87,10,0.15), transparent 60%); border:1px solid var(–border); border-radius:8px; padding:24px 28px; margin-bottom:20px; display:flex; align-items:center; justify-content:space-between; }’,
‘.portal-hero-text h2 { font-family: Barlow Condensed, sans-serif; font-size:28px; font-weight:800; letter-spacing:2px; text-transform:uppercase; }’,
‘.portal-hero-text p { color:var(–muted); font-size:14px; margin-top:4px; }’,
‘.portal-hero-badge { font-family: JetBrains Mono, monospace; font-size:11px; color:var(–orange); background:var(–orange-dim); padding:6px 14px; border-radius:4px; border:1px solid rgba(232,87,10,0.3); }’,
‘.job-tracker { background:var(–surface); border:1px solid var(–border); border-radius:6px; overflow:hidden; margin-bottom:16px; }’,
‘.job-tracker-hd { padding:16px 20px; border-bottom:1px solid var(–border); display:flex; align-items:center; justify-content:space-between; }’,
‘.job-tracker-title { font-family: Barlow Condensed, sans-serif; font-size:18px; font-weight:800; letter-spacing:2px; text-transform:uppercase; }’,
‘.job-detail { padding:18px 20px; }’,
‘.job-detail-plate { font-family: Barlow Condensed, sans-serif; font-size:28px; font-weight:800; letter-spacing:5px; color:var(–orange); margin-bottom:4px; }’,
‘.job-detail-vehicle { font-size:15px; font-weight:600; margin-bottom:14px; }’,
‘.progress-bar { background:var(–bg); border-radius:4px; height:6px; margin:10px 0 16px; overflow:hidden; }’,
‘.progress-fill { height:100%; border-radius:4px; background:linear-gradient(90deg,var(–orange),var(–orange2)); transition:width 0.5s; }’,
‘.status-steps { display:flex; margin-bottom:16px; }’,
‘.step { flex:1; text-align:center; font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:1px; color:var(–muted); text-transform:uppercase; padding:6px 4px; border-bottom:2px solid var(–border); }’,
‘.step.done { color:var(–green); border-bottom-color:var(–green); }’,
‘.step.active { color:var(–orange); border-bottom-color:var(–orange); }’,
‘.detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }’,
‘.detail-item label { font-family: JetBrains Mono, monospace; font-size:9px; letter-spacing:2px; color:var(–muted); text-transform:uppercase; display:block; margin-bottom:3px; }’,
‘.detail-item span { font-size:13px; font-weight:500; }’,
‘.booking-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }’,
‘.service-option { background:var(–surface); border:2px solid var(–border); border-radius:6px; padding:16px; cursor:pointer; transition:all 0.15s; }’,
‘.service-option:hover { border-color:#444; }’,
‘.service-option.selected { border-color:var(–orange); background:var(–orange-dim); }’,
‘.service-name { font-weight:700; font-size:14px; margin-bottom:3px; }’,
‘.service-price { font-family: JetBrains Mono, monospace; font-size:12px; color:var(–orange); }’,
‘.invoice-card { background:var(–surface); border:1px solid var(–border); border-radius:6px; padding:20px; margin-bottom:12px; }’,
‘.invoice-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }’,
‘.invoice-id { font-family: JetBrains Mono, monospace; font-size:12px; color:var(–muted); }’,
‘.invoice-total { font-family: Barlow Condensed, sans-serif; font-size:28px; font-weight:800; color:var(–orange); }’,
‘.invoice-rows { border-top:1px solid var(–border); padding-top:12px; }’,
‘.invoice-row { display:flex; justify-content:space-between; padding:6px 0; font-size:13px; border-bottom:1px solid #1a1a1a; }’,
‘.invoice-pay { background:var(–orange-dim); border:1px solid rgba(232,87,10,0.3); border-radius:6px; padding:14px 18px; display:flex; align-items:center; justify-content:space-between; margin-top:14px; }’,
‘.empty { text-align:center; padding:44px; color:var(–muted); }’,
‘::-webkit-scrollbar { width:5px; }’,
‘::-webkit-scrollbar-track { background:var(–bg); }’,
‘::-webkit-scrollbar-thumb { background:var(–border); border-radius:3px; }’,
].join(’\n’);

var JOBS = [
{ id: 1, plate: ‘CA21 AUT’, customer: ‘James Harlow’, email: ‘james@email.com’, vehicle: ‘Ford Focus 2018’, service: ‘Full Service + MOT’, tech: ‘Mike R.’, status: ‘In Progress’, date: ‘2026-04-10’, notes: ‘Check brake pads’, amount: 320 },
{ id: 2, plate: ‘XY67 FGH’, customer: ‘Sarah Bloom’, email: ‘sarah@email.com’, vehicle: ‘VW Golf 2020’, service: ‘Oil Change’, tech: ‘Dave S.’, status: ‘Waiting’, date: ‘2026-04-11’, notes: ‘’, amount: 95 },
{ id: 3, plate: ‘PQ33 JKL’, customer: ‘Tom Green’, email: ‘tom@email.com’, vehicle: ‘BMW 3 Series 2019’, service: ‘Tyre Replacement’, tech: ‘Mike R.’, status: ‘Done’, date: ‘2026-04-09’, notes: ‘All 4 tyres’, amount: 480 },
{ id: 4, plate: ‘MN55 OPQ’, customer: ‘Nina Patel’, email: ‘nina@email.com’, vehicle: ‘Toyota Yaris 2021’, service: ‘Brake Inspection’, tech: ‘Lee W.’, status: ‘Done’, date: ‘2026-04-08’, notes: ‘’, amount: 95 },
{ id: 5, plate: ‘RS89 TUV’, customer: ‘Carl Banks’, email: ‘carl@email.com’, vehicle: ‘Honda Civic 2017’, service: ‘Clutch Replacement’, tech: ‘Dave S.’, status: ‘Waiting’, date: ‘2026-04-11’, notes: ‘Parts ordered’, amount: 650 },
];

var VEHICLES = [
{ id: 1, plate: ‘CA21 AUT’, make: ‘Ford’, model: ‘Focus’, year: 2018, owner: ‘James Harlow’, phone: ‘07700 900123’, email: ‘james@email.com’, mileage: ‘64,200’ },
{ id: 2, plate: ‘XY67 FGH’, make: ‘Volkswagen’, model: ‘Golf’, year: 2020, owner: ‘Sarah Bloom’, phone: ‘07700 900456’, email: ‘sarah@email.com’, mileage: ‘28,100’ },
{ id: 3, plate: ‘PQ33 JKL’, make: ‘BMW’, model: ‘3 Series’, year: 2019, owner: ‘Tom Green’, phone: ‘07700 900789’, email: ‘tom@email.com’, mileage: ‘51,600’ },
{ id: 4, plate: ‘MN55 OPQ’, make: ‘Toyota’, model: ‘Yaris’, year: 2021, owner: ‘Nina Patel’, phone: ‘07700 900321’, email: ‘nina@email.com’, mileage: ‘19,400’ },
{ id: 5, plate: ‘RS89 TUV’, make: ‘Honda’, model: ‘Civic’, year: 2017, owner: ‘Carl Banks’, phone: ‘07700 900654’, email: ‘carl@email.com’, mileage: ‘82,900’ },
];

var INVOICES = [
{ id: 1, customer: ‘Tom Green’, plate: ‘PQ33 JKL’, email: ‘tom@email.com’, service: ‘Tyre Replacement’, labour: 180, parts: 300, amount: 480, paid: true, date: ‘2026-04-09’ },
{ id: 2, customer: ‘Nina Patel’, plate: ‘MN55 OPQ’, email: ‘nina@email.com’, service: ‘Brake Inspection’, labour: 95, parts: 0, amount: 95, paid: true, date: ‘2026-04-08’ },
{ id: 3, customer: ‘James Harlow’, plate: ‘CA21 AUT’, email: ‘james@email.com’, service: ‘Full Service + MOT’, labour: 120, parts: 200, amount: 320, paid: false, date: ‘2026-04-10’ },
];

var SERVICES = [
{ id: 1, name: ‘Full Service’, price: ‘149’ },
{ id: 2, name: ‘MOT Test’, price: ‘54.85’ },
{ id: 3, name: ‘Tyre Replacement’, price: ‘80 per tyre’ },
{ id: 4, name: ‘Brake Service’, price: ‘95’ },
{ id: 5, name: ‘Oil Change’, price: ‘59’ },
{ id: 6, name: ‘Battery Check’, price: ‘25’ },
];

var TECHS = [‘Mike R.’, ‘Dave S.’, ‘Lee W.’, ‘Anna T.’];
var STATUSES = [‘Waiting’, ‘In Progress’, ‘Done’, ‘Cancelled’];
var STATUS_CLASS = { ‘Waiting’: ‘badge-waiting’, ‘In Progress’: ‘badge-progress’, ‘Done’: ‘badge-done’, ‘Cancelled’: ‘badge-cancelled’ };

var USERS = {
‘admin’: { name: ‘Admin’, role: ‘admin’, email: ‘admin@compareautomotive.co.uk’ },
‘james@email.com’: { name: ‘James Harlow’, role: ‘customer’, email: ‘james@email.com’ },
‘tom@email.com’: { name: ‘Tom Green’, role: ‘customer’, email: ‘tom@email.com’ },
‘nina@email.com’: { name: ‘Nina Patel’, role: ‘customer’, email: ‘nina@email.com’ },
‘sarah@email.com’: { name: ‘Sarah Bloom’, role: ‘customer’, email: ‘sarah@email.com’ },
‘carl@email.com’: { name: ‘Carl Banks’, role: ‘customer’, email: ‘carl@email.com’ },
};

var ADMIN_NAV = [
{ id: ‘dashboard’, label: ‘Dashboard’, section: ‘Overview’ },
{ id: ‘jobs’, label: ‘Job Cards’, section: ‘Workshop’ },
{ id: ‘vehicles’, label: ‘Vehicles’, section: ‘Workshop’ },
{ id: ‘invoices’, label: ‘Invoices’, section: ‘Finance’ },
];

var CUSTOMER_NAV = [
{ id: ‘home’, label: ‘My Overview’, section: ‘Portal’ },
{ id: ‘tracker’, label: ‘Job Tracker’, section: ‘Portal’ },
{ id: ‘invoices’, label: ‘My Invoices’, section: ‘Portal’ },
{ id: ‘booking’, label: ‘Book a Service’, section: ‘Portal’ },
];

var PAGE_TITLES = { dashboard: ‘Dashboard’, jobs: ‘Job Cards’, vehicles: ‘Vehicles’, invoices: ‘Invoices’, home: ‘My Overview’, tracker: ‘Job Tracker’, booking: ‘Book a Service’ };

function nid(arr) { return arr.length ? Math.max.apply(null, arr.map(function(x) { return x.id; })) + 1 : 1; }
function el(tag, props) { var a = [tag, props || null]; for (var i = 2; i < arguments.length; i++) a.push(arguments[i]); return React.createElement.apply(React, a); }
function Bdg(p) { return el(‘span’, { className: ’badge ’ + (STATUS_CLASS[p.s] || ‘badge-waiting’) }, p.s); }
function Lbl(p) { return el(‘div’, null, el(‘div’, { className: ‘field-lbl’ }, p.label), p.children); }

function upd(obj, k, v) { var n = Object.assign({}, obj); n[k] = v; return n; }

function LoginScreen(p) {
var t = useState(‘admin’); var tab = t[0]; var setTab = t[1];
var e = useState(’’); var email = e[0]; var setEmail = e[1];
var pw = useState(’’); var pass = pw[0]; var setPass = pw[1];
var er = useState(’’); var err = er[0]; var setErr = er[1];
function go() {
if (tab === ‘admin’) { if (email === ‘admin’ && pass === ‘admin’) p.onLogin(USERS[‘admin’]); else setErr(‘Use admin / admin’); }
else { var u = USERS[email.toLowerCase()]; if (u && u.role === ‘customer’ && pass === ‘password’) p.onLogin(u); else setErr(‘Use james@email.com / password’); }
}
return el(‘div’, { className: ‘login-screen’ },
el(‘div’, { className: ‘login-card’ },
el(‘div’, { className: ‘login-logo’ },
el(‘div’, { className: ‘brand’ }, ‘COMPARE ‘, el(‘span’, null, ‘AUTOMOTIVE’)),
el(‘div’, { className: ‘sub’ }, ‘Management Portal’)
),
el(‘div’, { className: ‘login-tabs’ },
el(‘button’, { className: ‘login-tab’ + (tab === ‘admin’ ? ’ active’ : ‘’), onClick: function() { setTab(‘admin’); setErr(’’); } }, ‘Staff Login’),
el(‘button’, { className: ‘login-tab’ + (tab === ‘customer’ ? ’ active’ : ‘’), onClick: function() { setTab(‘customer’); setErr(’’); } }, ‘Customer Login’)
),
el(‘div’, { className: ‘login-form’ },
el(‘div’, null, el(‘div’, { className: ‘field-lbl’ }, tab === ‘admin’ ? ‘Username’ : ‘Email’), el(‘input’, { value: email, placeholder: tab === ‘admin’ ? ‘admin’ : ‘your@email.com’, onChange: function(e) { setEmail(e.target.value); }, onKeyDown: function(e) { if (e.key === ‘Enter’) go(); } })),
el(‘div’, null, el(‘div’, { className: ‘field-lbl’ }, ‘Password’), el(‘input’, { type: ‘password’, value: pass, placeholder: ‘password’, onChange: function(e) { setPass(e.target.value); }, onKeyDown: function(e) { if (e.key === ‘Enter’) go(); } })),
err ? el(‘div’, { style: { color: ‘var(–red)’, fontSize: 12 } }, err) : null,
el(‘button’, { className: ‘btn btn-orange btn-full’, onClick: go }, ‘Sign In’)
),
el(‘div’, { className: ‘login-hint’ }, tab === ‘admin’ ? el(‘span’, null, el(‘b’, null, ‘admin’), ’ / ’, el(‘b’, null, ‘admin’)) : el(‘span’, null, el(‘b’, null, ‘james@email.com’), ’ / ’, el(‘b’, null, ‘password’)))
)
);
}

function Modal(p) {
return el(‘div’, { className: ‘overlay’, onClick: function(e) { if (e.target === e.currentTarget) p.onClose(); } },
el(‘div’, { className: ‘modal’ },
el(‘div’, { className: ‘modal-hd’ }, el(‘h2’, null, p.title), el(‘button’, { className: ‘modal-x’, onClick: p.onClose }, ‘X’)),
el(‘div’, { className: ‘modal-bd’ }, p.children),
el(‘div’, { className: ‘modal-ft’ }, el(‘button’, { className: ‘btn btn-ghost’, onClick: p.onClose }, ‘Cancel’), el(‘button’, { className: ‘btn btn-orange’, onClick: p.onSave }, ‘Save’))
)
);
}

function JobModal(p) {
var empty = { plate: ‘’, customer: ‘’, email: ‘’, vehicle: ‘’, service: ‘’, tech: TECHS[0], status: ‘Waiting’, date: new Date().toISOString().slice(0, 10), notes: ‘’, amount: ‘’ };
var fs = useState(p.job || empty); var f = fs[0]; var setF = fs[1];
function s(k, v) { setF(function(x) { return upd(x, k, v); }); }
function save() { p.onSave(Object.assign({}, f, { amount: parseFloat(f.amount) || 0 })); }
return el(Modal, { title: p.job ? ‘Edit Job’ : ‘New Job’, onClose: p.onClose, onSave: save },
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Reg Plate’ }, el(‘input’, { value: f.plate, placeholder: ‘AB12 CDE’, onChange: function(e) { s(‘plate’, e.target.value.toUpperCase()); } })),
el(Lbl, { label: ‘Date’ }, el(‘input’, { type: ‘date’, value: f.date, onChange: function(e) { s(‘date’, e.target.value); } }))
),
el(Lbl, { label: ‘Customer Name’ }, el(‘input’, { value: f.customer, onChange: function(e) { s(‘customer’, e.target.value); } })),
el(Lbl, { label: ‘Customer Email’ }, el(‘input’, { value: f.email, onChange: function(e) { s(‘email’, e.target.value); } })),
el(Lbl, { label: ‘Vehicle’ }, el(‘input’, { value: f.vehicle, onChange: function(e) { s(‘vehicle’, e.target.value); } })),
el(Lbl, { label: ‘Service’ }, el(‘input’, { value: f.service, onChange: function(e) { s(‘service’, e.target.value); } })),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Technician’ }, el(‘select’, { value: f.tech, onChange: function(e) { s(‘tech’, e.target.value); } }, TECHS.map(function(t) { return el(‘option’, { key: t, value: t }, t); }))),
el(Lbl, { label: ‘Status’ }, el(‘select’, { value: f.status, onChange: function(e) { s(‘status’, e.target.value); } }, STATUSES.map(function(st) { return el(‘option’, { key: st, value: st }, st); })))
),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Amount (GBP)’ }, el(‘input’, { type: ‘number’, value: f.amount, onChange: function(e) { s(‘amount’, e.target.value); } })),
el(Lbl, { label: ‘Notes’ }, el(‘input’, { value: f.notes, onChange: function(e) { s(‘notes’, e.target.value); } }))
)
);
}

function VehicleModal(p) {
var empty = { plate: ‘’, make: ‘’, model: ‘’, year: 2024, owner: ‘’, phone: ‘’, email: ‘’, mileage: ‘’ };
var fs = useState(p.vehicle || empty); var f = fs[0]; var setF = fs[1];
function s(k, v) { setF(function(x) { return upd(x, k, v); }); }
return el(Modal, { title: p.vehicle ? ‘Edit Vehicle’ : ‘Add Vehicle’, onClose: p.onClose, onSave: function() { p.onSave(f); } },
el(Lbl, { label: ‘Registration’ }, el(‘input’, { value: f.plate, onChange: function(e) { s(‘plate’, e.target.value.toUpperCase()); } })),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Make’ }, el(‘input’, { value: f.make, onChange: function(e) { s(‘make’, e.target.value); } })),
el(Lbl, { label: ‘Model’ }, el(‘input’, { value: f.model, onChange: function(e) { s(‘model’, e.target.value); } }))
),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Year’ }, el(‘input’, { type: ‘number’, value: f.year, onChange: function(e) { s(‘year’, e.target.value); } })),
el(Lbl, { label: ‘Mileage’ }, el(‘input’, { value: f.mileage, onChange: function(e) { s(‘mileage’, e.target.value); } }))
),
el(Lbl, { label: ‘Owner’ }, el(‘input’, { value: f.owner, onChange: function(e) { s(‘owner’, e.target.value); } })),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Phone’ }, el(‘input’, { value: f.phone, onChange: function(e) { s(‘phone’, e.target.value); } })),
el(Lbl, { label: ‘Email’ }, el(‘input’, { value: f.email, onChange: function(e) { s(‘email’, e.target.value); } }))
)
);
}

function InvoiceModal(p) {
var empty = { customer: ‘’, plate: ‘’, email: ‘’, service: ‘’, labour: ‘’, parts: ‘’, paid: false, date: new Date().toISOString().slice(0, 10) };
var fs = useState(p.invoice || empty); var f = fs[0]; var setF = fs[1];
function s(k, v) { setF(function(x) { return upd(x, k, v); }); }
var total = (parseFloat(f.labour) || 0) + (parseFloat(f.parts) || 0);
function save() { p.onSave(Object.assign({}, f, { amount: total, labour: parseFloat(f.labour) || 0, parts: parseFloat(f.parts) || 0 })); }
return el(Modal, { title: p.invoice ? ‘Edit Invoice’ : ‘New Invoice’, onClose: p.onClose, onSave: save },
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Customer’ }, el(‘input’, { value: f.customer, onChange: function(e) { s(‘customer’, e.target.value); } })),
el(Lbl, { label: ‘Plate’ }, el(‘input’, { value: f.plate, onChange: function(e) { s(‘plate’, e.target.value.toUpperCase()); } }))
),
el(Lbl, { label: ‘Email’ }, el(‘input’, { value: f.email, onChange: function(e) { s(‘email’, e.target.value); } })),
el(Lbl, { label: ‘Service’ }, el(‘input’, { value: f.service, onChange: function(e) { s(‘service’, e.target.value); } })),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Labour GBP’ }, el(‘input’, { type: ‘number’, value: f.labour, onChange: function(e) { s(‘labour’, e.target.value); } })),
el(Lbl, { label: ‘Parts GBP’ }, el(‘input’, { type: ‘number’, value: f.parts, onChange: function(e) { s(‘parts’, e.target.value); } }))
),
el(‘div’, { style: { color: ‘var(–orange)’, fontSize: 12 } }, ’Total: GBP ’ + total.toFixed(2)),
el(‘div’, { className: ‘field-row’ },
el(Lbl, { label: ‘Date’ }, el(‘input’, { type: ‘date’, value: f.date, onChange: function(e) { s(‘date’, e.target.value); } })),
el(Lbl, { label: ‘Status’ }, el(‘select’, { value: f.paid ? ‘paid’ : ‘unpaid’, onChange: function(e) { s(‘paid’, e.target.value === ‘paid’); } }, el(‘option’, { value: ‘unpaid’ }, ‘Unpaid’), el(‘option’, { value: ‘paid’ }, ‘Paid’)))
)
);
}

function Dashboard(p) {
var active = p.jobs.filter(function(j) { return j.status === ‘In Progress’; }).length;
var waiting = p.jobs.filter(function(j) { return j.status === ‘Waiting’; }).length;
var rev = p.invoices.filter(function(i) { return i.paid; }).reduce(function(s, i) { return s + i.amount; }, 0);
var out = p.invoices.filter(function(i) { return !i.paid; }).reduce(function(s, i) { return s + i.amount; }, 0);
var recent = p.jobs.slice().sort(function(a, b) { return b.id - a.id; }).slice(0, 6);
return el(‘div’, null,
el(‘div’, { className: ‘stats-grid’ },
el(‘div’, { className: ‘stat-card blue’ }, el(‘div’, { className: ‘stat-label’ }, ‘Active Jobs’), el(‘div’, { className: ‘stat-value’ }, active), el(‘div’, { className: ‘stat-sub’ }, ‘In workshop’)),
el(‘div’, { className: ‘stat-card’ }, el(‘div’, { className: ‘stat-label’ }, ‘Awaiting’), el(‘div’, { className: ‘stat-value’ }, waiting), el(‘div’, { className: ‘stat-sub’ }, ‘Queued’)),
el(‘div’, { className: ‘stat-card green’ }, el(‘div’, { className: ‘stat-label’ }, ‘Revenue’), el(‘div’, { className: ‘stat-value’ }, ’GBP ’ + rev.toLocaleString()), el(‘div’, { className: ‘stat-sub’ }, ‘Collected’)),
el(‘div’, { className: ‘stat-card red’ }, el(‘div’, { className: ‘stat-label’ }, ‘Outstanding’), el(‘div’, { className: ‘stat-value’ }, ’GBP ’ + out.toLocaleString()), el(‘div’, { className: ‘stat-sub’ }, ‘Unpaid’))
),
el(‘div’, { className: ‘two-col’ },
el(‘div’, { className: ‘panel’ },
el(‘div’, { className: ‘panel-hd’ }, ’Recent ’, el(‘span’, null, ‘Jobs’)),
el(‘div’, { className: ‘panel-bd’ }, recent.map(function(j) {
return el(‘div’, { className: ‘act-item’, key: j.id },
el(‘div’, { className: ‘act-dot’, style: { background: j.status === ‘Done’ ? ‘var(–green)’ : j.status === ‘In Progress’ ? ‘var(–blue)’ : ‘var(–orange)’ } }),
el(‘div’, null, el(‘div’, { className: ‘act-text’ }, el(‘strong’, null, j.plate), ’ - ’ + j.service), el(‘div’, { className: ‘act-time’ }, j.customer + ’ - ’ + j.date))
);
}))
),
el(‘div’, { className: ‘panel’ },
el(‘div’, { className: ‘panel-hd’ }, ’Fleet ’, el(‘span’, null, ‘Overview’)),
el(‘div’, { className: ‘panel-bd’ }, p.vehicles.map(function(v) {
return el(‘div’, { className: ‘act-item’, key: v.id },
el(‘div’, { className: ‘act-dot’, style: { background: ‘var(–muted2)’ } }),
el(‘div’, null, el(‘div’, { className: ‘act-text’ }, el(‘strong’, null, v.plate), ’ - ’ + v.year + ’ ’ + v.make + ’ ’ + v.model), el(‘div’, { className: ‘act-time’ }, v.owner))
);
}))
)
)
);
}

function JobsPage(p) {
var ss = useState(’’); var search = ss[0]; var setSearch = ss[1];
var ms = useState(null); var modal = ms[0]; var setModal = ms[1];
var filtered = p.jobs.filter(function(j) { return j.plate.toLowerCase().indexOf(search.toLowerCase()) > -1 || j.customer.toLowerCase().indexOf(search.toLowerCase()) > -1; });
function save(f) {
if (modal === ‘new’) p.setJobs(function(j) { return j.concat([Object.assign({}, f, { id: nid(j) })]); });
else p.setJobs(function(j) { return j.map(function(x) { return x.id === modal.id ? Object.assign({}, f, { id: modal.id }) : x; }); });
setModal(null);
}
return el(‘div’, null,
modal ? el(JobModal, { job: modal === ‘new’ ? null : modal, onClose: function() { setModal(null); }, onSave: save }) : null,
el(‘div’, { className: ‘table-wrap’ },
el(‘div’, { className: ‘table-head’ },
el(‘span’, { className: ‘table-head-title’ }, ‘Job Cards’),
el(‘div’, { style: { display: ‘flex’, gap: 10 } },
el(‘input’, { className: ‘search’, placeholder: ‘Search…’, value: search, onChange: function(e) { setSearch(e.target.value); } }),
el(‘button’, { className: ‘btn btn-orange’, onClick: function() { setModal(‘new’); } }, ‘+ New Job’)
)
),
el(‘table’, null,
el(‘thead’, null, el(‘tr’, null, [‘Plate’,‘Customer’,‘Vehicle’,‘Service’,‘Tech’,‘Status’,‘Date’,‘Amount’,’’].map(function(h) { return el(‘th’, { key: h }, h); }))),
el(‘tbody’, null, filtered.length === 0
? el(‘tr’, null, el(‘td’, { colSpan: 9 }, el(‘div’, { className: ‘empty’ }, ‘No jobs found.’)))
: filtered.map(function(j) {
return el(‘tr’, { key: j.id },
el(‘td’, null, el(‘span’, { className: ‘plate’ }, j.plate)),
el(‘td’, null, j.customer),
el(‘td’, { style: { color: ‘var(–muted)’, fontSize: 12 } }, j.vehicle),
el(‘td’, null, j.service),
el(‘td’, { style: { fontSize: 11, color: ‘var(–muted)’ } }, j.tech),
el(‘td’, null, el(Bdg, { s: j.status })),
el(‘td’, { style: { fontSize: 11, color: ‘var(–muted)’ } }, j.date),
el(‘td’, { style: { fontWeight: 600, color: ‘var(–orange)’ } }, ’GBP ’ + j.amount),
el(‘td’, null, el(‘div’, { style: { display: ‘flex’, gap: 6 } },
el(‘button’, { className: ‘btn btn-ghost btn-sm’, onClick: function() { setModal(j); } }, ‘Edit’),
el(‘button’, { className: ‘btn btn-danger btn-sm’, onClick: function() { p.setJobs(function(prev) { return prev.filter(function(x) { return x.id !== j.id; }); }); } }, ‘X’)
))
);
})
)
)
)
);
}

function VehiclesPage(p) {
var ss = useState(’’); var search = ss[0]; var setSearch = ss[1];
var ms = useState(null); var modal = ms[0]; var setModal = ms[1];
var filtered = p.vehicles.filter(function(v) { return v.plate.toLowerCase().indexOf(search.toLowerCase()) > -1 || v.owner.toLowerCase().indexOf(search.toLowerCase()) > -1; });
function save(f) {
if (modal === ‘new’) p.setVehicles(function(v) { return v.concat([Object.assign({}, f, { id: nid(v) })]); });
else p.setVehicles(function(v) { return v.map(function(x) { return x.id === modal.id ? Object.assign({}, f, { id: modal.id }) : x; }); });
setModal(null);
}
return el(‘div’, null,
modal ? el(VehicleModal, { vehicle: modal === ‘new’ ? null : modal, onClose: function() { setModal(null); }, onSave: save }) : null,
el(‘div’, { style: { display: ‘flex’, justifyContent: ‘space-between’, alignItems: ‘center’, marginBottom: 16 } },
el(‘input’, { className: ‘search’, placeholder: ‘Search vehicles…’, value: search, onChange: function(e) { setSearch(e.target.value); }, style: { width: 240 } }),
el(‘button’, { className: ‘btn btn-orange’, onClick: function() { setModal(‘new’); } }, ‘+ Add Vehicle’)
),
filtered.length === 0
? el(‘div’, { className: ‘empty’ }, ‘No vehicles found.’)
: el(‘div’, { className: ‘v-grid’ }, filtered.map(function(v) {
return el(‘div’, { className: ‘v-card’, key: v.id },
el(‘div’, { className: ‘v-card-actions’ },
el(‘button’, { className: ‘btn btn-ghost btn-sm’, onClick: function() { setModal(v); } }, ‘Edit’),
el(‘button’, { className: ‘btn btn-danger btn-sm’, onClick: function() { p.setVehicles(function(x) { return x.filter(function(y) { return y.id !== v.id; }); }); } }, ‘X’)
),
el(‘div’, { className: ‘v-plate’ }, v.plate),
el(‘div’, { className: ‘v-make’ }, v.year + ’ ’ + v.make + ’ ’ + v.model),
el(‘div’, { className: ‘v-owner’ }, v.owner),
el(‘div’, { className: ‘v-meta’ },
el(‘div’, { className: ‘v-meta-item’ }, el(‘label’, null, ‘Phone’), el(‘span’, null, v.phone)),
el(‘div’, { className: ‘v-meta-item’ }, el(‘label’, null, ‘Mileage’), el(‘span’, null, v.mileage))
)
);
}))
);
}

function InvoicesPage(p) {
var ss = useState(’’); var search = ss[0]; var setSearch = ss[1];
var ms = useState(null); var modal = ms[0]; var setModal = ms[1];
var filtered = p.invoices.filter(function(i) { return i.customer.toLowerCase().indexOf(search.toLowerCase()) > -1 || i.plate.toLowerCase().indexOf(search.toLowerCase()) > -1; });
var total = filtered.reduce(function(s, i) { return s + i.amount; }, 0);
var collected = filtered.filter(function(i) { return i.paid; }).reduce(function(s, i) { return s + i.amount; }, 0);
function save(f) {
if (modal === ‘new’) p.setInvoices(function(v) { return v.concat([Object.assign({}, f, { id: nid(v) })]); });
else p.setInvoices(function(v) { return v.map(function(x) { return x.id === modal.id ? Object.assign({}, f, { id: modal.id }) : x; }); });
setModal(null);
}
return el(‘div’, null,
modal ? el(InvoiceModal, { invoice: modal === ‘new’ ? null : modal, onClose: function() { setModal(null); }, onSave: save }) : null,
el(‘div’, { className: ‘stats-grid’, style: { gridTemplateColumns: ‘repeat(3,1fr)’, marginBottom: 16 } },
el(‘div’, { className: ‘stat-card green’ }, el(‘div’, { className: ‘stat-label’ }, ‘Collected’), el(‘div’, { className: ‘stat-value’ }, ‘GBP ’ + collected.toLocaleString())),
el(‘div’, { className: ‘stat-card red’ }, el(‘div’, { className: ‘stat-label’ }, ‘Outstanding’), el(‘div’, { className: ‘stat-value’ }, ‘GBP ’ + (total - collected).toLocaleString())),
el(‘div’, { className: ‘stat-card blue’ }, el(‘div’, { className: ‘stat-label’ }, ‘Total’), el(‘div’, { className: ‘stat-value’ }, ‘GBP ’ + total.toLocaleString()))
),
el(‘div’, { className: ‘table-wrap’ },
el(‘div’, { className: ‘table-head’ },
el(‘span’, { className: ‘table-head-title’ }, ‘Invoices’),
el(‘div’, { style: { display: ‘flex’, gap: 10 } },
el(‘input’, { className: ‘search’, placeholder: ‘Search…’, value: search, onChange: function(e) { setSearch(e.target.value); } }),
el(‘button’, { className: ‘btn btn-orange’, onClick: function() { setModal(‘new’); } }, ‘+ New Invoice’)
)
),
el(‘table’, null,
el(‘thead’, null, el(‘tr’, null, [’#’,‘Customer’,‘Plate’,‘Service’,‘Labour’,‘Parts’,‘Total’,‘Date’,‘Status’,’’].map(function(h) { return el(‘th’, { key: h }, h); }))),
el(‘tbody’, null, filtered.length === 0
? el(‘tr’, null, el(‘td’, { colSpan: 10 }, el(‘div’, { className: ‘empty’ }, ‘No invoices.’)))
: filtered.map(function(i) {
return el(‘tr’, { key: i.id },
el(‘td’, { style: { fontSize: 11, color: ‘var(–muted)’ } }, ‘#’ + String(i.id).padStart(4, ‘0’)),
el(‘td’, null, i.customer),
el(‘td’, null, el(‘span’, { className: ‘plate’ }, i.plate)),
el(‘td’, { style: { fontSize: 12, color: ‘var(–muted)’ } }, i.service),
el(‘td’, { style: { fontSize: 12 } }, ’GBP ’ + (i.labour || 0)),
el(‘td’, { style: { fontSize: 12 } }, ’GBP ’ + (i.parts || 0)),
el(‘td’, { style: { fontWeight: 700, color: ‘var(–orange)’ } }, ’GBP ’ + i.amount),
el(‘td’, { style: { fontSize: 11, color: ‘var(–muted)’ } }, i.date),
el(‘td’, null, el(‘span’, { className: ’badge ’ + (i.paid ? ‘badge-paid’ : ‘badge-unpaid’), style: { cursor: ‘pointer’ }, onClick: function() { p.setInvoices(function(v) { return v.map(function(x) { return x.id === i.id ? Object.assign({}, x, { paid: !x.paid }) : x; }); }); } }, i.paid ? ‘Paid’ : ‘Unpaid’)),
el(‘td’, null, el(‘div’, { style: { display: ‘flex’, gap: 6 } },
el(‘button’, { className: ‘btn btn-ghost btn-sm’, onClick: function() { setModal(i); } }, ‘Edit’),
el(‘button’, { className: ‘btn btn-danger btn-sm’, onClick: function() { p.setInvoices(function(v) { return v.filter(function(x) { return x.id !== i.id; }); }); } }, ‘X’)
))
);
})
)
)
)
);
}

function CustomerHome(p) {
var myJobs = p.jobs.filter(function(j) { return j.email === p.user.email; });
var myInv = p.invoices.filter(function(i) { return i.email === p.user.email; });
var unpaid = myInv.filter(function(i) { return !i.paid; }).reduce(function(s, i) { return s + i.amount; }, 0);
return el(‘div’, null,
el(‘div’, { className: ‘portal-hero’ },
el(‘div’, { className: ‘portal-hero-text’ }, el(‘h2’, null, ‘Welcome Back, ’ + p.user.name.split(’ ’)[0]), el(‘p’, null, ‘Track your jobs, view invoices and book services.’)),
el(‘div’, { className: ‘portal-hero-badge’ }, ‘COMPARE AUTOMOTIVE’)
),
el(‘div’, { className: ‘stats-grid’, style: { gridTemplateColumns: ‘repeat(3,1fr)’ } },
el(‘div’, { className: ‘stat-card’ }, el(‘div’, { className: ‘stat-label’ }, ‘My Jobs’), el(‘div’, { className: ‘stat-value’ }, myJobs.length)),
el(‘div’, { className: ‘stat-card blue’ }, el(‘div’, { className: ‘stat-label’ }, ‘Active’), el(‘div’, { className: ‘stat-value’ }, myJobs.filter(function(j) { return j.status === ‘In Progress’ || j.status === ‘Waiting’; }).length)),
el(‘div’, { className: ‘stat-card red’ }, el(‘div’, { className: ‘stat-label’ }, ‘Outstanding’), el(‘div’, { className: ‘stat-value’ }, ’GBP ’ + unpaid))
)
);
}

function CustomerTracker(p) {
var myJobs = p.jobs.filter(function(j) { return j.email === p.user.email; });
var steps = [‘Waiting’, ‘In Progress’, ‘Done’];
var pct = { ‘Waiting’: 25, ‘In Progress’: 65, ‘Done’: 100, ‘Cancelled’: 100 };
return el(‘div’, null, myJobs.length === 0
? el(‘div’, { className: ‘empty’ }, ‘No jobs found for your account.’)
: myJobs.map(function(j) {
return el(‘div’, { className: ‘job-tracker’, key: j.id },
el(‘div’, { className: ‘job-tracker-hd’ }, el(‘div’, { className: ‘job-tracker-title’ }, j.service), el(Bdg, { s: j.status })),
el(‘div’, { className: ‘job-detail’ },
el(‘div’, { className: ‘job-detail-plate’ }, j.plate),
el(‘div’, { className: ‘job-detail-vehicle’ }, j.vehicle),
el(‘div’, { className: ‘status-steps’ }, steps.map(function(st) {
var c = ‘step’ + (j.status === st ? ’ active’ : (steps.indexOf(st) < steps.indexOf(j.status) || j.status === ‘Done’ ? ’ done’ : ‘’));
return el(‘div’, { key: st, className: c }, st);
})),
el(‘div’, { className: ‘progress-bar’ }, el(‘div’, { className: ‘progress-fill’, style: { width: (pct[j.status] || 0) + ‘%’ } })),
el(‘div’, { className: ‘detail-grid’ },
el(‘div’, { className: ‘detail-item’ }, el(‘label’, null, ‘Technician’), el(‘span’, null, j.tech)),
el(‘div’, { className: ‘detail-item’ }, el(‘label’, null, ‘Date’), el(‘span’, null, j.date)),
el(‘div’, { className: ‘detail-item’ }, el(‘label’, null, ‘Estimate’), el(‘span’, { style: { color: ‘var(–orange)’, fontWeight: 700 } }, ’GBP ’ + j.amount)),
j.notes ? el(‘div’, { className: ‘detail-item’ }, el(‘label’, null, ‘Notes’), el(‘span’, null, j.notes)) : null
)
)
);
})
);
}

function CustomerInvoices(p) {
var myInv = p.invoices.filter(function(i) { return i.email === p.user.email; });
function pay(id) { p.setInvoices(function(v) { return v.map(function(x) { return x.id === id ? Object.assign({}, x, { paid: true }) : x; }); }); }
return el(‘div’, null, myInv.length === 0
? el(‘div’, { className: ‘empty’ }, ‘No invoices yet.’)
: myInv.map(function(i) {
return el(‘div’, { className: ‘invoice-card’, key: i.id },
el(‘div’, { className: ‘invoice-top’ },
el(‘div’, null, el(‘div’, { className: ‘invoice-id’ }, ‘Invoice #’ + String(i.id).padStart(4, ‘0’) + ’ - ’ + i.date), el(‘div’, { style: { fontWeight: 700, marginTop: 4 } }, i.service), el(‘span’, { className: ‘plate’, style: { fontSize: 14 } }, i.plate)),
el(‘div’, { className: ‘invoice-total’ }, ’GBP ’ + i.amount)
),
el(‘div’, { className: ‘invoice-rows’ },
i.labour > 0 ? el(‘div’, { className: ‘invoice-row’ }, el(‘span’, null, ‘Labour’), el(‘span’, null, ’GBP ’ + i.labour)) : null,
i.parts > 0 ? el(‘div’, { className: ‘invoice-row’ }, el(‘span’, null, ‘Parts’), el(‘span’, null, ’GBP ’ + i.parts)) : null
),
!i.paid
? el(‘div’, { className: ‘invoice-pay’ }, el(‘div’, null, el(‘div’, { style: { fontWeight: 700 } }, ‘Payment Due’), el(‘div’, { style: { fontSize: 12, color: ‘var(–muted)’ } }, ‘Demo mode’)), el(‘button’, { className: ‘btn btn-green’, onClick: function() { pay(i.id); } }, ’Pay Now GBP ’ + i.amount))
: el(‘div’, { style: { marginTop: 12, color: ‘var(–green)’, fontSize: 12 } }, ‘PAID - Thank you!’)
);
})
);
}

function CustomerBooking() {
var ss = useState(null); var sel = ss[0]; var setSel = ss[1];
var stp = useState(1); var step = stp[0]; var setStep = stp[1];
var pl = useState(’’); var plate = pl[0]; var setPlate = pl[1];
var dt = useState(’’); var date = dt[0]; var setDate = dt[1];
var nt = useState(’’); var notes = nt[0]; var setNotes = nt[1];
var dn = useState(false); var done = dn[0]; var setDone = dn[1];
function reset() { setDone(false); setStep(1); setSel(null); setPlate(’’); setDate(’’); setNotes(’’); }
if (done) return el(‘div’, { style: { textAlign: ‘center’, padding: ‘48px 20px’ } },
el(‘div’, { style: { fontSize: 32, marginBottom: 12, fontWeight: 700 } }, ‘Booking Confirmed!’),
el(‘div’, { style: { color: ‘var(–muted)’, marginBottom: 20 } }, (SERVICES.find(function(s) { return s.id === sel; }) || {}).name + ’ - ’ + plate + ’ - ’ + date),
el(‘button’, { className: ‘btn btn-orange’, onClick: reset }, ‘Book Another’)
);
return el(‘div’, null,
step === 1 && el(‘div’, null,
el(‘div’, { style: { marginBottom: 14, color: ‘var(–muted)’ } }, ‘Select the service you need:’),
el(‘div’, { className: ‘booking-grid’ }, SERVICES.map(function(sv) {
return el(‘div’, { key: sv.id, className: ‘service-option’ + (sel === sv.id ? ’ selected’ : ‘’), onClick: function() { setSel(sv.id); } },
el(‘div’, { className: ‘service-name’ }, sv.name),
el(‘div’, { className: ‘service-price’ }, ’From GBP ’ + sv.price)
);
})),
el(‘div’, { style: { marginTop: 20, textAlign: ‘right’ } }, el(‘button’, { className: ‘btn btn-orange’, style: { opacity: sel ? 1 : 0.4 }, onClick: function() { if (sel) setStep(2); } }, ‘Next’))
),
step === 2 && el(‘div’, { style: { maxWidth: 440 } },
el(‘div’, { style: { marginBottom: 16, fontWeight: 700 } }, (SERVICES.find(function(s) { return s.id === sel; }) || {}).name),
el(‘div’, { style: { display: ‘flex’, flexDirection: ‘column’, gap: 13 } },
el(‘div’, null, el(‘div’, { className: ‘field-lbl’ }, ‘Registration Plate’), el(‘input’, { value: plate, placeholder: ‘AB12 CDE’, onChange: function(e) { setPlate(e.target.value.toUpperCase()); } })),
el(‘div’, null, el(‘div’, { className: ‘field-lbl’ }, ‘Preferred Date’), el(‘input’, { type: ‘date’, value: date, onChange: function(e) { setDate(e.target.value); } })),
el(‘div’, null, el(‘div’, { className: ‘field-lbl’ }, ‘Notes’), el(‘textarea’, { value: notes, placeholder: ‘Any concerns…’, onChange: function(e) { setNotes(e.target.value); } }))
),
el(‘div’, { style: { display: ‘flex’, gap: 10, marginTop: 18 } },
el(‘button’, { className: ‘btn btn-ghost’, onClick: function() { setStep(1); } }, ‘Back’),
el(‘button’, { className: ‘btn btn-orange’, style: { opacity: plate && date ? 1 : 0.4 }, onClick: function() { if (plate && date) setDone(true); } }, ‘Confirm Booking’)
)
)
);
}

export default function App() {
var us = useState(null); var user = us[0]; var setUser = us[1];
var ts = useState(‘dashboard’); var tab = ts[0]; var setTab = ts[1];
var js = useState(JOBS); var jobs = js[0]; var setJobs = js[1];
var vs = useState(VEHICLES); var vehicles = vs[0]; var setVehicles = vs[1];
var ins = useState(INVOICES); var invoices = ins[0]; var setInvoices = ins[1];

function logout() { setUser(null); setTab(‘dashboard’); }

var styleEl = el(‘style’, null, FONTS + ‘\n’ + CSS);

if (!user) return el(‘div’, null, styleEl, el(LoginScreen, { onLogin: function(u) { setUser(u); setTab(u.role === ‘admin’ ? ‘dashboard’ : ‘home’); } }));

var isAdmin = user.role === ‘admin’;
var nav = isAdmin ? ADMIN_NAV : CUSTOMER_NAV;
var sections = nav.reduce(function(acc, n) { if (acc.indexOf(n.section) === -1) acc.push(n.section); return acc; }, []);

return el(‘div’, null,
styleEl,
el(‘div’, { className: ‘app’ },
el(‘aside’, { className: ‘sidebar’ },
el(‘div’, { className: ‘sidebar-logo’ },
el(‘div’, { className: ‘sidebar-brand’ }, ‘COMPARE ‘, el(‘span’, null, ‘AUTOMOTIVE’)),
el(‘div’, { className: ‘role-badge’ }, isAdmin ? ‘STAFF PORTAL’ : ‘CUSTOMER PORTAL’)
),
el(‘nav’, { className: ‘sidebar-nav’ }, sections.map(function(sec) {
return el(‘div’, { key: sec },
el(‘div’, { className: ‘nav-section’ }, sec),
nav.filter(function(n) { return n.section === sec; }).map(function(n) {
return el(‘div’, { key: n.id, className: ‘nav-item’ + (tab === n.id ? ’ active’ : ‘’), onClick: function() { setTab(n.id); } }, n.label);
})
);
})),
el(‘div’, { className: ‘sidebar-footer’ },
el(‘div’, null, el(‘div’, { className: ‘user-name’ }, user.name), el(‘div’, { className: ‘user-role’ }, isAdmin ? ‘Administrator’ : ‘Customer’)),
el(‘button’, { className: ‘signout-btn’, onClick: logout }, ‘Sign out’)
)
),
el(‘main’, { className: ‘main’ },
el(‘div’, { className: ‘topbar’ },
el(‘div’, { className: ‘topbar-title’ }, PAGE_TITLES[tab] || tab),
el(‘span’, { style: { fontSize: 11, color: ‘var(–muted)’ } }, isAdmin ? jobs.length + ’ jobs’ : user.email)
),
el(‘div’, { className: ‘content’ },
isAdmin && tab === ‘dashboard’ ? el(Dashboard, { jobs: jobs, vehicles: vehicles, invoices: invoices }) : null,
isAdmin && tab === ‘jobs’ ? el(JobsPage, { jobs: jobs, setJobs: setJobs }) : null,
isAdmin && tab === ‘vehicles’ ? el(VehiclesPage, { vehicles: vehicles, setVehicles: setVehicles }) : null,
isAdmin && tab === ‘invoices’ ? el(InvoicesPage, { invoices: invoices, setInvoices: setInvoices }) : null,
!isAdmin && tab === ‘home’ ? el(CustomerHome, { user: user, jobs: jobs, invoices: invoices }) : null,
!isAdmin && tab === ‘tracker’ ? el(CustomerTracker, { user: user, jobs: jobs }) : null,
!isAdmin && tab === ‘invoices’ ? el(CustomerInvoices, { user: user, invoices: invoices, setInvoices: setInvoices }) : null,
!isAdmin && tab === ‘booking’ ? el(CustomerBooking, null) : null
)
)
)
);
}