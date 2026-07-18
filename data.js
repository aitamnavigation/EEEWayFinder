/* =========================================================================
   EEE WAYFINDER — DATA SOURCE
   -------------------------------------------------------------------------
   Names and room titles in this file were corrected against the official
   spreadsheet "aitamWayFinder.xlsx" supplied by the department.

   This is the single source of truth for the directory. Edit this file to
   add/move/rename rooms or faculty — the rest of the site rebuilds itself
   from this data automatically. No other file needs to change.

   FACULTY PHOTOS
   Save a square, front-facing .png photo for each faculty member using the
   exact filename listed in `photo` below, into: assets/faculty/
   e.g. assets/faculty/hod-d-vijay-kumar.png
   Until a photo exists, the site automatically shows a neat initials avatar
   instead — so you can ship this today and drop photos in later, one at a
   time, with zero code changes.

   NOTE: a few photo filenames changed in this revision because the
   spreadsheet corrected the spelling of the person's name. See the README
   for the full up-to-date filename list before renaming photos you already
   saved.
   ========================================================================= */

const FLOORS = [
  { key: "ground", label: "Ground Floor", short: "G" },
  { key: "first",  label: "First Floor",  short: "1" },
  { key: "second", label: "Second Floor", short: "2" },
];

// Physical left-to-right corridor order used to draw the wayfinding strip.
const FLOOR_ORDER = {
  ground: ["GF-01","GF-02","GF-03","GF-04","GF-05","GF-06","GF-07","GF-08","GF-09","GF-10"],
  first:  ["FF-01","FF-02","FF-03","FF-04","FF-05","FF-06","FF-07","FF-08","FF-09","FF-10","FF-11","FF-12","FF-13","FF-14","FF-15","FF-16","FF-17","FF-18"],
  second: ["SF-01","SF-02","SF-03","SF-04","SF-05","SF-06","SF-07","SF-08","SF-09","SF-10","SF-11","SF-12","SF-13","SF-14","SF-15","SF-16","SF-17","SF-18"],
};

// type controls the icon + accent color used across the UI
// one of: office | lab | classroom | washroom | library | store | facility
const ROOMS = [
  // ---------------- GROUND FLOOR ----------------
  { code:"GF-01", floor:"ground", type:"facility", title:"NCC", occupants:[], tags:["ncc","ncc room"] },
  { code:"GF-02", floor:"ground", type:"lab", title:"BEE Lab / ECT Lab", occupants:[], tags:["bee lab","ect lab","basic electrical engineering"] },
  { code:"GF-03", floor:"ground", type:"lab", title:"BEE Lab / ECT Lab", occupants:[], tags:["bee lab","ect lab"] },
  { code:"GF-04", floor:"ground", type:"lab", title:"Seminar Hall", occupants:[], tags:["seminar","seminar hall"] },
  { code:"GF-05", floor:"ground", type:"store", title:"Store Room", occupants:[], tags:["store","stock"] },
  { code:"GF-06", floor:"ground", type:"washroom", title:"Gents Washroom", occupants:[], tags:["washroom","restroom","toilet","gents","men"] },
  { code:"GF-07", floor:"ground", type:"washroom", title:"Ladies Washroom", occupants:[], tags:["washroom","restroom","toilet","ladies","women"] },
  { code:"GF-08", floor:"ground", type:"lab", title:"BEE Lab / Electrical Machines Lab (DCMT & ACM Lab)", occupants:[], tags:["bee lab","electrical machines","dcmt","acm lab"] },
  { code:"GF-09", floor:"ground", type:"lab", title:"Power Systems Lab", occupants:[], tags:["power systems"] },
  { code:"GF-10", floor:"ground", type:"lab", title:"EMS Lab / BEE Lab", occupants:[], tags:["ems lab","bee lab"] },

  // ---------------- FIRST FLOOR ----------------
  { code:"FF-01", floor:"first", type:"office", title:"HOD (EEE) Cabin", occupants:[
      { name:"Dr. D. Vijay Kumar", designation:"Professor & HOD", qualification:"M.E., Ph.D.", photo:"hod-d-vijay-kumar" },
    ], tags:["hod","head of department"] },
  { code:"FF-02", floor:"first", type:"office", title:"Dept. Office", occupants:[], tags:["office","admin","department office"] },
  { code:"FF-03", floor:"first", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. S. Kumara Swamy", designation:"Assistant Professor", qualification:"M.Tech, Ph.D.", photo:"s-kumara-swamy" },
      { name:"K. Suneel Gowtham", designation:"Assistant Professor", qualification:"M.Tech", photo:"k-suneel-gowtham" },
    ], tags:[] },
  { code:"FF-04", floor:"first", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. Ch. Ravikumar", designation:"Professor", qualification:"M.E., Ph.D.", photo:"ch-ravikumar" },
    ], tags:[] },
  { code:"FF-05", floor:"first", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. Pydi Bala Murali", designation:"Associate Professor", qualification:"Ph.D.", photo:"pydi-bala-murali" },
    ], tags:[] },
  { code:"FF-06", floor:"first", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. S. Nagaraju", designation:"Associate Professor", qualification:"M.Tech, Ph.D.", photo:"s-nagaraju" },
      { name:"B. Srikanth", designation:"Assistant Professor", qualification:"M.Tech", photo:"b-srikanth" },
    ], tags:[] },
  { code:"FF-07", floor:"first", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. B.B Rath", designation:"Associate Professor", qualification:"M.Tech, Ph.D.", photo:"bb-rath" },
      { name:"N. Sowjanya", designation:"Assistant Professor", qualification:"M.Tech", photo:"n-sowjanya" },
    ], tags:[] },
  { code:"FF-08", floor:"first", type:"library", title:"Dept. Library", occupants:[], tags:["library","books"] },
  { code:"FF-09", floor:"first", type:"classroom", title:"Empty Classroom", occupants:[], tags:["classroom","free room"] },
  { code:"FF-10", floor:"first", type:"lab", title:"R&D Lab / Modernization of Electrical Machines Lab (AICTE Sponsored Lab)", occupants:[], tags:["r&d","modernization","electrical machines","aicte"] },
  { code:"FF-11", floor:"first", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. B. Srinivasa Rao", designation:"Assistant Professor", qualification:"M.Tech, Ph.D., MISTE, MIRED", photo:"b-srinivasa-rao" },
      { name:"T. Lokanadham", designation:"Assistant Professor", qualification:"M.Tech", photo:"t-lokanadham" },
      { name:"M.V.V. Appala Naidu", designation:"Assistant Professor", qualification:"M.Tech", photo:"mvv-appala-naidu" },
      { name:"G. Ashok", designation:"Assistant Professor", qualification:"M.Tech, Ph.D.", photo:"g-ashok" },
      { name:"Ch. Krishna Rao", designation:"Associate Professor", qualification:"M.Tech", photo:"ch-krishna-rao" },
      { name:"B. Manmadha Rao", designation:"Sr.Assistant Professor", qualification:"M.Tech", photo:"b-manmadha-rao" },
      { name:"Dr. Srinivasa Acharya", designation:"Assistant Professor", qualification:"M.Tech, Ph.D.", photo:"srinivasa-acharya" },
    ], tags:[] },
  { code:"FF-12", floor:"first", type:"classroom", title:"Final Year EEE — Section A", occupants:[], tags:["final year","4th year","class a"] },
  { code:"FF-13", floor:"first", type:"classroom", title:"Final Year EEE — Section B", occupants:[], tags:["final year","4th year","class b"] },
  { code:"FF-14", floor:"first", type:"lab", title:"English Communication Lab", occupants:[], tags:["english","communication"] },
  { code:"FF-15", floor:"first", type:"lab", title:"Python Lab / C Lab / EDC Lab / Control Systems Lab", occupants:[], tags:["python","c lab","edc","control systems lab","cs lab"] },
  { code:"FF-16", floor:"first", type:"washroom", title:"Gents Washroom", occupants:[], tags:["washroom","restroom","toilet","gents","men"] },
  { code:"FF-17", floor:"first", type:"washroom", title:"Ladies Washroom", occupants:[], tags:["washroom","restroom","toilet","ladies","women"] },
  { code:"FF-18", floor:"first", type:"washroom", title:"Staff Washroom", occupants:[], tags:["washroom","restroom","toilet","staff"] },

  // ---------------- SECOND FLOOR ----------------
  { code:"SF-01", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"B. Ravi Kumar", designation:"Assistant Professor", qualification:"M.Tech", photo:"b-ravi-kumar" },
    ], tags:[] },
  { code:"SF-02", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. K. Kiran Kumar", designation:"Professor", qualification:"M.Tech, Ph.D.", photo:"k-kiran-kumar" },
    ], tags:[] },
  { code:"SF-03", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"T. Jagan Mohana Rao", designation:"Assistant Professor", qualification:"M.Tech (Ph.D.)", photo:"t-jagan-mohana-rao" },
    ], tags:[] },
  { code:"SF-04", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. P.K. Gouda", designation:"Professor", qualification:"M.Tech, Ph.D.", photo:"pk-gouda" },
    ], tags:[] },
  { code:"SF-05", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"N. Tejeswararao", designation:"Associate Professor", qualification:"M.Tech", photo:"n-tejeswararao" },
    ], tags:[] },
  { code:"SF-06", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Kalla Kanakaraju", designation:"Assistant Professor", qualification:"M.Tech", photo:"k-kanakaraju" },
    ], tags:[] },
  { code:"SF-07", floor:"second", type:"office", title:"Faculty Cabin", occupants:[
      { name:"Dr. G. Ramarao", designation:"Assistant Professor", qualification:"M.Tech, Ph.D.", photo:"g-ramarao" },
      { name:"Ch. Prasad", designation:"Assistant Professor", qualification:"M.Tech, Ph.D.", photo:"ch-prasad" },
    ], tags:[] },
  { code:"SF-08", floor:"second", type:"office", title:"Examination Cell", occupants:[], tags:["examination","exam cell"] },
  { code:"SF-09", floor:"second", type:"facility", title:"Women's Waiting Hall", occupants:[], tags:["waiting hall","women"] },
  { code:"SF-10", floor:"second", type:"classroom", title:"Empty Classroom", occupants:[], tags:["classroom","free room"] },
  { code:"SF-11", floor:"second", type:"facility", title:"Convention Hall", occupants:[], tags:["facility","meetings",] },
  { code:"SF-12", floor:"second", type:"classroom", title:"3rd Year EEE — Section A", occupants:[], tags:["3rd year","third year","class a"] },
  { code:"SF-13", floor:"second", type:"classroom", title:"3rd Year EEE — Section B", occupants:[], tags:["3rd year","third year","class b"] },
  { code:"SF-14", floor:"second", type:"lab", title:"Industrial Automation Lab", occupants:[], tags:["industrial automation","ia lab"] },
  { code:"SF-15", floor:"second", type:"lab", title:"Power Electronics / Electrical Drives / Python Lab / Simulation Lab", occupants:[], tags:["power electronics","electrical drives","python lab","simulation lab"] },
  { code:"SF-16", floor:"second", type:"washroom", title:"Gents Washroom", occupants:[], tags:["washroom","restroom","toilet","gents","men"] },
  { code:"SF-17", floor:"second", type:"washroom", title:"Ladies Washroom", occupants:[], tags:["washroom","restroom","toilet","ladies","women"] },
  { code:"SF-18", floor:"second", type:"washroom", title:"Staff Washroom", occupants:[], tags:["washroom","restroom","toilet","staff"] },
];

// Flattened faculty list, derived from ROOMS, used for the photo grid.
const FACULTY = ROOMS.flatMap(r =>
  r.occupants.map(p => ({ ...p, room: r.code, floor: r.floor }))
);
