import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useCart, Product } from "@/context/CartContext";
import { toast } from "sonner";
import { ShoppingCart } from "lucide-react";

// Import all product images
import mensWhiteShirt from "@/assets/products/mens-white-shirt.jpg";
import mensDenimJacket from "@/assets/products/mens-denim-jacket.jpg";
import mensBlackJeans from "@/assets/products/mens-black-jeans.jpg";
import mensLeatherJacket from "@/assets/products/mens-leather-jacket.jpg";
import mensTshirt from "@/assets/products/mens-tshirt.jpg";
import mensChinos from "@/assets/products/mens-chinos.jpg";
import womensFloralDress from "@/assets/products/womens-floral-dress.jpg";
import womensBlackDress from "@/assets/products/womens-black-dress.jpg";
import womensBlouse from "@/assets/products/womens-blouse.jpg";
import womensJeans from "@/assets/products/womens-jeans.jpg";
import womensCardigan from "@/assets/products/womens-cardigan.jpg";
import kidsTshirt from "@/assets/products/kids-tshirt.jpg";
import kidsDenimJacket from "@/assets/products/kids-denim-jacket.jpg";
import kidsJoggers from "@/assets/products/kids-joggers.jpg";
import kidsDress from "@/assets/products/kids-dress.jpg";

const Products = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const products: Product[] = [
    // Men's Products
    { id: 1, name: "Classic White Shirt", price: 49.99, image: mensWhiteShirt, category: "Men" },
    { id: 2, name: "Denim Jacket", price: 89.99, image: mensDenimJacket, category: "Men" },
    { id: 3, name: "Black Jeans", price: 69.99, image: mensBlackJeans, category: "Men" },
    { id: 4, name: "Leather Jacket", price: 149.99, image: mensLeatherJacket, category: "Men" },
    { id: 5, name: "Casual Navy T-Shirt", price: 29.99, image: mensTshirt, category: "Men" },
    { id: 6, name: "Chino Pants", price: 59.99, image: mensChinos, category: "Men" },
    
    // Women's Products
    { id: 7, name: "Floral Summer Dress", price: 89.99, image: womensFloralDress, category: "Women" },
    { id: 8, name: "Elegant Black Dress", price: 79.99, image: womensBlackDress, category: "Women" },
    { id: 9, name: "White Blouse", price: 54.99, image: womensBlouse, category: "Women" },
    { id: 10, name: "Blue Skinny Jeans", price: 64.99, image: womensJeans, category: "Women" },
    { id: 11, name: "Pink Cardigan", price: 69.99, image: womensCardigan, category: "Women" },
    
    // Kids' Products
    { id: 12, name: "Fun Print T-Shirt", price: 24.99, image: kidsTshirt, category: "Kids" },
    { id: 13, name: "Kids Denim Jacket", price: 49.99, image: kidsDenimJacket, category: "Kids" },
    { id: 14, name: "Comfortable Joggers", price: 34.99, image: kidsJoggers, category: "Kids" },
    { id: 15, name: "Floral Summer Dress", price: 39.99, image: kidsDress, category: "Kids" },
  ];

  const categories = ["All", "Men", "Women", "Kids"];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Collection</h1>
          <p className="text-lg text-muted-foreground">
            Discover premium clothing for everyone in your family
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              size="lg"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <p className="text-xl font-bold text-accent">${product.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full group"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
