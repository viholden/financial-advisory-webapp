// src/pages/Resources.js
import React from 'react';
import './Resources.css'; // Import the CSS file for styling

const resources = [
  { title: 'Investopedia', link: 'https://www.investopedia.com/', description: 'This comprehensive website offers articles, tutorials, and videos on a wide range of financial topics, from investing and trading to personal finance and economics.' },
  { title: 'NerdWallet', link: 'https://www.nerdwallet.com/', description: 'A personal finance website that provides tools, advice, and reviews to help you make smart financial decisions.' },
  { title: 'The Motley Fool', link: 'https://www.fool.com/', description: 'This investment website offers stock analysis, investing strategies, and personal finance advice.' },
  { title: 'Bankrate', link: 'https://www.bankrate.com/', description: 'A financial information website that provides unbiased information on a variety of financial products, including mortgages, credit cards, and savings accounts.' },
  { title: 'MoneySmart', link: 'https://www.fdic.gov/consumer-resource-center/money-smart', description: 'An initiative by the Federal Deposit Insurance Corporation (FDIC) that provides financial education resources for young people.' },
  { title: 'Federal Reserve System', link: 'https://www.federalreserve.gov/', description: 'The central banking system of the United States provides resources on economic education and financial literacy.' },
  { title: 'Consumer Financial Protection Bureau (CFPB)', link: 'https://www.consumerfinance.gov/', description: 'This government agency provides information and resources to help consumers make informed financial decisions.' },
  { title: 'NextGen Personal Finance', link: 'https://www.ngpf.org', description: 'A nonprofit organization that provides free curriculum and resources to teach high school students about personal finance.' },
  { title: 'Financial Planning Association (FPA)', link: 'https://www.financialplanningassociation.org', description: 'A professional organization for financial planners that provides resources and information on financial planning.' },
  { title: 'American Institute of Certified Public Accountants (AICPA)', link: 'https://www.aicpa.org/', description: 'This professional organization for accountants provides resources on financial literacy and personal finance.' },
  { title: 'National Foundation for Credit Counseling (NFCC)', link: 'https://www.nfcc.org/', description: 'A nonprofit organization that provides credit counseling and financial education services.' },
  { title: 'Money Management International (MMI)', link: 'https://www.moneymanagement.org/', description: 'A nonprofit organization that provides credit counseling and financial education services.' },
  { title: 'Kiplinger', link: 'https://www.kiplinger.com/', description: 'A personal finance magazine and website that provides news, analysis, and advice on investing, taxes, and retirement.' },
  { title: 'Money Magazine', link: 'https://money.com/', description: 'A personal finance magazine and website that provides news, analysis, and advice on investing, saving, and spending.' },
  { title: 'Clark Howard', link: 'https://clark.com', description: 'Clark Howard is a personal finance expert who provides down-to-earth advice on saving money, managing debt, and making smart financial decisions.' },
  { title: 'Mint', link: 'https://www.mint.com/', description: 'A free personal finance tool that helps you track your spending, budgeting, and investing.' }
];

const Resources = () => {
  return (
    <div className="resources-page">
      <h1>Resources</h1>
      <p className="description">
        Empower Your Financial Future! Whether you’re looking to build a budget, boost your savings, or understand investing, our hand-picked resources have got you covered. Dive into articles, guides, and tools created to help college students like you take control of their finances and make confident money decisions. Explore the topics that interest you and start building a stronger financial foundation today!
      </p>
      <div className="resources-container">
        {resources.map((resource, index) => (
          <div key={index} className="card">
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;