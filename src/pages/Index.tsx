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
      explanation: `<div>
        <p><strong>Google's crawlers need to access your website to verify policy compliance before approving your ads.</strong></p>
        <br/>
        <p>When your store is password-protected, Google cannot:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Verify that your products comply with advertising policies</li>
          <li>Check your website's user experience and loading speed</li>
          <li>Validate that your business information is legitimate</li>
          <li>Ensure your checkout process works properly</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          Store A launches with password protection during development. All Google Ads get rejected immediately with "Website not accessible" error. 
          After removing the password, ads are approved within 24 hours and start generating $2,000 in daily revenue.
        </p>
        <br/>
        <p><strong>Technical requirements:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Remove Shopify password page completely</li>
          <li>Ensure all product pages load without login</li>
          <li>Make checkout accessible to new visitors</li>
          <li>Test your site in incognito mode to verify accessibility</li>
        </ul>
      </div>`,
      riskIfMissing: [
        'Immediate ad rejection - Google cannot verify store content',
        'All campaigns suspended until store becomes accessible',
        'Conversion tracking completely broken',
        'Unable to use Google Shopping campaigns'
      ],
      benefitWhenComplete: [
        'Fast ad approval process (24-48 hours instead of weeks)',
        'All tracking pixels work properly for data collection',
        'Access to Shopping and Performance Max campaigns',
        'Automated bidding strategies can optimize effectively'
      ]
    },
    { 
      id: 'store-2', 
      title: 'Google Analytics 4 (GA4) installed and configured', 
      description: 'Track user behavior and website performance with GA4', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: `<div>
        <p><strong>GA4 is the foundation of all successful Google Ads campaigns.</strong> It provides the behavioral data that Google's AI uses to find your best customers.</p>
        <br/>
        <p>Here's what GA4 tracks that directly improves your ads:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>User journeys:</strong> How customers navigate from first visit to purchase</li>
          <li><strong>Product interests:</strong> Which products generate the most engagement</li>
          <li><strong>Conversion paths:</strong> The typical steps before someone buys</li>
          <li><strong>Audience segments:</strong> Different customer types and their behaviors</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          An electronics store discovers through GA4 that 70% of customers view product videos before purchasing. 
          They create remarketing audiences targeting "video viewers" and achieve 250% higher conversion rates 
          compared to general website visitors.
        </p>
        <br/>
        <p><strong>Setup checklist:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Install GA4 tracking code on all pages</li>
          <li>Enable Enhanced Ecommerce tracking</li>
          <li>Set up conversion events (purchase, add to cart, begin checkout)</li>
          <li>Link GA4 to your Google Ads account</li>
          <li>Verify data is flowing correctly (wait 24-48 hours)</li>
        </ul>
      </div>`,
      riskIfMissing: [
        'No audience insights - advertising blind without customer data',
        'Cannot create remarketing lists based on behavior',
        'Missing 30-50% of conversion attribution',
        'Smart Bidding has insufficient data to optimize'
      ],
      benefitWhenComplete: [
        'Build high-converting custom audiences (cart abandoners, product viewers)',
        'Track complete customer journey across devices',
        'Improve ROAS by 25-40% through better targeting',
        'Get insights like "mobile users convert 3x better on weekends"'
      ]
    },
    { 
      id: 'store-3', 
      title: 'Google Ads conversion tracking installed', 
      description: 'Track which ads and keywords drive actual sales', 
      category: 'store', 
      priority: 'high', 
      checked: false,
      explanation: `<div>
        <p><strong>Conversion tracking is what transforms Google Ads from an expense into a profit center.</strong> Without it, you're flying blind.</p>
        <br/>
        <p>Here's exactly what conversion tracking does:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Attribution:</strong> Connects each sale back to the specific ad and keyword that drove it</li>
          <li><strong>Optimization:</strong> Tells Google's AI which traffic converts so it can find more</li>
          <li><strong>ROI measurement:</strong> Shows exact profit/loss for every dollar spent</li>
          <li><strong>Automated bidding:</strong> Enables Google to bid higher on profitable traffic</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A clothing store installs conversion tracking and discovers that the keyword "summer dresses" 
          costs $2 per click but generates $45 average order value. They increase bids on this keyword 
          and decrease bids on "clothing" (which has low conversion rates), improving overall ROAS from 2.1x to 4.8x.
        </p>
        <br/>
        <p><strong>What you need to track:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Primary:</strong> Purchase/Sale completion with value</li>
          <li><strong>Secondary:</strong> Add to cart, begin checkout, sign up</li>
          <li><strong>Micro:</strong> Page views, time on site (for content sites)</li>
        </ul>
        <br/>
        <p><strong>Setup methods:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Google Tag Manager (recommended for flexibility)</li>
          <li>Direct Google Ads tag installation</li>
          <li>Google Analytics 4 import (for basic tracking)</li>
          <li>Shopify/WooCommerce native integrations</li>
        </ul>
      </div>`,
      riskIfMissing: [
        'Cannot measure ROI - no idea which ads actually drive sales',
        'Waste 40-60% of budget on non-converting keywords',
        'Smart Bidding disabled - stuck with manual bidding only',
        'No data to optimize campaigns automatically'
      ],
      benefitWhenComplete: [
        'See exactly which keywords drive sales (e.g., "red sneakers" = $25 CPA)',
        'Automated bidding increases conversions by 20-30%',
        'Real-time optimization - Google bids higher on profitable traffic',
        'Clear ROI reporting - know you made $5 for every $1 spent'
      ]
    },
    { 
      id: 'store-4', 
      title: 'Customer review system installed (Judge.me, Loox, etc.)', 
      description: 'Build social proof and trust with customer reviews', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: `<div>
        <p><strong>Reviews are the digital equivalent of word-of-mouth marketing.</strong> They provide social proof that dramatically impacts buying decisions, especially for online stores where customers can't physically examine products.</p>
        <br/>
        <p>Psychology behind reviews:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Social proof:</strong> People follow what others do (if 100 people bought this, it must be good)</li>
          <li><strong>Risk reduction:</strong> Reviews help customers feel confident about their purchase</li>
          <li><strong>Detailed feedback:</strong> Reviews answer questions that product descriptions miss</li>
          <li><strong>Trust building:</strong> Authentic reviews make your brand feel legitimate</li>
        </ul>
        <br/>
        <p><strong>Real-world impact example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A fitness equipment store adds review system to their best-selling treadmill. Within 3 months, 
          they collect 67 reviews averaging 4.3 stars. The product page conversion rate increases from 
          2.1% to 3.4% (+62% improvement), and Google Ads performance improves due to better landing page experience.
        </p>
        <br/>
        <p><strong>Review system features to look for:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Photo reviews:</strong> Customer photos build more trust than text alone</li>
          <li><strong>Review widgets:</strong> Display reviews prominently on product pages</li>
          <li><strong>Email automation:</strong> Automatically request reviews post-purchase</li>
          <li><strong>Review syndication:</strong> Share reviews to Google, Facebook, etc.</li>
          <li><strong>Q&A features:</strong> Let customers ask questions about products</li>
        </ul>
        <br/>
        <p><strong>Best practices for collecting reviews:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Send review requests 7-14 days after delivery</li>
          <li>Offer small incentives (5% discount on next order)</li>
          <li>Make leaving reviews extremely easy (1-click process)</li>
          <li>Respond to all reviews, especially negative ones</li>
          <li>Feature customer photos prominently</li>
        </ul>
      </div>`,
      riskIfMissing: [
        'Low conversion rates - customers hesitate without social proof',
        'Higher bounce rates - visitors leave when they see no reviews',
        'Competitors with reviews consistently outperform your ads',
        'Higher cost per acquisition due to poor landing page experience'
      ],
      benefitWhenComplete: [
        'Increase conversion rates by 15-30% with visible star ratings',
        'Lower bounce rates - customers stay longer with social proof',
        'Higher Quality Scores leading to lower cost-per-click',
        'Review rich snippets appear in Google Ads improving CTR'
      ]
    },
    { 
      id: 'store-5', 
      title: 'Promotional offers active (discounts, free shipping)', 
      description: 'Have compelling offers to reduce cart abandonment', 
      category: 'store', 
      priority: 'medium', 
      checked: false,
      explanation: `<div>
        <p><strong>Promotional offers are psychological triggers that overcome purchase hesitation.</strong> They create urgency and reduce the perceived risk of trying a new brand.</p>
        <br/>
        <p>How offers impact buying behavior:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Loss aversion:</strong> People hate missing out on a good deal</li>
          <li><strong>Value perception:</strong> Discounts make customers feel they're getting more for their money</li>
          <li><strong>First-purchase barrier:</strong> New customers need incentive to try unknown brands</li>
          <li><strong>Cart value optimization:</strong> Free shipping thresholds increase average order size</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A skincare brand implements "Free shipping on orders over $75" (their average order was $65). 
          Within one month, average order value increases to $82, and cart abandonment drops from 68% to 45%. 
          Google Ads conversion rate improves from 2.1% to 3.2% due to the compelling offer.
        </p>
        <br/>
        <p><strong>Types of effective offers:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Percentage discounts:</strong> "20% off first order" (works well for higher-priced items)</li>
          <li><strong>Dollar amount off:</strong> "$10 off orders over $50" (clear, immediate value)</li>
          <li><strong>Free shipping:</strong> Most popular - eliminates surprise costs at checkout</li>
          <li><strong>BOGO deals:</strong> "Buy 2, Get 1 Free" (increases cart size)</li>
          <li><strong>Limited time offers:</strong> "48-hour flash sale" (creates urgency)</li>
          <li><strong>Bundle deals:</strong> "Complete skincare routine for $99" (higher perceived value)</li>
        </ul>
        <br/>
        <p><strong>Implementation tips:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Display offers prominently on homepage and product pages</li>
          <li>Include offer details in Google Ads copy</li>
          <li>Use countdown timers for limited-time offers</li>
          <li>A/B test different offer types to find what works best</li>
          <li>Track how offers affect profit margins vs. conversion rates</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Google has zero tolerance for prohibited products - even one violation can permanently ban your account.</strong> Their automated systems scan your website continuously for policy violations.</p>
        <br/>
        <p>Categories of prohibited products:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Weapons & explosives:</strong> Guns, knives, pepper spray, fireworks</li>
          <li><strong>Drugs & supplements:</strong> Prescription drugs, steroids, weight loss pills with banned ingredients</li>
          <li><strong>Counterfeit goods:</strong> Fake designer items, unauthorized replicas</li>
          <li><strong>Adult content:</strong> Sexual products, dating services, escort services</li>
          <li><strong>Gambling:</strong> Casino games, lottery tickets, betting services</li>
          <li><strong>Healthcare violations:</strong> Miracle cures, unproven medical devices</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          An e-commerce store selling general merchandise includes a few "tactical pens" (self-defense items). 
          Google's system flags these as weapons, suspending the entire account within 2 days. 
          The appeal process takes 3 months, during which the business loses $45,000 in Google Ads revenue.
        </p>
        <br/>
        <p><strong>How Google detects violations:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Automated crawling:</strong> Bots scan your product pages regularly</li>
          <li><strong>Keyword analysis:</strong> Product titles and descriptions are analyzed</li>
          <li><strong>Image recognition:</strong> AI identifies prohibited items in product photos</li>
          <li><strong>Manual reviews:</strong> Human reviewers check flagged accounts</li>
        </ul>
        <br/>
        <p><strong>Prevention checklist:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Review Google's prohibited products list quarterly</li>
          <li>Use conservative product descriptions (avoid terms like "tactical," "defense")</li>
          <li>Check your entire product catalog, not just advertised items</li>
          <li>Monitor policy updates - Google changes rules frequently</li>
          <li>Have a compliance review process for new products</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Exaggerated claims trigger Google's misleading content filters and can result in immediate account suspension.</strong> Google's AI is trained to detect superlatives and unrealistic promises.</p>
        <br/>
        <p>Common problematic phrases to avoid:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Absolute claims:</strong> "100% guaranteed," "completely eliminate," "never fails"</li>
          <li><strong>Miracle language:</strong> "Miracle cure," "secret formula," "breakthrough discovery"</li>
          <li><strong>Extreme results:</strong> "Lose 20 pounds in 1 week," "grow 6 inches taller"</li>
          <li><strong>Get-rich-quick:</strong> "Make $10,000 in 30 days," "instant wealth"</li>
          <li><strong>Medical claims:</strong> "Cures cancer," "FDA approved" (when not true)</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A supplement company uses "Burns fat 500% faster than exercise alone - GUARANTEED!" in their product descriptions. 
          Google flags this as misleading advertising, suspending their account. After rewriting to 
          "Supports healthy metabolism as part of a balanced diet and exercise routine," ads are approved and perform better 
          due to realistic customer expectations.
        </p>
        <br/>
        <p><strong>Better alternatives for common claims:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Instead of:</strong> "100% effective" → <strong>Use:</strong> "Clinically tested" or "Proven formula"</li>
          <li><strong>Instead of:</strong> "Miracle weight loss" → <strong>Use:</strong> "Supports healthy weight management"</li>
          <li><strong>Instead of:</strong> "Instant results" → <strong>Use:</strong> "Fast-acting formula" or "Results may vary"</li>
          <li><strong>Instead of:</strong> "Never breaks" → <strong>Use:</strong> "Durable construction" or "Long-lasting"</li>
          <li><strong>Instead of:</strong> "Cures everything" → <strong>Use:</strong> "Supports overall wellness"</li>
        </ul>
        <br/>
        <p><strong>Writing guidelines:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Focus on product features and benefits, not unrealistic outcomes</li>
          <li>Use qualifying words like "may," "supports," "helps," "designed to"</li>
          <li>Include disclaimers like "results may vary" or "as part of a balanced lifestyle"</li>
          <li>Back up claims with actual studies or certifications</li>
          <li>Test your copy with Google's policy checker tools</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Google can detect fake reviews through sophisticated pattern analysis and AI.</strong> Fake reviews are a form of misleading content that violates advertising policies and can result in permanent account suspension.</p>
        <br/>
        <p>How Google detects fake reviews:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Pattern analysis:</strong> Multiple reviews posted in short timeframes</li>
          <li><strong>Language patterns:</strong> Similar writing styles or repeated phrases</li>
          <li><strong>Account verification:</strong> Reviews from accounts with no purchase history</li>
          <li><strong>Sentiment analysis:</strong> Unnaturally positive language without specific details</li>
          <li><strong>Geographic clustering:</strong> Reviews all from the same location or IP range</li>
        </ul>
        <br/>
        <p><strong>Real-world consequences example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          An electronics store purchases 200 fake 5-star reviews for $150. Google's algorithm detects the suspicious pattern 
          within 2 weeks and flags the account for "misleading business practices." The Google Ads account is suspended, 
          Google My Business listing is penalized, and organic search rankings drop by 60%. 
          Recovery takes 8 months and costs $15,000 in lost revenue.
        </p>
        <br/>
        <p><strong>What constitutes fake reviews:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Purchased reviews:</strong> Paying services or individuals to write reviews</li>
          <li><strong>Incentivized reviews:</strong> Offering significant rewards for positive reviews only</li>
          <li><strong>Employee reviews:</strong> Staff members or family writing reviews</li>
          <li><strong>Review exchanges:</strong> Trading reviews with other businesses</li>
          <li><strong>Bot-generated reviews:</strong> AI-written reviews using templates</li>
        </ul>
        <br/>
        <p><strong>Building authentic reviews the right way:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Post-purchase follow-up:</strong> Email customers 7-14 days after delivery</li>
          <li><strong>Excellent customer service:</strong> Resolve issues quickly to earn positive feedback</li>
          <li><strong>Review request automation:</strong> Use legitimate tools like Judge.me or Trustpilot</li>
          <li><strong>Small incentives:</strong> Offer small discounts (5-10%) for honest reviews</li>
          <li><strong>Make it easy:</strong> Provide direct links and simple review processes</li>
          <li><strong>Quality products:</strong> The best reviews come from genuinely satisfied customers</li>
        </ul>
        <br/>
        <p><strong>Warning signs to avoid:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Sudden spike in reviews (more than 10-15 per week for small businesses)</li>
          <li>All reviews are 5 stars with generic positive language</li>
          <li>Reviews posted on same dates or times</li>
          <li>Reviewers have no other review history</li>
          <li>Reviews use identical phrases or focus on same product features</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>A Privacy Policy is legally required in most countries and mandatory for Google Ads approval.</strong> It's not just a formality - it protects your business and builds customer trust.</p>
        <br/>
        <p>Why Google requires a Privacy Policy:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Data collection transparency:</strong> Customers must know what data you collect</li>
          <li><strong>Cookie compliance:</strong> Required when using tracking pixels and analytics</li>
          <li><strong>Legal protection:</strong> Demonstrates compliance with privacy laws</li>
          <li><strong>Trust building:</strong> Shows you're a legitimate, professional business</li>
        </ul>
        <br/>
        <p><strong>Legal requirements it covers:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>GDPR (Europe):</strong> Fines up to 4% of annual revenue or €20 million</li>
          <li><strong>CCPA (California):</strong> Fines up to $2,500 per violation</li>
          <li><strong>PIPEDA (Canada):</strong> Required for all businesses collecting personal data</li>
          <li><strong>Other state laws:</strong> Virginia, Colorado, Connecticut have similar requirements</li>
        </ul>
        <br/>
        <p><strong>Real-world impact example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A home decor store launches Google Ads without a Privacy Policy. Ads are immediately rejected with 
          "Missing privacy policy" error. After adding a comprehensive policy, ads are approved within 24 hours. 
          More importantly, their conversion rate increases by 12% because customers feel more secure about 
          providing their email and payment information.
        </p>
        <br/>
        <p><strong>Essential elements to include:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Data collection:</strong> What information you gather (emails, addresses, browsing data)</li>
          <li><strong>Data usage:</strong> How you use the information (order fulfillment, marketing, analytics)</li>
          <li><strong>Data sharing:</strong> Who you share data with (payment processors, shipping companies)</li>
          <li><strong>Cookies:</strong> What tracking technologies you use</li>
          <li><strong>User rights:</strong> How customers can access, modify, or delete their data</li>
          <li><strong>Contact information:</strong> How to reach you with privacy concerns</li>
        </ul>
        <br/>
        <p><strong>Implementation checklist:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Link to Privacy Policy in website footer (must be easily findable)</li>
          <li>Add checkbox on checkout: "I agree to the Privacy Policy"</li>
          <li>Include link in email subscription forms</li>
          <li>Update policy when you add new tracking tools or change data practices</li>
          <li>Use a privacy policy generator or consult with a lawyer for complex businesses</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Terms of Service act as a legal contract between you and your customers.</strong> They protect your business from unreasonable demands and set clear expectations for the customer relationship.</p>
        <br/>
        <p>Why Terms of Service are crucial:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Legal protection:</strong> Limit your liability in disputes and chargebacks</li>
          <li><strong>Dispute resolution:</strong> Define how conflicts will be handled</li>
          <li><strong>Service limitations:</strong> Clarify what you will and won't do</li>
          <li><strong>Professional credibility:</strong> Shows you run a legitimate business</li>
        </ul>
        <br/>
        <p><strong>Real-world protection example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A custom furniture store faces a customer demanding a full refund after 8 months, claiming the chair 
          "doesn't match their decor." Without Terms of Service, they would likely lose the chargeback dispute. 
          With clear terms stating "Custom items have a 30-day return window for defects only," 
          they successfully defend the chargeback and keep the $1,200 sale.
        </p>
        <br/>
        <p><strong>Essential sections to include:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Return/refund policy:</strong> Clear timelines and conditions for returns</li>
          <li><strong>Shipping terms:</strong> Delivery timelines, shipping costs, risk of loss</li>
          <li><strong>Payment terms:</strong> When payment is due, accepted methods, late fees</li>
          <li><strong>Limitation of liability:</strong> Protect against excessive damage claims</li>
          <li><strong>Dispute resolution:</strong> Require arbitration or specify court jurisdiction</li>
          <li><strong>Prohibited uses:</strong> What customers cannot do with your products/services</li>
          <li><strong>Intellectual property:</strong> Protect your copyrights and trademarks</li>
        </ul>
        <br/>
        <p><strong>Common business scenarios Terms of Service handle:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Late deliveries:</strong> "Delivery estimates are not guarantees"</li>
          <li><strong>Product variations:</strong> "Colors may vary due to monitor settings"</li>
          <li><strong>Custom orders:</strong> "Personalized items cannot be returned unless defective"</li>
          <li><strong>Service interruptions:</strong> "Website maintenance may cause temporary downtime"</li>
          <li><strong>Price changes:</strong> "Prices subject to change without notice"</li>
        </ul>
        <br/>
        <p><strong>Best practices for implementation:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Link prominently in website footer and during checkout</li>
          <li>Require acceptance checkbox during account creation</li>
          <li>Use clear, understandable language (avoid overly legal jargon)</li>
          <li>Update terms when you change business practices</li>
          <li>Consider having customers re-accept terms after major updates</li>
          <li>Keep records of when customers agreed to specific versions</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>A clear return policy is one of the most important factors in online purchase decisions.</strong> Studies show 67% of customers check return policies before buying, and unclear policies are a major cause of cart abandonment.</p>
        <br/>
        <p>Psychology behind return policies:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Risk reduction:</strong> Customers feel safer knowing they can return items</li>
          <li><strong>Trust building:</strong> Generous return policies suggest confidence in product quality</li>
          <li><strong>Purchase justification:</strong> "I can always return it if I don't like it"</li>
          <li><strong>Competitive advantage:</strong> Better return policies differentiate you from competitors</li>
        </ul>
        <br/>
        <p><strong>Real-world impact example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          An apparel store changes their return policy from "All sales final" to "30-day returns, customer pays shipping." 
          Conversion rate increases from 1.8% to 2.9% (+61% improvement). More importantly, actual return rate only 
          increases from 2% to 8%, meaning the policy change generates significant net profit increase.
        </p>
        <br/>
        <p><strong>Google Shopping requirements:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Mandatory disclosure:</strong> Must display return policy clearly</li>
          <li><strong>Return window:</strong> Minimum 30 days for most categories</li>
          <li><strong>Condition requirements:</strong> Specify acceptable return condition</li>
          <li><strong>Cost responsibility:</strong> Who pays return shipping</li>
          <li><strong>Refund timeline:</strong> How long until refund is processed</li>
        </ul>
        <br/>
        <p><strong>Key elements to include:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Time limit:</strong> "30 days from delivery date"</li>
          <li><strong>Condition requirements:</strong> "Items must be unused with original tags"</li>
          <li><strong>Return process:</strong> "Contact support for return authorization"</li>
          <li><strong>Shipping costs:</strong> "Customer responsible for return shipping"</li>
          <li><strong>Refund method:</strong> "Refund to original payment method within 5-7 days"</li>
          <li><strong>Exclusions:</strong> "Personalized items and final sale items cannot be returned"</li>
        </ul>
        <br/>
        <p><strong>Industry best practices by category:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Clothing:</strong> 30-60 days, free returns (absorb cost in pricing)</li>
          <li><strong>Electronics:</strong> 15-30 days, customer pays shipping, restocking fee for opened items</li>
          <li><strong>Home goods:</strong> 30 days, customer pays shipping unless defective</li>
          <li><strong>Beauty products:</strong> 30 days, only if unopened due to hygiene</li>
          <li><strong>Custom/personalized:</strong> No returns unless defective or wrong item sent</li>
        </ul>
        <br/>
        <p><strong>Implementation tips:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Display return policy prominently on product pages</li>
          <li>Include return info in checkout confirmation emails</li>
          <li>Make return process as simple as possible</li>
          <li>Track return reasons to improve product quality</li>
          <li>Consider offering store credit as alternative to refunds</li>
          <li>Use return policy as a marketing tool ("Risk-free 60-day guarantee")</li>
        </ul>
      </div>`,
      riskIfMissing: [
        'Cannot run Google Shopping campaigns - return policy required',
        'High cart abandonment - 67% of customers check return policy before buying',
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
      explanation: `<div>
        <p><strong>Hidden costs are the #1 reason for cart abandonment, accounting for 49% of all abandoned carts.</strong> Transparency about costs builds trust and improves conversion rates significantly.</p>
        <br/>
        <p>Why transparent pricing matters:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Cart abandonment prevention:</strong> No surprise costs at final checkout step</li>
          <li><strong>Google policy compliance:</strong> Misleading pricing violates advertising policies</li>
          <li><strong>Customer trust:</strong> Upfront costs show honesty and professionalism</li>
          <li><strong>Competitive advantage:</strong> Clear pricing differentiates from competitors with hidden fees</li>
        </ul>
        <br/>
        <p><strong>Real-world impact example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          An online bookstore displays "Free shipping on orders over $25" prominently on their homepage and product pages. 
          Their cart abandonment rate drops from 71% to 52%. Additionally, average order value increases from $19 to $28 
          as customers add items to reach the free shipping threshold. Overall revenue increases by 34%.
        </p>
        <br/>
        <p><strong>Common hidden costs that hurt conversions:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Shipping fees:</strong> Not disclosed until checkout</li>
          <li><strong>Taxes:</strong> Added at final step without warning</li>
          <li><strong>Processing fees:</strong> Credit card or payment fees not mentioned</li>
          <li><strong>Handling charges:</strong> Additional fees for packaging or processing</li>
          <li><strong>Rush delivery costs:</strong> Premium shipping options not clearly priced</li>
          <li><strong>International fees:</strong> Customs, duties, or currency conversion</li>
        </ul>
        <br/>
        <p><strong>Best practices for shipping transparency:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Free shipping thresholds:</strong> "Free shipping on orders over $50"</li>
          <li><strong>Shipping calculator:</strong> Let customers calculate costs before checkout</li>
          <li><strong>Multiple options:</strong> "Standard (5-7 days) $5.99 | Express (2-3 days) $12.99"</li>
          <li><strong>Geographic clarity:</strong> "Free shipping within continental US"</li>
          <li><strong>Timeline transparency:</strong> "Orders placed by 2 PM ship same day"</li>
        </ul>
        <br/>
        <p><strong>Payment method transparency:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Accepted methods:</strong> Display credit card logos, PayPal, etc.</li>
          <li><strong>Security assurance:</strong> "SSL encrypted checkout" badges</li>
          <li><strong>Payment timeline:</strong> "Cards charged when order ships"</li>
          <li><strong>Currency clarity:</strong> Specify USD, CAD, EUR, etc.</li>
          <li><strong>No surprise fees:</strong> "No additional processing fees"</li>
        </ul>
        <br/>
        <p><strong>Implementation checklist:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Show shipping costs on product pages or early in checkout</li>
          <li>Display total cost (including tax) before final purchase button</li>
          <li>Include shipping info in Google Ads and product listings</li>
          <li>Use shipping cost as competitive advantage in marketing</li>
          <li>A/B test free shipping thresholds to optimize AOV</li>
          <li>Clearly communicate any restrictions or limitations</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Legitimate contact information is crucial for customer trust and Google Ads approval.</strong> Google verifies that businesses are real and reachable before allowing ads to run.</p>
        <br/>
        <p>Why Google requires verifiable contact info:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Business verification:</strong> Confirms you're a legitimate operation</li>
          <li><strong>Customer protection:</strong> Ensures customers can reach you for support</li>
          <li><strong>Dispute resolution:</strong> Google needs to contact you about policy issues</li>
          <li><strong>Trust signals:</strong> Real contact info builds customer confidence</li>
        </ul>
        <br/>
        <p><strong>Real-world verification example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A dropshipping store uses a generic Gmail address and virtual phone number. Google's verification team 
          calls the number and emails the address to verify the business. When they can't reach anyone, 
          the account is suspended for "unverifiable business information." After switching to a business phone 
          line and professional email, the account is reinstated within 48 hours.
        </p>
        <br/>
        <p><strong>Essential contact information to display:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Business phone number:</strong> Not personal cell, use business line or Google Voice</li>
          <li><strong>Professional email:</strong> Use your domain (support@yourbusiness.com) not Gmail</li>
          <li><strong>Physical address:</strong> Real business address (PO Box acceptable for small businesses)</li>
          <li><strong>Business hours:</strong> When customers can reach you</li>
          <li><strong>Response timeframes:</strong> "We reply to emails within 24 hours"</li>
        </ul>
        <br/>
        <p><strong>Trust-building contact strategies:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Multiple channels:</strong> Phone, email, live chat, social media</li>
          <li><strong>Quick response:</strong> Set up auto-replies acknowledging receipt</li>
          <li><strong>Professional voicemail:</strong> Clear business greeting with callback promise</li>
          <li><strong>Team photos:</strong> Show real people behind the business</li>
          <li><strong>About us page:</strong> Tell your business story and mission</li>
        </ul>
        <br/>
        <p><strong>Where to display contact information:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Website footer:</strong> On every page for easy access</li>
          <li><strong>Contact page:</strong> Dedicated page with all contact methods</li>
          <li><strong>About us page:</strong> Include business background and contact info</li>
          <li><strong>Checkout process:</strong> Show support contact for purchase questions</li>
          <li><strong>Email signatures:</strong> Include in all business communications</li>
          <li><strong>Google My Business:</strong> Consistent NAP (Name, Address, Phone)</li>
        </ul>
        <br/>
        <p><strong>Common mistakes to avoid:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Using personal Gmail, Yahoo, or Hotmail addresses</li>
          <li>Fake phone numbers or numbers that go to voicemail only</li>
          <li>PO Boxes when physical address is required (for some businesses)</li>
          <li>Inconsistent information across different platforms</li>
          <li>Contact forms only - no direct email or phone provided</li>
          <li>Generic "info@" emails that nobody monitors</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>The Customer Data Terms are a mandatory legal agreement that governs how customer data is handled in Google Ads.</strong> Without accepting these terms, your account cannot run any campaigns.</p>
        <br/>
        <p>What the Customer Data Terms cover:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Data processing:</strong> How Google handles customer data from your campaigns</li>
          <li><strong>Privacy compliance:</strong> Ensures alignment with GDPR and other privacy laws</li>
          <li><strong>Data security:</strong> Google's commitments to protecting customer information</li>
          <li><strong>Your responsibilities:</strong> What you must do when collecting customer data</li>
        </ul>
        <br/>
        <p><strong>How to accept the terms:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Log into your Google Ads account</li>
          <li>Go to Settings → Account Settings</li>
          <li>Look for "Customer Data Terms" section</li>
          <li>Click "Review and Accept"</li>
          <li>Read the terms and click "Accept"</li>
        </ul>
        <br/>
        <p><strong>Real-world scenario:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A new advertiser sets up their Google Ads account and creates campaigns but forgets to accept the Customer Data Terms. 
          All campaigns show "Paused" status with the message "Customer Data Terms not accepted." 
          After accepting the terms, campaigns go live within 30 minutes.
        </p>
        <br/>
        <p><strong>Why Google requires this:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Legal compliance:</strong> Required by European and other privacy regulations</li>
          <li><strong>Data protection:</strong> Establishes clear data handling responsibilities</li>
          <li><strong>Account security:</strong> Ensures account owners understand data implications</li>
          <li><strong>Business continuity:</strong> Prevents legal issues that could affect advertising</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>View-through conversions capture the full impact of your advertising by tracking customers who see your ads but don't click immediately.</strong> This provides a complete picture of how your ads influence purchasing decisions.</p>
        <br/>
        <p>How view-through conversions work:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Ad impression:</strong> Customer sees your ad but doesn't click</li>
          <li><strong>Later visit:</strong> Customer visits your site through another channel (organic search, direct)</li>
          <li><strong>Conversion:</strong> Customer makes a purchase or completes desired action</li>
          <li><strong>Attribution:</strong> Google credits the original ad impression for influencing the conversion</li>
        </ul>
        <br/>
        <p><strong>Real-world example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A furniture store runs display ads for a dining table. Sarah sees the ad on a cooking blog but doesn't click. 
          Three days later, she searches "oak dining table" on Google, clicks a different ad from the same store, and purchases. 
          With view-through tracking, both the original display ad and the search ad get credit for the conversion, 
          showing the full customer journey.
        </p>
        <br/>
        <p><strong>Types of view-through conversions:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Cross-network:</strong> Saw Display ad, converted via Search</li>
          <li><strong>Cross-device:</strong> Saw ad on mobile, purchased on desktop</li>
          <li><strong>Cross-campaign:</strong> Saw Brand ad, converted via Shopping ad</li>
          <li><strong>Delayed conversion:</strong> Saw ad today, purchased next week</li>
        </ul>
        <br/>
        <p><strong>How to enable view-through conversion tracking:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Go to Google Ads → Conversions</li>
          <li>Select your conversion action</li>
          <li>Click "Edit settings"</li>
          <li>Set "View-through conversion window" (typically 30 days)</li>
          <li>Choose attribution model (Data-driven recommended)</li>
          <li>Save settings</li>
        </ul>
        <br/>
        <p><strong>Benefits for campaign optimization:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Complete attribution:</strong> See full impact of branding and awareness campaigns</li>
          <li><strong>Better budget allocation:</strong> Don't undervalue display and video campaigns</li>
          <li><strong>Smart Bidding improvement:</strong> More conversion data helps automated bidding</li>
          <li><strong>Customer journey insights:</strong> Understand how different channels work together</li>
        </ul>
        <br/>
        <p><strong>Best practices:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Set reasonable attribution windows (1-30 days depending on purchase cycle)</li>
          <li>Use different windows for different conversion types</li>
          <li>Monitor view-through vs. click-through conversion ratios</li>
          <li>Don't double-count conversions when reporting to stakeholders</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Conversion goals are the foundation of successful Google Ads campaigns.</strong> Without clear goals, campaigns optimize for clicks instead of business results, wasting budget on traffic that doesn't convert.</p>
        <br/>
        <p>Why conversion goals are essential:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Campaign optimization:</strong> Google's AI knows what actions to optimize for</li>
          <li><strong>Budget efficiency:</strong> Spend money on traffic that actually converts</li>
          <li><strong>Performance measurement:</strong> Clear ROI and success metrics</li>
          <li><strong>Smart Bidding:</strong> Automated strategies need goals to optimize towards</li>
        </ul>
        <br/>
        <p><strong>Real-world transformation example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A software company initially optimizes campaigns for website visits. They get lots of cheap traffic but 
          low sales. After setting up "Free Trial Signup" as the primary conversion goal, Google's algorithm 
          starts targeting users more likely to sign up. Cost per click increases from $1.50 to $2.80, 
          but cost per trial signup drops from $45 to $18, and trial-to-paid conversion improves.
        </p>
        <br/>
        <p><strong>Types of conversion goals by business model:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>E-commerce:</strong> Purchase (primary), Add to Cart, Begin Checkout (secondary)</li>
          <li><strong>Lead generation:</strong> Contact Form Submit, Phone Call, Quote Request</li>
          <li><strong>SaaS:</strong> Free Trial Signup, Demo Request, Account Creation</li>
          <li><strong>Service business:</strong> Consultation Booking, Phone Call, Contact Form</li>
          <li><strong>Content/Media:</strong> Newsletter Signup, Premium Subscription, Article Engagement</li>
        </ul>
        <br/>
        <p><strong>How to set up conversion goals:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>In Google Ads:</strong> Tools & Settings → Conversions → + New Conversion</li>
          <li><strong>Choose source:</strong> Website, App, Phone calls, or Import from GA4</li>
          <li><strong>Set values:</strong> Assign dollar values to different conversion types</li>
          <li><strong>Attribution windows:</strong> How long after ad interaction to count conversions</li>
          <li><strong>Primary vs Secondary:</strong> Set most important goal as "Primary" for Smart Bidding</li>
        </ul>
        <br/>
        <p><strong>Conversion value best practices:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>E-commerce:</strong> Use actual purchase value for accurate ROAS</li>
          <li><strong>Lead generation:</strong> Assign value based on lead quality (qualified lead = $50)</li>
          <li><strong>Subscription business:</strong> Use lifetime value or first month revenue</li>
          <li><strong>Different tiers:</strong> High-value leads worth more than newsletter signups</li>
        </ul>
        <br/>
        <p><strong>Campaign optimization with goals:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Enable Target CPA or Target ROAS bidding strategies</li>
          <li>Create separate campaigns for different conversion goals</li>
          <li>Use conversion goal data to identify best-performing keywords</li>
          <li>Adjust bids based on conversion likelihood, not just traffic volume</li>
          <li>Create custom audiences of past converters for remarketing</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Google Tag Manager is the control center for all your website tracking.</strong> It simplifies the process of adding and managing tracking codes without constantly editing your website's code.</p>
        <br/>
        <p>Why GTM is essential for scaling businesses:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>No developer needed:</strong> Add new tracking without coding knowledge</li>
          <li><strong>Centralized management:</strong> All tracking codes in one dashboard</li>
          <li><strong>Version control:</strong> Easily revert changes if something breaks</li>
          <li><strong>Advanced tracking:</strong> Set up complex event tracking with triggers</li>
        </ul>
        <br/>
        <p><strong>Real-world efficiency example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          An e-commerce store wants to add Facebook Pixel, TikTok Pixel, and Pinterest tracking. Without GTM, 
          they need developer work ($500) and 2-week turnaround for each platform. With GTM, the marketing manager 
          adds all three in 30 minutes using the interface, saving $1,500 and 6 weeks of delays.
        </p>
        <br/>
        <p><strong>What you can manage through GTM:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Google Analytics 4:</strong> Enhanced ecommerce tracking, custom events</li>
          <li><strong>Google Ads:</strong> Conversion tracking, remarketing tags</li>
          <li><strong>Facebook/Meta:</strong> Facebook Pixel, Conversions API</li>
          <li><strong>Other platforms:</strong> TikTok, Pinterest, Snapchat, Twitter pixels</li>
          <li><strong>Custom tracking:</strong> Button clicks, form submissions, video views</li>
          <li><strong>A/B testing tools:</strong> Google Optimize, Optimizely</li>
        </ul>
        <br/>
        <p><strong>GTM setup process:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Create account:</strong> Sign up at tagmanager.google.com</li>
          <li><strong>Install container:</strong> Add GTM code to your website header</li>
          <li><strong>Add tags:</strong> Install GA4, Google Ads, and other tracking</li>
          <li><strong>Set triggers:</strong> Define when tags should fire</li>
          <li><strong>Test and publish:</strong> Use preview mode before going live</li>
        </ul>
        <br/>
        <p><strong>Advanced GTM capabilities:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Event tracking:</strong> Track specific user actions (downloads, video plays)</li>
          <li><strong>Custom variables:</strong> Pass dynamic data to tracking tools</li>
          <li><strong>Enhanced ecommerce:</strong> Track product views, cart actions, purchases</li>
          <li><strong>Cross-domain tracking:</strong> Track users across multiple websites</li>
          <li><strong>Consent management:</strong> Respect user privacy preferences</li>
        </ul>
        <br/>
        <p><strong>Common GTM mistakes to avoid:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Not testing tags in preview mode before publishing</li>
          <li>Installing duplicate tracking (GTM + direct code installation)</li>
          <li>Not setting up proper triggers (tags firing on wrong pages)</li>
          <li>Forgetting to publish changes after making edits</li>
          <li>Not organizing tags with clear naming conventions</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Remarketing is one of the highest-ROI advertising strategies available.</strong> It targets people who already showed interest in your business, making them 70% more likely to convert than cold traffic.</p>
        <br/>
        <p>Why remarketing is so effective:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Warm audience:</strong> People already familiar with your brand</li>
          <li><strong>Purchase intent:</strong> They visited your site, showing initial interest</li>
          <li><strong>Brand recall:</strong> Keeps your business top-of-mind</li>
          <li><strong>Lower costs:</strong> Typically 2-10x cheaper than acquiring new customers</li>
        </ul>
        <br/>
        <p><strong>Remarketing performance example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A jewelry store tracks 10,000 monthly website visitors. Only 200 (2%) purchase on first visit. 
          They launch remarketing campaigns targeting the 9,800 non-buyers with special offers. 
          Remarketing converts 295 additional customers (3% of remarketing audience) at 60% lower cost per acquisition, 
          effectively doubling their Google Ads ROI.
        </p>
        <br/>
        <p><strong>Types of remarketing audiences you can create:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>All website visitors:</strong> Anyone who visited your site</li>
          <li><strong>Product viewers:</strong> People who viewed specific products</li>
          <li><strong>Cart abandoners:</strong> Added items to cart but didn't purchase</li>
          <li><strong>Category browsers:</strong> Visitors to specific product categories</li>
          <li><strong>Past customers:</strong> Previous buyers for upselling/repeat purchases</li>
          <li><strong>High-value pages:</strong> Visitors to pricing or key service pages</li>
        </ul>
        <br/>
        <p><strong>How to set up Google Ads remarketing:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Install tag:</strong> Add Google Ads remarketing tag to all pages</li>
          <li><strong>Create audiences:</strong> Tools & Settings → Audience Manager</li>
          <li><strong>Set parameters:</strong> Define who qualifies (visited in last 30 days)</li>
          <li><strong>Create campaigns:</strong> Build Display or Search campaigns targeting audiences</li>
          <li><strong>Customize messaging:</strong> Tailor ads based on what they viewed</li>
        </ul>
        <br/>
        <p><strong>Advanced remarketing strategies:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Dynamic remarketing:</strong> Show exact products they viewed</li>
          <li><strong>Sequential messaging:</strong> Different messages based on engagement level</li>
          <li><strong>Cross-platform:</strong> Remarket on YouTube, Gmail, and partner sites</li>
          <li><strong>Frequency capping:</strong> Limit how often ads are shown to avoid annoyance</li>
          <li><strong>Exclusion lists:</strong> Don't show ads to recent customers</li>
        </ul>
        <br/>
        <p><strong>Remarketing campaign types:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Display remarketing:</strong> Banner ads across Google Display Network</li>
          <li><strong>Search remarketing:</strong> Higher bids when past visitors search again</li>
          <li><strong>Video remarketing:</strong> YouTube ads to previous website visitors</li>
          <li><strong>Gmail remarketing:</strong> Ads in Gmail inbox to website visitors</li>
          <li><strong>Shopping remarketing:</strong> Product ads to people who viewed similar items</li>
        </ul>
        <br/>
        <p><strong>Best practices for remarketing success:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Wait 30-90 days to build sufficient audience size</li>
          <li>Offer incentives to overcome initial purchase hesitation</li>
          <li>Use compelling visuals and clear calls-to-action</li>
          <li>Test different ad formats and messaging</li>
          <li>Monitor frequency to avoid ad fatigue</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Google Merchant Center is your gateway to high-intent Shopping traffic.</strong> It's where you upload your product catalog so Google can show your items directly in search results with images, prices, and store information.</p>
        <br/>
        <p>Why Merchant Center is crucial for e-commerce:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Shopping ads:</strong> Visual product ads that stand out in search results</li>
          <li><strong>Performance Max:</strong> Google's most advanced campaign type requires product feed</li>
          <li><strong>Free listings:</strong> Products can appear in Google Shopping tab for free</li>
          <li><strong>High intent traffic:</strong> People searching for specific products are ready to buy</li>
        </ul>
        <br/>
        <p><strong>Shopping ads performance example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A camping gear store sets up Google Merchant Center and launches Shopping campaigns. Compared to their 
          text-only Search campaigns, Shopping ads achieve 35% higher click-through rates and 20% better conversion rates. 
          The visual nature of the ads (showing product images and prices) attracts more qualified traffic, 
          reducing cost per acquisition from $28 to $19.
        </p>
        <br/>
        <p><strong>Required product data for Merchant Center:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Product title:</strong> Clear, descriptive names with key attributes</li>
          <li><strong>Images:</strong> High-quality product photos (minimum 100x100 pixels)</li>
          <li><strong>Prices:</strong> Current, accurate pricing including currency</li>
          <li><strong>Availability:</strong> In stock, out of stock, or preorder status</li>
          <li><strong>Product categories:</strong> Google's standardized category taxonomy</li>
          <li><strong>Brand:</strong> Manufacturer or brand name</li>
          <li><strong>GTIN/UPC:</strong> Product identifiers (required for many categories)</li>
        </ul>
        <br/>
        <p><strong>Feed setup process:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Create account:</strong> Sign up at merchants.google.com</li>
          <li><strong>Verify website:</strong> Prove you own the domain</li>
          <li><strong>Add products:</strong> Upload via spreadsheet, API, or platform integration</li>
          <li><strong>Link to Google Ads:</strong> Connect accounts for advertising</li>
          <li><strong>Set up shipping:</strong> Configure shipping costs and delivery areas</li>
          <li><strong>Review policies:</strong> Ensure products comply with Google's requirements</li>
        </ul>
        <br/>
        <p><strong>Feed optimization best practices:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Detailed titles:</strong> Include brand, color, size, material (e.g., "Nike Men's Air Max Running Shoes - Red Size 10")</li>
          <li><strong>High-quality images:</strong> Professional photos, multiple angles, lifestyle shots</li>
          <li><strong>Competitive pricing:</strong> Monitor competitors and adjust prices accordingly</li>
          <li><strong>Rich descriptions:</strong> Include key features, benefits, and specifications</li>
          <li><strong>Custom labels:</strong> Add profit margin, seasonality, or performance categories</li>
          <li><strong>Regular updates:</strong> Keep inventory, pricing, and availability current</li>
        </ul>
        <br/>
        <p><strong>Advanced Merchant Center features:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Local inventory ads:</strong> Show in-store availability</li>
          <li><strong>Product reviews:</strong> Display customer ratings in ads</li>
          <li><strong>Promotions:</strong> Highlight special offers and discounts</li>
          <li><strong>Dynamic remarketing:</strong> Show specific products people viewed</li>
          <li><strong>YouTube Shopping:</strong> Product integration with video ads</li>
        </ul>
        <br/>
        <p><strong>Common feed issues to avoid:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Missing required product identifiers (GTIN/UPC)</li>
          <li>Poor quality or inappropriate product images</li>
          <li>Inaccurate pricing or availability information</li>
          <li>Vague or keyword-stuffed product titles</li>
          <li>Incorrect or missing shipping information</li>
          <li>Policy violations (prohibited products, misleading claims)</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Unrealistic promises are one of the fastest ways to get your Google Ads account suspended.</strong> Google's AI is specifically trained to detect and flag exaggerated claims that mislead consumers.</p>
        <br/>
        <p>Why Google prohibits unrealistic promises:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Consumer protection:</strong> Prevents false advertising and scams</li>
          <li><strong>Advertiser credibility:</strong> Maintains trust in the Google Ads platform</li>
          <li><strong>Legal compliance:</strong> Aligns with FTC and international advertising standards</li>
          <li><strong>User experience:</strong> Ensures ads provide genuine value to searchers</li>
        </ul>
        <br/>
        <p><strong>Account suspension example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A weight loss supplement company uses ads promising "Lose 30 pounds in 30 days - GUARANTEED!" 
          Google's automated system flags this as an unrealistic health claim. The account is suspended within 48 hours 
          for "misleading content." The appeal process takes 6 weeks, during which the company loses $85,000 in potential revenue. 
          After rewriting ads to focus on "supporting healthy weight management," the account is reinstated.
        </p>
        <br/>
        <p><strong>Categories of problematic promises:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Health claims:</strong> "Cure cancer," "lose 20 pounds in 1 week," "grow hair overnight"</li>
          <li><strong>Financial guarantees:</strong> "Make $10,000 in 30 days guaranteed," "get rich quick scheme"</li>
          <li><strong>Absolute performance:</strong> "100% effective," "works for everyone," "never fails"</li>
          <li><strong>Instant results:</strong> "Immediate results," "overnight success," "instant transformation"</li>
          <li><strong>Miracle claims:</strong> "Secret formula," "breakthrough discovery," "doctors hate this trick"</li>
        </ul>
        <br/>
        <p><strong>Better alternatives for common exaggerated claims:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Instead of:</strong> "Guaranteed weight loss" → <strong>Use:</strong> "Supports healthy weight management"</li>
          <li><strong>Instead of:</strong> "100% success rate" → <strong>Use:</strong> "Proven effective in clinical studies"</li>
          <li><strong>Instead of:</strong> "Instant millionaire" → <strong>Use:</strong> "Learn proven wealth-building strategies"</li>
          <li><strong>Instead of:</strong> "Miracle anti-aging" → <strong>Use:</strong> "Advanced skincare technology"</li>
          <li><strong>Instead of:</strong> "Never breaks down" → <strong>Use:</strong> "Built for durability and long-term use"</li>
        </ul>
        <br/>
        <p><strong>How to write compliant, persuasive ad copy:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Focus on benefits:</strong> "Helps improve energy levels" vs. "Gives unlimited energy"</li>
          <li><strong>Use qualifying language:</strong> "May help," "designed to support," "can assist with"</li>
          <li><strong>Include disclaimers:</strong> "Results may vary," "when used as directed"</li>
          <li><strong>Cite credible sources:</strong> "Clinically tested," "recommended by experts"</li>
          <li><strong>Be specific but realistic:</strong> "Up to 15% improvement" vs. "miraculous transformation"</li>
        </ul>
        <br/>
        <p><strong>Industry-specific guidelines:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Health/Fitness:</strong> Avoid absolute health claims, focus on lifestyle support</li>
          <li><strong>Financial services:</strong> No guaranteed returns, emphasize education and tools</li>
          <li><strong>Beauty products:</strong> Avoid age reversal claims, focus on appearance enhancement</li>
          <li><strong>Technology:</strong> No claims of perfect security or 100% uptime</li>
          <li><strong>Education:</strong> No guaranteed job placement or salary increases</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Before/after images are considered misleading advertising by Google, especially in health, beauty, and fitness categories.</strong> These images often exaggerate results and create unrealistic expectations for customers.</p>
        <br/>
        <p>Why Google prohibits before/after images:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Misleading results:</strong> Images often don't represent typical outcomes</li>
          <li><strong>Manipulated photos:</strong> Easy to alter images to exaggerate differences</li>
          <li><strong>Unrealistic expectations:</strong> Customers expect similar dramatic results</li>
          <li><strong>Health implications:</strong> Can promote unhealthy or dangerous practices</li>
        </ul>
        <br/>
        <p><strong>Policy violation consequences:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A skincare company uses dramatic before/after acne treatment photos in their Google Ads. 
          The images are flagged as "misleading health claims" and the entire account is suspended. 
          All 15 active campaigns are paused immediately, stopping $5,000 daily ad spend during their busy season. 
          The suspension lasts 3 weeks while they remove all before/after content and appeal the decision.
        </p>
        <br/>
        <p><strong>Categories where before/after images are strictly prohibited:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Weight loss/fitness:</strong> Body transformation images</li>
          <li><strong>Skincare/beauty:</strong> Skin condition improvements</li>
          <li><strong>Hair restoration:</strong> Hair growth comparisons</li>
          <li><strong>Cosmetic procedures:</strong> Surgical or treatment results</li>
          <li><strong>Medical treatments:</strong> Health condition improvements</li>
          <li><strong>Dental work:</strong> Teeth whitening or straightening results</li>
        </ul>
        <br/>
        <p><strong>Better visual alternatives that comply with policies:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Product showcase:</strong> High-quality images of the actual product</li>
          <li><strong>Lifestyle imagery:</strong> People using the product in natural settings</li>
          <li><strong>Ingredient highlights:</strong> Close-ups of key components or materials</li>
          <li><strong>Process demonstrations:</strong> How the product works or is applied</li>
          <li><strong>Brand storytelling:</strong> Behind-the-scenes or company culture images</li>
          <li><strong>Customer testimonials:</strong> Real customer photos (without dramatic comparisons)</li>
        </ul>
        <br/>
        <p><strong>Creative strategies that work better than before/after:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Focus on benefits:</strong> "Supports healthy skin" instead of showing dramatic changes</li>
          <li><strong>Demonstrate usage:</strong> Show how to properly use the product</li>
          <li><strong>Highlight ingredients:</strong> Showcase quality components and formulation</li>
          <li><strong>Social proof:</strong> Customer reviews and ratings (without comparison photos)</li>
          <li><strong>Expert endorsements:</strong> Professional recommendations and certifications</li>
          <li><strong>Educational content:</strong> Tips, guides, and helpful information</li>
        </ul>
        <br/>
        <p><strong>How to create compelling ads without before/after images:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Emotional connection:</strong> Focus on how customers will feel using your product</li>
          <li><strong>Problem/solution:</strong> Address pain points without showing dramatic transformations</li>
          <li><strong>Quality emphasis:</strong> Highlight craftsmanship, materials, or technology</li>
          <li><strong>Value proposition:</strong> Clear benefits and reasons to choose your brand</li>
          <li><strong>Call-to-action:</strong> Strong, clear next steps for interested customers</li>
        </ul>
        <br/>
        <p><strong>Testing ad visuals for compliance:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Review Google's advertising policies before creating visuals</li>
          <li>Ask: "Could this image be seen as making unrealistic promises?"</li>
          <li>Test ads in small batches to identify policy issues early</li>
          <li>Have multiple visual variations ready in case some are rejected</li>
          <li>Monitor account notifications for policy warnings</li>
        </ul>
      </div>`,
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
      explanation: `<div>
        <p><strong>Google Signals provides cross-device insights that reveal the complete customer journey.</strong> In today's multi-device world, customers often research on mobile and purchase on desktop, making cross-device tracking essential for accurate attribution.</p>
        <br/>
        <p>How modern customers behave across devices:</p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Research phase:</strong> Browse products on mobile during commute or breaks</li>
          <li><strong>Comparison phase:</strong> Compare options on tablet while relaxing at home</li>
          <li><strong>Purchase phase:</strong> Complete purchase on desktop for easier checkout</li>
          <li><strong>Follow-up:</strong> Check order status on mobile app</li>
        </ul>
        <br/>
        <p><strong>Cross-device journey example:</strong></p>
        <p class="bg-gray-100 p-3 rounded mt-2">
          A customer sees a Google Ad for running shoes on their phone during lunch break. They click and browse but don't buy. 
          That evening, they search for the brand on their laptop and make a $120 purchase. Without Google Signals, 
          the mobile ad gets no credit. With Signals enabled, you see the complete journey and can optimize mobile campaigns 
          knowing they influence desktop conversions.
        </p>
        <br/>
        <p><strong>What Google Signals tracks:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Cross-device conversions:</strong> Actions that span multiple devices</li>
          <li><strong>Device paths:</strong> Common sequences of device usage</li>
          <li><strong>Demographics:</strong> Age and gender insights for signed-in users</li>
          <li><strong>Interests:</strong> Google-determined user interest categories</li>
          <li><strong>Geographic data:</strong> Enhanced location reporting</li>
        </ul>
        <br/>
        <p><strong>How to enable Google Signals:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Open Google Analytics 4</li>
          <li>Go to Admin → Data Settings → Data Collection</li>
          <li>Click "Google Signals"</li>
          <li>Turn on "Google Signals data collection"</li>
          <li>Accept the terms and conditions</li>
          <li>Wait 24-48 hours for data to appear</li>
        </ul>
        <br/>
        <p><strong>Privacy and data thresholding:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>User consent:</strong> Only tracks users who opted into ads personalization</li>
          <li><strong>Data thresholding:</strong> Google may hide small data samples to protect privacy</li>
          <li><strong>Aggregated insights:</strong> Individual user data is never exposed</li>
          <li><strong>Retention limits:</strong> Data automatically expires after set periods</li>
        </ul>
        <br/>
        <p><strong>Actionable insights from Google Signals:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li><strong>Device bidding:</strong> Adjust bids based on cross-device conversion likelihood</li>
          <li><strong>Creative optimization:</strong> Tailor mobile ads for research, desktop for conversion</li>
          <li><strong>Remarketing lists:</strong> Create audiences based on cross-device behavior</li>
          <li><strong>Attribution modeling:</strong> Better understand the value of each touchpoint</li>
          <li><strong>Demographic targeting:</strong> Refine audience targeting with age/gender data</li>
        </ul>
        <br/>
        <p><strong>Limitations to be aware of:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Only works for users signed into Google accounts</li>
          <li>Data may be limited for smaller websites due to privacy thresholds</li>
          <li>Requires sufficient data volume for reliable insights</li>
          <li>Historical data is not available - only tracks from enablement forward</li>
        </ul>
        <br/>
        <p><strong>Best practices for using Signals data:</strong></p>
        <ul class="list-disc ml-6 mt-2 space-y-1">
          <li>Allow 2-4 weeks to accumulate meaningful data</li>
          <li>Look for patterns in device switching behavior</li>
          <li>Adjust attribution models based on cross-device insights</li>
          <li>Create device-specific campaigns with appropriate messaging</li>
          <li>Use demographic data to refine targeting and creative</li>
        </ul>
      </div>`,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Google Ads Compliance Checklist
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Ensure your advertising campaigns meet all Google policies and requirements
          </p>
          
          <div className="flex justify-center space-x-4 mb-6">
            <a 
              href="/touchpoints" 
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              🎯 Customer Touchpoint Strategy
            </a>
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
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2 text-lg">
                                      <HelpCircle className="h-5 w-5 text-blue-600" />
                                      {item.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="p-4 bg-blue-50 rounded-lg">
                                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                                        <Info className="h-4 w-4" />
                                        Why this matters:
                                      </h4>
                                      <div 
                                        className="text-blue-800 prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ 
                                          __html: item.explanation || 'This requirement helps ensure your Google Ads campaigns run smoothly and comply with policies.' 
                                        }}
                                      />
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
