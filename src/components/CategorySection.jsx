import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: 'Kameez',
      description: 'Elegant and comfortable tops for every occasion',
      image: 'Beautiful embroidered kameez collection displayed in boutique',
      itemCount: '120+ Items'
    },
    {
      id: 2,
      name: 'Shalwar',
      description: 'Traditional and modern bottom wear',
      image: 'Stylish shalwar collection in various colors and patterns',
      itemCount: '85+ Items'
    },
    {
      id: 3,
      name: 'Dupatta',
      description: 'Premium scarves and dupattas',
      image: 'Colorful dupatta collection with intricate designs',
      itemCount: '95+ Items'
    },
    {
      id: 4,
      name: 'Complete Sets',
      description: 'Ready-to-wear coordinated outfits',
      image: 'Complete shalwar kameez sets with matching dupattas',
      itemCount: '60+ Items'
    }
  ];

  const handleCategoryClick = (category) => {
    // Navigation is now handled by Link components
  };

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections of premium women's fashion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="category-card cursor-pointer border-0 shadow-lg hover:shadow-2xl">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img  
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={category.name}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{category.itemCount}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-amber-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <Button
                    onClick={() => handleCategoryClick(category)}
                    variant="outline"
                    className="w-full border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white transition-all duration-300 group"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;