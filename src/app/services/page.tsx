import { CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";

export default function ServicesSection() {
    const services = [
        "Instrument Panels Design and fabrication as per customer requirement",
        "Variable Frequency Drive panel design as per customer requirement",
        "PLC and DCS panel retro fittings, extra I/O cards installation, and wiring as per customer requirement",
        "PLC, DCS, SCADA, and HMI modifications and programming as per customer requirement",
        "All types of control valves overhauling and calibration",
        "All types of pressure gauges and temperature gauges calibration",
        "DP type pressure transmitters and level transmitter calibration",
        "All make drives repair and service",
    ];

    return (
        <div>
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-[#001C3D] text-3xl font-bold mb-8">
                        Our Services
                    </h2>

                    <p className="text-gray-700 leading-relaxed max-w-3xl mb-10">
                        We provide complete industrial automation, instrumentation,
                        calibration, and maintenance solutions tailored to customer requirements.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle className="text-[#001C3D] w-6 h-6 mt-1 flex-shrink-0 group-hover:scale-110 transition" />

                                    <p className="text-gray-800 leading-relaxed">
                                        {service}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <Footer />
        </div>
    );
}