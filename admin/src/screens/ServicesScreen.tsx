import React from "react";
import ServiceItem from "../components/ServiceItem";

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

const services: ServiceItemProps[] = [
  {
    user_id: "m8n9o0p1-q2r3-4s5t-6u7v-8w9x0y1z2a3b",
    username: "spahade27",
    name: "Sonia Pahade",
    address: "531 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "210",
    service_id: "k1l2m3n4-o5p6-7890-qrst-uv1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 900,
    notes: "TV, futon, 2 road signs",
    created_at: "2025-03-20",
  },
  {
    user_id: "n9o0p1q2-r3s4-5t6u-7v8w-9x0y1z2a3b4c",
    username: "aanjum41",
    name: "Aafsheen Anjum",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "115",
    service_id: "l2m3n4o5-p6q7-8901-rstu-vw1234567890",
    package: "Secure Store",
    status: "Checked",
    price: 700,
    notes: "TV, mini fridge, chair",
    created_at: "2025-03-21",
  },
  {
    user_id: "o0p1q2r3-s4t5-6u7v-8w9x-0y1z2a3b4c5d",
    username: "nannadurai3",
    name: "Nayan Annadurai",
    address: "510 8th St NW, Atlanta, GA 30332",
    address_extra: "310",
    service_id: "m3n4o5p6-q7r8-9012-stuv-wx1234567890",
    package: "PackUp",
    status: "Confirmed",
    price: 130,
    notes: "Mattress topper",
    created_at: "2025-03-22",
  },
  {
    user_id: "p1q2r3s4-t5u6-7v8w-9x0y-1z2a3b4c5d6e",
    username: "hjafari372",
    name: "Hassan Jafari",
    address: "498 8th St NW, Atlanta, GA 30332",
    address_extra: "405",
    service_id: "n4o5p6q7-r8s9-0123-tuvw-xy1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 950,
    notes: "Futon, storage shelf",
    created_at: "2025-03-23",
  },
  {
    user_id: "q2r3s4t5-u6v7-8w9x-0y1z-2a3b4c5d6e7f",
    username: "tabbas6",
    name: "Tariq Abbas",
    address: "531 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "120",
    service_id: "o5p6q7r8-s9t0-1234-uvwx-yz1234567890",
    package: "Custom Plan",
    status: "Created",
    price: 0,
    notes: "",
    created_at: "2025-03-24",
  },
  {
    user_id: "f1e2d3c4-b5a6-7c8d-9e0f-1a2b3c4d5e6f",
    username: "imarquez5",
    name: "Isla Marquez",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "215",
    service_id: "d4e5f6g7-h8i9-0123-jklm-no1234567890",
    package: "PackUp",
    status: "Confirmed",
    price: 150,
    notes: "",
    created_at: "2025-03-12",
  },
  {
    user_id: "g2h3i4j5-k6l7-8m9n-0o1p-2q3r4s5t6u7v",
    username: "oking72",
    name: "Orion King",
    address: "510 8th St NW, Atlanta, GA 30332",
    address_extra: "320",
    service_id: "e5f6g7h8-i9j0-1234-klmn-op1234567890",
    package: "Custom Plan",
    status: "Checked",
    price: 700,
    notes: "",
    created_at: "2025-03-14",
  },
  {
    user_id: "h3i4j5k6-l7m8-9n0o-1p2q-3r4s5t6u7v8w",
    username: "vwolfe4",
    name: "Valeria Wolfe",
    address: "498 8th St NW, Atlanta, GA 30332",
    address_extra: "405",
    service_id: "f6g7h8i9-j0k1-2345-lmno-pq1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 850,
    notes: "Cross-country move",
    created_at: "2025-03-15",
  },
  {
    user_id: "i4j5k6l7-m8n9-0o1p-2q3r-4s5t6u7v8w9x",
    username: "mhawke9",
    name: "Milo Hawke",
    address: "531 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "120",
    service_id: "g7h8i9j0-k1l2-3456-mnop-qr1234567890",
    package: "Secure Store",
    status: "Created",
    price: 0,
    notes: "Long-term storage",
    created_at: "2025-03-16",
  },
  {
    user_id: "j5k6l7m8-n9o0-1p2q-3r4s-5t6u7v8w9x0y",
    username: "ecruz2",
    name: "Elias Cruz",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "220",
    service_id: "h8i9j0k1-l2m3-4567-nopq-rs1234567890",
    package: "Full Move",
    status: "Checked",
    price: 680,
    notes: "Office relocation",
    created_at: "2025-03-17",
  },
  {
    user_id: "k6l7m8n9-o0p1-2q3r-4s5t-6u7v8w9x0y1z",
    username: "nwen36",
    name: "Niko Wren",
    address: "510 8th St NW, Atlanta, GA 30332",
    address_extra: "315",
    service_id: "i9j0k1l2-m3n4-5678-opqr-st1234567890",
    package: "PackUp",
    status: "Confirmed",
    price: 120,
    notes: "Urgent move",
    created_at: "2025-03-18",
  },
  {
    user_id: "l7m8n9o0-p1q2-3r4s-5t6u-7v8w9x0y1z2a",
    username: "rsinclair50",
    name: "Rhea Sinclair",
    address: "498 8th St NW, Atlanta, GA 30332",
    address_extra: "410",
    service_id: "j0k1l2m3-n4o5-6789-pqrs-tu1234567890",
    package: "Custom Plan",
    status: "Created",
    price: 0,
    notes: "Custom storage solution",
    created_at: "2025-03-19",
  },
  {
    user_id: "r3s4t5u6-v7w8-9x0y-1z2a-3b4c5d6e7f8g",
    username: "arathore15",
    name: "Ariya Batra",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "220",
    service_id: "p6q7r8s9-t0u1-2345-vwxy-za1234567890",
    package: "Secure Store",
    status: "Checked",
    price: 750,
    notes: "Antique storage",
    created_at: "2025-03-25",
  },
  {
    user_id: "s4t5u6v7-w8x9-0y1z-2a3b-4c5d6e7f8g9h",
    username: "aray4",
    name: "Anjali Ray",
    address: "510 8th St NW, Atlanta, GA 30332",
    address_extra: "315",
    service_id: "q7r8s9t0-u1v2-3456-wxyz-ab1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 880,
    notes: "Corporate move",
    created_at: "2025-03-26",
  },
  {
    user_id: "t5u6v7w8-x9y0-1z2a-3b4c-5d6e7f8g9h0i",
    username: "zkaur52",
    name: "Zara Kaur",
    address: "498 8th St NW, Atlanta, GA 30332",
    address_extra: "410",
    service_id: "r8s9t0u1-v2w3-4567-xyza-bc1234567890",
    package: "PackUp",
    status: "Confirmed",
    price: 140,
    notes: "Last-minute move",
    created_at: "2025-03-27",
  },
  {
    user_id: "u6v7w8x9-y0z1-2a3b-4c5d-6e7f8g9h0i1j",
    username: "stakahashi2",
    name: "Shun Takahashi",
    address: "531 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "110",
    service_id: "s9t0u1v2-w3x4-5678-yzab-cd1234567890",
    package: "Custom Plan",
    status: "Created",
    price: 0,
    notes: "Custom requirements",
    created_at: "2025-03-28",
  },
  {
    user_id: "v7w8x9y0-z1a2-3b4c-5d6e-7f8g9h0i1j2k",
    username: "arathore9",
    name: "Ayaan Rathore",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "215",
    service_id: "t0u1v2w3-x4y5-6789-zabc-de1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 920,
    notes: "Large household move",
    created_at: "2025-03-29",
  },
  {
    user_id: "l7m8n9o0-p1q2-3r4s-5t6u-7v8w9x0y1z2a",
    username: "rsinclair50",
    name: "Rhea Sinclair",
    address: "498 8th St NW, Atlanta, GA 30332",
    address_extra: "410",
    service_id: "j0k1l2m3-n4o5-6789-pqrs-tu1234567890",
    package: "Custom Plan",
    status: "Created",
    price: 0,
    notes: "Custom storage solution",
    created_at: "2025-03-19",
  },
  {
    user_id: "r3s4t5u6-v7w8-9x0y-1z2a-3b4c5d6e7f8g",
    username: "arathore15",
    name: "Ariya Batra",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "220",
    service_id: "p6q7r8s9-t0u1-2345-vwxy-za1234567890",
    package: "Secure Store",
    status: "Checked",
    price: 750,
    notes: "Antique storage",
    created_at: "2025-03-25",
  },
  {
    user_id: "s4t5u6v7-w8x9-0y1z-2a3b-4c5d6e7f8g9h",
    username: "aray4",
    name: "Anjali Ray",
    address: "510 8th St NW, Atlanta, GA 30332",
    address_extra: "315",
    service_id: "q7r8s9t0-u1v2-3456-wxyz-ab1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 880,
    notes: "Corporate move",
    created_at: "2025-03-26",
  },
  {
    user_id: "t5u6v7w8-x9y0-1z2a-3b4c-5d6e7f8g9h0i",
    username: "zkaur52",
    name: "Zara Kaur",
    address: "498 8th St NW, Atlanta, GA 30332",
    address_extra: "410",
    service_id: "r8s9t0u1-v2w3-4567-xyza-bc1234567890",
    package: "PackUp",
    status: "Confirmed",
    price: 140,
    notes: "Last-minute move",
    created_at: "2025-03-27",
  },
  {
    user_id: "u6v7w8x9-y0z1-2a3b-4c5d-6e7f8g9h0i1j",
    username: "stakahashi2",
    name: "Shun Takahashi",
    address: "531 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "110",
    service_id: "s9t0u1v2-w3x4-5678-yzab-cd1234567890",
    package: "Custom Plan",
    status: "Created",
    price: 0,
    notes: "Custom requirements",
    created_at: "2025-03-28",
  },
  {
    user_id: "v7w8x9y0-z1a2-3b4c-5d6e-7f8g9h0i1j2k",
    username: "arathore9",
    name: "Ayaan Rathore",
    address: "521 Turner Pl NW, Atlanta, GA 30332",
    address_extra: "215",
    service_id: "t0u1v2w3-x4y5-6789-zabc-de1234567890",
    package: "Full Move",
    status: "Confirmed",
    price: 920,
    notes: "Large household move",
    created_at: "2025-03-29",
  },
];

const ServicesScreen: React.FC = () => {
  const calculateBalances = () => {
    let confirmedBal = 0;
    let futureBal = 0;
    let estimatedBal = 0;
    let confirmedCount = 0;
    let futureCount = 0;
    let estimatedCount = 0;

    services.forEach((service) => {
      const amount = service.status === "Created" ? getEstimatedAmount(service.package) : service.price;

      if (service.status === "Confirmed") {
        confirmedBal += amount;
        futureBal += amount;
        estimatedBal += amount;
        confirmedCount++;
        futureCount++;
        estimatedCount++;
      } else if (service.status === "Checked") {
        futureBal += amount;
        estimatedBal += amount;
        futureCount++;
        estimatedCount++;
      } else if (service.status === "Created") {
        estimatedBal += amount;
        estimatedCount++;
      }
    });

    return {
      confirmedBal,
      futureBal,
      estimatedBal,
      confirmedCount,
      futureCount,
      estimatedCount,
    };
  };

  const getEstimatedAmount = (packageType: string) => {
    switch (packageType) {
      case "Full Move":
        return 750;
      case "Secure Store":
        return 650;
      case "PackUp":
        return 150;
      case "Custom Plan":
        return 500;
      default:
        return 0;
    }
  };

  const { confirmedBal, futureBal, estimatedBal, confirmedCount, futureCount, estimatedCount } = calculateBalances();

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Services</h1>

      {/* Balance Summary Cards */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-green-50 p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold text-green-700">Confirmed Balance</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xl sm:text-2xl font-bold text-green-800">${confirmedBal.toFixed(2)}</p>
            <p className="text-sm text-green-600">
              {confirmedCount} {confirmedCount === 1 ? "service" : "services"} confirmed
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold text-yellow-700">Future Balance</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xl sm:text-2xl font-bold text-yellow-800">${futureBal.toFixed(2)}</p>
            <p className="text-sm text-yellow-600">
              {futureCount} {futureCount === 1 ? "service" : "services"} confirmed or checked
            </p>
          </div>
        </div>
        <div className="bg-blue-50 p-3 sm:p-4 rounded-lg shadow">
          <h2 className="text-base sm:text-lg font-semibold text-blue-700">Estimated Balance</h2>
          <div className="flex justify-between items-center mt-1">
            <p className="text-xl sm:text-2xl font-bold text-blue-800">${estimatedBal.toFixed(2)}</p>
            <p className="text-sm text-blue-600">
              {estimatedCount} total {estimatedCount === 1 ? "service" : "services"}
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-3 sm:space-y-4">
        {services.map((service) => (
          <ServiceItem key={service.service_id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesScreen;
