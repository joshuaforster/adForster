import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import { createClient } from 'contentful';

const client = createClient({
  space: '7y2nhmah12fi',
  accessToken: 'VPNyQgxB1pWAka3k7hdMjZyWTPNuBmdWTmVnF1UydtQ',
});

type LocationData = {
  locationHeadline: string;
  locationDescription: Document;
};

const Location: React.FC = () => {
  const [locationData, setLocationData] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'location',
          limit: 1,
        });
        if (response.items.length > 0) {
          const data = response.items[0].fields;
          setLocationData(data as LocationData);
        } else {
          setError('Location data not found.');
        }
      } catch (error) {
        setError('Error fetching location data.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocationData();
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
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {locationData?.locationHeadline}
          </h2>
          <div className="dark:text-white">
            {documentToReactComponents(locationData?.locationDescription as Document, renderOptions)}
          </div>
        </div>
        <div className="grid gap-4 mt-8">
          <iframe
            title="Descriptive title"
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77473.6621257311!2d1.203922287514778!3d52.640974602367564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0aad55133f513%3A0x684ca5e00e12452f!2sNorwich!5e0!3m2!1sen!2suk!4v1716115566626!5m2!1sen!2suk"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;