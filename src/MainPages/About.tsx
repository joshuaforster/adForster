import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { createClient } from 'contentful';
import AboutContact from '../PageComponents/aboutContact';

const client = createClient({
  space: '7y2nhmah12fi',
  accessToken: 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ',
});

type AboutData = {
  heading: string;
  information: Document;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
};

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'aboutPage',
          limit: 1,
        });
        if (response.items.length > 0) {
          const data = response.items[0].fields;
          setAboutData(data as AboutData);
        } else {
          setError('About data not found.');
        }
      } catch (error) {
        setError('Error fetching about data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
        return <p className="mb-4 text-gray-900 dark:text-gray-200 leading-relaxed">{children}</p>;
      },
    },
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="lg:flex lg:space-x-16">
          <div className="lg:w-2/3">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-white">
              <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                {aboutData?.heading}
              </h2>
              <div className="mb-4">
                {documentToReactComponents(aboutData?.information as Document, renderOptions)}
              </div>
              <div className="flex mt-4">
                <img
                  className='w-full max-w-screen-md'
                  alt="About Us"
                  src={`https:${aboutData?.image.fields.file.url}`}
                />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-8">
              <AboutContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;