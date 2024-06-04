import React from 'react';
import { useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Document } from '@contentful/rich-text-types';
import { useServices } from '../CustomComponents/ServicesContext';
import Button from '../CustomComponents/buttons';
import '../App.css';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getServiceById } = useServices();

  const service = getServiceById(id || '');

  if (!service) {
    return <div>Service not found</div>;
  }

  const Bold: React.FC<{ children: React.ReactNode }> = ({ children }) => <span className="font-bold">{children}</span>;
  const Text: React.FC<{ children: React.ReactNode }> = ({ children }) => <p className="mb-4 text-gray-900 dark:text-gray-200 leading-relaxed">{children}</p>;
  const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => <li className="list-disc ml-4">{children}</li>;

  const Image: React.FC<{ node: any }> = ({ node }) => {
    const { title, file } = node.data.target.fields || {};
    const imageUrl = file ? `https:${file.url}` : '';
    return imageUrl ? <img src={imageUrl} alt={title || 'Image'} className="mx-auto rounded-lg" style={{ maxWidth: '100%' }} /> : null;
  };

  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => <ul className="list-disc ml-4 text-gray-900 dark:text-gray-200">{children}</ul>,
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => <ListItem>{children}</ListItem>,
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => <Image node={node} />,
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400">{children}</a>
      ),
    },
    renderText: (text: string) => {
      return text.split('\n').reduce((children: React.ReactNode[], textSegment: string, index: number) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {service.title}
          </h2>
          <div className="mb-4">
            {documentToReactComponents(service.details as Document, renderOptions)}
          </div>
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
};

export default ServiceDetail;