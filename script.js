// Utility helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// Sample products (10 categories × 5 items = 50 products)
const SAMPLE = [
  // 1. Stationery & Office Supplies
  {id:1,title:'Ballpoint Pen Set',price:2.5,category:'Stationery & Office Supplies',image:'https://images.unsplash.com/photo-1586861635167-f21a65f4f94d?w=1400&auto=format&fit=crop',description:'Smooth writing ballpoint pens for everyday use.',tags:['pen','writing']},
  {id:2,title:'Ruled Notebook',price:3.0,category:'Stationery & Office Supplies',image:'https://images.unsplash.com/photo-1509223197845-458d87318791?w=1400&auto=format&fit=crop',description:'100-page ruled notebook for school and office.',tags:['notebook','paper']},
  {id:3,title:'A4 Sheets (500 pack)',price:6.5,category:'Stationery & Office Supplies',image:'https://images.unsplash.com/photo-1588422333075-5a6a2b4d6a59?w=1400&auto=format&fit=crop',description:'High quality A4 printing paper.',tags:['paper','office']},
  {id:4,title:'Highlighter Pack',price:4.0,category:'Stationery & Office Supplies',image:'https://images.unsplash.com/photo-1586861635167-089b9f7ad8e1?w=1400&auto=format&fit=crop',description:'Set of 5 assorted color highlighters.',tags:['marker','school']},
  {id:5,title:'File Folder',price:2.2,category:'Stationery & Office Supplies',image:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&auto=format&fit=crop',description:'Durable file folder for office use.',tags:['office','folder']},

  // 2. Electronics & Gadgets
  {id:6,title:'Smartphone X',price:499.0,category:'Electronics & Gadgets',image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1400&auto=format&fit=crop',description:'Latest generation smartphone with HD display.',tags:['phone','tech']},
  {id:7,title:'Laptop Pro',price:899.0,category:'Electronics & Gadgets',image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&auto=format&fit=crop',description:'Lightweight laptop for professionals.',tags:['laptop','work']},
  {id:8,title:'Wireless Headphones',price:120.0,category:'Electronics & Gadgets',image:'https://images.unsplash.com/photo-1518443797959-5e31d27136d6?w=1400&auto=format&fit=crop',description:'Noise-cancelling Bluetooth headphones.',tags:['music','audio']},
  {id:9,title:'Smartwatch',price:150.0,category:'Electronics & Gadgets',image:'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1400&auto=format&fit=crop',description:'Fitness tracking smartwatch with notifications.',tags:['watch','wearable']},
  {id:10,title:'Power Bank 10000mAh',price:25.0,category:'Electronics & Gadgets',image:'https://images.unsplash.com/photo-1587032227403-2f25eec9eb28?w=1400&auto=format&fit=crop',description:'Portable charger for your devices.',tags:['battery','portable']},

  // 3. Home & Kitchen
  {id:11,title:'Nonstick Cookware Set',price:75.0,category:'Home & Kitchen',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Durable 5-piece cookware set.',tags:['cooking','kitchen']},
  {id:12,title:'Dinner Plates (6 pack)',price:30.0,category:'Home & Kitchen',image:'https://images.unsplash.com/photo-1601991989947-3f90c0a5af4a?w=1400&auto=format&fit=crop',description:'Elegant ceramic dinner plates.',tags:['dining','tableware']},
  {id:13,title:'Storage Containers',price:20.0,category:'Home & Kitchen',image:'https://images.unsplash.com/photo-1622202173646-8abca9015ae3?w=1400&auto=format&fit=crop',description:'Set of 5 airtight storage boxes.',tags:['storage','kitchen']},
  {id:14,title:'Pressure Cooker',price:55.0,category:'Home & Kitchen',image:'https://images.unsplash.com/photo-1584267385493-d8f5309693a1?w=1400&auto=format&fit=crop',description:'Stainless steel 5L pressure cooker.',tags:['cooking','appliance']},
  {id:15,title:'Steel Water Bottle',price:12.0,category:'Home & Kitchen',image:'https://images.unsplash.com/photo-1598970434795-0c54fe7c0645?w=1400&auto=format&fit=crop',description:'Reusable stainless steel bottle.',tags:['bottle','eco']},

  // 4. Clothing & Fashion
  {id:16,title:"Men's T-Shirt',price:15.0,category:'Clothing & Fashion",image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1400&auto=format&fit=crop',description:'Casual cotton t-shirt.',tags:['men','top']},
  {id:17,title:"Women's Dress',price:40.0,category:'Clothing & Fashion",image:'https://images.unsplash.com/photo-1520975914290-10f3240b9f35?w=1400&auto=format&fit=crop',description:'Elegant evening wear dress.',tags:['women','fashion']},
  {id:18,title:"Kids' Wear Set',price:25.0,category:'Clothing & Fashion",image:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1400&auto=format&fit=crop',description:'Cute outfit set for kids.',tags:['kids','clothing']},
  {id:19,title:'Denim Jeans',price:35.0,category:'Clothing & Fashion',image:'https://images.unsplash.com/photo-1514995669114-6081e934b693?w=1400&auto=format&fit=crop',description:'Blue slim-fit denim jeans.',tags:['jeans','men']},
  {id:20,title:'Hoodie Jacket',price:50.0,category:'Clothing & Fashion',image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1400&auto=format&fit=crop',description:'Warm hoodie for winter.',tags:['jacket','hoodie']},

  // 5. Footwear
  {id:21,title:'Sports Shoes',price:60.0,category:'Footwear',image:'https://images.unsplash.com/photo-1528701800489-20be9c5d60dc?w=1400&auto=format&fit=crop',description:'Lightweight running shoes.',tags:['sports','men']},
  {id:22,title:'Formal Shoes',price:70.0,category:'Footwear',image:'https://images.unsplash.com/photo-1614251059245-217a1f0ad819?w=1400&auto=format&fit=crop',description:'Black leather formal shoes.',tags:['formal','office']},
  {id:23,title:'Sandals',price:25.0,category:'Footwear',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Comfortable summer sandals.',tags:['women','casual']},
  {id:24,title:'Flip-Flops',price:10.0,category:'Footwear',image:'https://images.unsplash.com/photo-1614289371518-7e52ff03cd34?w=1400&auto=format&fit=crop',description:'Casual beach flip-flops.',tags:['casual','beach']},
  {id:25,title:'Leather Boots',price:90.0,category:'Footwear',image:'https://images.unsplash.com/photo-1606813907291-d86d5239957e?w=1400&auto=format&fit=crop',description:'Durable brown boots.',tags:['boots','men']},

  // 6. Beauty & Personal Care
  {id:26,title:'Face Wash',price:8.0,category:'Beauty & Personal Care',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Refreshing face cleanser.',tags:['skincare','face']},
  {id:27,title:'Hair Oil',price:6.0,category:'Beauty & Personal Care',image:'https://images.unsplash.com/photo-1586861635167-f21a65f4f94d?w=1400&auto=format&fit=crop',description:'Nourishing coconut hair oil.',tags:['hair','oil']},
  {id:28,title:'Lipstick',price:12.0,category:'Beauty & Personal Care',image:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1400&auto=format&fit=crop',description:'Matte finish lipstick.',tags:['makeup','lip']},
  {id:29,title:'Perfume Spray',price:20.0,category:'Beauty & Personal Care',image:'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1400&auto=format&fit=crop',description:'Long-lasting fragrance.',tags:['fragrance','personal']},
  {id:30,title:'Herbal Shampoo',price:10.0,category:'Beauty & Personal Care',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Gentle shampoo for daily use.',tags:['hair','shampoo']},

  // 7. Sports & Fitness
  {id:31,title:'Yoga Mat',price:18.0,category:'Sports & Fitness',image:'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1400&auto=format&fit=crop',description:'Anti-slip yoga mat.',tags:['yoga','fitness']},
  {id:32,title:'Dumbbell Set',price:40.0,category:'Sports & Fitness',image:'https://images.unsplash.com/photo-1599058917212-d750089bc035?w=1400&auto=format&fit=crop',description:'Pair of adjustable dumbbells.',tags:['gym','strength']},
  {id:33,title:'Football',price:22.0,category:'Sports & Fitness',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Standard size football.',tags:['sports','outdoor']},
  {id:34,title:'Cricket Bat',price:35.0,category:'Sports & Fitness',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Professional cricket bat.',tags:['cricket','sports']},
  {id:35,title:'Gym Water Bottle',price:9.0,category:'Sports & Fitness',image:'https://images.unsplash.com/photo-1598970434795-0c54fe7c0645?w=1400&auto=format&fit=crop',description:'Leakproof gym bottle.',tags:['hydration','fitness']},

  // 8. Toys & Games
  {id:36,title:'Action Figure',price:15.0,category:'Toys & Games',image:'https://images.unsplash.com/photo-1586878343142-b72c50997d6b?w=1400&auto=format&fit=crop',description:'Collectible superhero action figure.',tags:['toy','kids']},
  {id:37,title:'Board Game Set',price:25.0,category:'Toys & Games',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Classic family board game.',tags:['game','fun']},
  {id:38,title:'Puzzle 500 Pieces',price:12.0,category:'Toys & Games',image:'https://images.unsplash.com/photo-1586878343142-b72c50997d6b?w=1400&auto=format&fit=crop',description:'Challenging 500-piece puzzle.',tags:['puzzle','kids']},
  {id:39,title:'Remote Control Car',price:30.0,category:'Toys & Games',image:'https://images.unsplash.com/photo-1611930022073-1f18d38e9d84?w=1400&auto=format&fit=crop',description:'Rechargeable RC car.',tags:['rc','toy']},
  {id:40,title:'Soft Teddy Bear',price:20.0,category:'Toys & Games',image:'https://images.unsplash.com/photo-1586878343142-b72c50997d6b?w=1400&auto=format&fit=crop',description:'Cute plush teddy.',tags:['soft','plush']},

  // 9. Grocery & Essentials
  {id:41,title:'Basmati Rice (5kg)',price:15.0,category:'Grocery & Essentials',image:'https://images.unsplash.com/photo-1622202173646-8abca9015ae3?w=1400&auto=format&fit=crop',description:'Premium quality basmati rice.',tags:['grocery','food']},
  {id:42,title:'Sunflower Oil (1L)',price:4.0,category:'Grocery & Essentials',image:'https://images.unsplash.com/photo-1615486364554-7e9f1c8d26ab?w=1400&auto=format&fit=crop',description:'Refined sunflower cooking oil.',tags:['oil','cooking']},
  {id:43,title:'Mixed Spices Pack',price:6.0,category:'Grocery & Essentials',image:'https://images.unsplash.com/photo-1622202173646-8abca9015ae3?w=1400&auto=format&fit=crop',description:'Assorted Indian spices.',tags:['spice','grocery']},
  {id:44,title:'Chips & Snacks Combo',price:10.0,category:'Grocery & Essentials',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Family pack of chips and snacks.',tags:['snack','food']},
  {id:45,title:'Fruit Juice Pack',price:8.0,category:'Grocery & Essentials',image:'https://images.unsplash.com/photo-1600180758895-7d2f51b6f5a2?w=1400&auto=format&fit=crop',description:'Assorted fruit juices.',tags:['juice','drink']},

  // 10. Books & Learning
  {id:46,title:'Academic Textbook',price:22.0,category:'Books & Learning',image:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&auto=format&fit=crop',description:'University-level academic book.',tags:['study','education']},
  {id:47,title:'Fiction Novel',price:18.0,category:'Books & Learning',image:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&auto=format&fit=crop',description:'Bestselling fiction novel.',tags:['novel','reading']},
  {id:48,title:'Childrens Story Book',price:12.0,category:'Books & Learning',image:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&auto=format&fit=crop',description:'Illustrated storybook for kids.',tags:['kids','book']},
  {id:49,title:'Exam Guide',price:20.0,category:'Books & Learning',image:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&auto=format&fit=crop',description:'Competitive exam preparation guide.',tags:['exam','study']},
  {id:50,title:'Monthly Magazine',price:5.0,category:'Books & Learning',image:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1400&auto=format&fit=crop',description:'Latest issue magazine.',tags:['magazine','reading']}
];

// State
let products = loadProducts();
let activeTags = new Set();

// DOM
const grid = $('#productGrid');
const search = $('#search');
const categoryFilter = $('#categoryFilter');
const tagFilters = $('#tagFilters');
const openAdd = $('#openAdd');
const addPanel = $('#addPanel');
const addForm = $('#addForm');
const cancelAdd = $('#cancelAdd');
const modal = $('#modal');
const closeModal = $('#closeModal');
const modalImage = $('#modalImage');
const modalTitle = $('#modalTitle');
const modalPrice = $('#modalPrice');
const modalDesc = $('#modalDesc');
const modalTags = $('#modalTags');

// Init
document.addEventListener('DOMContentLoaded', ()=>{
  renderCategoryOptions();
  renderProducts();
  bindEvents();
});

// Storage
function loadProducts(){
  try { const raw = localStorage.getItem('products_v1'); if(raw) return JSON.parse(raw); }
  catch(e){ console.warn('parse fail', e) }
  localStorage.setItem('products_v1', JSON.stringify(SAMPLE));
  return SAMPLE.slice();
}
function saveProducts(){ localStorage.setItem('products_v1', JSON.stringify(products)); }

// Render
function renderCategoryOptions(){
  const cats = Array.from(new Set(products.map(p=>p.category))).sort();
  categoryFilter.innerHTML = '<option value="all">All categories</option>' +
    cats.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join('');
  renderTagChips();
}
function renderTagChips(){
  const allTags = Array.from(new Set(products.flatMap(p=>p.tags||[]))).sort();
  tagFilters.innerHTML = allTags.map(t=>`<button data-tag="${escapeHtml(t)}" class="chip">${escapeHtml(t)}</button>`).join('');
  $$('#tagFilters .chip').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const tag = btn.dataset.tag;
      if(activeTags.has(tag)) activeTags.delete(tag); else activeTags.add(tag);
      btn.classList.toggle('active'); renderProducts();
    });
  });
}
function renderProducts(){
  const q = search.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const filtered = products.filter(p=>{
    if(cat!=='all' && p.category!==cat) return false;
    if(activeTags.size && !(p.tags||[]).some(t=>activeTags.has(t))) return false;
    if(!q) return true;
    return (p.title+' '+(p.description||'')+' '+(p.tags||[]).join(' ')).toLowerCase().includes(q);
  });
  if(!filtered.length){
    grid.innerHTML='<div style="padding:28px;text-align:center;color:var(--muted)">No products match your filters.</div>';
    return;
  }
  grid.innerHTML=filtered.map(p=>cardHtml(p)).join('');
  $('.card').forEach(el=>el.addEventListener('click',()=>openModal(+el.dataset.id)));
}
function cardHtml(p){
  return `<article class="card" data-id="${p.id}">
    <div class="img" style="background-image:url('${escapeAttr(p.image)}')"></div>
    <div><div class="title">${escapeHtml(p.title)}</div>
    <div class="meta"><span class="price">₹${Number(p.price).toFixed(2)}</span><span>${escapeHtml(p.category)}</span></div>
    <div class="small" style="margin-top:8px">${escapeHtml(truncate(p.description||'',120))}</div></div>
    <div class="tags" style="margin-top:8px">${(p.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
  </article>`;
}

// Modal
function openModal(id){
  const p=products.find(x=>x.id===id); if(!p) return;
  modalImage.style.backgroundImage=`url('${p.image}')`;
  modalTitle.textContent=p.title;
  modalPrice.textContent=`₹${p.price.toFixed(2)}`;
  modalDesc.textContent=p.description||'';
  modalTags.innerHTML=(p.tags||[]).map(t=>`<span class="tag">${escapeHtml(t)}</span>`).join('');
  modal.style.display='flex';
}
function closeModalFn(){ modal.style.display='none'; }

// Add product
async function handleAdd(e){
  e.preventDefault();
  const fd=new FormData(addForm);
  const title=fd.get('title').trim();
  const price=parseFloat(fd.get('price'))||0;
  const category=fd.get('category').trim()||'General';
  const description=(fd.get('description')||'').trim();
  const tags=(fd.get('tags')||'').split(',').map(s=>s.trim()).filter(Boolean);
  const imageUrl=fd.get('image').trim();
  const file=addForm.file.files[0];
  let finalImage=imageUrl;
  if(file) finalImage=await readFileAsDataURL(file);
  if(!finalImage) finalImage='https://via.placeholder.com/300x200.png?text=Product';
  const id=Math.max(0,...products.map(p=>p.id))+1;
  const newProd={id,title,price,category,image:finalImage,description,tags};
  products.unshift(newProd); saveProducts(); addForm.reset(); addPanel.style.display='none';
  renderCategoryOptions(); renderProducts(); setTimeout(()=>openModal(id),200);
}

// Events
function bindEvents(){
  search.addEventListener('input',debounce(renderProducts,220));
  categoryFilter.addEventListener('change',renderProducts);
  openAdd.addEventListener('click',()=>{addPanel.style.display=addPanel.style.display==='none'?'block':'none';});
  cancelAdd.addEventListener('click',()=>{addPanel.style.display='none';addForm.reset();});
  addForm.addEventListener('submit',handleAdd);
  closeModal.addEventListener('click',closeModalFn);
  modal.addEventListener('click',e=>{if(e.target===modal) closeModalFn();});
}

// Helpers
function escapeHtml(s){return (s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#039;')}
function escapeAttr(s){return escapeHtml(s).replace(/\"/g,'&quot;')}
function truncate(s,n){return s.length<=n?s:s.slice(0,n-1)+'…'}
function debounce(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}
function readFileAsDataURL(file){return new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=rej;fr.readAsDataURL(file);});}