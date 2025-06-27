import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  Zap,
  Eye,
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
  riskIfMissing?: string;
  benefitWhenComplete?: string;
}

const Index = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const checklistData: ChecklistItem[] = [
    // Store Configuration
    { 
      id: 'store-1', 
      title: 'Store is not password protected', 
      description: 'Ensure store is in public mode (not locked with password)', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Google Ads needs to crawl and verify your website content. A password-protected store prevents Google from accessing your pages, leading to ad disapprovals and inability to track conversions properly. Public access ensures Google can verify compliance with advertising policies and track customer behavior accurately.',
      riskIfMissing: 'Immediate ad disapproval, Google cannot crawl your site for policy verification, conversion tracking completely fails',
      benefitWhenComplete: 'Ads get approved quickly, Google can verify compliance, accurate conversion tracking and campaign optimization'
    },
    { 
      id: 'store-2', 
      title: 'Google Analytics 4 (GA4) installed', 
      description: 'Track user behavior on the store', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'GA4 provides essential data about your customers\' journey on your website. This data helps Google Ads optimize your campaigns by understanding which audiences convert best, what pages they visit, and how long they stay. Without GA4, you\'re essentially advertising blind, missing crucial insights that could improve your return on ad spend (ROAS).',
      riskIfMissing: 'No audience insights, can\'t optimize campaigns, missed retargeting opportunities, poor ROAS',
      benefitWhenComplete: 'Detailed customer insights, better campaign optimization, effective retargeting, improved ROAS through data-driven decisions'
    },
    { 
      id: 'store-3', 
      title: 'Google Ads account connected', 
      description: 'Integrate Google Ads account to activate conversion tracking', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Connecting your Google Ads account enables conversion tracking, which is crucial for measuring campaign success. Without this connection, Google can\'t tell which ads lead to sales, making it impossible to optimize bids and budgets effectively. This connection also enables enhanced features like Smart Bidding and audience insights.',
      riskIfMissing: 'No conversion tracking, wasted ad spend, cannot use Smart Bidding, no campaign optimization',
      benefitWhenComplete: 'Accurate conversion tracking, Smart Bidding capabilities, automated optimization, better ROI measurement'
    },
    { 
      id: 'store-4', 
      title: 'Review app installed', 
      description: 'Install apps like Judge.me, Loox to increase product credibility', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: 'Reviews build social proof and trust, which are critical for conversions. Customers tend to follow the crowd - seeing positive reviews from other buyers increases confidence and purchase likelihood. Google also favors websites with authentic user-generated content. Reviews can improve your Quality Score, leading to lower costs and better ad positions.',
      riskIfMissing: 'Low customer trust, poor conversion rates, higher bounce rates, customers choose competitors with reviews',
      benefitWhenComplete: 'Increased conversion rates by 15-30%, higher customer trust, better Quality Score, competitive advantage'
    },
    { 
      id: 'store-5', 
      title: 'Discount/promotion programs available', 
      description: 'Discount codes or free shipping to increase conversion rates', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: 'Promotions create urgency and reduce purchase friction. They\'re especially effective for first-time customers who are hesitant to buy from an unknown brand. Having promotions available allows you to test different offers in your ads and landing pages, often significantly improving conversion rates and customer acquisition costs.',
      riskIfMissing: 'Higher cart abandonment, difficulty competing with other brands, higher customer acquisition costs',
      benefitWhenComplete: 'Lower cart abandonment, competitive pricing advantage, ability to test different offers, improved conversion rates'
    },
    { 
      id: 'store-6', 
      title: 'Domain accessible with both www and non-www', 
      description: 'Avoid redirect errors and tracking loss', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Inconsistent domain access can cause tracking issues and confuse Google\'s crawlers. When customers access your site through different URL formats, it can break conversion tracking and attribution. Proper domain setup ensures all traffic is tracked correctly and prevents potential policy violations due to redirect chains.',
      riskIfMissing: 'Broken tracking, lost conversion data, redirect errors, confused customers, policy violations',
      benefitWhenComplete: 'Consistent tracking across all traffic sources, proper attribution, smooth user experience, policy compliance'
    },
    { 
      id: 'store-7', 
      title: 'Clear and transparent landing pages', 
      description: 'Clear product descriptions, pricing, and policies', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Transparency builds trust and meets Google\'s quality guidelines. Clear pricing, shipping costs, and product information reduce bounce rates and improve user experience. Google rewards high-quality landing pages with better Quality Scores, leading to lower costs per click and higher ad positions. Hidden fees or unclear information can lead to policy violations.',
      riskIfMissing: 'High bounce rates, policy violations, poor Quality Score, higher CPC costs, customer complaints',
      benefitWhenComplete: 'Better Quality Score, lower CPC costs, higher ad positions, improved customer trust and conversions'
    },
    { 
      id: 'store-8', 
      title: 'No shocking/deceptive images', 
      description: 'Avoid using before-after images or emotionally manipulative photos', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Google strictly prohibits deceptive advertising practices. Before-after images, shocking content, or emotionally manipulative visuals can result in immediate ad disapproval or account suspension. Using authentic, representative images protects your advertising account and builds genuine customer trust, leading to better long-term performance.',
      riskIfMissing: 'Immediate ad disapproval, account suspension, loss of all advertising investment, damaged brand reputation',
      benefitWhenComplete: 'Ads approved consistently, account remains in good standing, builds authentic brand trust, long-term advertising success'
    },
    { 
      id: 'store-9', 
      title: 'Comply with country-specific advertising policies', 
      description: 'Legal content according to each region', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: 'Different countries have varying advertising regulations and cultural sensitivities. Compliance prevents account suspension and ensures your ads can run in target markets. This includes language requirements, local business registration needs, and specific product restrictions that vary by region.',
      riskIfMissing: 'Account suspension in specific countries, legal issues, inability to advertise in target markets',
      benefitWhenComplete: 'Access to all target markets, legal protection, ability to scale internationally, compliance with local laws'
    },

    // Product Compliance
    { 
      id: 'product-1', 
      title: 'No prohibited category products', 
      description: 'Cross-check with Google Policy', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Google has strict policies about what products can be advertised. Selling prohibited items can result in immediate account suspension and loss of advertising privileges. Even if your main products are allowed, having prohibited items mixed in can affect your entire account. Regular policy compliance checks protect your advertising investment.',
      riskIfMissing: 'Immediate account suspension, loss of all advertising privileges, cannot create new accounts easily',
      benefitWhenComplete: 'Account remains active, can advertise all compliant products, protection of advertising investment'
    },
    { 
      id: 'product-2', 
      title: 'Avoid sensitive words for restricted products', 
      description: 'Example: "100% guaranteed effectiveness", "absolutely safe guarantee"', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Certain language triggers Google\'s policy filters, especially for health, beauty, or supplement products. Words like "guaranteed," "miracle," or medical claims can cause ad disapproval. Using compliant language helps your ads get approved faster and stay running consistently, protecting your campaign performance.',
      riskIfMissing: 'Ads get disapproved repeatedly, account warnings accumulate, restricted advertising capabilities',
      benefitWhenComplete: 'Ads approved quickly, consistent ad delivery, no policy warnings, full advertising capabilities'
    },
    { 
      id: 'product-3', 
      title: 'No fake reviews', 
      description: 'Avoid reviews created by apps or false content', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Fake reviews violate Google\'s authenticity policies and can result in severe penalties. Google uses sophisticated detection methods to identify artificial reviews. Authentic reviews, while taking longer to accumulate, provide genuine social proof and protect your account from policy violations that could shut down your advertising entirely.',
      riskIfMissing: 'Account suspension for policy violations, loss of customer trust if detected, penalties from review platforms',
      benefitWhenComplete: 'Genuine social proof, protected from policy violations, authentic customer trust, long-term credibility'
    },
    { 
      id: 'product-4', 
      title: 'No misleading banners', 
      description: 'No over-advertising or false information', 
      category: 'product', 
      priority: 'high', 
      checked: false,
      explanation: 'Misleading banners create a poor user experience and violate Google\'s policies. False claims about discounts, limited-time offers, or product benefits can lead to ad account suspension. Honest, accurate banners build trust with customers and ensure long-term advertising account health.',
      riskIfMissing: 'Ad disapprovals, policy violations, customer complaints, damage to brand reputation',
      benefitWhenComplete: 'Consistent ad approvals, customer trust, positive brand reputation, long-term account health'
    },
    { 
      id: 'product-5', 
      title: 'Discount codes working properly', 
      description: 'Ensure customers can use them successfully', 
      category: 'product', 
      priority: 'medium', 
      checked: false,
      explanation: 'Broken discount codes create frustrated customers and negative reviews, harming your brand reputation. They also violate Google\'s policies if advertised but non-functional. Working codes improve conversion rates, customer satisfaction, and help you deliver on advertising promises, maintaining account health and customer trust.',
      riskIfMissing: 'Angry customers, negative reviews, policy violations for false advertising, lost sales',
      benefitWhenComplete: 'Higher conversion rates, satisfied customers, positive reviews, successful promotional campaigns'
    },

    // Consent Mode
    { 
      id: 'consent-1', 
      title: 'GDPR, CCPA, LGPD compliant consent banner', 
      description: 'Banner appears when visitors access, allows accepting or rejecting cookies', 
      category: 'consent', 
      priority: 'high', 
      checked: false,
      explanation: 'Privacy compliance is legally required in many regions and affects your ability to track conversions. Proper consent management ensures you can collect necessary data while respecting user privacy. Without compliant consent systems, your tracking data may be incomplete, affecting campaign optimization and potentially exposing you to legal risks.',
      riskIfMissing: 'Legal fines up to €20M (GDPR), incomplete tracking data, cannot optimize campaigns effectively',
      benefitWhenComplete: 'Legal compliance, complete tracking data with consent, better campaign optimization, protection from fines'
    },

    // Google Ads Settings
    { 
      id: 'ads-1', 
      title: 'Customer Data Terms accepted (mandatory)', 
      description: 'Required for all advertisers', 
      category: 'ads', 
      priority: 'high', 
      checked: false,
      explanation: 'This is a mandatory requirement from Google that governs how customer data is handled in advertising. Not accepting these terms can prevent you from running ads entirely. Acceptance ensures your account remains compliant with Google\'s data handling policies and maintains access to advertising features.',
      riskIfMissing: 'Cannot run any Google Ads, account suspended until terms accepted, loss of advertising capabilities',
      benefitWhenComplete: 'Full access to Google Ads features, compliant data handling, account remains active'
    },
    { 
      id: 'ads-2', 
      title: 'View-through conversions enabled', 
      description: 'Record conversions if users don\'t click but return later', 
      category: 'ads', 
      priority: 'medium', 
      checked: false,
      explanation: 'Many customers see your ad but don\'t click immediately, then return later to purchase. View-through conversion tracking captures this behavior, giving you credit for these conversions and providing a more complete picture of your ad performance. This data helps Google optimize your campaigns more effectively.',
      riskIfMissing: 'Underreporting of ad effectiveness, missing 20-30% of attributed conversions, poor optimization',
      benefitWhenComplete: 'Complete conversion attribution, better understanding of ad impact, improved campaign optimization'
    },
    { 
      id: 'ads-3', 
      title: 'Enhanced conversions for leads enabled', 
      description: 'Better tracking of customer behavior', 
      category: 'ads', 
      priority: 'medium', 
      checked: false,
      explanation: 'Enhanced conversions use hashed customer data to improve conversion tracking accuracy, especially as third-party cookies become less available. This feature helps Google better understand which ads drive valuable actions, leading to improved campaign optimization and better return on investment.',
      riskIfMissing: 'Inaccurate conversion tracking, poor campaign optimization, reduced effectiveness as cookies disappear',
      benefitWhenComplete: 'More accurate tracking, better optimization, future-proof measurement, improved ROI'
    },
    { 
      id: 'ads-4', 
      title: 'Enhanced conversions enabled', 
      description: 'Improve conversion data accuracy', 
      category: 'ads', 
      priority: 'medium', 
      checked: false,
      explanation: 'This feature sends additional conversion data to Google using first-party data, improving measurement accuracy in a privacy-focused world. Better data quality leads to more effective automated bidding, audience targeting, and campaign optimization, ultimately improving your advertising performance and ROI.',
      riskIfMissing: 'Less accurate conversion data, suboptimal automated bidding, missed optimization opportunities',
      benefitWhenComplete: 'Highly accurate conversion data, optimal automated bidding, better audience targeting, improved ROI'
    },
    { 
      id: 'ads-5', 
      title: 'Engaged-view conversions enabled', 
      description: 'For video ads - if viewers don\'t click but convert later', 
      category: 'ads', 
      priority: 'low', 
      checked: false,
      explanation: 'Video ads often create brand awareness without immediate clicks. Engaged-view tracking captures conversions from users who watched your video ad and later converted through other channels. This provides better attribution for video campaigns and helps justify video advertising investment with more complete conversion data.',
      riskIfMissing: 'Video campaigns appear less effective, undervalued video advertising, missed attribution',
      benefitWhenComplete: 'Accurate video campaign attribution, justified video ad spend, complete view of customer journey'
    },
    { 
      id: 'ads-6', 
      title: 'App attribution sharing enabled', 
      description: 'If using apps integrated with Google Ads', 
      category: 'ads', 
      priority: 'low', 
      checked: false,
      explanation: 'If you have mobile apps or use app-based tools, this feature allows better tracking of cross-platform user behavior. It helps Google understand the full customer journey across web and app interactions, leading to more accurate attribution and better optimization of campaigns targeting mobile users.',
      riskIfMissing: 'Incomplete cross-platform tracking, missed mobile conversion attribution, poor mobile campaign optimization',
      benefitWhenComplete: 'Complete cross-platform tracking, accurate mobile attribution, optimized mobile campaigns'
    },

    // Events & Goals
    { 
      id: 'events-1', 
      title: 'Conversion goal set for campaign', 
      description: 'Main objectives like purchases, leads...', 
      category: 'events', 
      priority: 'high', 
      checked: false,
      explanation: 'Clear conversion goals tell Google what success looks like for your business. Without defined goals, Google can\'t optimize your campaigns effectively. Proper goal setting enables Smart Bidding strategies, audience optimization, and performance measurement, directly impacting your campaign\'s return on investment.',
      riskIfMissing: 'Campaigns optimize for wrong actions, wasted budget, poor ROI, no Smart Bidding capabilities',
      benefitWhenComplete: 'Campaigns optimize for business goals, Smart Bidding enabled, better ROI, targeted audience optimization'
    },
    { 
      id: 'events-2', 
      title: 'Custom conversion events configured', 
      description: 'FcPurchase, RcPurchase, FcATC, RcATC, Lead, Request A Quote, SIGN IN...', 
      category: 'events', 
      priority: 'high', 
      checked: false,
      explanation: 'Custom events provide granular insights into customer behavior and value. Tracking first-time vs. repeat customers, different types of leads, and various engagement levels helps Google optimize for your most valuable actions. This detailed tracking leads to better campaign performance and more efficient budget allocation.',
      riskIfMissing: 'Cannot distinguish valuable vs. low-value conversions, poor budget allocation, suboptimal targeting',
      benefitWhenComplete: 'Optimized for high-value conversions, better budget allocation, targeted customer acquisition strategies'
    },
    { 
      id: 'events-3', 
      title: 'Customer events created for GA4 tracking', 
      description: 'Help analyze specific behavior tracking', 
      category: 'events', 
      priority: 'medium', 
      checked: false,
      explanation: 'Custom GA4 events provide insights beyond standard e-commerce tracking. Understanding specific user behaviors, content engagement, and micro-conversions helps you optimize your entire funnel. This data feeds back into Google Ads for better audience creation and campaign optimization.',
      riskIfMissing: 'Limited insights into customer behavior, missed funnel optimization opportunities, basic audience targeting only',
      benefitWhenComplete: 'Deep customer behavior insights, optimized sales funnel, advanced audience targeting, better campaign performance'
    },
    { 
      id: 'events-4', 
      title: 'In-app analytics utilized', 
      description: 'Product Analytics, Sale Analytics, Buyer Analytics', 
      category: 'events', 
      priority: 'medium', 
      checked: false,
      explanation: 'Comprehensive analytics help you understand what drives sales and customer retention. Product performance data informs which items to promote, sales analytics guide budget allocation, and buyer behavior insights help create better-targeted campaigns. This holistic view improves both advertising efficiency and business decisions.',
      riskIfMissing: 'Promoting wrong products, inefficient budget allocation, missed business insights, poor product decisions',
      benefitWhenComplete: 'Promote best-performing products, efficient budget allocation, data-driven business decisions, higher profitability'
    },

    // Legal & UX Requirements  
    { 
      id: 'legal-1', 
      title: 'Privacy Policy', 
      description: 'Mandatory privacy policy', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'A privacy policy is legally required in most jurisdictions and mandatory for Google Ads approval. It builds customer trust by transparently explaining data usage. Without a proper privacy policy, your ads will be disapproved, and you may face legal issues. It\'s essential for compliance and customer confidence.',
      riskIfMissing: 'Ads disapproved immediately, legal fines, cannot collect customer data, lost customer trust',
      benefitWhenComplete: 'Ads approved, legal compliance, customer trust, ability to collect necessary data for marketing'
    },
    { 
      id: 'legal-2', 
      title: 'Terms of Service', 
      description: 'Service terms and conditions', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Terms of Service protect your business legally and are required for Google Ads compliance. They set clear expectations for customers, reduce disputes, and demonstrate professionalism. Clear terms help build trust and provide legal protection, while also meeting Google\'s policy requirements for advertiser approval.',
      riskIfMissing: 'Legal disputes with customers, no protection in conflicts, ads may be disapproved, unprofessional appearance',
      benefitWhenComplete: 'Legal protection, reduced disputes, professional appearance, Google Ads compliance, customer clarity'
    },
    { 
      id: 'legal-3', 
      title: 'Return & Refund Policy', 
      description: 'Refund and exchange policy', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'A clear return policy reduces customer anxiety about purchasing, especially from new brands. It\'s required for Google Shopping ads and builds trust that encourages conversions. Transparent policies also reduce disputes and chargebacks, protecting your payment processor relationships and business reputation.',
      riskIfMissing: 'Cannot run Google Shopping ads, high cart abandonment, customer disputes, payment processor issues',
      benefitWhenComplete: 'Access to Google Shopping, reduced cart abandonment, fewer disputes, customer confidence in purchasing'
    },
    { 
      id: 'legal-4', 
      title: 'Shipping & Payment Info', 
      description: 'Clear shipping fees and payment methods', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Hidden shipping costs are a major cause of cart abandonment and policy violations. Clear pricing information improves user experience, reduces bounce rates, and ensures Google Ads compliance. Transparent costs build trust and prevent customer complaints that could harm your business reputation.',
      riskIfMissing: 'High cart abandonment (up to 70%), policy violations, customer complaints, damaged reputation',
      benefitWhenComplete: 'Lower cart abandonment, policy compliance, customer trust, smooth checkout experience'
    },
    { 
      id: 'legal-5', 
      title: 'Complete contact page information', 
      description: 'Real email/phone number', 
      category: 'legal', 
      priority: 'high', 
      checked: false,
      explanation: 'Legitimate contact information is required for Google Ads approval and builds customer trust. It demonstrates that you\'re a real business standing behind your products. Accessible customer service also improves customer satisfaction, reduces negative reviews, and can be legally required in many jurisdictions.',
      riskIfMissing: 'Ads disapproved, low customer trust, appears unprofessional, cannot resolve customer issues',
      benefitWhenComplete: 'Ads approved, high customer trust, professional appearance, effective customer service'
    },
    { 
      id: 'legal-6', 
      title: 'Mobile-friendly interface', 
      description: 'Responsive layout', 
      category: 'legal', 
      priority: 'medium', 
      checked: false,
      explanation: 'Mobile traffic often represents the majority of e-commerce visitors. A mobile-friendly site improves user experience, reduces bounce rates, and is favored by Google\'s algorithms. Poor mobile experience leads to lost sales and can negatively impact your Quality Score, increasing advertising costs.',
      riskIfMissing: 'Lost mobile sales (50-70% of traffic), high bounce rates, poor Quality Score, higher advertising costs',
      benefitWhenComplete: 'Capture mobile sales, lower bounce rates, better Quality Score, reduced advertising costs'
    },
    { 
      id: 'legal-7', 
      title: 'Page load speed < 3 seconds', 
      description: 'Use PageSpeed Insights to check', 
      category: 'legal', 
      priority: 'medium', 
      checked: false,
      explanation: 'Page speed directly impacts conversion rates and user experience. Slow sites have higher bounce rates and lower customer satisfaction. Google considers page speed in Quality Score calculations, so faster sites get better ad positions at lower costs. Every second of delay can significantly impact sales.',
      riskIfMissing: 'Lost sales (1 second delay = 7% conversion loss), high bounce rates, poor Quality Score, higher CPC',
      benefitWhenComplete: 'Higher conversion rates, lower bounce rates, better Quality Score, lower advertising costs'
    },
    { 
      id: 'legal-8', 
      title: 'Clear menu and layout', 
      description: 'Easy to find products, not confusing', 
      category: 'legal', 
      priority: 'medium', 
      checked: false,
      explanation: 'Intuitive navigation reduces friction in the customer journey, leading to higher conversion rates. Clear layouts help customers find what they\'re looking for quickly, improving user experience metrics that Google values. Confusing navigation increases bounce rates and reduces advertising effectiveness.',
      riskIfMissing: 'High bounce rates, frustrated customers, lost sales, poor user experience metrics',
      benefitWhenComplete: 'Lower bounce rates, easy product discovery, higher conversion rates, improved user experience'
    },

    // Tracking Tools & Tag Manager
    { 
      id: 'tracking-1', 
      title: 'Google Tag Manager (GTM) installed', 
      description: 'Easy to attach tracking from multiple platforms', 
      category: 'tracking', 
      priority: 'high', 
      checked: false,
      explanation: 'GTM simplifies tracking implementation and management across multiple platforms. It allows quick deployment of tracking codes without developer help, enables better data collection, and provides flexibility for testing and optimization. Proper tracking is essential for campaign optimization and ROI measurement.',
      riskIfMissing: 'Difficult tracking implementation, missed tracking opportunities, reliance on developers for changes',
      benefitWhenComplete: 'Easy tracking management, comprehensive data collection, quick implementation of new tracking'
    },
    { 
      id: 'tracking-2', 
      title: 'Google Ads Remarketing Tag', 
      description: 'To retarget customers', 
      category: 'tracking', 
      priority: 'high', 
      checked: false,
      explanation: 'Remarketing allows you to re-engage visitors who didn\'t convert initially. These warm audiences typically have much higher conversion rates and lower costs than cold traffic. Remarketing often provides the best ROI in Google Ads, making it essential for efficient advertising spend.',
      riskIfMissing: 'Cannot retarget visitors, missed high-ROI opportunities, only cold traffic advertising, higher acquisition costs',
      benefitWhenComplete: 'High-converting remarketing campaigns, lower cost per acquisition, better ROI, recovered abandoned visitors'
    },
    { 
      id: 'tracking-3', 
      title: 'Dynamic Remarketing enabled', 
      description: 'If running ads for multiple products', 
      category: 'tracking', 
      priority: 'medium', 
      checked: false,
      explanation: 'Dynamic remarketing shows specific products that visitors viewed but didn\'t purchase. This personalized approach significantly improves relevance and conversion rates compared to generic remarketing. It\'s especially powerful for e-commerce stores with multiple products, as it creates highly targeted, personalized ad experiences.',
      riskIfMissing: 'Generic remarketing only, lower relevance, missed personalization opportunities, lower conversion rates',
      benefitWhenComplete: 'Personalized product ads, higher relevance, increased conversion rates, better customer experience'
    },
    { 
      id: 'tracking-4', 
      title: 'UTM tracking attached', 
      description: 'Easy to analyze effectiveness from multiple campaigns', 
      category: 'tracking', 
      priority: 'medium', 
      checked: false,
      explanation: 'UTM parameters provide detailed insights into which campaigns, ad groups, and keywords drive the best results. This granular tracking helps optimize budget allocation, identify top-performing content, and understand customer acquisition sources. Better attribution leads to more informed advertising decisions.',
      riskIfMissing: 'Cannot identify best-performing campaigns, poor budget allocation, missed optimization opportunities',
      benefitWhenComplete: 'Detailed campaign insights, optimized budget allocation, better ROI measurement, informed decisions'
    },

    // Feed & Merchant Center
    { 
      id: 'feed-1', 
      title: 'Google Merchant Feed created', 
      description: 'Via app or API', 
      category: 'feed', 
      priority: 'medium', 
      checked: false,
      explanation: 'Google Merchant Center feeds enable Shopping ads and Performance Max campaigns, which often provide excellent ROI for e-commerce. Product feeds allow your items to appear in Google Shopping results, reaching customers with high purchase intent. This expands your advertising reach beyond traditional search ads.',
      riskIfMissing: 'Cannot run Shopping ads, missed high-intent traffic, limited to search ads only, reduced visibility',
      benefitWhenComplete: 'Access to Shopping ads, high-intent traffic, increased product visibility, better ROI from Shopping campaigns'
    },
    { 
      id: 'feed-2', 
      title: 'No rejected products', 
      description: 'Due to missing GTIN, price, wrong description...', 
      category: 'feed', 
      priority: 'medium', 
      checked: false,
      explanation: 'Rejected products can\'t be advertised through Shopping campaigns, limiting your reach and potential sales. Product feed errors also signal quality issues to Google, potentially affecting your overall account health. Clean, complete product data ensures maximum advertising coverage and better campaign performance.',
      riskIfMissing: 'Products cannot be advertised, reduced Shopping campaign reach, missed sales opportunities',
      benefitWhenComplete: 'All products can be advertised, maximum reach, full Shopping campaign potential, increased sales'
    },
    { 
      id: 'feed-3', 
      title: 'Product schema (JSON-LD) attached', 
      description: 'Help Google crawl better', 
      category: 'feed', 
      priority: 'medium', 
      checked: false,
      explanation: 'Structured data helps Google understand your products better, potentially improving organic visibility and ad relevance. Rich snippets can appear in search results, increasing click-through rates. Better product understanding by Google also improves automated campaign optimization and audience targeting.',
      riskIfMissing: 'Poor product understanding by Google, missed rich snippets, lower click-through rates, suboptimal targeting',
      benefitWhenComplete: 'Better Google product understanding, rich snippets in search, higher click-through rates, improved targeting'
    },
    { 
      id: 'feed-4', 
      title: 'Landing page matches feed content', 
      description: 'No information discrepancy', 
      category: 'feed', 
      priority: 'medium', 
      checked: false,
      explanation: 'Mismatched product information between ads and landing pages violates Google policies and creates poor user experience. Consistency ensures customers find what they expect, improving conversion rates and preventing policy violations that could suspend your advertising account.',
      riskIfMissing: 'Policy violations, customer confusion, poor conversion rates, potential account suspension',
      benefitWhenComplete: 'Policy compliance, consistent customer experience, higher conversion rates, account protection'
    },

    // Creative & Ad Content
    { 
      id: 'creative-1', 
      title: 'No fraudulent commitment language', 
      description: 'Example: "guaranteed 10kg loss after 1 week"', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Unrealistic promises violate Google\'s policies and can result in immediate account suspension. Even if your product is effective, making impossible claims damages credibility and can lead to legal issues. Honest, realistic messaging builds genuine trust and ensures long-term advertising account health.',
      riskIfMissing: 'Immediate account suspension, legal issues, damaged credibility, lost customer trust',
      benefitWhenComplete: 'Account remains active, legal protection, authentic credibility, long-term customer trust'
    },
    { 
      id: 'creative-2', 
      title: 'No before-after images', 
      description: 'Violates misleading illustration policy', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Before-after images are considered misleading by Google, especially for health and beauty products. They can result in immediate policy violations and account suspension. Using authentic, representative images protects your advertising privileges while building genuine customer trust based on realistic expectations.',
      riskIfMissing: 'Immediate policy violations, account suspension, loss of advertising privileges, customer disappointment',
      benefitWhenComplete: 'Policy compliance, advertising privileges protected, realistic customer expectations, authentic trust'
    },
    { 
      id: 'creative-3', 
      title: 'No emotional manipulation', 
      description: 'Avoid shocking images', 
      category: 'creative', 
      priority: 'high', 
      checked: false,
      explanation: 'Emotionally manipulative content violates Google\'s policies and creates negative user experiences. Such tactics may get short-term attention but damage brand reputation and can lead to account suspension. Positive, authentic messaging builds lasting customer relationships and sustainable business growth.',
      riskIfMissing: 'Policy violations, account suspension, damaged brand reputation, negative customer perception',
      benefitWhenComplete: 'Policy compliance, positive brand reputation, authentic customer relationships, sustainable growth'
    },

    // Analytics & Attribution
    { 
      id: 'analytics-1', 
      title: 'Google Signals enabled in GA4', 
      description: 'To collect cross-device data', 
      category: 'analytics', 
      priority: 'medium', 
      checked: false,
      explanation: 'Google Signals provides insights into cross-device user behavior, helping you understand the complete customer journey. This data improves audience targeting and attribution accuracy, especially as customers use multiple devices throughout their purchase journey. Better data leads to more effective campaign optimization.',
      riskIfMissing: 'Incomplete customer journey understanding, poor cross-device attribution, missed targeting opportunities',
      benefitWhenComplete: 'Complete cross-device insights, accurate attribution, better audience targeting, improved campaign optimization'
    },
    { 
      id: 'analytics-2', 
      title: 'Data-driven attribution model used', 
      description: 'Instead of last click', 
      category: 'analytics', 
      priority: 'medium', 
      checked: false,
      explanation: 'Data-driven attribution provides a more accurate view of how different touchpoints contribute to conversions. Unlike last-click attribution, it gives credit to all interactions in the customer journey. This leads to better budget allocation across campaigns and more accurate measurement of advertising effectiveness.',
      riskIfMissing: 'Inaccurate attribution, poor budget allocation, undervalued campaigns, missed optimization opportunities',
      benefitWhenComplete: 'Accurate attribution across all touchpoints, optimal budget allocation, fair campaign valuation, better optimization'
    },
    { 
      id: 'analytics-3', 
      title: 'Reports created with Looker Studio / Google Sheets', 
      description: 'Automate performance tracking', 
      category: 'analytics', 
      priority: 'low', 
      checked: false,
      explanation: 'Automated reporting saves time and ensures consistent performance monitoring. Regular reports help identify trends, opportunities, and issues quickly. This enables faster optimization decisions and better campaign management, ultimately improving ROI through more responsive campaign adjustments.',
      riskIfMissing: 'Manual reporting takes time, missed trends and opportunities, slow response to issues, inefficient management',
      benefitWhenComplete: 'Automated reporting saves time, quick trend identification, fast issue response, efficient campaign management'
    },
    { 
      id: 'analytics-4', 
      title: 'Alerts set up', 
      description: 'When CPC is unusually high or ROAS decreases', 
      category: 'analytics', 
      priority: 'low', 
      checked: false,
      explanation: 'Automated alerts help you respond quickly to performance changes, preventing budget waste and missed opportunities. Quick response to issues like rising costs or dropping performance can save significant money and maintain campaign effectiveness. Proactive monitoring is key to successful campaign management.',
      riskIfMissing: 'Late response to issues, budget waste, missed optimization opportunities, performance drops unnoticed',
      benefitWhenComplete: 'Quick issue response, budget protection, proactive optimization, maintained campaign performance'
    },
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
                                  
                                  {/* View More Button with Dialog */}
                                  <div className="flex items-center justify-between">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="ghost" size="sm" className="h-8 px-2 text-blue-600 hover:text-blue-800">
                                          <HelpCircle className="h-3 w-3 mr-1" />
                                          View More
                                        </Button>
                                      </DialogTrigger>
                                      <DialogContent className="max-w-2xl">
                                        <DialogHeader>
                                          <DialogTitle className="flex items-center gap-2">
                                            <HelpCircle className="h-5 w-5 text-blue-600" />
                                            {item.title}
                                          </DialogTitle>
                                          <DialogDescription>
                                            Understanding why this requirement matters for your Google Ads success
                                          </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                                            <h4 className="font-semibold text-blue-900 mb-2">Why This Matters:</h4>
                                            <p className="text-blue-800 leading-relaxed">
                                              {item.explanation || 'This requirement helps ensure your Google Ads campaigns run smoothly and comply with Google\'s policies.'}
                                            </p>
                                          </div>
                                          
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="p-3 bg-red-50 rounded-lg">
                                              <h5 className="font-medium text-red-800 mb-1 flex items-center gap-1">
                                                <AlertTriangle className="h-4 w-4" />
                                                Risk if Missing:
                                              </h5>
                                              <p className="text-sm text-red-700">
                                                {item.riskIfMissing || 'May lead to policy violations or reduced campaign performance'}
                                              </p>
                                            </div>
                                            
                                            <div className="p-3 bg-green-50 rounded-lg">
                                              <h5 className="font-medium text-green-800 mb-1 flex items-center gap-1">
                                                <CheckCircle className="h-4 w-4" />
                                                Benefit when Complete:
                                              </h5>
                                              <p className="text-sm text-green-700">
                                                {item.benefitWhenComplete || 'Improves campaign performance and ensures compliance'}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                    
                                    {isChecked && (
                                      <div className="flex items-center gap-1 text-green-600">
                                        <CheckCircle className="h-4 w-4" />
                                        <span className="text-xs font-medium">Completed</span>
                                      </div>
                                    )}
                                  </div>
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
