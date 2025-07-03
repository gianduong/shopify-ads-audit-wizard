
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, AlertTriangle, Phone, Mail, MessageCircle, Shield, Users, Clock, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const checklistItems = [
    {
      category: "Store Setup",
      priority: "High",
      items: [
        {
          task: "Store is publicly accessible (no password protection)",
          description: "Contact CS for security verification guide",
          requiresCS: true,
          locked: true
        },
        {
          task: "Google Analytics 4 (GA4) installed and configured", 
          description: "Request CS for tracking code and setup instructions",
          requiresCS: true,
          locked: true
        },
        {
          task: "Google Ads conversion tracking installed",
          description: "CS will provide pixel setup and integration guide",
          requiresCS: true,
          locked: true
        },
        {
          task: "SSL Certificate properly configured",
          description: "Request CS for SSL verification checklist",
          requiresCS: true,
          locked: true
        }
      ]
    },
    {
      category: "Products", 
      priority: "High",
      items: [
        {
          task: "Product descriptions optimized for SEO",
          description: "Contact CS for SEO optimization templates",
          requiresCS: true,
          locked: true
        },
        {
          task: "High-quality product images uploaded",
          description: "Basic task - upload your product photos",
          requiresCS: false,
          locked: false
        },
        {
          task: "Inventory levels properly set",
          description: "Request CS for inventory management setup",
          requiresCS: true,
          locked: true
        },
        {
          task: "Product variants configured (size, color, etc.)",
          description: "CS will guide variant setup and pricing",
          requiresCS: true,
          locked: true
        }
      ]
    },
    {
      category: "Payment & Shipping",
      priority: "Critical", 
      items: [
        {
          task: "Payment gateways integrated and tested",
          description: "CS required for payment account activation",
          requiresCS: true,
          locked: true
        },
        {
          task: "Shipping zones and rates configured",
          description: "Request CS for shipping calculator setup",
          requiresCS: true,
          locked: true
        },
        {
          task: "Tax settings configured by region",
          description: "CS will verify tax compliance setup",
          requiresCS: true,
          locked: true
        }
      ]
    },
    {
      category: "Customer Experience",
      priority: "Medium",
      items: [
        {
          task: "Customer review system installed",
          description: "Contact CS for review platform integration",
          requiresCS: true,
          locked: true
        },
        {
          task: "Live chat widget installed and configured",
          description: "CS will setup chat routing and training",
          requiresCS: true,
          locked: true
        },
        {
          task: "Email marketing automation setup",
          description: "Request CS for email template creation",
          requiresCS: true,
          locked: true
        },
        {
          task: "Return/refund policy clearly displayed",
          description: "CS will review policy compliance",
          requiresCS: true,
          locked: true
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E-commerce Store Setup Checklist
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete setup guide với CS support để launch store thành công
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-800">Most Items Require CS Contact</span>
            </div>
            <p className="text-red-700 text-sm">
              Hầu hết các bước cần CS support để setup đúng cách. Contact CS để unlock chi tiết instructions.
            </p>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-8 border-2 border-blue-200">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-semibold text-blue-900">Hotline</p>
                <p className="text-sm text-blue-700">1900-xxxx</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold text-green-900">Email</p>
                <p className="text-sm text-green-700">setup@company.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-purple-600" />
              <div>
                <p className="font-semibold text-purple-900">Live Chat</p>
                <p className="text-sm text-purple-700">Instant support</p>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact CS Now
            </Button>
          </div>
        </div>

        {/* Checklist Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {checklistItems.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    {category.category}
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(category.priority)}`}>
                    {category.priority}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`border rounded-lg p-3 ${item.locked ? 'bg-gray-50 opacity-75' : 'bg-white'}`}>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          {item.locked ? (
                            <Lock className="w-4 h-4 text-red-500" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">{item.task}</h4>
                          <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                          {item.locked && (
                            <div className="mt-2 flex items-center gap-2">
                              <Button size="sm" variant="outline" className="text-xs h-6">
                                Contact CS for Details
                              </Button>
                              <HelpCircle className="w-3 h-3 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CS Contact CTA */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Shield className="w-6 h-6" />
              Need Help With Setup?
            </CardTitle>
            <CardDescription className="text-blue-100">
              CS Expert sẽ guide bạn qua từng bước và unlock detailed instructions
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">15min</div>
                <p className="text-sm text-blue-100">Average response time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">87%</div>
                <p className="text-sm text-blue-100">Setup success rate with CS</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <p className="text-sm text-blue-100">Support availability</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Call CS Hotline
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Start Live Chat
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Touchpoints Link */}
        <div className="text-center mt-8">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-lg">Advanced CS Strategies</CardTitle>
              <CardDescription>
                Detailed touchpoint analysis for maximum CS engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/touchpoints">
                <Button className="w-full">
                  View Customer Touchpoint Analysis
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
