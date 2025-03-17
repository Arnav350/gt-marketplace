import React from "react";

interface ServiceItemProps {
  user_id: string;
  username: string;
  name: string;
  address: string;
  address_extra: string;
  service_id: string;
  package: string;
  status: "Created" | "Checked" | "Confirmed";
  price: number;
  notes: string;
  created_at: string;
  checked_at?: string;
  confirmed_at?: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  user_id,
  username,
  name,
  address,
  address_extra,
  service_id,
  package: packageName,
  status,
  price,
  notes,
  created_at,
  checked_at,
  confirmed_at,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Created":
        return "bg-red-100 text-red-800";
      case "Checked":
        return "bg-yellow-100 text-yellow-800";
      case "Confirmed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-3 sm:mb-4">
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{name}</h3>
          <div className="space-y-1">
            <p className="text-sm sm:text-base text-gray-600">Service ID: {service_id}</p>
            <p className="text-sm sm:text-base text-gray-600">Username: {username}</p>
            <p className="text-sm sm:text-base text-gray-600">Package: {packageName}</p>
            <p className="text-sm sm:text-base text-gray-600">Created: {created_at}</p>
            {checked_at && <p className="text-sm sm:text-base text-gray-600">Checked: {checked_at}</p>}
            {confirmed_at && <p className="text-sm sm:text-base text-gray-600">Confirmed: {confirmed_at}</p>}
          </div>
        </div>
        <div className="mt-3 sm:mt-0">
          <div className="space-y-1">
            <p className="text-sm sm:text-base text-gray-600">Address: {address}</p>
            {address_extra && <p className="text-sm sm:text-base text-gray-600">Additional Address: {address_extra}</p>}
            <p className="text-sm sm:text-base text-gray-600 flex items-center">
              Status:
              <span className={`ml-2 px-2 py-1 rounded text-sm ${getStatusColor(status)}`}>{status}</span>
            </p>
            <p className="text-sm sm:text-base text-gray-600">Price: ${price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      {notes && (
        <div className="mt-3 sm:mt-4">
          <p className="text-sm sm:text-base text-gray-600">Notes: {notes}</p>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
