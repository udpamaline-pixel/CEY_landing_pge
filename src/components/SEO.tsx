import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaType?: 'website' | 'article' | 'service' | 'organization';
}

const SEO = ({
  title = "CEY Global Connect - International Money Transfer & USDC Services",
  description = "Send money internationally to 200+ countries with CEY Global Connect. USDC deposits, multi-network withdrawals, competitive rates, and instant transfers. Trusted by 10M+ customers worldwide.",
  keywords = "international money transfer, USDC, cryptocurrency, Circle Wallets, blockchain, remittance, foreign exchange, cross-border payments, digital wallet, Ethereum, Solana, Polygon, Avalanche",
  image = "https://ceyglobalconnect.com/og-image.jpg",
  url = "https://ceyglobalconnect.com",
  type = "website",
  schemaType = "website"
}: SEOProps) => {
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "CEY Global Connect",
    "alternateName": "CEY Money Transfer",
    "description": "International money transfer service with USDC cryptocurrency integration, serving 200+ countries worldwide.",
    "url": "https://ceyglobalconnect.com",
    "logo": "https://ceyglobalconnect.com/logo.png",
    "image": "https://ceyglobalconnect.com/og-image.jpg",
    "telephone": "+1-800-CEY-HELP",
    "email": "support@ceyglobalconnect.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Financial District",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10004",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "40.7074",
      "longitude": "-74.0113"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "500-1000",
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "0",
        "longitude": "0"
      },
      "geoRadius": "20000000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Money Transfer Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "International Money Transfer",
            "description": "Send money to 200+ countries with competitive exchange rates"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "USDC Cryptocurrency Services",
            "description": "Deposit and withdraw USDC across multiple blockchain networks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Agent Services",
            "description": "Business accounts for money transfer agents and super agents"
          }
        }
      ]
    },
    "sameAs": [
      "https://facebook.com/ceyglobalconnect",
      "https://twitter.com/ceyglobalconnect",
      "https://linkedin.com/company/ceyglobalconnect",
      "https://instagram.com/ceyglobalconnect"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "CEY Money Transfer has been a lifesaver for sending money to my family in India. The rates are competitive and transfers are incredibly fast."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "As a freelancer working with international clients, I needed a reliable way to receive payments. CEY's platform is user-friendly and their customer support is exceptional."
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "International Money Transfer with USDC Integration",
    "provider": {
      "@type": "FinancialService",
      "name": "CEY Global Connect"
    },
    "description": "Comprehensive international money transfer service featuring traditional remittance and modern USDC cryptocurrency options across multiple blockchain networks.",
    "serviceType": "Financial Service",
    "areaServed": {
      "@type": "Place",
      "name": "200+ Countries Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Transfer Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Traditional Money Transfer",
          "description": "Bank-to-bank transfers with competitive exchange rates",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "2.99",
            "description": "Starting from $2.99 per transfer"
          }
        },
        {
          "@type": "Offer",
          "name": "USDC Deposits",
          "description": "Instant USDC deposits via Circle Wallets API",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "price": "0",
            "description": "Free USDC deposits"
          }
        },
        {
          "@type": "Offer",
          "name": "Multi-Network USDC Withdrawals",
          "description": "Withdraw USDC to Ethereum, Solana, Polygon, or Avalanche networks",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "USD",
            "description": "Low network fees apply"
          }
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Individual consumers, businesses, money transfer agents"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CEY Global Connect",
    "url": "https://ceyglobalconnect.com",
    "description": "International money transfer and USDC cryptocurrency services platform",
    "publisher": {
      "@type": "Organization",
      "name": "CEY Global Connect"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ceyglobalconnect.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "FinancialService",
      "name": "CEY Global Connect"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ceyglobalconnect.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://ceyglobalconnect.com#features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "How It Works",
        "item": "https://ceyglobalconnect.com#how-it-works"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is CEY Global Connect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CEY Global Connect is an international money transfer service that allows you to send money to over 200+ countries worldwide. We offer both traditional transfers and modern USDC cryptocurrency options through our secure platform."
        }
      },
      {
        "@type": "Question",
        "name": "How do USDC deposits work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each user, agent, and super agent receives a unique USDC address powered by Circle Wallets API. Simply send USDC to your unique address and it will automatically be reflected as USD balance in your CEY wallet instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I withdraw USDC to external wallets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can send USDC from your CEY wallet to any external wallet including Binance, Coinbase, Metamask, and more. We support multiple networks: Ethereum, Solana, Polygon, and Avalanche."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are CEY transfers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "USDC deposits are reflected instantly in your CEY wallet. Traditional international transfers are completed within minutes to hours. We handle an average of 25 transfers per second with our advanced infrastructure."
        }
      }
    ]
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "CEY Money Transfer",
    "operatingSystem": "iOS, Android",
    "applicationCategory": "FinanceApplication",
    "description": "Mobile app for international money transfers and USDC cryptocurrency services",
    "downloadUrl": [
      "https://apps.apple.com/app/cey-money-transfer",
      "https://play.google.com/store/apps/details?id=com.cey.moneytransfer"
    ],
    "screenshot": "https://ceyglobalconnect.com/app-screenshot.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "8500"
    }
  };

  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Add structured data schemas to head
    const schemas = [organizationSchema, serviceSchema, websiteSchema, breadcrumbSchema, faqSchema, appSchema];
    
    schemas.forEach((schema, index) => {
      const scriptId = `schema-${index}`;
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        (script as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(schema);
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`schema-${index}`);
        if (script) {
          document.head.removeChild(script);
        }
      });
    };
  }, [title, description, organizationSchema, serviceSchema, websiteSchema, breadcrumbSchema, faqSchema, appSchema]);

  return null;
};

export default SEO;
