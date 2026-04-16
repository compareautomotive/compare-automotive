import './App.css';

const CSS = `

- { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
  –bg: #0a0a0a; –surface: #141414; –surface2: #1e1e1e; –border: #2a2a2a;
  –orange: #e8570a; –orange2: #ff6b1a; –orange-dim: rgba(232,87,10,0.12);
  –text: #ffffff; –muted: #888; –muted2: #555;
  –green: #22c55e; –blue: #3b82f6; –red: #ef4444;
  }
  @import url(‘https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@400;500;600;700&display=swap’);
  body { background: var(–bg); color: var(–text); font-family: Barlow, sans-serif; min-height: 100vh; }
  .login-screen { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: radial-gradient(ellipse at 30% 50%, rgba(232,87,10,0.18), transparent 60%), var(–bg); padding: 16px; }
  .login-card { background: var(–surface); border: 1px solid var(–border); border-top: 3px solid var(–orange); border-radius: 8px; padding: 32px 24px; width: 100%; max-width: 400px; }
  .login-logo { text-align: center; margin-bottom: 28px; }
  .brand { font-family: ‘Barlow Condensed’, sans-serif; font-size: 32px; font-weight: 900; letter-spacing: 2px; color: var(–text); text-transform: uppercase; line-height: 1; }
  .brand span { color: var(–orange); }
  .sub { font-size: 10px; letter-spacing: 4px; color: var(–muted); text-transform: uppercase; margin-top: 4px; }
  .login-tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 4px; background: var(–bg); border-radius: 6px; padding: 4px; margin-bottom: 24px; }
  .login-tab { padding: 10px; border-radius: 4px; border: none; background: transparent; color: var(–muted); font-family: Barlow, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; text-transform: uppercase; }
  .login-tab.active { background: var(–orange); color: white; }
  .login-form { display: flex; flex-direction: column; gap: 14px; }
  .flbl { font-size: 10px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; margin-bottom: 5px; display: block; }
  input, select, textarea { background: var(–bg); border: 1px solid var(–border); border-radius: 5px; padding: 12px 14px; color: var(–text); font-family: Barlow, sans-serif; font-size: 15px; width: 100%; outline: none; -webkit-appearance: none; }
  input:focus, select:focus, textarea:focus { border-color: var(–orange); }
  textarea { resize: vertical; min-height: 80px; }
  .btn { padding: 11px 16px; border-radius: 5px; border: none; cursor: pointer; font-family: Barlow, sans-serif; font-size: 14px; font-weight: 700; text-transform: uppercase; touch-action: manipulation; }
  .btn-or { background: var(–orange); color: white; }
  .btn-gh { background: transparent; color: var(–muted); border: 1px solid var(–border); }
  .btn-dn { background: var(–red); color: white; }
  .btn-gn { background: var(–green); color: #000; font-weight: 700; }
  .btn-sm { padding: 6px 11px; font-size: 12px; }
  .btn-fw { width: 100%; }
  .hint { text-align: center; margin-top: 12px; font-size: 12px; color: var(–muted); }
  .hint b { color: var(–orange); }
  .app { display: flex; min-height: 100vh; }
  .mob-hdr { display: none; padding: 13px 16px; background: var(–surface); border-bottom: 1px solid var(–border); position: sticky; top: 0; z-index: 20; }
  .mob-hdr-inner { display: flex; align-items: center; justify-content: space-between; }
  .mob-brand { font-family: ‘Barlow Condensed’, sans-serif; font-size: 20px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase; }
  .mob-brand span { color: var(–orange); }
  .hbg { background: var(–surface2); border: 1px solid var(–border); color: var(–text); padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 18px; font-family: Barlow, sans-serif; }
  .ov { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.75); z-index: 30; }
  .ov.open { display: block; }
  .drawer { position: fixed; top: 0; left: 0; bottom: 0; width: 260px; background: var(–surface); border-right: 1px solid var(–border); z-index: 40; transform: translateX(-100%); transition: transform 0.25s; display: flex; flex-direction: column; }
  .drawer.open { transform: translateX(0); }
  .drawer-hd { padding: 20px 16px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; }
  .drawer-cls { background: none; border: none; color: var(–muted); font-size: 24px; cursor: pointer; font-family: Barlow, sans-serif; }
  .sb { width: 220px; background: var(–surface); border-right: 1px solid var(–border); display: flex; flex-direction: column; position: fixed; top: 0; left: 0; bottom: 0; z-index: 10; }
  .sb-logo { padding: 20px 18px 16px; border-bottom: 1px solid var(–border); }
  .sb-brand { font-family: ‘Barlow Condensed’, sans-serif; font-weight: 900; font-size: 19px; letter-spacing: 2px; text-transform: uppercase; line-height: 1.1; }
  .sb-brand span { color: var(–orange); }
  .rbadge { display: inline-block; margin-top: 6px; font-size: 9px; letter-spacing: 3px; text-transform: uppercase; padding: 2px 8px; border-radius: 3px; background: var(–orange-dim); color: var(–orange); }
  .sb-nav { flex: 1; padding: 10px 0; overflow-y: auto; }
  .nsec { font-size: 9px; letter-spacing: 3px; color: var(–muted2); padding: 10px 18px 4px; text-transform: uppercase; }
  .ni { display: flex; align-items: center; gap: 10px; padding: 11px 18px; cursor: pointer; font-size: 13px; font-weight: 600; color: var(–muted); border-left: 3px solid transparent; text-transform: uppercase; }
  .ni:hover { color: var(–text); background: var(–surface2); }
  .ni.active { color: var(–orange); border-left-color: var(–orange); background: var(–orange-dim); }
  .sb-ft { padding: 12px 18px; border-top: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; }
  .uname { font-weight: 700; color: var(–text); font-size: 13px; }
  .urole { font-size: 10px; color: var(–muted); }
  .soBtn { background: none; border: 1px solid var(–border); color: var(–muted); padding: 5px 8px; border-radius: 4px; cursor: pointer; font-size: 11px; font-family: Barlow, sans-serif; }
  .main { margin-left: 220px; flex: 1; display: flex; flex-direction: column; }
  .topbar { padding: 13px 24px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; background: var(–surface); position: sticky; top: 0; z-index: 5; }
  .tbtitle { font-family: ‘Barlow Condensed’, sans-serif; font-size: 22px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
  .pg { padding: 20px 24px; flex: 1; }
  .sgrid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 20px; }
  .sc { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; padding: 16px; border-top: 3px solid var(–orange); }
  .sc.gn { border-top-color: var(–green); }
  .sc.bl { border-top-color: var(–blue); }
  .sc.rd { border-top-color: var(–red); }
  .slbl { font-size: 9px; letter-spacing: 3px; color: var(–muted); text-transform: uppercase; margin-bottom: 8px; }
  .sval { font-family: ‘Barlow Condensed’, sans-serif; font-size: 36px; font-weight: 800; line-height: 1; color: var(–orange); }
  .sc.gn .sval { color: var(–green); }
  .sc.bl .sval { color: var(–blue); }
  .sc.rd .sval { color: var(–red); }
  .ssub { font-size: 11px; color: var(–muted); margin-top: 4px; }
  .tw { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; overflow: hidden; }
  .thd { padding: 13px 16px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
  .ttitle { font-family: ‘Barlow Condensed’, sans-serif; font-size: 17px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
  .srch { background: var(–bg); border: 1px solid var(–border); border-radius: 4px; padding: 8px 12px; color: var(–text); font-size: 13px; width: 180px; outline: none; font-family: Barlow, sans-serif; }
  .tscrl { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  table { width: 100%; border-collapse: collapse; min-width: 580px; }
  thead tr { border-bottom: 1px solid var(–border); }
  th { text-align: left; padding: 9px 12px; font-size: 9px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; white-space: nowrap; }
  td { padding: 11px 12px; font-size: 13px; border-bottom: 1px solid #1a1a1a; }
  tbody tr:last-child td { border-bottom: none; }
  tbody tr:hover { background: rgba(255,255,255,0.02); }
  .bdg { display: inline-flex; padding: 3px 8px; border-radius: 3px; font-size: 10px; letter-spacing: 1px; font-weight: 500; text-transform: uppercase; white-space: nowrap; }
  .bw { background: rgba(232,87,10,0.15); color: var(–orange); }
  .bp { background: rgba(59,130,246,0.15); color: var(–blue); }
  .bd { background: rgba(34,197,94,0.15); color: var(–green); }
  .bc { background: rgba(239,68,68,0.15); color: var(–red); }
  .bpd { background: rgba(34,197,94,0.15); color: var(–green); }
  .bup { background: rgba(239,68,68,0.15); color: var(–red); }
  .plt { font-family: ‘Barlow Condensed’, sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 3px; color: var(–orange); }
  .modov { position: fixed; inset: 0; background: rgba(0,0,0,0.85); z-index: 100; display: flex; align-items: flex-end; justify-content: center; }
  .mod { background: var(–surface); border: 1px solid var(–border); border-top: 3px solid var(–orange); border-radius: 12px 12px 0 0; width: 100%; max-width: 520px; max-height: 92vh; overflow-y: auto; }
  .mod-hd { padding: 16px 20px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; background: var(–surface); }
  .mod-hd h2 { font-family: ‘Barlow Condensed’, sans-serif; font-size: 19px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
  .mod-x { background: none; border: none; color: var(–muted); cursor: pointer; font-size: 24px; font-family: Barlow, sans-serif; }
  .mod-bd { padding: 16px 20px; display: flex; flex-direction: column; gap: 13px; }
  .mod-ft { padding: 14px 20px; border-top: 1px solid var(–border); display: flex; justify-content: flex-end; gap: 8px; position: sticky; bottom: 0; background: var(–surface); }
  .frow { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .twocol { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .panel { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; overflow: hidden; }
  .phd { padding: 12px 15px; border-bottom: 1px solid var(–border); font-family: ‘Barlow Condensed’, sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
  .phd span { color: var(–orange); }
  .pbd { padding: 6px 10px; }
  .ai { display: flex; gap: 10px; padding: 9px 4px; border-bottom: 1px solid #1a1a1a; align-items: flex-start; }
  .ai:last-child { border-bottom: none; }
  .adot { width: 7px; height: 7px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
  .atxt { font-size: 12px; line-height: 1.5; }
  .atm { font-size: 10px; color: var(–muted); }
  .vgrid { display: grid; grid-template-columns: repeat(auto-fill,minmax(240px,1fr)); gap: 13px; }
  .vc { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; padding: 16px; position: relative; }
  .vcact { position: absolute; top: 12px; right: 12px; display: flex; gap: 6px; }
  .vplt { font-family: ‘Barlow Condensed’, sans-serif; font-size: 20px; font-weight: 800; letter-spacing: 4px; color: var(–orange); margin-bottom: 4px; }
  .vmk { font-size: 13px; font-weight: 600; margin-bottom: 2px; }
  .vow { font-size: 11px; color: var(–muted); margin-bottom: 10px; }
  .vmeta { display: flex; gap: 16px; }
  .vmeta label { font-size: 9px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; display: block; margin-bottom: 2px; }
  .vmeta span { font-size: 12px; font-weight: 500; }
  .phero { background: radial-gradient(ellipse at right, rgba(232,87,10,0.15), transparent 60%); border: 1px solid var(–border); border-radius: 8px; padding: 20px; margin-bottom: 18px; }
  .phero h2 { font-family: ‘Barlow Condensed’, sans-serif; font-size: 26px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 4px; }
  .phero p { color: var(–muted); font-size: 13px; }
  .pbadge { display: inline-block; margin-top: 10px; font-size: 10px; color: var(–orange); background: var(–orange-dim); padding: 5px 12px; border-radius: 4px; border: 1px solid rgba(232,87,10,0.3); letter-spacing: 2px; text-transform: uppercase; }
  .jtr { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; overflow: hidden; margin-bottom: 14px; }
  .jtr-hd { padding: 14px 18px; border-bottom: 1px solid var(–border); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
  .jtr-ttl { font-family: ‘Barlow Condensed’, sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; }
  .jdet { padding: 16px 18px; }
  .jplt { font-family: ‘Barlow Condensed’, sans-serif; font-size: 26px; font-weight: 800; letter-spacing: 5px; color: var(–orange); margin-bottom: 4px; }
  .jveh { font-size: 14px; font-weight: 600; margin-bottom: 14px; color: var(–muted); }
  .pbar { background: var(–bg); border-radius: 4px; height: 6px; margin: 8px 0 14px; overflow: hidden; }
  .pfill { height: 100%; border-radius: 4px; background: var(–orange); }
  .ssteps { display: flex; margin-bottom: 14px; }
  .stp { flex: 1; text-align: center; font-size: 9px; letter-spacing: 1px; color: var(–muted); text-transform: uppercase; padding: 6px 2px; border-bottom: 2px solid var(–border); }
  .stp.dn { color: var(–green); border-bottom-color: var(–green); }
  .stp.ac { color: var(–orange); border-bottom-color: var(–orange); font-weight: 700; }
  .dgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .di label { font-size: 9px; letter-spacing: 2px; color: var(–muted); text-transform: uppercase; display: block; margin-bottom: 3px; }
  .di span { font-size: 13px; font-weight: 500; }
  .bkgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .sopt { background: var(–surface); border: 2px solid var(–border); border-radius: 6px; padding: 14px; cursor: pointer; }
  .sopt.sel { border-color: var(–orange); background: var(–orange-dim); }
  .snm { font-weight: 700; font-size: 13px; margin-bottom: 3px; }
  .spr { font-size: 12px; color: var(–orange); }
  .invc { background: var(–surface); border: 1px solid var(–border); border-radius: 6px; padding: 18px; margin-bottom: 12px; }
  .invt { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; gap: 10px; }
  .invid { font-size: 11px; color: var(–muted); margin-bottom: 3px; }
  .invtot { font-family: ‘Barlow Condensed’, sans-serif; font-size: 26px; font-weight: 800; color: var(–orange); white-space: nowrap; }
  .invrows { border-top: 1px solid var(–border); padding-top: 10px; }
  .invrow { display: flex; justify-content: space-between; padding: 5px 0; font-size: 13px; border-bottom: 1px solid #1a1a1a; }
  .invrow:last-child { border-bottom: none; }
  .invpay { background: var(–orange-dim); border: 1px solid rgba(232,87,10,0.3); border-radius: 6px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; margin-top: 12px; flex-wrap: wrap; gap: 10px; }
  .toast { position: fixed; bottom: 80px; right: 16px; background: var(–green); color: #000; padding: 8px 14px; border-radius: 6px; font-size: 12px; font-weight: 700; z-index: 999; letter-spacing: 1px; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
  .toast.show { opacity: 1; }
  .bnav { display: none; position: fixed; bottom: 0; left: 0; right: 0; background: var(–surface); border-top: 1px solid var(–border); z-index: 20; }
  .bnav-inner { display: flex; }
  .bni { flex: 1; display: flex; flex-direction: column; align-items: center; padding: 10px 4px; cursor: pointer; color: var(–muted); font-size: 9px; font-weight: 600; text-transform: uppercase; gap: 3px; border: none; background: none; font-family: Barlow, sans-serif; touch-action: manipulation; }
  .bni.active { color: var(–orange); }
  .bni-ic { font-size: 18px; }
  .empty { text-align: center; padding: 40px 20px; color: var(–muted); font-size: 14px; }
  @media (max-width: 768px) {
  .sb { display: none; }
  .mob-hdr { display: block; }
  .main { margin-left: 0; padding-bottom: 70px; }
  .topbar { display: none; }
  .pg { padding: 14px; }
  .sgrid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .sval { font-size: 28px; }
  .twocol { grid-template-columns: 1fr; }
  .bnav { display: block; }
  .frow { grid-template-columns: 1fr; }
  .vgrid { grid-template-columns: 1fr; }
  }
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(–bg); }
  ::-webkit-scrollbar-thumb { background: var(–border); border-radius: 3px; }
  `;

var JOBS0 = [
{ id: 1, plate: ‘CA21 AUT’, customer: ‘James Harlow’, email: ‘james@email.com’, vehicle: ‘Ford Focus 2018’, service: ‘Full Service + MOT’, tech: ‘Mike R.’, status: ‘In Progress’, date: ‘2026-04-10’, notes: ‘Check brake pads’, amount: 320 },
{ id: 2, plate: ‘XY67 FGH’, customer: ‘Sarah Bloom’, email: ‘sarah@email.com’, vehicle: ‘VW Golf 2020’, service: ‘Oil Change’, tech: ‘Dave S.’, status: ‘Waiting’, date: ‘2026-04-11’, notes: ‘’, amount: 95 },
{ id: 3, plate: ‘PQ33 JKL’, customer: ‘Tom Green’, email: ‘tom@email.com’, vehicle: ‘BMW 3 Series 2019’, service: ‘Tyre Replacement’, tech: ‘Mike R.’, status: ‘Done’, date: ‘2026-04-09’, notes: ‘All 4 tyres’, amount: 480 }
];
var VEHS0 = [
{ id: 1, plate: ‘CA21 AUT’, make: ‘Ford’, model: ‘Focus’, year: 2018, owner: ‘James Harlow’, phone: ‘07700 900123’, email: ‘james@email.com’, mileage: ‘64,200’ },
{ id: 2, plate: ‘XY67 FGH’, make: ‘Volkswagen’, model: ‘Golf’, year: 2020, owner: ‘Sarah Bloom’, phone: ‘07700 900456’, email: ‘sarah@email.com’, mileage: ‘28,100’ },
{ id: 3, plate: ‘PQ33 JKL’, make: ‘BMW’, model: ‘3 Series’, year: 2019, owner: ‘Tom Green’, phone: ‘07700 900789’, email: ‘tom@email.com’, mileage: ‘51,600’ }
];
var INVS0 = [
{ id: 1, customer: ‘Tom Green’, plate: ‘PQ33 JKL’, email: ‘tom@email.com’, service: ‘Tyre Replacement’, labour: 180, parts: 300, amount: 480, paid: true, date: ‘2026-04-09’ },
{ id: 2, customer: ‘James Harlow’, plate: ‘CA21 AUT’, email: ‘james@email.com’, service: ‘Full Service + MOT’, labour: 120, parts: 200, amount: 320, paid: false, date: ‘2026-04-10’ }
];
var SVCS = [
{ id: 1, name: ‘Full Service’, price: ‘149’ },
{ id: 2, name: ‘MOT Test’, price: ‘54.85’ },
{ id: 3, name: ‘Tyre Replacement’, price: ‘80/tyre’ },
{ id: 4, name: ‘Brake Service’, price: ‘95’ },
{ id: 5, name: ‘Oil Change’, price: ‘59’ },
{ id: 6, name: ‘Battery Check’, price: ‘25’ }
];
var TECHS = [‘Mike R.’, ‘Dave S.’, ‘Lee W.’, ‘Anna T.’];
var STATS = [‘Waiting’, ‘In Progress’, ‘Done’, ‘Cancelled’];
var USERS = {
‘admin’: { name: ‘Admin’, role: ‘admin’, email: ‘admin@compareautomotive.co.uk’ },
‘james@email.com’: { name: ‘James Harlow’, role: ‘customer’, email: ‘james@email.com’ },
‘tom@email.com’: { name: ‘Tom Green’, role: ‘customer’, email: ‘tom@email.com’ },
‘sarah@email.com’: { name: ‘Sarah Bloom’, role: ‘customer’, email: ‘sarah@email.com’ }
};
var ANAV = [
{ id: ‘dash’, label: ‘Dashboard’, section: ‘Overview’ },
{ id: ‘jobs’, label: ‘Job Cards’, section: ‘Workshop’ },
{ id: ‘vehs’, label: ‘Vehicles’, section: ‘Workshop’ },
{ id: ‘invs’, label: ‘Invoices’, section: ‘Finance’ }
];
var CNAV = [
{ id: ‘home’, label: ‘Overview’, section: ‘Portal’ },
{ id: ‘track’, label: ‘My Jobs’, section: ‘Portal’ },
{ id: ‘invs’, label: ‘Invoices’, section: ‘Portal’ },
{ id: ‘book’, label: ‘Book’, section: ‘Portal’ }
];
var PTITLES = { dash: ‘Dashboard’, jobs: ‘Job Cards’, vehs: ‘Vehicles’, invs: ‘Invoices’, home: ‘My Overview’, track: ‘Job Tracker’, book: ‘Book a Service’ };

function load(key, fallback) {
try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch(e) { return fallback; }
}
function persist(key, val) {
try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
}
function maxId(arr) {
var m = 0;
for (var i = 0; i < arr.length; i++) { if (arr[i].id > m) m = arr[i].id; }
return m + 1;
}
function badgeCls(s) {
if (s === ‘Waiting’) return ‘bdg bw’;
if (s === ‘In Progress’) return ‘bdg bp’;
if (s === ‘Done’) return ‘bdg bd’;
if (s === ‘Cancelled’) return ‘bdg bc’;
return ‘bdg bw’;
}

function SBadge({ s }) {
return <span className={badgeCls(s)}>{s}</span>;
}

function JobMod({ job, onClose, onSave }) {
var d = job || {};
var [plate, setPlate] = useState(d.plate || ‘’);
var [cust, setCust] = useState(d.customer || ‘’);
var [email, setEmail] = useState(d.email || ‘’);
var [veh, setVeh] = useState(d.vehicle || ‘’);
var [svc, setSvc] = useState(d.service || ‘’);
var [tech, setTech] = useState(d.tech || TECHS[0]);
var [stat, setStat] = useState(d.status || ‘Waiting’);
var [date, setDate] = useState(d.date || new Date().toISOString().slice(0, 10));
var [notes, setNotes] = useState(d.notes || ‘’);
var [amt, setAmt] = useState(d.amount || ‘’);

function save() {
onSave({ id: d.id || 0, plate: plate, customer: cust, email: email, vehicle: veh, service: svc, tech: tech, status: stat, date: date, notes: notes, amount: parseFloat(amt) || 0 });
}

return (
<div className=“modov” onClick={function(e) { if (e.target === e.currentTarget) onClose(); }}>
<div className="mod">
<div className="mod-hd">
<h2>{job ? ‘Edit Job’ : ‘New Job’}</h2>
<button className="mod-x" onClick={onClose}>X</button>
</div>
<div className="mod-bd">
<div className="frow">
<div><label className="flbl">Reg Plate</label><input value={plate} placeholder=“AB12 CDE” onChange={function(e) { setPlate(e.target.value.toUpperCase()); }} /></div>
<div><label className="flbl">Date</label><input type=“date” value={date} onChange={function(e) { setDate(e.target.value); }} /></div>
</div>
<div><label className="flbl">Customer Name</label><input value={cust} onChange={function(e) { setCust(e.target.value); }} /></div>
<div><label className="flbl">Customer Email</label><input value={email} onChange={function(e) { setEmail(e.target.value); }} /></div>
<div><label className="flbl">Vehicle</label><input value={veh} onChange={function(e) { setVeh(e.target.value); }} /></div>
<div><label className="flbl">Service</label><input value={svc} onChange={function(e) { setSvc(e.target.value); }} /></div>
<div className="frow">
<div><label className="flbl">Technician</label>
<select value={tech} onChange={function(e) { setTech(e.target.value); }}>
{TECHS.map(function(t) { return <option key={t} value={t}>{t}</option>; })}
</select>
</div>
<div><label className="flbl">Status</label>
<select value={stat} onChange={function(e) { setStat(e.target.value); }}>
{STATS.map(function(s) { return <option key={s} value={s}>{s}</option>; })}
</select>
</div>
</div>
<div className="frow">
<div><label className="flbl">Amount GBP</label><input type=“number” value={amt} onChange={function(e) { setAmt(e.target.value); }} /></div>
<div><label className="flbl">Notes</label><input value={notes} onChange={function(e) { setNotes(e.target.value); }} /></div>
</div>
</div>
<div className="mod-ft">
<button className="btn btn-gh" onClick={onClose}>Cancel</button>
<button className="btn btn-or" onClick={save}>Save Job</button>
</div>
</div>
</div>
);
}

function VehMod({ veh, onClose, onSave }) {
var d = veh || {};
var [plate, setPlate] = useState(d.plate || ‘’);
var [make, setMake] = useState(d.make || ‘’);
var [model, setModel] = useState(d.model || ‘’);
var [year, setYear] = useState(d.year || 2024);
var [owner, setOwner] = useState(d.owner || ‘’);
var [phone, setPhone] = useState(d.phone || ‘’);
var [email, setEmail] = useState(d.email || ‘’);
var [miles, setMiles] = useState(d.mileage || ‘’);

function save() {
onSave({ id: d.id || 0, plate: plate, make: make, model: model, year: year, owner: owner, phone: phone, email: email, mileage: miles });
}

return (
<div className=“modov” onClick={function(e) { if (e.target === e.currentTarget) onClose(); }}>
<div className="mod">
<div className="mod-hd">
<h2>{veh ? ‘Edit Vehicle’ : ‘Add Vehicle’}</h2>
<button className="mod-x" onClick={onClose}>X</button>
</div>
<div className="mod-bd">
<div><label className="flbl">Registration</label><input value={plate} onChange={function(e) { setPlate(e.target.value.toUpperCase()); }} /></div>
<div className="frow">
<div><label className="flbl">Make</label><input value={make} onChange={function(e) { setMake(e.target.value); }} /></div>
<div><label className="flbl">Model</label><input value={model} onChange={function(e) { setModel(e.target.value); }} /></div>
</div>
<div className="frow">
<div><label className="flbl">Year</label><input type=“number” value={year} onChange={function(e) { setYear(e.target.value); }} /></div>
<div><label className="flbl">Mileage</label><input value={miles} onChange={function(e) { setMiles(e.target.value); }} /></div>
</div>
<div><label className="flbl">Owner Name</label><input value={owner} onChange={function(e) { setOwner(e.target.value); }} /></div>
<div className="frow">
<div><label className="flbl">Phone</label><input value={phone} onChange={function(e) { setPhone(e.target.value); }} /></div>
<div><label className="flbl">Email</label><input value={email} onChange={function(e) { setEmail(e.target.value); }} /></div>
</div>
</div>
<div className="mod-ft">
<button className="btn btn-gh" onClick={onClose}>Cancel</button>
<button className="btn btn-or" onClick={save}>Save</button>
</div>
</div>
</div>
);
}

function InvMod({ inv, onClose, onSave }) {
var d = inv || {};
var [cust, setCust] = useState(d.customer || ‘’);
var [plate, setPlate] = useState(d.plate || ‘’);
var [email, setEmail] = useState(d.email || ‘’);
var [svc, setSvc] = useState(d.service || ‘’);
var [labour, setLabour] = useState(d.labour || ‘’);
var [parts, setParts] = useState(d.parts || ‘’);
var [paidStr, setPaidStr] = useState(d.paid ? ‘paid’ : ‘unpaid’);
var [date, setDate] = useState(d.date || new Date().toISOString().slice(0, 10));
var total = (parseFloat(labour) || 0) + (parseFloat(parts) || 0);

function save() {
onSave({ id: d.id || 0, customer: cust, plate: plate, email: email, service: svc, labour: parseFloat(labour) || 0, parts: parseFloat(parts) || 0, amount: total, paid: paidStr === ‘paid’, date: date });
}

return (
<div className=“modov” onClick={function(e) { if (e.target === e.currentTarget) onClose(); }}>
<div className="mod">
<div className="mod-hd">
<h2>{inv ? ‘Edit Invoice’ : ‘New Invoice’}</h2>
<button className="mod-x" onClick={onClose}>X</button>
</div>
<div className="mod-bd">
<div className="frow">
<div><label className="flbl">Customer</label><input value={cust} onChange={function(e) { setCust(e.target.value); }} /></div>
<div><label className="flbl">Plate</label><input value={plate} onChange={function(e) { setPlate(e.target.value.toUpperCase()); }} /></div>
</div>
<div><label className="flbl">Email</label><input value={email} onChange={function(e) { setEmail(e.target.value); }} /></div>
<div><label className="flbl">Service</label><input value={svc} onChange={function(e) { setSvc(e.target.value); }} /></div>
<div className="frow">
<div><label className="flbl">Labour GBP</label><input type=“number” value={labour} onChange={function(e) { setLabour(e.target.value); }} /></div>
<div><label className="flbl">Parts GBP</label><input type=“number” value={parts} onChange={function(e) { setParts(e.target.value); }} /></div>
</div>
<div style={{ color: ‘var(–orange)’, fontWeight: 700, fontSize: 16 }}>Total: GBP {total.toFixed(2)}</div>
<div className="frow">
<div><label className="flbl">Date</label><input type=“date” value={date} onChange={function(e) { setDate(e.target.value); }} /></div>
<div><label className="flbl">Status</label>
<select value={paidStr} onChange={function(e) { setPaidStr(e.target.value); }}>
<option value="unpaid">Unpaid</option>
<option value="paid">Paid</option>
</select>
</div>
</div>
</div>
<div className="mod-ft">
<button className="btn btn-gh" onClick={onClose}>Cancel</button>
<button className="btn btn-or" onClick={save}>Save Invoice</button>
</div>
</div>
</div>
);
}

function Dashboard({ jobs, vehs, invs }) {
var active = 0; var waiting = 0; var rev = 0; var out = 0;
for (var i = 0; i < jobs.length; i++) {
if (jobs[i].status === ‘In Progress’) active++;
if (jobs[i].status === ‘Waiting’) waiting++;
}
for (var j = 0; j < invs.length; j++) {
if (invs[j].paid) rev += invs[j].amount; else out += invs[j].amount;
}
var recent = jobs.slice().sort(function(a, b) { return b.id - a.id; }).slice(0, 5);
return (
<div>
<div className="sgrid">
<div className="sc bl"><div className="slbl">Active</div><div className="sval">{active}</div><div className="ssub">In workshop</div></div>
<div className="sc"><div className="slbl">Waiting</div><div className="sval">{waiting}</div><div className="ssub">Queued</div></div>
<div className="sc gn"><div className="slbl">Revenue</div><div className="sval">GBP{rev}</div><div className="ssub">Collected</div></div>
<div className="sc rd"><div className="slbl">Owed</div><div className="sval">GBP{out}</div><div className="ssub">Outstanding</div></div>
</div>
<div className="twocol">
<div className="panel">
<div className="phd">Recent <span>Jobs</span></div>
<div className="pbd">
{recent.map(function(j) {
var c = j.status === ‘Done’ ? ‘var(–green)’ : j.status === ‘In Progress’ ? ‘var(–blue)’ : ‘var(–orange)’;
return (
<div className="ai" key={j.id}>
<div className=“adot” style={{ background: c }}></div>
<div><div className="atxt"><b>{j.plate}</b> - {j.service}</div><div className="atm">{j.customer} - {j.date}</div></div>
</div>
);
})}
</div>
</div>
<div className="panel">
<div className="phd">Fleet <span>({vehs.length})</span></div>
<div className="pbd">
{vehs.slice(0, 5).map(function(v) {
return (
<div className="ai" key={v.id}>
<div className=“adot” style={{ background: ‘var(–muted2)’ }}></div>
<div><div className="atxt"><b>{v.plate}</b> - {v.year} {v.make} {v.model}</div><div className="atm">{v.owner}</div></div>
</div>
);
})}
</div>
</div>
</div>
</div>
);
}

function JobsPage({ jobs, setJobs }) {
var [srch, setSrch] = useState(’’);
var [mod, setMod] = useState(null);
var filtered = jobs.filter(function(j) {
var q = srch.toLowerCase();
return j.plate.toLowerCase().indexOf(q) !== -1 || j.customer.toLowerCase().indexOf(q) !== -1 || j.service.toLowerCase().indexOf(q) !== -1;
});
function save(f) {
var next;
if (mod === ‘new’) {
var newJob = { id: maxId(jobs), plate: f.plate, customer: f.customer, email: f.email, vehicle: f.vehicle, service: f.service, tech: f.tech, status: f.status, date: f.date, notes: f.notes, amount: f.amount };
next = jobs.concat([newJob]);
} else {
next = jobs.map(function(x) { return x.id === mod.id ? f : x; });
}
setJobs(next);
setMod(null);
}
function del(id) { setJobs(jobs.filter(function(x) { return x.id !== id; })); }
return (
<div>
{mod && <JobMod job={mod === ‘new’ ? null : mod} onClose={function() { setMod(null); }} onSave={save} />}
<div className="tw">
<div className="thd">
<span className="ttitle">Job Cards</span>
<div style={{ display: ‘flex’, gap: 8, flexWrap: ‘wrap’ }}>
<input className=“srch” placeholder=“Search…” value={srch} onChange={function(e) { setSrch(e.target.value); }} />
<button className=“btn btn-or btn-sm” onClick={function() { setMod(‘new’); }}>+ New Job</button>
</div>
</div>
<div className="tscrl">
<table>
<thead><tr><th>Plate</th><th>Customer</th><th>Service</th><th>Tech</th><th>Status</th><th>Date</th><th>GBP</th><th></th></tr></thead>
<tbody>
{filtered.length === 0
? <tr><td colSpan={8}><div className="empty">No jobs found.</div></td></tr>
: filtered.map(function(j) {
return (
<tr key={j.id}>
<td><span className="plt">{j.plate}</span></td>
<td>{j.customer}</td>
<td style={{ fontSize: 12 }}>{j.service}</td>
<td style={{ fontSize: 11, color: ‘var(–muted)’ }}>{j.tech}</td>
<td><SBadge s={j.status} /></td>
<td style={{ fontSize: 11, color: ‘var(–muted)’ }}>{j.date}</td>
<td style={{ fontWeight: 700, color: ‘var(–orange)’ }}>GBP{j.amount}</td>
<td>
<div style={{ display: ‘flex’, gap: 5 }}>
<button className=“btn btn-gh btn-sm” onClick={function() { setMod(j); }}>Edit</button>
<button className=“btn btn-dn btn-sm” onClick={function() { del(j.id); }}>X</button>
</div>
</td>
</tr>
);
})}
</tbody>
</table>
</div>
</div>
</div>
);
}

function VehsPage({ vehs, setVehs }) {
var [srch, setSrch] = useState(’’);
var [mod, setMod] = useState(null);
var filtered = vehs.filter(function(v) {
var q = srch.toLowerCase();
return v.plate.toLowerCase().indexOf(q) !== -1 || v.owner.toLowerCase().indexOf(q) !== -1;
});
function save(f) {
var next;
if (mod === ‘new’) {
var nv = { id: maxId(vehs), plate: f.plate, make: f.make, model: f.model, year: f.year, owner: f.owner, phone: f.phone, email: f.email, mileage: f.mileage };
next = vehs.concat([nv]);
} else {
next = vehs.map(function(x) { return x.id === mod.id ? f : x; });
}
setVehs(next);
setMod(null);
}
function del(id) { setVehs(vehs.filter(function(x) { return x.id !== id; })); }
return (
<div>
{mod && <VehMod veh={mod === ‘new’ ? null : mod} onClose={function() { setMod(null); }} onSave={save} />}
<div style={{ display: ‘flex’, justifyContent: ‘space-between’, alignItems: ‘center’, marginBottom: 14, flexWrap: ‘wrap’, gap: 10 }}>
<input className=“srch” placeholder=“Search…” value={srch} onChange={function(e) { setSrch(e.target.value); }} style={{ width: 200 }} />
<button className=“btn btn-or btn-sm” onClick={function() { setMod(‘new’); }}>+ Add Vehicle</button>
</div>
{filtered.length === 0
? <div className="empty">No vehicles found.</div>
: <div className="vgrid">
{filtered.map(function(v) {
return (
<div className="vc" key={v.id}>
<div className="vcact">
<button className=“btn btn-gh btn-sm” onClick={function() { setMod(v); }}>Edit</button>
<button className=“btn btn-dn btn-sm” onClick={function() { del(v.id); }}>X</button>
</div>
<div className="vplt">{v.plate}</div>
<div className="vmk">{v.year} {v.make} {v.model}</div>
<div className="vow">{v.owner}</div>
<div className="vmeta">
<div><label>Phone</label><span>{v.phone}</span></div>
<div><label>Miles</label><span>{v.mileage}</span></div>
</div>
</div>
);
})}
</div>}
</div>
);
}

function InvsPage({ invs, setInvs }) {
var [srch, setSrch] = useState(’’);
var [mod, setMod] = useState(null);
var filtered = invs.filter(function(i) {
var q = srch.toLowerCase();
return i.customer.toLowerCase().indexOf(q) !== -1 || i.plate.toLowerCase().indexOf(q) !== -1;
});
var total = 0; var coll = 0;
for (var i = 0; i < filtered.length; i++) { total += filtered[i].amount; if (filtered[i].paid) coll += filtered[i].amount; }
function save(f) {
var next;
if (mod === ‘new’) {
var ni = { id: maxId(invs), customer: f.customer, plate: f.plate, email: f.email, service: f.service, labour: f.labour, parts: f.parts, amount: f.amount, paid: f.paid, date: f.date };
next = invs.concat([ni]);
} else {
next = invs.map(function(x) { return x.id === mod.id ? f : x; });
}
setInvs(next);
setMod(null);
}
function del(id) { setInvs(invs.filter(function(x) { return x.id !== id; })); }
function toggle(id) {
setInvs(invs.map(function(x) {
if (x.id !== id) return x;
return { id: x.id, customer: x.customer, plate: x.plate, email: x.email, service: x.service, labour: x.labour, parts: x.parts, amount: x.amount, paid: !x.paid, date: x.date };
}));
}
return (
<div>
{mod && <InvMod inv={mod === ‘new’ ? null : mod} onClose={function() { setMod(null); }} onSave={save} />}
<div className=“sgrid” style={{ gridTemplateColumns: ‘repeat(3,1fr)’, marginBottom: 14 }}>
<div className="sc gn"><div className="slbl">Collected</div><div className="sval">GBP{coll}</div></div>
<div className="sc rd"><div className="slbl">Owed</div><div className="sval">GBP{total - coll}</div></div>
<div className="sc bl"><div className="slbl">Billed</div><div className="sval">GBP{total}</div></div>
</div>
<div className="tw">
<div className="thd">
<span className="ttitle">Invoices</span>
<div style={{ display: ‘flex’, gap: 8 }}>
<input className=“srch” placeholder=“Search…” value={srch} onChange={function(e) { setSrch(e.target.value); }} />
<button className=“btn btn-or btn-sm” onClick={function() { setMod(‘new’); }}>+ New</button>
</div>
</div>
<div className="tscrl">
<table>
<thead><tr><th>#</th><th>Customer</th><th>Plate</th><th>Service</th><th>Labour</th><th>Parts</th><th>Total</th><th>Date</th><th>Status</th><th></th></tr></thead>
<tbody>
{filtered.length === 0
? <tr><td colSpan={10}><div className="empty">No invoices.</div></td></tr>
: filtered.map(function(inv) {
return (
<tr key={inv.id}>
<td style={{ fontSize: 11, color: ‘var(–muted)’ }}>#{String(inv.id).padStart(4, ‘0’)}</td>
<td>{inv.customer}</td>
<td><span className="plt">{inv.plate}</span></td>
<td style={{ fontSize: 12, color: ‘var(–muted)’ }}>{inv.service}</td>
<td>GBP{inv.labour || 0}</td>
<td>GBP{inv.parts || 0}</td>
<td style={{ fontWeight: 700, color: ‘var(–orange)’ }}>GBP{inv.amount}</td>
<td style={{ fontSize: 11, color: ‘var(–muted)’ }}>{inv.date}</td>
<td>
<span className={’bdg ’ + (inv.paid ? ‘bpd’ : ‘bup’)} style={{ cursor: ‘pointer’ }} onClick={function() { toggle(inv.id); }}>
{inv.paid ? ‘Paid’ : ‘Unpaid’}
</span>
</td>
<td>
<div style={{ display: ‘flex’, gap: 5 }}>
<button className=“btn btn-gh btn-sm” onClick={function() { setMod(inv); }}>Edit</button>
<button className=“btn btn-dn btn-sm” onClick={function() { del(inv.id); }}>X</button>
</div>
</td>
</tr>
);
})}
</tbody>
</table>
</div>
</div>
</div>
);
}

function CustHome({ user, jobs, invs }) {
var myJ = jobs.filter(function(j) { return j.email === user.email; });
var myI = invs.filter(function(i) { return i.email === user.email; });
var unpaid = 0;
for (var i = 0; i < myI.length; i++) { if (!myI[i].paid) unpaid += myI[i].amount; }
var active = myJ.filter(function(j) { return j.status === ‘In Progress’ || j.status === ‘Waiting’; }).length;
var fn = user.name.split(’ ’)[0];
return (
<div>
<div className="phero">
<h2>Welcome Back, {fn}</h2>
<p>Track your vehicles, view invoices and book services.</p>
<div className="pbadge">COMPARE AUTOMOTIVE PORTAL</div>
</div>
<div className=“sgrid” style={{ gridTemplateColumns: ‘repeat(3,1fr)’ }}>
<div className="sc"><div className="slbl">My Jobs</div><div className="sval">{myJ.length}</div></div>
<div className="sc bl"><div className="slbl">Active</div><div className="sval">{active}</div></div>
<div className="sc rd"><div className="slbl">Owed</div><div className="sval">GBP{unpaid}</div></div>
</div>
</div>
);
}

function CustTrack({ user, jobs }) {
var myJ = jobs.filter(function(j) { return j.email === user.email; });
var steps = [‘Waiting’, ‘In Progress’, ‘Done’];
var prog = { ‘Waiting’: 25, ‘In Progress’: 65, ‘Done’: 100, ‘Cancelled’: 100 };
if (myJ.length === 0) return <div className="empty">No jobs on your account yet.</div>;
return (
<div>
{myJ.map(function(j) {
var pct = prog[j.status] || 0;
return (
<div className="jtr" key={j.id}>
<div className="jtr-hd">
<div className="jtr-ttl">{j.service}</div>
<SBadge s={j.status} />
</div>
<div className="jdet">
<div className="jplt">{j.plate}</div>
<div className="jveh">{j.vehicle}</div>
<div className="ssteps">
{steps.map(function(st) {
var idx = steps.indexOf(st);
var cur = steps.indexOf(j.status);
var cls = ‘stp’;
if (j.status === st) cls = ‘stp ac’;
else if (idx < cur || j.status === ‘Done’) cls = ‘stp dn’;
return <div className={cls} key={st}>{st}</div>;
})}
</div>
<div className="pbar"><div className=“pfill” style={{ width: pct + ‘%’ }}></div></div>
<div className="dgrid">
<div className="di"><label>Technician</label><span>{j.tech}</span></div>
<div className="di"><label>Date</label><span>{j.date}</span></div>
<div className="di"><label>Estimate</label><span style={{ color: ‘var(–orange)’, fontWeight: 700 }}>GBP{j.amount}</span></div>
{j.notes ? <div className="di"><label>Notes</label><span style={{ color: ‘var(–muted)’ }}>{j.notes}</span></div> : null}
</div>
</div>
</div>
);
})}
</div>
);
}

function CustInvs({ user, invs, setInvs }) {
var myI = invs.filter(function(i) { return i.email === user.email; });
function pay(id) {
setInvs(invs.map(function(x) {
if (x.id !== id) return x;
return { id: x.id, customer: x.customer, plate: x.plate, email: x.email, service: x.service, labour: x.labour, parts: x.parts, amount: x.amount, paid: true, date: x.date };
}));
}
if (myI.length === 0) return <div className="empty">No invoices yet.</div>;
return (
<div>
{myI.map(function(inv) {
return (
<div className="invc" key={inv.id}>
<div className="invt">
<div>
<div className="invid">Invoice #{String(inv.id).padStart(4, ‘0’)} - {inv.date}</div>
<div style={{ fontWeight: 700, marginTop: 3 }}>{inv.service}</div>
<span className=“plt” style={{ fontSize: 13 }}>{inv.plate}</span>
</div>
<div className="invtot">GBP{inv.amount}</div>
</div>
<div className="invrows">
{inv.labour > 0 ? <div className="invrow"><span>Labour</span><span>GBP{inv.labour}</span></div> : null}
{inv.parts > 0 ? <div className="invrow"><span>Parts</span><span>GBP{inv.parts}</span></div> : null}
</div>
{inv.paid
? <div style={{ marginTop: 10, color: ‘var(–green)’, fontSize: 12, fontWeight: 700 }}>PAID - Thank you!</div>
: <div className="invpay">
<div style={{ fontWeight: 700 }}>Payment Due</div>
<button className=“btn btn-gn btn-sm” onClick={function() { pay(inv.id); }}>Pay GBP{inv.amount}</button>
</div>}
</div>
);
})}
</div>
);
}

function CustBook() {
var [sel, setSel] = useState(null);
var [step, setStep] = useState(1);
var [plate, setPlate] = useState(’’);
var [date, setDate] = useState(’’);
var [notes, setNotes] = useState(’’);
var [done, setDone] = useState(false);
var selSvc = null;
for (var i = 0; i < SVCS.length; i++) { if (SVCS[i].id === sel) { selSvc = SVCS[i]; break; } }
function reset() { setDone(false); setStep(1); setSel(null); setPlate(’’); setDate(’’); setNotes(’’); }
if (done) return (
<div style={{ textAlign: ‘center’, padding: ‘48px 16px’ }}>
<div style={{ fontSize: 40, marginBottom: 12, color: ‘var(–green)’, fontWeight: 700 }}>CONFIRMED!</div>
<div style={{ color: ‘var(–muted)’, marginBottom: 20 }}>{selSvc ? selSvc.name : ‘’} - {plate} - {date}</div>
<button className="btn btn-or" onClick={reset}>Book Another</button>
</div>
);
return (
<div>
{step === 1 && (
<div>
<div style={{ marginBottom: 14, color: ‘var(–muted)’ }}>Select the service you need:</div>
<div className="bkgrid">
{SVCS.map(function(sv) {
return (
<div key={sv.id} className={‘sopt’ + (sel === sv.id ? ’ sel’ : ‘’)} onClick={function() { setSel(sv.id); }}>
<div className="snm">{sv.name}</div>
<div className="spr">From GBP{sv.price}</div>
</div>
);
})}
</div>
<div style={{ marginTop: 18, textAlign: ‘right’ }}>
<button className=“btn btn-or” style={{ opacity: sel ? 1 : 0.4 }} onClick={function() { if (sel) setStep(2); }}>Next</button>
</div>
</div>
)}
{step === 2 && (
<div style={{ maxWidth: 440 }}>
<div style={{ marginBottom: 14, fontWeight: 700, fontSize: 15 }}>{selSvc ? selSvc.name : ‘’}</div>
<div style={{ display: ‘flex’, flexDirection: ‘column’, gap: 13 }}>
<div><label className="flbl">Registration Plate</label><input value={plate} placeholder=“AB12 CDE” onChange={function(e) { setPlate(e.target.value.toUpperCase()); }} /></div>
<div><label className="flbl">Preferred Date</label><input type=“date” value={date} onChange={function(e) { setDate(e.target.value); }} /></div>
<div><label className="flbl">Notes</label><textarea value={notes} placeholder=“Any concerns…” onChange={function(e) { setNotes(e.target.value); }}></textarea></div>
</div>
<div style={{ display: ‘flex’, gap: 10, marginTop: 16 }}>
<button className=“btn btn-gh” onClick={function() { setStep(1); }}>Back</button>
<button className=“btn btn-or” style={{ opacity: plate && date ? 1 : 0.4 }} onClick={function() { if (plate && date) setDone(true); }}>Confirm Booking</button>
</div>
</div>
)}
</div>
);
}

function Login({ onLogin }) {
var [tab, setTab] = useState(‘admin’);
var [email, setEmail] = useState(’’);
var [pass, setPass] = useState(’’);
var [err, setErr] = useState(’’);
function login() {
if (tab === ‘admin’) {
if (email === ‘admin’ && pass === ‘admin’) { onLogin(USERS[‘admin’]); }
else { setErr(‘Use: admin / admin’); }
} else {
var u = USERS[email.toLowerCase()];
if (u && u.role === ‘customer’ && pass === ‘password’) { onLogin(u); }
else { setErr(‘Try: james@email.com / password’); }
}
}
return (
<div className="login-screen">
<div className="login-card">
<div className="login-logo">
<div className="brand">COMPARE <span>AUTOMOTIVE</span></div>
<div className="sub">Management Portal</div>
</div>
<div className="login-tabs">
<button className={‘login-tab’ + (tab === ‘admin’ ? ’ active’ : ‘’)} onClick={function() { setTab(‘admin’); setErr(’’); }}>Staff</button>
<button className={‘login-tab’ + (tab === ‘customer’ ? ’ active’ : ‘’)} onClick={function() { setTab(‘customer’); setErr(’’); }}>Customer</button>
</div>
<div className="login-form">
<div>
<label className="flbl">{tab === ‘admin’ ? ‘Username’ : ‘Email’}</label>
<input value={email} placeholder={tab === ‘admin’ ? ‘admin’ : ‘your@email.com’} autoCapitalize=“none” onChange={function(e) { setEmail(e.target.value); }} />
</div>
<div>
<label className="flbl">Password</label>
<input type=“password” value={pass} placeholder=“password” onChange={function(e) { setPass(e.target.value); }} />
</div>
{err ? <div style={{ color: ‘var(–red)’, fontSize: 12 }}>{err}</div> : null}
<button className="btn btn-or btn-fw" onClick={login}>Sign In</button>
</div>
<div className="hint">
{tab === ‘admin’ ? <span><b>admin</b> / <b>admin</b></span> : <span><b>james@email.com</b> / <b>password</b></span>}
</div>
</div>
</div>
);
}

export default function App() {
var [user, setUser] = useState(null);
var [tab, setTab] = useState(‘dash’);
var [menu, setMenu] = useState(false);
var [toast, setToast] = useState(false);
var [jobs, setJobsRaw] = useState(function() { return load(‘ca_jobs’, JOBS0); });
var [vehs, setVehsRaw] = useState(function() { return load(‘ca_vehs’, VEHS0); });
var [invs, setInvsRaw] = useState(function() { return load(‘ca_invs’, INVS0); });

function showToast() { setToast(true); setTimeout(function() { setToast(false); }, 1500); }
function setJobs(v) { setJobsRaw(v); persist(‘ca_jobs’, v); showToast(); }
function setVehs(v) { setVehsRaw(v); persist(‘ca_vehs’, v); showToast(); }
function setInvs(v) { setInvsRaw(v); persist(‘ca_invs’, v); showToast(); }

function logout() { setUser(null); setTab(‘dash’); setMenu(false); }

if (!user) return (
<div>
<style>{CSS}</style>
<Login onLogin={function(u) { setUser(u); setTab(u.role === ‘admin’ ? ‘dash’ : ‘home’); }} />
</div>
);

var isAdmin = user.role === ‘admin’;
var nav = isAdmin ? ANAV : CNAV;
var secs = [];
for (var i = 0; i < nav.length; i++) { if (secs.indexOf(nav[i].section) === -1) secs.push(nav[i].section); }

function NavList() {
return (
<div>
{secs.map(function(sec) {
return (
<div key={sec}>
<div className="nsec">{sec}</div>
{nav.filter(function(n) { return n.section === sec; }).map(function(n) {
return (
<div key={n.id} className={‘ni’ + (tab === n.id ? ’ active’ : ‘’)} onClick={function() { setTab(n.id); setMenu(false); }}>
{n.label}
</div>
);
})}
</div>
);
})}
</div>
);
}

function renderPage() {
if (isAdmin && tab === ‘dash’) return <Dashboard jobs={jobs} vehs={vehs} invs={invs} />;
if (isAdmin && tab === ‘jobs’) return <JobsPage jobs={jobs} setJobs={setJobs} />;
if (isAdmin && tab === ‘vehs’) return <VehsPage vehs={vehs} setVehs={setVehs} />;
if (isAdmin && tab === ‘invs’) return <InvsPage invs={invs} setInvs={setInvs} />;
if (!isAdmin && tab === ‘home’) return <CustHome user={user} jobs={jobs} invs={invs} />;
if (!isAdmin && tab === ‘track’) return <CustTrack user={user} jobs={jobs} />;
if (!isAdmin && tab === ‘invs’) return <CustInvs user={user} invs={invs} setInvs={setInvs} />;
if (!isAdmin && tab === ‘book’) return <CustBook />;
return null;
}

return (
<div>
<style>{CSS}</style>
<div className="app">

```
    <div className="mob-hdr">
      <div className="mob-hdr-inner">
        <div className="mob-brand">COMPARE <span>AUTO</span></div>
        <button className="hbg" onClick={function() { setMenu(true); }}>&#9776;</button>
      </div>
    </div>

    <div className={'ov' + (menu ? ' open' : '')} onClick={function() { setMenu(false); }}></div>
    <div className={'drawer' + (menu ? ' open' : '')}>
      <div className="drawer-hd">
        <div>
          <div className="sb-brand">COMPARE <span>AUTOMOTIVE</span></div>
          <div className="rbadge">{isAdmin ? 'STAFF' : 'CUSTOMER'}</div>
        </div>
        <button className="drawer-cls" onClick={function() { setMenu(false); }}>X</button>
      </div>
      <div className="sb-nav"><NavList /></div>
      <div className="sb-ft">
        <div><div className="uname">{user.name}</div><div className="urole">{isAdmin ? 'Administrator' : 'Customer'}</div></div>
        <button className="soBtn" onClick={logout}>Sign out</button>
      </div>
    </div>

    <aside className="sb">
      <div className="sb-logo">
        <div className="sb-brand">COMPARE <span>AUTOMOTIVE</span></div>
        <div className="rbadge">{isAdmin ? 'STAFF PORTAL' : 'CUSTOMER PORTAL'}</div>
      </div>
      <nav className="sb-nav"><NavList /></nav>
      <div className="sb-ft">
        <div><div className="uname">{user.name}</div><div className="urole">{isAdmin ? 'Administrator' : 'Customer'}</div></div>
        <button className="soBtn" onClick={logout}>Sign out</button>
      </div>
    </aside>

    <main className="main">
      <div className="topbar">
        <div className="tbtitle">{PTITLES[tab] || tab}</div>
        <span style={{ fontSize: 11, color: 'var(--muted)' }}>{isAdmin ? jobs.length + ' jobs' : user.email}</span>
      </div>
      <div className="pg">{renderPage()}</div>
    </main>

    <nav className="bnav">
      <div className="bnav-inner">
        {nav.map(function(n) {
          return (
            <button key={n.id} className={'bni' + (tab === n.id ? ' active' : '')} onClick={function() { setTab(n.id); }}>
              <span className="bni-ic">*</span>
              {n.label}
            </button>
          );
        })}
      </div>
    </nav>

    <div className={'toast' + (toast ? ' show' : '')}>Saved</div>
  </div>
</div>
);
}