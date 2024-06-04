import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

const client = createClient({
  space: '7y2nhmah12fi',
  accessToken: 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ',
});

interface FAQItem {
  question: string;
  answer: Document;
}

interface FAQPageData {
  title: string;
  questionsAndAnswers: FAQItem[];
}

export default function FAQ() {
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [title, setTitle] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'faqPage',
          limit: 1,
          include: 10, // Ensure to include linked entries
        });

        if (response.items.length > 0) {
          console.log('Response items:', response.items[0].fields);
          const item = response.items[0].fields as unknown as FAQPageData;
          setTitle(item.title);
          setFaqData(item.questionsAndAnswers.map((qa: any) => ({
            question: qa.fields.title,
            answer: qa.fields.answer,
          })));
        } else {
          setError('FAQ data not found.');
        }
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
        setError('Error fetching FAQ data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className="mb-4 text-gray-900 dark:text-gray-200 leading-relaxed">{children}</p>;
      },
    },
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3
                className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                {activeIndex === index ? (
                  <FaMinus className="mr-2 w-5 h-5 text-gray-500 dark:text-white" />
                ) : (
                  <FaPlus className="mr-2 w-5 h-5 text-gray-500 dark:text-white" />
                )}
                {faq.question}
              </h3>
              {activeIndex === index && (
                <div className="text-gray-500 dark:text-white">
                  {documentToReactComponents(faq.answer, renderOptions)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}