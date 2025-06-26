import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Store, 
  ShoppingBag, 
  Shield, 
  Target, 
  BarChart3, 
  Scale, 
  Tag, 
  Rss, 
  PenTool, 
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  DollarSign,
  Zap
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  checked: boolean;
}

const Index = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const checklistData: ChecklistItem[] = [
    // Store Configuration
    { id: 'store-1', title: 'Store is not password protected', description: 'Ensure store is in public mode (not locked with password)', category: 'store', priority: 'high', checked: false },
    { id: 'store-2', title: 'Google Analytics 4 (GA4) installed', description: 'Track user behavior on the store', category: 'store', priority: 'high', checked: false },
    { id: 'store-3', title: 'Google Ads account connected', description: 'Integrate Google Ads account to activate conversion tracking', category: 'store', priority: 'high', checked: false },
    { id: 'store-4', title: 'Review app installed', description: 'Install apps like Judge.me, Loox to increase product credibility', category: 'store', priority: 'medium', checked: false },
    { id: 'store-5', title: 'Discount/promotion programs available', description: 'Discount codes or free shipping to increase conversion rates', category: 'store', priority: 'medium', checked: false },
    { id: 'store-6', title: 'Domain accessible with both www and non-www', description: 'Avoid redirect errors and tracking loss', category: 'store', priority: 'high', checked: false },
    { id: 'store-7', title: 'Clear and transparent landing pages', description: 'Clear product descriptions, pricing, and policies', category: 'store', priority: 'high', checked: false },
    { id: 'store-8', title: 'No shocking/deceptive images', description: 'Avoid using before-after images or emotionally manipulative photos', category: 'store', priority: 'high', checked: false },
    { id: 'store-9', title: 'Comply with country-specific advertising policies', description: 'Legal content according to each region', category: 'store', priority: 'high', checked: false },

    // Product Compliance
    { id: 'product-1', title: 'No prohibited category products', description: 'Cross-check with Google Policy', category: 'product', priority: 'high', checked: false },
    { id: 'product-2', title: 'Avoid sensitive words for restricted products', description: 'Example: "100% guaranteed effectiveness", "absolutely safe guarantee"', category: 'product', priority: 'high', checked: false },
    { id: 'product-3', title: 'No fake reviews', description: 'Avoid reviews created by apps or false content', category: 'product', priority: 'high', checked: false },
    { id: 'product-4', title: 'No misleading banners', description: 'No over-advertising or false information', category: 'product', priority: 'high', checked: false },
    { id: 'product-5', title: 'Discount codes working properly', description: 'Ensure customers can use them successfully', category: 'product', priority: 'medium', checked: false },

    // Consent Mode
    { id: 'consent-1', title: 'GDPR, CCPA, LGPD compliant consent banner', description: 'Banner appears when visitors access, allows accepting or rejecting cookies', category: 'consent', priority: 'high', checked: false },

    // Google Ads Settings
    { id: 'ads-1', title: 'Customer Data Terms accepted (mandatory)', description: 'Required for all advertisers', category: 'ads', priority: 'high', checked: false },
    { id: 'ads-2', title: 'View-through conversions enabled', description: 'Record conversions if users don\'t click but return later', category: 'ads', priority: 'medium', checked: false },
    { id: 'ads-3', title: 'Enhanced conversions for leads enabled', description: 'Better tracking of customer behavior', category: 'ads', priority: 'medium', checked: false },
    { id: 'ads-4', title: 'Enhanced conversions enabled', description: 'Improve conversion data accuracy', category: 'ads', priority: 'medium', checked: false },
    { id: 'ads-5', title: 'Engaged-view conversions enabled', description: 'For video ads - if viewers don\'t click but convert later', category: 'ads', priority: 'low', checked: false },
    { id: 'ads-6', title: 'App attribution sharing enabled', description: 'If using apps integrated with Google Ads', category: 'ads', priority: 'low', checked: false },

    // In-App Events & Goals
    { id: 'events-1', title: 'Conversion goal set for campaign', description: 'Main objectives like purchases, leads...', category: 'events', priority: 'high', checked: false },
    { id: 'events-2', title: 'Custom conversion events configured', description: 'FcPurchase, RcPurchase, FcATC, RcATC, Lead, Request A Quote, SIGN IN...', category: 'events', priority: 'high', checked: false },
    { id: 'events-3', title: 'Customer events created for GA4 tracking', description: 'Help analyze specific behavior tracking', category: 'events', priority: 'medium', checked: false },
    { id: 'events-4', title: 'In-app analytics utilized', description: 'Product Analytics, Sale Analytics, Buyer Analytics', category: 'events', priority: 'medium', checked: false },

    // Legal & UX Requirements
    { id: 'legal-1', title: 'Privacy Policy', description: 'Mandatory privacy policy', category: 'legal', priority: 'high', checked: false },
    { id: 'legal-2', title: 'Terms of Service', description: 'Service terms and conditions', category: 'legal', priority: 'high', checked: false },
    { id: 'legal-3', title: 'Return & Refund Policy', description: 'Refund and exchange policy', category: 'legal', priority: 'high', checked: false },
    { id: 'legal-4', title: 'Shipping & Payment Info', description: 'Clear shipping fees and payment methods', category: 'legal', priority: 'high', checked: false },
    { id: 'legal-5', title: 'Complete contact page information', description: 'Real email/phone number', category: 'legal', priority: 'high', checked: false },
    { id: 'legal-6', title: 'Mobile-friendly interface', description: 'Responsive layout', category: 'legal', priority: 'medium', checked: false },
    { id: 'legal-7', title: 'Page load speed < 3 seconds', description: 'Use PageSpeed Insights to check', category: 'legal', priority: 'medium', checked: false },
    { id: 'legal-8', title: 'Clear menu and layout', description: 'Easy to find products, not confusing', category: 'legal', priority: 'medium', checked: false },

    // Tracking Tools & Tag Manager
    { id: 'tracking-1', title: 'Google Tag Manager (GTM) installed', description: 'Easy to attach tracking from multiple platforms', category: 'tracking', priority: 'high', checked: false },
    { id: 'tracking-2', title: 'Google Ads Remarketing Tag', description: 'To retarget customers', category: 'tracking', priority: 'high', checked: false },
    { id: 'tracking-3', title: 'Dynamic Remarketing enabled', description: 'If running ads for multiple products', category: 'tracking', priority: 'medium', checked: false },
    { id: 'tracking-4', title: 'UTM tracking attached', description: 'Easy to analyze effectiveness from multiple campaigns', category: 'tracking', priority: 'medium', checked: false },

    // Feed & Merchant Center
    { id: 'feed-1', title: 'Google Merchant Feed created', description: 'Via app or API', category: 'feed', priority: 'medium', checked: false },
    { id: 'feed-2', title: 'No rejected products', description: 'Due to missing GTIN, price, wrong description...', category: 'feed', priority: 'medium', checked: false },
    { id: 'feed-3', title: 'Product schema (JSON-LD) attached', description: 'Help Google crawl better', category: 'feed', priority: 'medium', checked: false },
    { id: 'feed-4', title: 'Landing page matches feed content', description: 'No information discrepancy', category: 'feed', priority: 'medium', checked: false },

    // Creative & Ad Content
    { id: 'creative-1', title: 'No fraudulent commitment language', description: 'Example: "guaranteed 10kg loss after 1 week"', category: 'creative', priority: 'high', checked: false },
    { id: 'creative-2', title: 'No before-after images', description: 'Violates misleading illustration policy', category: 'creative', priority: 'high', checked: false },
    { id: 'creative-3', title: 'No emotional manipulation', description: 'Avoid shocking images', category: 'creative', priority: 'high', checked: false },

    // Analytics & Attribution
    { id: 'analytics-1', title: 'Google Signals enabled in GA4', description: 'To collect cross-device data', category: 'analytics', priority: 'medium', checked: false },
    { id: 'analytics-2', title: 'Data-driven attribution model used', description: 'Instead of last click', category: 'analytics', priority: 'medium', checked: false },
    { id: 'analytics-3', title: 'Reports created with Looker Studio / Google Sheets', description: 'Automate performance tracking', category: 'analytics', priority: 'low', checked: false },
    { id: 'analytics-4', title: 'Alerts set up', description: 'When CPC is unusually high or ROAS decreases', category: 'analytics', priority: 'low', checked: false },
  ];

  const categories = [
    { id: 'store', name: 'Store Configuration', icon: Store, color: 'text-blue-600' },
    { id: 'product', name: 'Product Compliance', icon: ShoppingBag, color: 'text-green-600' },
    { id: 'consent', name: 'Consent Mode', icon: Shield, color: 'text-purple-600' },
    { id: 'ads', name: 'Google Ads Settings', icon: Target, color: 'text-red-600' },
    { id: 'events', name: 'Events & Goals', icon: BarChart3, color: 'text-orange-600' },
    { id: 'legal', name: 'Legal & UX', icon: Scale, color: 'text-indigo-600' },
    { id: 'tracking', name: 'Tracking Tools', icon: Tag, color: 'text-pink-600' },
    { id: 'feed', name: 'Product Feed', icon: Rss, color: 'text-teal-600' },
    { id: 'creative', name: 'Creative Content', icon: PenTool, color: 'text-yellow-600' },
    { id: 'analytics', name: 'Analytics', icon: TrendingUp, color: 'text-cyan-600' },
  ];

  const handleCheckChange = (itemId: string, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: checked
    }));
  };

  const getCompletionStats = (categoryId?: string) => {
    const items = categoryId 
      ? checklistData.filter(item => item.category === categoryId)
      : checklistData;
    
    const checkedCount = items.filter(item => checkedItems[item.id]).length;
    const totalCount = items.length;
    const percentage = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;
    
    return { checkedCount, totalCount, percentage };
  };

  const getPriorityStats = () => {
    const high = checklistData.filter(item => item.priority === 'high');
    const medium = checklistData.filter(item => item.priority === 'medium');
    const low = checklistData.filter(item => item.priority === 'low');
    
    return {
      high: {
        checked: high.filter(item => checkedItems[item.id]).length,
        total: high.length
      },
      medium: {
        checked: medium.filter(item => checkedItems[item.id]).length,
        total: medium.length
      },
      low: {
        checked: low.filter(item => checkedItems[item.id]).length,
        total: low.length
      }
    };
  };

  const overallStats = getCompletionStats();
  const priorityStats = getPriorityStats();

  const resetAll = () => {
    setCheckedItems({});
  };

  const checkAll = () => {
    const allChecked = checklistData.reduce((acc, item) => {
      acc[item.id] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setCheckedItems(allChecked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopify Google Ads Tracking Compliance Checker
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Comprehensive checklist to ensure your Shopify store has all necessary permissions and configurations for optimal Google Ads tracking performance.
          </p>
          
          {/* Why This Matters Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            <Alert className="border-red-200 bg-red-50">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <AlertTitle className="text-red-800">Avoid Ad Account Suspension</AlertTitle>
              <AlertDescription className="text-red-700">
                Google strictly enforces compliance. Missing requirements can lead to ad disapproval or account suspension, losing your advertising investment.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-green-200 bg-green-50">
              <DollarSign className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-800">Maximize ROI & Performance</AlertTitle>
              <AlertDescription className="text-green-700">
                Proper tracking setup ensures accurate conversion data, enabling Google's AI to optimize your campaigns and reduce cost per acquisition.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-blue-200 bg-blue-50">
              <Zap className="h-5 w-5 text-blue-600" />
              <AlertTitle className="text-blue-800">Enable Advanced Features</AlertTitle>
              <AlertDescription className="text-blue-700">
                Complete compliance unlocks Google's advanced advertising features like Smart Bidding, Enhanced Conversions, and Dynamic Remarketing.
              </AlertDescription>
            </Alert>
          </div>

          {/* Key Benefits */}
          <Card className="max-w-4xl mx-auto mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                Why Complete This Checklist?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-800">🚫 Without Proper Setup:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ad disapprovals and policy violations</li>
                    <li>• Inaccurate conversion tracking</li>
                    <li>• Higher cost per click (CPC)</li>
                    <li>• Poor campaign performance</li>
                    <li>• Limited access to advanced features</li>
                    <li>• Risk of account suspension</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-gray-800">✅ With Complete Compliance:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Higher ad approval rates</li>
                    <li>• Accurate performance data</li>
                    <li>• Lower cost per acquisition (CPA)</li>
                    <li>• Better ROAS (Return on Ad Spend)</li>
                    <li>• Access to all Google Ads features</li>
                    <li>• Long-term account stability</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Overall Progress */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Overall Compliance Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{overallStats.percentage}%</span>
                  <span className="text-gray-600">{overallStats.checkedCount} of {overallStats.totalCount} completed</span>
                </div>
                <Progress value={overallStats.percentage} className="h-3" />
                
                {/* Priority Breakdown */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <Badge variant="destructive" className="mb-2">High Priority</Badge>
                    <div className="text-sm text-gray-600">
                      {priorityStats.high.checked}/{priorityStats.high.total}
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Medium Priority</Badge>
                    <div className="text-sm text-gray-600">
                      {priorityStats.medium.checked}/{priorityStats.medium.total}
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge variant="outline" className="mb-2">Low Priority</Badge>
                    <div className="text-sm text-gray-600">
                      {priorityStats.low.checked}/{priorityStats.low.total}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center mt-6">
                  <Button onClick={checkAll} variant="default">
                    Check All Items
                  </Button>
                  <Button onClick={resetAll} variant="outline">
                    Reset All
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="store" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-8">
            {categories.map((category) => {
              const stats = getCompletionStats(category.id);
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-3 h-auto"
                >
                  <Icon className={`h-4 w-4 ${category.color}`} />
                  <span className="text-xs">{category.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {stats.checkedCount}/{stats.totalCount}
                  </Badge>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {categories.map((category) => {
            const categoryItems = checklistData.filter(item => item.category === category.id);
            const stats = getCompletionStats(category.id);
            const Icon = category.icon;

            return (
              <TabsContent key={category.id} value={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                      {category.name}
                      <Badge variant="outline">
                        {stats.checkedCount}/{stats.totalCount} completed
                      </Badge>
                    </CardTitle>
                    <CardDescription>
                      Complete all items in this category to ensure compliance
                    </CardDescription>
                    <Progress value={stats.percentage} className="h-2 mt-2" />
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {categoryItems.map((item) => {
                        const isChecked = checkedItems[item.id] || false;
                        const priorityColors = {
                          high: 'border-red-200 bg-red-50',
                          medium: 'border-yellow-200 bg-yellow-50',
                          low: 'border-green-200 bg-green-50'
                        };
                        
                        return (
                          <Card 
                            key={item.id} 
                            className={`transition-all duration-200 hover:shadow-md ${
                              isChecked ? 'border-green-300 bg-green-50' : priorityColors[item.priority]
                            }`}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-start gap-3">
                                <Checkbox
                                  id={item.id}
                                  checked={isChecked}
                                  onCheckedChange={(checked) => handleCheckChange(item.id, checked as boolean)}
                                  className="mt-1"
                                />
                                <div className="flex-1 space-y-2">
                                  <div className="flex items-center gap-2">
                                    <label 
                                      htmlFor={item.id}
                                      className={`font-medium cursor-pointer ${isChecked ? 'line-through text-gray-500' : ''}`}
                                    >
                                      {item.title}
                                    </label>
                                    <Badge 
                                      variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'secondary' : 'outline'}
                                      className="text-xs"
                                    >
                                      {item.priority}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-gray-600">
                                    {item.description}
                                  </p>
                                  {isChecked && (
                                    <div className="flex items-center gap-1 text-green-600">
                                      <CheckCircle className="h-4 w-4" />
                                      <span className="text-xs font-medium">Completed</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Summary Footer */}
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Compliance Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-2">
                  {overallStats.percentage >= 80 ? (
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  ) : overallStats.percentage >= 50 ? (
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  ) : (
                    <Info className="h-6 w-6 text-red-600" />
                  )}
                  <div>
                    <div className="font-medium">Overall Status</div>
                    <div className="text-sm text-gray-600">
                      {overallStats.percentage >= 80 ? 'Excellent' : overallStats.percentage >= 50 ? 'Good' : 'Needs Improvement'}
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="font-medium">High Priority Items</div>
                  <div className="text-2xl font-bold text-red-600">
                    {priorityStats.high.checked}/{priorityStats.high.total}
                  </div>
                  <div className="text-sm text-gray-600">Critical for compliance</div>
                </div>
                
                <div className="text-center">
                  <div className="font-medium">Completion Rate</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {overallStats.percentage}%
                  </div>
                  <div className="text-sm text-gray-600">Overall progress</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
