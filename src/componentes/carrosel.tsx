import React from 'react';
import { FaTrophy, FaShieldAlt, FaShippingFast, FaHeadset } from 'react-icons/fa';

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-[#f7f1ea] w-full flex justify-center items-center py-4">
      <div className="max-w-[1334px] w-full flex justify-around items-center">
        <FeatureItem
          icon={<FaTrophy className="text-4xl text-gray-800" />}
          title="High Quality"
          description="crafted from top materials"
        />
        <FeatureItem
          icon={<FaShieldAlt className="text-4xl text-gray-800" />}
          title="Warranty Protection"
          description="Over 2 years"
        />
        <FeatureItem
          icon={<FaShippingFast className="text-4xl text-gray-800" />}
          title="Free Shipping"
          description="Order over 150 $"
        />
        <FeatureItem
          icon={<FaHeadset className="text-4xl text-gray-800" />}
          title="24 / 7 Support"
          description="Dedicated support"
        />
      </div>
    </div>
  );
};

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FeaturesSection;
