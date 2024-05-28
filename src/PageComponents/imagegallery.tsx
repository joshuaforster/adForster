import React, { useState } from 'react';
import Slider from '../CustomComponents/sliderImages';
import SingleImage from '../CustomComponents/singleImage';

interface ImageItem {
    type: 'image';
    imageUrl: string;
}

interface SliderItem {
    type: 'slider';
    firstImage: string;
    secondImage: string;
}

type GalleryItem = ImageItem | SliderItem;

interface ImageGalleryProps {
    items: GalleryItem[];
}

export default function ImageGallery({ items }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const handlePrevious = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex - 1 + items.length) % items.length);
        }
    };

    const handleNext = () => {
        if (currentIndex !== null) {
            setCurrentIndex((currentIndex + 1) % items.length);
        }
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="px-4 py-8 mx-auto max-w-screen-xl lg:px-6 lg:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div key={index} className="relative w-full h-60 overflow-hidden">
                            {item.type === 'image' ? (
                                <div className="w-full h-full">
                                    <SingleImage
                                        imageUrl={item.imageUrl}
                                        onPrevious={handlePrevious}
                                        onNext={handleNext}
                                        isFullscreen={currentIndex === index}
                                        setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-full">
                                    <Slider
                                        firstImage={{ imageUrl: item.firstImage }}
                                        secondImage={{ imageUrl: item.secondImage }}
                                        onPrevious={handlePrevious}
                                        onNext={handleNext}
                                        isFullscreen={currentIndex === index}
                                        setIsFullscreen={(value) => setCurrentIndex(value ? index : null)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}