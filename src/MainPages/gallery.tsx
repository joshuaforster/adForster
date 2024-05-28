// src/pages/Gallery.tsx
import React from 'react';
import ImageGallery from '../PageComponents/imagegallery';

export default function Gallery() {
    const galleryItems: Array<{ type: 'image', imageUrl: string } | { type: 'slider', firstImage: string, secondImage: string }> = [
        { type: 'slider', firstImage: '/images/beforeafter/patio2.jpeg', secondImage: '/images/beforeafter/patio1.jpeg' },
        { type: 'slider', firstImage: '/images/beforeafter/window1.JPG', secondImage: '/images/beforeafter/window2.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/roof1.JPG', secondImage: '/images/beforeafter/roof2.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/sill1.JPG', secondImage: '/images/beforeafter/sill2.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/patio3.JPG', secondImage: '/images/beforeafter/patio4.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/patio5.JPG', secondImage: '/images/beforeafter/patio6.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/sill3.JPG', secondImage: '/images/beforeafter/sill4.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/window3.JPG', secondImage: '/images/beforeafter/window4.JPG' },
        { type: 'slider', firstImage: '/images/beforeafter/sill5.jpg', secondImage: '/images/beforeafter/sill6.jpg' },
        { type: 'slider', firstImage: '/images/beforeafter/drain1.jpg', secondImage: '/images/beforeafter/drain2.jpg' },
        { type: 'slider', firstImage: '/images/beforeafter/drain4.jpg', secondImage: '/images/beforeafter/drain3.jpg' },
        { type: 'slider', firstImage: '/images/beforeafter/drain6.jpg', secondImage: '/images/beforeafter/drain5.jpg' },
        { type: 'slider', firstImage: '/images/beforeafter/panel2.jpg', secondImage: '/images/beforeafter/panel1.jpg' },
        { type: 'image', imageUrl: '/images/yachtclub.jpg' },
        { type: 'image', imageUrl: '/images/van1.jpg' },
        { type: 'image', imageUrl: '/images/cleanhouse.jpeg' },
        { type: 'image', imageUrl: '/images/caravan.jpg' },
        { type: 'image', imageUrl: '/images/patio.jpeg' },
        { type: 'image', imageUrl: '/images/about.jpg' },
        { type: 'image', imageUrl: 'images/beforeafter/patio2.jpeg' },
        { type: 'image', imageUrl: 'images/gutterwash.jpg' },
        { type: 'image', imageUrl: 'images/gutter.jpg' },
        { type: 'image', imageUrl: 'images/house.jpg' },
        { type: 'image', imageUrl: 'images/conservatories.jpg' },
        { type: 'image', imageUrl: 'images/terrace.jpg' },

        // Add more items as needed
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="max-w-screen-lg text-gray-800 sm:text-lg dark:text-white">
                    <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                        Gallery
                    </h2>
                    <p className="mb-1">
                        Take a look at some of our best work. Our gallery showcases the high-quality window cleaning services we provide. From residential to commercial properties, our team ensures that every window sparkles. See the difference for yourself!
                    </p>
                </div>
            </div>
            <ImageGallery items={galleryItems} />
        </section>
    );
}