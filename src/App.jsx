import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import HomePage from '@/pages/HomePage';
import KameezPage from '@/pages/KameezPage';
import ShalwarPage from '@/pages/ShalwarPage';
import DupattaPage from '@/pages/DupattaPage';
import CompleteSetsPage from '@/pages/CompleteSetsPage';
import NewArrivalsPage from '@/pages/NewArrivalsPage';
import SalePage from '@/pages/SalePage';
import CartPage from '@/pages/CartPage';
import WishlistPage from '@/pages/WishlistPage';
import AuthModal from '@/components/AuthModal';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const handleSearch = (query) => {
    toast({
      title: `🚧 Search for "${query}" isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
    });
  };

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: `${product.name} added to cart!`,
      description: "Continue shopping or view your cart."
    });
  };

  const handleAddToWishlist = (product) => {
    setWishlistItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        toast({
          title: "Removed from wishlist",
          description: `${product.name} has been removed from your wishlist.`
        });
        return prev.filter(item => item.id !== product.id);
      }
      toast({
        title: "Added to wishlist!",
        description: `${product.name} has been added to your wishlist.`
      });
      return [...prev, product];
    });
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full floating blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-300/15 rounded-full floating blur-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-amber-400/10 rounded-full floating blur-md" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-amber-500/15 rounded-full floating blur-xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <Header
          cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          wishlistCount={wishlistItems.length}
          onSearch={handleSearch}
          onAuthClick={() => setIsAuthModalOpen(true)}
        />

        {/* Main Content */}
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/kameez" 
              element={
                <KameezPage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/shalwar" 
              element={
                <ShalwarPage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/dupatta" 
              element={
                <DupattaPage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/complete-sets" 
              element={
                <CompleteSetsPage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/new-arrivals" 
              element={
                <NewArrivalsPage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/sale" 
              element={
                <SalePage 
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                />
              } 
            />
            <Route 
              path="/cart" 
              element={
                <CartPage 
                  cartItems={cartItems}
                  onRemoveFromCart={handleRemoveFromCart}
                  onUpdateQuantity={handleUpdateQuantity}
                />
              } 
            />
            <Route 
              path="/wishlist" 
              element={
                <WishlistPage 
                  wishlistItems={wishlistItems}
                  onAddToCart={handleAddToCart}
                  onRemoveFromWishlist={(productId) => 
                    setWishlistItems(prev => prev.filter(item => item.id !== productId))
                  }
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-amber-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <span className="text-xl font-bold">Nihal Boutique</span>
                </div>
                <p className="text-amber-200 mb-4">
                  Premium women's fashion with traditional elegance and modern style.
                </p>
              </div>
              
              <div>
                <span className="font-semibold text-lg mb-4 block">Quick Links</span>
                <div className="space-y-2">
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">About Us</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Contact</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Size Guide</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Shipping Info</p>
                </div>
              </div>
              
              <div>
                <span className="font-semibold text-lg mb-4 block">Categories</span>
                <div className="space-y-2">
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Kameez</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Shalwar</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Dupatta</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Complete Sets</p>
                </div>
              </div>
              
              <div>
                <span className="font-semibold text-lg mb-4 block">Customer Service</span>
                <div className="space-y-2">
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Help Center</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Returns</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Track Order</p>
                  <p className="text-amber-200 hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-amber-800 mt-8 pt-8 text-center">
              <p className="text-amber-200">
                © 2024 Nihal Boutique. All rights reserved. Made with ❤️ for fashion lovers.
              </p>
            </div>
          </div>
        </footer>

        {/* Auth Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </div>
  );
}

export default App;