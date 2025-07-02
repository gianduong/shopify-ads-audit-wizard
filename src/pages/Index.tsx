import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  DollarSign,
  Zap,
  HelpCircle
} from 'lucide-react';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  checked: boolean;
  explanation?: string;
  riskIfMissing?: string[];
  benefitWhenComplete?: string[];
}

const Index = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const checklistData: ChecklistItem[] = [
    // Store Configuration
    { 
      id: 'store-1', 
      title: 'Store is publicly accessible (no password protection)', 
      description: 'Ensure your store is public and not behind a password wall', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Google needs to crawl your website to verify compliance with their policies. A password-protected store prevents Google from accessing your content, which is essential for ad approval.',
      riskIfMissing: [
        'Ads rejected immediately - Google cannot verify your store content',
        'All campaigns suspended until store becomes accessible',
        'Conversion tracking completely broken - no data collection possible',
        'Unable to use Google Shopping or Performance Max campaigns'
      ],
      benefitWhenComplete: [
        'Fast ad approval process - Google can quickly verify compliance',
        'All tracking pixels work properly for accurate data collection',
        'Access to advanced campaign types like Shopping and Performance Max',
        'Automated bidding strategies can optimize based on real user behavior'
      ]
    },
    { 
      id: 'store-2', 
      title: 'Google Analytics 4 (GA4) installed and configured', 
      description: 'Track user behavior and website performance with GA4', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'GA4 provides crucial user behavior data that Google Ads uses for optimization. Example: It tracks which products users view most, helping Google show your ads to similar audiences.',
      riskIfMissing: [
        'No audience insights - you\'re advertising blind without knowing your customers',
        'Cannot create remarketing audiences based on site behavior',
        'Missing 30-50% of conversion attribution across devices',
        'Smart Bidding strategies have limited data to optimize on'
      ],
      benefitWhenComplete: [
        'Build high-converting custom audiences (e.g., "viewed product but didn\'t buy")',
        'Track complete customer journey from first visit to purchase',
        'Improve ROAS by 25-40% through better audience targeting',
        'Get detailed insights like "users from mobile convert 3x better on weekends"'
      ]
    },
    { 
      id: 'store-3', 
      title: 'Google Ads account connected for conversion tracking', 
      description: 'Link your Google Ads account to enable conversion measurement', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'This connection allows Google to track when someone clicks your ad and makes a purchase. Example: Customer clicks your sneaker ad, buys shoes 2 days later - Google knows this conversion came from your ad.',
      riskIfMissing: [
        'Cannot measure ROI - you won\'t know which ads actually drive sales',
        'Wasting 40-60% of ad budget on non-converting keywords',
        'Smart Bidding disabled - manual bidding only',
        'No purchase data to optimize campaigns automatically'
      ],
      benefitWhenComplete: [
        'See exactly which keywords and ads drive sales (e.g., "red sneakers" converts at $25 CPA)',
        'Automated bidding increases conversions by 20-30% while reducing costs',
        'Real-time optimization - Google automatically bids higher on profitable traffic',
        'Clear ROI reporting - know you made $5 for every $1 spent on ads'
      ]
    },
    { 
      id: 'store-4', 
      title: 'Customer review system installed (Judge.me, Loox, etc.)', 
      description: 'Install a review app to build social proof and trust', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: 'Reviews create social proof that significantly impacts buying decisions. Example: A product with 50+ reviews and 4.5 stars converts 30% better than one without reviews.',
      riskIfMissing: [
        'Low conversion rates - customers don\'t trust products without reviews',
        'Higher bounce rates - visitors leave when they see no social proof',
        'Competitors with reviews will consistently outperform your ads',
        'Higher cost per acquisition due to poor landing page experience'
      ],
      benefitWhenComplete: [
        'Increase conversion rates by 15-30% with visible star ratings',
        'Lower bounce rates - customers stay longer when they see positive reviews',
        'Higher Quality Scores leading to lower cost-per-click',
        'Review rich snippets appear in Google Ads, improving click-through rates'
      ]
    },
    { 
      id: 'store-5', 
      title: 'Promotional offers active (discounts, free shipping)', 
      description: 'Have compelling offers to reduce cart abandonment', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: 'Offers help overcome purchase hesitation, especially for first-time customers. Example: "Free shipping over $50" can increase average order value by 20%.',
      riskIfMissing: [
        'High cart abandonment rates (typically 70% without incentives)',
        'Difficulty competing with competitors offering discounts',
        'Higher customer acquisition costs - no incentive to try your brand',
        'Lower conversion rates on cold traffic campaigns'
      ],
      benefitWhenComplete: [
        'Reduce cart abandonment by 20-35% with strategic offers',
        'Competitive advantage - match or beat competitor pricing',
        'Higher lifetime value - first purchase with discount leads to repeat buyers',
        'Better ad performance - offers mentioned in ad copy improve click-through rates'
      ]
    },

    // Product Compliance
    { 
      id: 'product-1', 
      title: 'No prohibited products (check Google Ads policy)', 
      description: 'Ensure all products comply with Google advertising policies', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Google has strict policies about what can be advertised. Examples of prohibited items: weapons, drugs, counterfeit goods, adult content, miracle health cures.',
      riskIfMissing: [
        'Immediate account suspension - no warning given for policy violations',
        'All existing campaigns stopped immediately',
        'Extremely difficult to appeal or create new accounts',
        'Loss of all historical campaign data and optimization'
      ],
      benefitWhenComplete: [
        'Account remains in good standing with Google',
        'Access to all advertising features and campaign types',
        'No risk of sudden campaign interruptions',
        'Build long-term advertising presence without compliance fears'
      ]
    },
    { 
      id: 'product-2', 
      title: 'Avoid exaggerated claims ("100% effective", "miracle cure")', 
      description: 'Use realistic, truthful language in product descriptions', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Google flags overly promotional or unrealistic claims. Instead of "Lose 20 pounds in 1 week guaranteed!", use "Supports healthy weight management as part of a balanced lifestyle".',
      riskIfMissing: [
        'Ads consistently rejected due to misleading claims',
        'Account receives policy warnings that accumulate over time',
        'Reduced ad delivery even for approved ads',
        'Customer complaints and potential legal issues'
      ],
      benefitWhenComplete: [
        'Ads approved quickly without policy reviews',
        'Consistent ad delivery without interruptions',
        'Build trust with realistic expectations - better customer satisfaction',
        'No policy strikes against your account'
      ]
    },
    { 
      id: 'product-3', 
      title: 'Authentic reviews only (no fake or generated reviews)', 
      description: 'Ensure all customer reviews are genuine and earned', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Google can detect fake reviews through pattern analysis. Real reviews take time but create genuine trust. Example: 20 authentic reviews over 6 months vs. 100 fake reviews added in one day.',
      riskIfMissing: [
        'Google penalty - account suspension for misleading practices',
        'Loss of customer trust if fake reviews are discovered',
        'Review platforms may ban your products',
        'Damage to brand reputation that\'s hard to recover from'
      ],
      benefitWhenComplete: [
        'Genuine social proof that actually converts visitors',
        'Protected from policy violations and penalties',
        'Long-term customer trust and brand credibility',
        'Reviews that accurately reflect product quality, reducing returns'
      ]
    },

    // Legal & UX Requirements  
    { 
      id: 'legal-1', 
      title: 'Privacy Policy published and accessible', 
      description: 'Required by law and Google Ads policy', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'A privacy policy explains how you collect and use customer data. Required by GDPR, CCPA, and Google Ads. Must be easily accessible from your homepage footer.',
      riskIfMissing: [
        'Immediate ad rejection - Google checks for privacy policy before approval',
        'Legal compliance issues - fines up to 4% of revenue under GDPR',
        'Cannot collect customer data legally',
        'Payment processors may freeze accounts without proper legal pages'
      ],
      benefitWhenComplete: [
        'Ads approved without legal compliance issues',
        'Full legal protection when collecting customer data',
        'Customer trust through transparency about data usage',
        'Meets requirements for all major advertising platforms'
      ]
    },
    { 
      id: 'legal-2', 
      title: 'Terms of Service clearly displayed', 
      description: 'Legal terms and conditions for using your service', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Terms of Service protect your business in disputes and show professionalism. Example: Clearly state return windows, warranty terms, and limitation of liability.',
      riskIfMissing: [
        'No legal protection in customer disputes',
        'Appear unprofessional to potential customers',
        'Some ad platforms may reject campaigns without Terms of Service',
        'Unclear expectations lead to more customer service issues'
      ],
      benefitWhenComplete: [
        'Legal protection against unreasonable customer demands',
        'Clear expectations reduce customer service workload',
        'Professional appearance increases customer confidence',
        'Compliance with e-commerce best practices and platform requirements'
      ]
    },
    { 
      id: 'legal-3', 
      title: 'Clear return & refund policy', 
      description: 'Transparent policy for returns and refunds', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Clear return policy reduces purchase anxiety. Example: "30-day returns, customer pays shipping" vs. unclear policies that make customers hesitate to buy.',
      riskIfMissing: [
        'Cannot run Google Shopping campaigns - return policy required',
        'High cart abandonment - 70% of customers check return policy before buying',
        'More customer disputes due to unclear expectations',
        'Payment processor holds on funds due to high chargeback risk'
      ],
      benefitWhenComplete: [
        'Access to Google Shopping ads with high-intent traffic',
        'Reduced cart abandonment - customers buy with confidence',
        'Fewer customer service issues and disputes',
        'Better relationship with payment processors'
      ]
    },
    { 
      id: 'legal-4', 
      title: 'Transparent shipping costs and payment methods', 
      description: 'No hidden fees or surprises at checkout', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Hidden costs are the #1 reason for cart abandonment. Example: Show "Free shipping over $50" upfront rather than surprising customers with $15 shipping at checkout.',
      riskIfMissing: [
        'Cart abandonment rates up to 70% due to unexpected costs',
        'Google Ads policy violations for misleading pricing',
        'High customer complaint rates and negative reviews',
        'Low Quality Scores leading to higher advertising costs'
      ],
      benefitWhenComplete: [
        'Significantly lower cart abandonment rates',
        'Policy compliance with transparent pricing',
        'Better customer experience leading to positive reviews',
        'Higher Quality Scores and lower cost-per-click'
      ]
    },
    { 
      id: 'legal-5', 
      title: 'Complete contact information (real phone/email)', 
      description: 'Provide genuine, reachable contact details', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Real contact info builds trust and is required by Google. Example: Use business phone number and monitored email, not generic Gmail addresses.',
      riskIfMissing: [
        'Ad disapproval - Google requires verifiable contact information',
        'Customers don\'t trust businesses they can\'t reach',
        'Unprofessional appearance hurts conversion rates',
        'Cannot resolve customer issues, leading to disputes and chargebacks'
      ],
      benefitWhenComplete: [
        'Ads approved without verification issues',
        'Higher customer trust and conversion rates',
        'Professional business appearance',
        'Effective customer service reduces problems and improves satisfaction'
      ]
    },

    // Google Ads Settings
    { 
      id: 'ads-1', 
      title: 'Accept Customer Data Terms (mandatory)', 
      description: 'Required acceptance for all Google Ads advertisers', 
      category: 'ads', 
      priority: 'high', 
      checked: false,
      explanation: 'Google\'s mandatory terms about how customer data is handled in advertising. This is a checkbox you must tick in your Google Ads account settings.',
      riskIfMissing: [
        'Cannot create or run any Google Ads campaigns',
        'Account completely suspended until terms are accepted',
        'No access to any Google Ads features or data'
      ],
      benefitWhenComplete: [
        'Full access to all Google Ads features and campaign types',
        'Compliant handling of customer data',
        'Account operates normally without restrictions'
      ]
    },
    { 
      id: 'ads-2', 
      title: 'Enable View-through conversions tracking', 
      description: 'Track conversions from users who saw but didn\'t click ads', 
      category: 'ads', 
      priority: 'medium', 
      checked: false,
      explanation: 'Many customers see your ad, don\'t click immediately, but return later to purchase. Example: Someone sees your furniture ad on Monday, comes back Friday via Google search and buys.',
      riskIfMissing: [
        'Underreporting conversions by 20-30% - you\'re not seeing the full impact',
        'Incorrect attribution leads to poor optimization decisions',
        'Smart Bidding has incomplete data to work with'
      ],
      benefitWhenComplete: [
        'Complete picture of ad performance - see all conversions your ads influence',
        'Better optimization decisions based on full attribution data',
        'Smart Bidding works more effectively with complete conversion data'
      ]
    },

    // Events & Goals
    { 
      id: 'events-1', 
      title: 'Set up conversion goals for campaigns', 
      description: 'Define what success looks like (purchases, leads, signups)', 
      category: 'events', 
      priority: 'high', 
      checked: false,
      explanation: 'Conversion goals tell Google what actions are valuable to your business. Example: For e-commerce, primary goal is "Purchase", secondary might be "Add to Cart".',
      riskIfMissing: [
        'Campaigns optimize for clicks instead of actual business results',
        'Waste budget on traffic that doesn\'t convert',
        'Cannot use Smart Bidding strategies effectively',
        'No clear measure of campaign success or ROI'
      ],
      benefitWhenComplete: [
        'Campaigns automatically optimize for your business objectives',
        'Smart Bidding increases conversions while reducing costs',
        'Clear ROI measurement for every campaign and keyword',
        'Budget allocated to highest-performing, profit-driving activities'
      ]
    },

    // Tracking Tools & Tag Manager
    { 
      id: 'tracking-1', 
      title: 'Google Tag Manager (GTM) installed', 
      description: 'Manage all tracking codes from one central location', 
      category: 'tracking', 
      priority: 'high', 
      checked: false,
      explanation: 'GTM simplifies tracking management. Instead of editing website code for each new tracking pixel, you manage everything through GTM\'s interface.',
      riskIfMissing: [
        'Difficult to implement new tracking - requires developer for every change',
        'Miss opportunities to track important user actions',
        'Slower deployment of new marketing tools and pixels'
      ],
      benefitWhenComplete: [
        'Easy tracking management without technical skills needed',
        'Quick deployment of new tracking for different marketing channels',
        'Comprehensive data collection for better optimization decisions'
      ]
    },
    { 
      id: 'tracking-2', 
      title: 'Google Ads Remarketing Tag active', 
      description: 'Retarget website visitors who didn\'t convert', 
      category: 'tracking', 
      priority: 'high', 
      checked: false,
      explanation: 'Remarketing targets people who visited your site but didn\'t buy. Example: Show ads for specific products someone viewed to bring them back to complete the purchase.',
      riskIfMissing: [
        'Cannot retarget 95% of visitors who don\'t buy on first visit',
        'Missing high-ROI remarketing opportunities (typically 3-5x better than cold traffic)',
        'Limited to expensive cold traffic acquisition only',
        'No way to recover abandoned cart visitors'
      ],
      benefitWhenComplete: [
        'High-converting remarketing campaigns with 3-5x better ROI',
        'Recover abandoned cart visitors with targeted product ads',
        'Lower overall customer acquisition costs',
        'Build comprehensive marketing funnel from awareness to purchase'
      ]
    },

    // Feed & Merchant Center
    { 
      id: 'feed-1', 
      title: 'Google Merchant Center feed created', 
      description: 'Product feed for Shopping and Performance Max campaigns', 
      category: 'feed', 
      priority: 'medium', 
      checked: false,
      explanation: 'Merchant Center feed contains your product data for Google Shopping. Example: Product titles, prices, images, and availability sync automatically with your store.',
      riskIfMissing: [
        'Cannot run Google Shopping campaigns - missing high-intent traffic',
        'No access to Performance Max campaigns for e-commerce',
        'Limited to text ads only - missing visual product showcases',
        'Competitors with Shopping ads will dominate product searches'
      ],
      benefitWhenComplete: [
        'Access to Google Shopping ads with high purchase intent',
        'Performance Max campaigns typically deliver 20-30% more conversions',
        'Visual product ads that stand out in search results',
        'Compete effectively for product-specific searches'
      ]
    },

    // Creative & Ad Content
    { 
      id: 'creative-1', 
      title: 'No unrealistic promises or guarantees', 
      description: 'Avoid claims like "guaranteed 10kg weight loss in 1 week"', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Unrealistic promises violate Google policies and create unhappy customers. Example: Use "supports healthy weight management" instead of "guaranteed 10kg loss in 7 days".',
      riskIfMissing: [
        'Immediate account suspension for misleading advertising',
        'Legal liability for false advertising claims',
        'Brand reputation damage when promises aren\'t met',
        'High refund rates and customer complaints'
      ],
      benefitWhenComplete: [
        'Account stays compliant with advertising policies',
        'Legal protection from false advertising claims',
        'Realistic customer expectations lead to higher satisfaction',
        'Long-term brand trust and customer loyalty'
      ]
    },
    { 
      id: 'creative-2', 
      title: 'No before/after transformation images', 
      description: 'Avoid misleading visual comparisons', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Before/after images are considered misleading by Google, especially for health/beauty products. Focus on product benefits and features instead.',
      riskIfMissing: [
        'Immediate policy violation and account suspension',
        'All campaigns using these images stopped immediately',
        'Misleading customers leads to disappointment and refunds',
        'Difficulty appealing policy violations'
      ],
      benefitWhenComplete: [
        'Policy-compliant ads that won\'t be rejected',
        'Sustainable advertising approach without policy risks',
        'Realistic customer expectations improve satisfaction',
        'Focus on genuine product benefits builds trust'
      ]
    },

    // Analytics & Attribution
    { 
      id: 'analytics-1', 
      title: 'Google Signals enabled in GA4', 
      description: 'Cross-device user tracking and insights', 
      category: 'analytics', 
      priority: 'medium', 
      checked: false,
      explanation: 'Google Signals tracks users across devices (phone, tablet, desktop) to give complete customer journey insights. Example: See that customers research on mobile but buy on desktop.',
      riskIfMissing: [
        'Incomplete customer journey understanding - missing cross-device behavior',
        'Attribution errors - not connecting mobile research to desktop purchases',
        'Limited audience insights for targeting optimization'
      ],
      benefitWhenComplete: [
        'Complete cross-device customer journey mapping',
        'Accurate attribution across all devices and touchpoints',
        'Better audience targeting based on complete behavior data',
        'Improved campaign optimization with fuller customer insights'
      ]
    },
  ];

  const categories = [
    { id: 'store', name: 'Store Setup', icon: Store, color: 'text-blue-600' },
    { id: 'product', name: 'Products', icon: ShoppingBag, color: 'text-green-600' },
    { id: 'consent', name: 'Privacy', icon: Shield, color: 'text-purple-600' },
    { id: 'ads', name: 'Ads Setup', icon: Target, color: 'text-red-600' },
    { id: 'events', name: 'Tracking', icon: BarChart3, color: 'text-orange-600' },
    { id: 'legal', name: 'Legal & UX', icon: Scale, color: 'text-indigo-600' },
    { id: 'tracking', name: 'Tools', icon: Tag, color: 'text-pink-600' },
    { id: 'feed', name: 'Feed', icon: Rss, color: 'text-teal-600' },
    { id: 'creative', name: 'Content', icon: PenTool, color: 'text-yellow-600' },
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
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Simplified Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Google Ads Compliance Checker
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Ensure your Shopify store meets all requirements to run Google Ads effectively and avoid ad rejections
          </p>
          
          {/* Compact Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-6 max-w-4xl mx-auto">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <AlertTriangle className="h-5 w-5 text-red-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-red-800">Avoid ad rejections</div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <DollarSign className="h-5 w-5 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-green-800">Optimize ROI & performance</div>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <Zap className="h-5 w-5 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-blue-800">Unlock advanced features</div>
            </div>
          </div>
          
          {/* Compact Progress */}
          <Card className="max-w-lg mx-auto">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xl font-bold">{overallStats.percentage}%</span>
                <span className="text-sm text-gray-600">{overallStats.checkedCount}/{overallStats.totalCount} completed</span>
              </div>
              <Progress value={overallStats.percentage} className="h-2 mb-3" />
              
              <div className="flex gap-2 justify-center">
                <Button onClick={checkAll} size="sm">Check All</Button>
                <Button onClick={resetAll} variant="outline" size="sm">Reset</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Simplified Category Tabs */}
        <Tabs defaultValue="store" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:grid-cols-10 mb-6 h-auto">
            {categories.map((category) => {
              const stats = getCompletionStats(category.id);
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-2 h-auto text-xs"
                >
                  <Icon className={`h-3 w-3 ${category.color}`} />
                  <span>{category.name}</span>
                  <Badge variant="outline" className="text-xs px-1">
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
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Icon className={`h-5 w-5 ${category.color}`} />
                        {category.name}
                      </CardTitle>
                      <Badge variant="outline">{stats.checkedCount}/{stats.totalCount}</Badge>
                    </div>
                    <Progress value={stats.percentage} className="h-1" />
                  </CardHeader>
                  
                  <CardContent>
                    {/* Compact List Layout */}
                    <div className="space-y-3">
                      {categoryItems.map((item) => {
                        const isChecked = checkedItems[item.id] || false;
                        
                        return (
                          <div 
                            key={item.id} 
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
                              isChecked 
                                ? 'bg-green-50 border-green-200' 
                                : item.priority === 'high' 
                                  ? 'bg-red-50 border-red-200' 
                                  : 'bg-white border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <Checkbox
                              id={item.id}
                              checked={isChecked}
                              onCheckedChange={(checked) => handleCheckChange(item.id, checked as boolean)}
                            />
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <label 
                                  htmlFor={item.id}
                                  className={`font-medium cursor-pointer text-sm ${isChecked ? 'line-through text-gray-500' : ''}`}
                                >
                                  {item.title}
                                </label>
                                <Badge 
                                  variant={item.priority === 'high' ? 'destructive' : item.priority === 'medium' ? 'secondary' : 'outline'}
                                  className="text-xs px-1 py-0"
                                >
                                  {item.priority === 'high' ? 'High' : item.priority === 'medium' ? 'Med' : 'Low'}
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600 line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              {isChecked && (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              )}
                              
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                                    <HelpCircle className="h-3 w-3" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2 text-lg">
                                      <HelpCircle className="h-5 w-5 text-blue-600" />
                                      {item.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                      <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                                        <Info className="h-4 w-4" />
                                        Why this matters:
                                      </h4>
                                      <p className="text-blue-800">
                                        {item.explanation || 'This requirement helps ensure your Google Ads campaigns run smoothly and comply with policies.'}
                                      </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                      <div className="p-4 bg-red-50 rounded-lg">
                                        <h5 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                                          <AlertTriangle className="h-4 w-4" />
                                          Risks if missing:
                                        </h5>
                                        <ul className="space-y-2">
                                          {(item.riskIfMissing || ['May lead to policy violations or reduced campaign performance']).map((risk, index) => (
                                            <li key={index} className="text-sm text-red-700 flex items-start gap-2">
                                              <span className="text-red-500 mt-1 text-xs">•</span>
                                              <span>{risk}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      
                                      <div className="p-4 bg-green-50 rounded-lg">
                                        <h5 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                                          <CheckCircle className="h-4 w-4" />
                                          Benefits when complete:
                                        </h5>
                                        <ul className="space-y-2">
                                          {(item.benefitWhenComplete || ['Improves campaign performance and ensures compliance']).map((benefit, index) => (
                                            <li key={index} className="text-sm text-green-700 flex items-start gap-2">
                                              <span className="text-green-500 mt-1 text-xs">•</span>
                                              <span>{benefit}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
