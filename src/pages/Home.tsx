import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                New Spring Collection 2024
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
              Elevate Your Style
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the latest trends in fashion. Premium quality clothing designed for the modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="group">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Latest Trends</h3>
              <p className="text-muted-foreground">
                Stay ahead with our curated collection of the season's hottest styles.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Each piece is crafted with attention to detail and premium materials.
              </p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-lg hover:bg-card transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Exclusive Designs</h3>
              <p className="text-muted-foreground">
                Unique pieces you won't find anywhere else, designed in-house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of fashion-forward individuals who trust Fashion Store for their style needs.
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="group">
              Start Shopping
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
