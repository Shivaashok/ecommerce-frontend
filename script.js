class ECommerceApp {
    constructor() {
        this.isAdmin = false;
        this.products = [
            {
                id: 1,
                name: "Sony WH-1000XM5 Headphones",
                description: "Industry-leading noise cancelling wireless headphones with 30-hour battery life.",
                price: 28999,
                category: "electronics",
                image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop"
            },
            {
                id: 2,
                name: "Nike Dri-FIT Training Shirt",
                description: "Moisture-wicking performance t-shirt for athletic training and casual wear.",
                price: 2999,
                category: "clothing",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop"
            },
            {
                id: 3,
                name: "Breville Barista Express",
                description: "Premium espresso machine with built-in burr grinder and steam wand.",
                price: 58999,
                category: "home",
                image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
            },
            {
                id: 4,
                name: "Adidas Ultraboost 23",
                description: "High-performance running shoes with Boost midsole technology and Primeknit upper.",
                price: 15999,
                category: "sports",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
            },
            {
                id: 5,
                name: "Samsung Galaxy S25 Ultra",
                description: "Latest flagship smartphone with 200MP camera, S Pen, and 5G connectivity.",
                price: 99999,
                category: "electronics",
                image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop"
            },
            {
                id: 6,
                name: "Patagonia Down Sweater",
                description: "Lightweight down jacket with recycled materials, perfect for cold weather.",
                price: 20999,
                category: "clothing",
                image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop"
            },
            {
                id: 7,
                name: "Apple MacBook Air M3",
                description: "Ultra-thin laptop with M3 chip, 13.6-inch Liquid Retina display, and all-day battery.",
                price: 91999,
                category: "electronics",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
            },
            {
                id: 8,
                name: "Dyson V15 Detect Vacuum",
                description: "Cordless vacuum with laser dust detection and powerful suction technology.",
                price: 62999,
                category: "home",
                image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
            },
            {
                id: 9,
                name: "Levi's 501 Original Jeans",
                description: "Classic straight-fit jeans made with premium denim and authentic styling.",
                price: 7499,
                category: "clothing",
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop"
            },
            {
                id: 10,
                name: "Wilson Pro Staff Tennis Racket",
                description: "Professional tennis racket used by top players, perfect control and precision.",
                price: 21799,
                category: "sports",
                image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
            }
        ];
        this.cart = [];
        this.filteredProducts = [...this.products];
        this.currentCategory = 'all';
        this.editingProductId = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.renderProducts();
        this.updateCartUI();
    }

    bindEvents() {
        // Role toggle
        document.getElementById('roleToggle').addEventListener('click', () => {
            this.toggleRole();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.filterProducts(e.target.dataset.category);
            });
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.searchProducts(e.target.value);
        });

        // Add product button
        document.getElementById('addProductBtn').addEventListener('click', () => {
            this.showProductModal();
        });

        // Product form
        document.getElementById('productForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveProduct();
        });

        // Cart button
        document.getElementById('cartBtn').addEventListener('click', () => {
            this.showCartModal();
        });

        // Checkout button
        document.getElementById('checkoutBtn').addEventListener('click', () => {
            this.checkout();
        });

        // Modal close buttons
        document.getElementById('closeProductModal').addEventListener('click', () => {
            this.closeProductModal();
        });

        document.getElementById('closeCartModal').addEventListener('click', () => {
            this.closeCartModal();
        });

        // Close modals on backdrop click
        document.getElementById('productModal').addEventListener('click', (e) => {
            if (e.target.id === 'productModal') this.closeProductModal();
        });

        document.getElementById('cartModal').addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') this.closeCartModal();
        });
    }

    toggleRole() {
        this.isAdmin = !this.isAdmin;
        const toggle = document.getElementById('roleToggle');
        const adminControls = document.getElementById('adminControls');
        
        toggle.classList.toggle('admin', this.isAdmin);
        adminControls.classList.toggle('show', this.isAdmin);
        
        this.renderProducts();
    }

    filterProducts(category) {
        this.currentCategory = category;
        
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        this.applyFilters();
    }

    searchProducts(searchTerm) {
        this.applyFilters(searchTerm);
    }

    applyFilters(searchTerm = '') {
        let filtered = [...this.products];
        
        // Category filter
        if (this.currentCategory !== 'all') {
            filtered = filtered.filter(product => product.category === this.currentCategory);
        }
        
        // Search filter
        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(term) ||
                product.description.toLowerCase().includes(term)
            );
        }
        
        this.filteredProducts = filtered;
        this.renderProducts();
    }

    renderProducts() {
        const grid = document.getElementById('productsGrid');
        
        if (this.filteredProducts.length === 0) {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #666;">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            `;
            return;
        }
        
        grid.innerHTML = this.filteredProducts.map(product => `
            <div class="product-card">
                ${this.isAdmin ? '<div class="admin-badge">ADMIN</div>' : ''}
                <div class="product-image" onclick="this.closest('.product-card').classList.toggle('expanded')">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;" onerror="this.style.display='none'; this.parentNode.innerHTML='<i class=\\'fas fa-image\\' style=\\'font-size: 3rem; color: rgba(255,255,255,0.7);\\' ></i>';">
                </div>
                <div class="product-title">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    ${this.isAdmin ? `
                        <button class="btn btn-secondary" onclick="app.editProduct(${product.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-danger" onclick="app.deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    ` : `
                        <button class="btn btn-primary" onclick="app.addToCart(${product.id})">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    `}
                </div>
            </div>
        `).join('');
    }

    showProductModal(product = null) {
        const modal = document.getElementById('productModal');
        const title = document.getElementById('modalTitle');
        const form = document.getElementById('productForm');
        
        if (product) {
            title.textContent = 'Edit Product';
            document.getElementById('productName').value = product.name;
            document.getElementById('productDescription').value = product.description;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productImage').value = product.image;
            this.editingProductId = product.id;
        } else {
            title.textContent = 'Add New Product';
            form.reset();
            this.editingProductId = null;
        }
        
        modal.classList.add('show');
    }

    closeProductModal() {
        document.getElementById('productModal').classList.remove('show');
        this.editingProductId = null;
    }

    saveProduct() {
        const name = document.getElementById('productName').value;
        const description = document.getElementById('productDescription').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const category = document.getElementById('productCategory').value;
        const image = document.getElementById('productImage').value;
        
        const productData = { name, description, price, category, image };
        
        if (this.editingProductId) {
            // Edit existing product
            const index = this.products.findIndex(p => p.id === this.editingProductId);
            this.products[index] = { ...this.products[index], ...productData };
        } else {
            // Add new product
            const newProduct = {
                id: Date.now(),
                ...productData
            };
            this.products.push(newProduct);
        }
        
        this.applyFilters();
        this.closeProductModal();
        this.showNotification('Product saved successfully!');
    }

    editProduct(id) {
        const product = this.products.find(p => p.id === id);
        this.showProductModal(product);
    }

    deleteProduct(id) {
        if (confirm('Are you sure you want to delete this product?')) {
            this.products = this.products.filter(p => p.id !== id);
            this.applyFilters();
            this.showNotification('Product deleted successfully!');
        }
    }

    viewProduct(id) {
        const product = this.products.find(p => p.id === id);
        alert(`Product: ${product.name}\nPrice: ${product.price}\nDescription: ${product.description}`);
    }

    addToCart(id) {
        const product = this.products.find(p => p.id === id);
        const existingItem = this.cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        
        this.updateCartUI();
        this.showNotification('Product added to cart!');
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.updateCartUI();
        this.renderCartItems();
    }

    updateQuantity(id, change) {
        const item = this.cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(id);
            } else {
                this.updateCartUI();
                this.renderCartItems();
            }
        }
    }

    updateCartUI() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    showCartModal() {
        const modal = document.getElementById('cartModal');
        this.renderCartItems();
        modal.classList.add('show');
    }

    closeCartModal() {
        document.getElementById('cartModal').classList.remove('show');
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cartItems');
        const totalAmountElement = document.getElementById('totalAmount');
        
        if (this.cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; color: #666;">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                </div>
            `;
            totalAmountElement.textContent = '0';
            return;
        }
        
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmountElement.textContent = total.toLocaleString('en-IN');
        
        cartItemsContainer.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <i class="${item.icon}"></i>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} each</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span style="margin: 0 10px; font-weight: 600;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="btn btn-danger" onclick="app.removeFromCart(${item.id})" style="margin-left: 10px; flex: none; width: auto;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    checkout() {
        if (this.cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (confirm(`Proceed with checkout?\n\nItems: ${itemCount}\nTotal: ${total.toFixed(2)}`)) {
            this.cart = [];
            this.updateCartUI();
            this.closeCartModal();
            this.showNotification('Order placed successfully! Thank you for your purchase!');
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #4ecdc4, #44a08d);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
            font-weight: 600;
        `;
        
        notification.innerHTML = `
            <i class="fas fa-check-circle" style="margin-right: 10px;"></i>
            ${message}
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the app
const app = new ECommerceApp();

// Add some extra interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for better UX
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation for product images
    document.addEventListener('click', (e) => {
        if (e.target.closest('.product-image')) {
            const img = e.target.closest('.product-image');
            img.style.transform = 'scale(0.95)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 150);
        }
    });
    
    // Add keyboard support for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.getElementById('productModal').classList.contains('show')) {
                app.closeProductModal();
            }
            if (document.getElementById('cartModal').classList.contains('show')) {
                app.closeCartModal();
            }
        }
    });
    
    // Add welcome message
    setTimeout(() => {
        app.showNotification('Welcome to StyleHub! Toggle between User and Admin modes to explore different features.');
    }, 1000);
});