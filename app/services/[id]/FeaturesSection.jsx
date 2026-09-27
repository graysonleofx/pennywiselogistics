import { TruckIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function FeatureSection (){
  const features = [
    { title: "Fast Delivery", desc: "Get your packages delivered quickly and safely.", icon: TruckIcon },
    { title: "Real-Time Tracking", desc: "Track your shipment every step of the way.", icon: ClockIcon },
    { title: "24/7 Support", desc: "Our team is always available to assist you.", icon: PhoneIcon },
  ];

  return(
    <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Features</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon className="h-10 w-10 text-blue-600 mb-4" />
                <span className="text-xl font-semibold text-slate-700 mb-2">{feature.title}</span>
                <span className="text-gray-600 text-base">{feature.desc}</span>
              </div>
            );
          })}
        </div>
    </section>
  )
}