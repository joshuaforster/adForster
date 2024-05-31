import React from 'react';
import { useParams } from 'react-router-dom';
import { useServices } from '../CustomComponents/ServicesContext';  // Import the useServices hook from your context
import Button from '../CustomComponents/buttons';  // Make sure to import your custom button component

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const { getServiceById } = useServices();

  const service = getServiceById(id || '');

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <p className="mb-4" dangerouslySetInnerHTML={{ __html: service.details || '' }} />
          <h3 className="mt-8 mb-4 text-2xl tracking-tight font-bold text-gray-900 dark:text-white">
            Are you interested?
          </h3>
          <Button variant="primary" to="/contact">Get a Quote</Button>
        </div>
        <div className="grid gap-4 mt-8">
          <img
            className="w-full object-cover"
            style={{ maxHeight: '50vh' }}
            src={service.image}
            alt={service.title}
          />
        </div>
      </div>
    </section>
  );
}