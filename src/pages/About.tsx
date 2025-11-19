import { Users, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Fashion Store</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about bringing you the finest fashion that combines style, 
            comfort, and sustainability.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, Fashion Store began with a simple mission: to make 
                high-quality, stylish clothing accessible to everyone. What started as a 
                small boutique has grown into a beloved fashion destination for thousands 
                of customers worldwide.
              </p>
              <p>
                We believe that fashion is more than just clothing—it's a form of 
                self-expression. Every piece in our collection is carefully curated to 
                ensure it meets our high standards of quality, style, and comfort.
              </p>
              <p>
                Our commitment to sustainability means we work with ethical manufacturers 
                and use eco-friendly materials whenever possible. We're not just selling 
                clothes; we're building a community of conscious fashion lovers.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">Community First</h3>
            <p className="text-muted-foreground">
              We value our customers and build lasting relationships based on trust and quality service.
            </p>
          </div>
          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">Sustainability</h3>
            <p className="text-muted-foreground">
              Committed to ethical practices and environmentally responsible fashion choices.
            </p>
          </div>
          <div className="text-center space-y-4 p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-full">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold">Quality Promise</h3>
            <p className="text-muted-foreground">
              Every item is tested for durability and comfort to ensure you get the best.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-accent/5 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Behind Fashion Store is a dedicated team of fashion enthusiasts, designers, 
            and customer service experts who work tirelessly to bring you the best shopping 
            experience possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
